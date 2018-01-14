import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ValidateServiceProvider } from '../../providers/validate-service/validate-service';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { ControllerServiceProvider2 } from '../../providers/controller-service2/controller-service2';
import { AppDataProvider } from '../../providers/app-data/app-data';
// import { DetailsPage } from '../details/details';
import { Popover2Page } from '../popover2/popover2';
import { NativeprocessProvider } from '../../providers/nativeprocess/nativeprocess';
import { DatePicker, DatePickerOptions } from '@ionic-native/date-picker';
@IonicPage()
@Component({
  selector: 'page-bio',
  templateUrl: 'bio.html'
})
export class BioPage {
  title: string = ''; 
  firstName: string = ''; 
  middleName: string = '';
  lastName: string = '';
  gender: string = '';
  relStatus: string = ''; 
  occup: string = '';
  dob: string = '';
  _dob: string = '';
  account: any;
  titleData: any = [];
  relStatusData: any = [];

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    private validate: ValidateServiceProvider,
    private _storage: StorageServiceProvider,
    private controller: ControllerServiceProvider2,
    private appdata: AppDataProvider,
    private native: NativeprocessProvider,
    private datepicker: DatePicker
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BioPage');

    this.titleData = this.appdata.getTitle();
    this.relStatusData = this.appdata.getRelStatus();
  }

  ionViewDidEnter(){
    this.populateData();
  }

  async populateData() {
    this.account = await this._storage.fetchDoc('account_details');
    this.title = this.account.title.trim();
    this.firstName = this.account.firstName.trim();
    this.middleName = this.account.middleName.trim();
    this.lastName = this.account.lastName.trim();
    this.gender = this.account.gender.trim();
    this.relStatus = this.account.maritalStatus.trim();
    this.occup = this.account.occupation.trim();
    this.dob = this.account.dob.trim();
  }

  async datePicker() {
    let resp = await this.native.pickDate(this.dob);
    this.dob = resp;
  }

  selectDate() {
    var pickedDate;
    if (this.dob == '') {
      pickedDate = new Date();
    }
    else {
      pickedDate = this._dob;
    }

    let dateOptions: DatePickerOptions = {
      mode: "date",
      date: new Date(pickedDate),
      maxDate: new Date().toDateString(),
      androidTheme: this.datepicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    };

    this.datepicker.show(dateOptions).then((val) => {
      var dayDate = (val.getDate() < 10) ? '0'+val.getDate() : val.getDate().toString();
      var monthDate = (val.getMonth() < 9) ? '0'+(val.getMonth() + 1) : (val.getMonth() + 1).toString();
      var fullYear = val.getFullYear().toString();

      this.dob = fullYear + '-' + monthDate + '-' + dayDate;
      this._dob = val.toDateString();
    })
    .catch((err) => {
      this.dob = '1970-01-01';
      return '';
    });
  }

  async next(){
    if (!this.validate.validateBio(this.title.trim(), this.firstName.trim(), this.middleName.trim(), this.lastName.trim(), this.gender.trim(), this.relStatus.trim(), this.occup.trim(), this.dob.trim())) {
      this.validate.displayMessage();
    }
    else {
      this.account.title = this.title;
      this.account.firstName = this.firstName;
      this.account.middleName = this.middleName;
      this.account.lastName = this.lastName;
      this.account.gender = this.gender;
      this.account.maritalStatus = this.relStatus;
      this.account.occupation = this.occup;
      this.account.dob = this.dob;
      let resp = await this._storage.createUpdateDoc(this.account);
      console.log(resp);
      this.navCtrl.push('DetailsPage');
    }
  }

  popover(ev) {
    this.controller.miscPopOver(Popover2Page, ev);
  }

}
