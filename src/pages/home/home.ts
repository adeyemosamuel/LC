import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { BioPage } from '../bio/bio';
import { Popover2Page } from '../popover2/popover2';
import { Storage } from '@ionic/storage';
import { ControllerService2Provider } from '../../providers/controller-service2';
import { StorageServiceProvider } from '../../providers/storage-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string = '';
  numOfAccts: number;
  showBoardMsg: boolean = false;
  showBoard: boolean = true;
  boardData: any = [];

  constructor(
    public navCtrl: NavController,
    private controller: ControllerService,
    private storage: Storage,
    private store: StorageService
  ) {}

  ionViewDidLoad() {
    this.initializeData();
  }

  async initializeData() {
    const user = await this.store.fetchDoc('loginuser');
    const resp = await this.store.fetchDoc('leaderboard');

    if (user != 'Failed') {
      this.username = user.username;
      this.numOfAccts = Number(user.noOfAccounts);
    }

    if (resp != 'Failed') {
      this.boardData = resp.item;
      if (this.boardData == null) {
        this.showBoardMsg = true;
        this.showBoard = false;
      }
      else {
        this.showBoardMsg = false;
        this.showBoard = true;
      }
    }
  }

  gotoBio(){
    this.navCtrl.push('BioPage');
  }

  popover(val) {
    this.controller.miscPopOver(Popover2Page, val);
  }

}
