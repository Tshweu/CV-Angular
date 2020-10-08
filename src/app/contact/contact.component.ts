import { Component, OnInit } from '@angular/core';
import { ContactUser } from '../contact-user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userModel = new ContactUser('','','','','');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userModel);
  }

}
