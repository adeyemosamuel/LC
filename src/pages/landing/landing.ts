import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LandingProvider } from '../../providers/landing/landing';




@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
 

  Username: string = '';
  Password: string = '';
  LoginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder, private API: LandingProvider,public loadingCtrl: LoadingController) {
    this.LoginForm = formBuilder.group({
      Username: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      Password: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      
    });
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LandingPage');
  // }

  Login(){
    // if(this.Username == 'samuel' && this.Password == 'adeyemo'){
    //   this.navCtrl.setRoot('ProductsPage');
    // }else{

    // }
    console.log(this.Username);
    console.log(this.Password);
    this.API.Login(this.Username, this.Password).then((result) => {
      console.log(result);
      this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        dismissOnPageChange: true
      }).present();
      
      // this.loading.dismiss(); 
      // this.data = result;
      // localStorage.setItem('token', this.data.apiKey);
      this.navCtrl.setRoot('ProductsPage');
    }, (err) => {
      // this.loading.dismiss();
      // this.presentToast(err);
    });
  }


}



