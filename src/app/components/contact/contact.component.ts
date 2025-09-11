import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private contactService: ContactService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.contactService.sendEmail(event.target as HTMLFormElement)
      .then(() => alert('Message Sent!'))
      .catch(() => alert('Failed to send, please try again.'));
  }
}
