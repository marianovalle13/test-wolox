import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  user: any;

  constructor() { }

  ngOnInit(): void {
    
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log('this.user ', this.user );
    if(this.user && !this.user.stayConnected) {
      if(this.user.time == 1) {
        console.log('dont remove');
        this.user.time = 2;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        console.log('remove');
        localStorage.removeItem('user');
        window.location.reload();
      }
    }
    console.log(localStorage.getItem('user'));

  }

  logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }


}
