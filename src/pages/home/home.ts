import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  image: any;
  ranK: any;
  count: number = 0;
  time: number = 60;
  timer: any;
  img: Array<any> = new Array(9);
  clamp: any;
  type: Array<any> = ['mouse', 'mouse', 'mouse', 'mouse', 'mouse', 'mouse', 'clamp', 'clamp', 'clamp']
  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 9; i++) {
      this.img[i]='assets/img/gameframe.png';
    }
    // console.log(this.img)
  }

  start() {
    this.time = 60;
    this.count = 0;
    this.image = document.getElementsByTagName('img');
    console.log(this.image)
    this.show();
    this.showtime();
  }

  /**
   * 倒數秒數
   */
  showtime() {
    this.time -= 1;
    if (this.time > 0) {
      setTimeout(() => {
        this.showtime();
      }, 1000)
    }
  }

  show() {
    if (this.time > 0) {
      this.ranK = Math.floor(Math.random() * 9);
      let typeindex = Math.floor(Math.random() * 9);
      console.log(this.ranK)
      if (this.type[typeindex] == 'mouse') {
        this.img[this.ranK] = 'assets/img/show.png';
      } else {
        this.img[this.ranK] = 'assets/img/clamp.png';
      }
      this.timer = setTimeout(() => {
        this.hidden();
      }, 1000);
    }
  }

  hidden() {
    this.img[this.ranK] = 'assets/img/gameframe.png';
    this.show();
  }

  punch(num) {
    // console.log(type)
    if (num == this.ranK) {
      if (this.img[this.ranK] == 'assets/img/show.png') {
        this.count++;
        this.img[this.ranK] = 'assets/img/gameframe.png';
      } else {
        this.count--;
        this.img[this.ranK] = 'assets/img/gameframe.png';
      }
      this.ranK = null;
    }
  }
}
