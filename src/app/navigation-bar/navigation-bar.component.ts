import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  isCollapsed: any = 'true';
  menuClass:any = ""

  constructor() { }

  ngOnInit(): void {
    this.menuClass = 'menu-btn'
  }
  //
  // checkCollapse(){
  //   if(this.isCollapsed)
  //   {
  //     this.strClass = 'navbar-menu'+'-'+ 'open';
  //     this.isCollapsed = false;
  //   }else{
  //     this.strClass = 'navbar-menu';
  //     this.isCollapsed = true;
  //   }
  //   // this.isCollapsed = this.isCollapsed === 'navbar-menu' ?  : 'navbar-menu';
  // }

  doCollapse(){
    this.strClass = 'navbar-menu'
  }

  checkOnClick(){
    if(this.isCollapsed){
      this.menuClass = 'menu-btn open'
      this.isCollapsed = false;
    }else{
      this.menuClass = 'menu-btn'
      this.isCollapsed = true;
    }
  }
}
