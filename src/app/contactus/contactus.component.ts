import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})

export class ContactUsPageComponent {

  isSent: boolean;

  sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_t3353rd', 'template_wp8ioeq', e.target as HTMLFormElement, 'user_12JPaBPjQ9HJivZS2zUTW')
      .then((result: EmailJSResponseStatus) => {
        this.isSent = true;
      }, (error) => {
        console.log(error.text);
      });
  }

}
