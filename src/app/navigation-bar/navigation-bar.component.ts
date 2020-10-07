import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  isCollapsed: any = 'true';
  menuClass:any = "";
  menuBar:any="";
  isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
    this.menuClass = 'menu-btn';
    this.menuBar = 'mb-close';
  }

  checkOnClick(){
    if(this.isCollapsed){
      this.menuClass = 'menu-btn open';
      this.menuBar = 'menu-bar';
      this.isCollapsed = false;
    }else{
      this.menuClass = 'menu-btn';
      this.menuBar = 'mb-close';
      this.isCollapsed = true;
    }
  }

  checkMenuClick(){
    if(this.isMenuCollapsed){
      this.menuBar = 'menu-bar open';
      this.isMenuCollapsed = false;
    }else{
      this.menuBar = 'menu-bar';
      this.isCollapsed = true;
    }
  }
}
