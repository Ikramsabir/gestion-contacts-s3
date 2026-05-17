import { Component } from '@angular/core';
import { ListeContacts } from './liste-contacts/liste-contacts';
import { StatsContacts } from './stats-contacts/stats-contacts';
import { ContactService } from './contact';
import { Contact } from './contact.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListeContacts, StatsContacts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private contactService: ContactService) {
    console.log('App initialisée. Contacts :', this.contactService.getAll().length);
  }

  onContactAjoute(contact: Contact): void {
    this.contactService.ajouter(contact);
  }
}