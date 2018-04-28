import { Component } from '@angular/core';
import { NavController, App, Platform, PopoverController, ViewController } from 'ionic-angular';
import { MaillistPage } from '../maillist/maillist';
import { AllcalllogPage } from '../allcalllog/allcalllog';
import { IncomingrecordPage } from '../incomingrecord/incomingrecord';
import { OutgoingrecordPage } from '../outgoingrecord/outgoingrecord';
import { ChatpagePage } from '../chatpage/chatpage';
import { TxladdPage } from '../txladd/txladd';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  tongxunlu: string = "xiaoxi";
  isAndroid: boolean = false;
  tab7 = AllcalllogPage;
  tab8 = IncomingrecordPage;
  tab9 = OutgoingrecordPage;
  isShowcylxr: boolean = false;
  isShowzx: boolean = false;
  isShowxzq: boolean = false;
  isShowqb: boolean = true;
  isShowhr: boolean = false;
  isShowhc: boolean = false;
  isShowqb_s: boolean = true;
  isShowhr_s: boolean = false;
  isShowhc_s: boolean = false;
  togcylxr() {
    this.isShowcylxr = !this.isShowcylxr;
  };
  qb() {
    this.isShowqb=true;
    this.isShowhr=false;
    this.isShowhc=false;
    this.isShowqb_s=true;
    this.isShowhr_s=false;
    this.isShowhc_s=false;
  };
  hr() {
    this.isShowqb=false;
    this.isShowhr=true;
    this.isShowhc=false;
    this.isShowqb_s=false;
    this.isShowhr_s=true;
    this.isShowhc_s=false;
  };
  hc() {
     this.isShowqb=false;
    this.isShowhr=false;
    this.isShowhc=true;
    this.isShowqb_s=false;
    this.isShowhr_s=false;
    this.isShowhc_s=true;
  };
  togzx() {
    this.isShowzx = !this.isShowzx;
  };
  togxzq() {
    this.isShowxzq = !this.isShowxzq;
  };
  constructor(public navCtrl: NavController, public appCtrl: App, platform: Platform, private popoverCtrl: PopoverController, public viewCtrl: ViewController) {
    this.isAndroid = platform.is('android');
  }
  txl() {
    this.navCtrl.push(MaillistPage);
  };
  ltym() {
    this.appCtrl.getRootNav().push(ChatpagePage);
  };
  presentPopover(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(TxladdPage, {
      cssClass: "bottomToast",
    });
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(() => {//回调

    });
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
