import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  sendEmail(form: HTMLFormElement) {
    console.log(form)
    return emailjs.sendForm(
      'service_iueqit3',
      'template_xa5by57',
      form,
      'cBc3sriGCVQBOAH8l'
    );
  }
}
