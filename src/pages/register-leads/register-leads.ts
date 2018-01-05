import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { ControllerServiceProvider } from '../../providers/controller-service/controller-service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';




@IonicPage()
@Component({
  selector: 'page-register-leads',
  templateUrl: 'register-leads.html',
})
export class RegisterLeadsPage {
  selectedProduct: string = '';
  storage: any;
  leadsArray:any=[];
  occupation:any;
  dob:any;
  gender:any;
  marital_status:any;
  
  emailaddress:any;
  address:any;
  name: string = '';
  phonenumber: string = '';
  leadArray: Array<any> = [];
  status: any;

  
  
   
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private controller: ControllerServiceProvider,private store: Storage,private sqlite: SQLite) {
     
     }

     popover(ev) {
      let pop = this.controller.miscPopOver('PopoverPage', ev);
      pop.present({ev: ev});
      pop.onDidDismiss((data) => {
          if (data)
              this.navCtrl.setRoot(data);
      });
    }
     
     selectProductModal(){
      let modal = this.modalCtrl.create('ModalPage');
      modal.present();
      modal.onDidDismiss(data => {
        console.log(data);
        this.selectedProduct = data;
      });
     }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterLeadsPage');
  }

//   leadsArray=[
//     {
//         "name": "Mike Olawale",
//         "occupation": "Software Developer",
//         "dob": "1985-06-19",
//         "Gender": "Male",
//         "marital_status": "Married",
//         "phonenumber": 2348023333333,
//         "emailaddress": "mike_olawale@gmail.com",
//         "address": "9B, Mojisola Close, Off Mercy Eneli Street, Masha, Surulere, Lagos",
//         "product_type": "HB Savings Account",
//         "Status":"Pending"
//     },
//     {
//         "name": "Bimpe Ayoola",
//         "occupation": "Software Developer",
//         "dob": "1983-04-30",
//         "Gender": "Female",
//         "marital_status": "Single",
//         "phonenumber": 2348023333333,
//         "emailaddress": "mike_olawale@gmail.com",
//         "address": "9B, Mojisola Close, Off Mercy Eneli Street, Masha, Surulere, Lagos",
//         "product_type": "HB Savings Account",
//         "Status":"Delivered"
//     },
//     {
//         "name": "Wunmi Sowunmi",
//         "occupation": "Software Developer",
//         "dob": "1991-12-30",
//         "Gender": "Male",
//         "marital_status": "Single",
//         "phonenumber": 2348023333333,
//         "emailaddress": "mike_olawale@gmail.com",
//         "address": "9B, Mojisola Close, Off Mercy Eneli Street, Masha, Surulere, Lagos",
//         "product_type": "HB Savings Account",
//         "Status":"Pending"
//     },
//     {
//         "name": "Adeyemo Samuel",
//         "occupation": "Mobile Developer",
//         "dob": "1989-02-08",
//         "Gender": "Male",
//         "marital_status": "Single",
//         "phonenumber": 2348023333333,
//         "emailaddress": "mike_olawale@gmail.com",
//         "address": "9B, Mojisola Close, Off Mercy Eneli Street, Masha, Surulere, Lagos",
//         "product_type": "HB Savings Account",
//         "Status":"Delivered"
//     },
//     {
//         "name": "Mercy Eneli",
//         "occupation": "Software Developer",
//         "dob": "1996-05-01",
//         "Gender": "Female",
//         "marital_status": "Married",
//         "phonenumber": 2348023333333,
//         "emailaddress": "mike_olawale@gmail.com",
//         "address": "9B, Mojisola Close, Off Mercy Eneli Street, Masha, Surulere, Lagos",
//         "product_type": "HB Savings Account",
//         "Status":"Pending"
//     }
// ];

savedetails() {
  this.store.get('leads').then((val) => {
      if (val) this.leadArray = val;
      this.storedetails();
  });
}

storedetails() {
  let body = {
      name: this.name,
      phonenumber: this.phonenumber,
      selectedProduct: this.selectedProduct,
      occupation: this.occupation,
      dob: this.dob,
      address: this.address,
      marital_status:this.marital_status,
      gender: this.gender,
      emailaddress: this.emailaddress,
      Status:this.status,

      

  };
  this.leadArray.push(body);
  this.store.set('leads', this.leadArray);
}





 

}
