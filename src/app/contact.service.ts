import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactUser } from './contact-user'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
_url = 'http://contact-nodemailer-api.herokuapp.com/send';
  constructor(private _http: HttpClient) { }

  enroll(userInfo: ContactUser){
    return this._http.post<any>(this._url,userInfo);
  }
}
