import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import { NativeprocessProvider } from '../../providers/nativeprocess/nativeprocess';
import { ControllerServiceProvider2 } from '../../providers/controller-service2/controller-service2';
// import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username: string = '';
  password: string = '';
  uuid: string = '';
  topUser: any = [
    {username:'Names', accounts:230, position: 'assets/images/Circled1.png'},
    {username:'Names', accounts:230, position: 'assets/images/Circled2.png'},
    {username:'Names', accounts:230, position: 'assets/images/Circled3.png'},
    {username:'Names', accounts:230, position: 'assets/images/Circled4.png'},
    {username:'Names', accounts:230, position: 'assets/images/Circled5.png'},
    {username:'Names', accounts:230, position: 'assets/images/Circled6.png'},
    {username:'Names', accounts:230, position: 'assets/images/Circled7.png'},
    {username:'Names', accounts:230, position: 'assets/images/Circled8.png'},
    {username:'Names', accounts:230, position: 'assets/images/Circled9.png'},
    {username:'Names', accounts:230, position: 'assets/images/Circled10.png'}
  ];
  ecData: any = [
    {branchcode: '001',branchname: 'Branch Name',rm: 'RM001',userid: 'User1'},
    {branchcode: '001',branchname: 'Branch Name',rm: 'RM002',userid: 'User2'},
    {branchcode: '001',branchname: 'Branch Name',rm: 'RM003',userid: 'User3'},
    {branchcode: '001',branchname: 'Branch Name',rm: 'RM004',userid: 'User4'},
    {branchcode: '001',branchname: 'Branch Name',rm: 'RM005',userid: 'User5'}
  ];
  resp: any = {};
  disableButton: boolean = true;

  constructor(
    public navCtrl: NavController,
    private _storage: StorageServiceProvider,
    private storage: Storage,
    private serverservice: ServerServiceProvider,
    private native: NativeprocessProvider,
    private controller: ControllerServiceProvider2,
    private viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.getUserData();
  }

  async getUserData() {
    let userResponse = await this._storage.fetchDoc('loginuser');
    
    if (userResponse != 'Failed') {
      this.username = userResponse.username;
    }
    else {
      await this._storage.initializeData();
      this.getUserData();
    }

    let device = await this._storage.fetchDoc('device');
    this.uuid = device.uuid;

    if (this.uuid == 'this.device.uuid' || this.uuid == '' || this.uuid == null) {
      this.uuid = this.native.deviceUUID();

      try {
        device.uuid = this.native.deviceUUID();
        this._storage.createUpdateDoc(device);
      }
      catch(err) {
        console.log(err);
      }
    }
  }

  validateInput(val){
    if (this.username.trim != null && this.password != ''){
      this.disableButton = false;
    }else{
      this.disableButton = true;
    }
  }

  async login() {
    let loader = this.controller.loadCtrl('Signing in...');
    loader.present();
    
    await this.native.getLocation();
    let user = await this._storage.fetchDoc('loginuser');
    
    let datum = {
      'username': this.username,
      'password': this.password,
      'location': user.location,
      'deviceUUID': this.uuid,
      'financialInstitution':'1'
    }
    let funcName = '/login';

    try {
      let resp = await this.serverservice.processData(datum, funcName);
      console.log(resp);

      if (resp.responseCode == '76') {
        var topUserName = resp.data[0];
        var topUserAcc = resp.data[1];

        // Leaderboard
        for(var i=0; i<topUserName.length; i++)
        {
          if (topUserName[i] != null)
          {
            this.topUser.push({
              username:topUserName[i],
              accounts:topUserAcc[i],
              position: 'assets/images/Circled'+(i+1)+'.png'
            });
          }
        }
        console.log(this.topUser);

        // ECs and RMs
        if (resp.branches != null) {
          for (let val of resp.branches)
          {
            this.ecData.push({
              branchcode: val.branchCode,
              branchname: val.branchName,
              rm: val.dummyDsa,
              userid: val.rmuserId
            });
          }
        }
        console.log(this.ecData);
        user.username = this.username;
        user.harsh = this.password;
        user.noOfAccounts = 80;

        let ecResp = await this._storage.fetchDoc('ec');
        ecResp.item = this.ecData;

        let leaderboard = await this._storage.fetchDoc('leaderboard');
        leaderboard.item = this.topUser;

        let bulkUpload = await this._storage.bulkCreateDoc([user, ecResp, leaderboard]);
        console.log(bulkUpload);
        this.navCtrl.setRoot('HomePage');
      }
      else if (resp.responseCode == '96'){
        this.controller.toastCtrl(resp.message, 'middle', false);
      }
      else{
        this.controller.toastCtrl('Unable to login. Try again!', 'middle', false);
      }
    }
    catch(err) {
      console.log(err);
      this.controller.toastCtrl('Unable to login. Try again!', 'middle', false);
    }
    loader.dismiss();
  }

  register(){
    if (this.username.trim() == '' || (this.password == '' || this.password == null)) {
      this.controller.toastCtrl('Username and Password are required.', 'bottom', false);
      return false;
    }
    
    let datum = {
      'username': this.username,
      'password': this.password,
      'deviceName': this.native.deviceModel(),
      'deviceUUID': this.uuid,
      'OS': this.native.deviceOS()
    }
    let funcName = '/register';

    let loader = this.controller.loadCtrl('Registering...');
    loader.present();

    this.serverservice.processData(datum, funcName).then((value) => {
      loader.dismiss();
      this.resp = value;
      console.log(this.resp);
      if (this.resp.responseCode == '76'){
        this.controller.toastCtrl(this.resp.message, 'middle', false);
      }
      else if (this.resp.responseCode == '96'){
        this.controller.toastCtrl(this.resp.message, 'middle', false);
      }
      else{
        this.controller.toastCtrl('Unable to register. Try again!', 'middle', false);
      }
    });
  }

}