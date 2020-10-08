import { Component, OnInit } from '@angular/core';
import { ContactUser } from '../contact-user';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userModel = new ContactUser('','','','','');

  constructor(private _contactService:ContactService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // console.log(this.userModel);
    this._contactService.enroll(this.userModel)
    .subscribe(
      data => console.log('success',data)
      ,error => console.error('Error',error)
    )
  }

}
