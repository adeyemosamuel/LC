import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ControllerServiceProvider } from '../../providers/controller-service/controller-service';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-details2',
  templateUrl: 'details2.html',
})
export class Details2Page {
  title: any;
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private controller: ControllerServiceProvider,
    private socialSharing: SocialSharing) {
    this.title = this.navParams.get('title');
    this.data = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Details2Page');
    this.data = this.navParams.get('data');
    this.title = this.navParams.get('title');
  }

  popover(ev) {
    let pop = this.controller.miscPopOver('PopoverPage', ev);
    pop.present({ ev: ev });
    pop.onDidDismiss((data) => {
      if (data)
        this.navCtrl.setRoot(data);
    });
  }

  addLead() {
    this.navCtrl.push('RegisterLeadsPage')
  }

  // shareInfo() {
  //   this.socialSharing.shareViaEmail(this.title+this.data, 'subject', ['to'], ['cc'], ['bcc'], 'files').
  //     then(() => {
  //       alert("Sharing success");
  //       // Success!
  //     }).catch(() => {
  //       // Error!
  //       alert("Share failed");
  //     });

  //   this.socialSharing.shareViaWhatsApp(this.title+this.data, 'image', ' url').then(() => {
  //     alert("Sharing success");
  //     // Success!
  //   }).catch(() => {
  //     // Error!
  //     alert("Share failed");
  //   });

  // }

}
