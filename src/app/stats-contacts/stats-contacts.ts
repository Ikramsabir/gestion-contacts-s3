// stats-contacts.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact';

@Component({
  selector: 'app-stats-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-contacts.html',
  styleUrls: ['./stats-contacts.css']
})
export class StatsContacts implements OnInit {
  totalContacts: number = 0;
  totalActifs: number = 0;
  scoreMoyen: number = 0;

  get tauxActivite(): number {
    if (this.totalContacts === 0) return 0;
    return Math.round((this.totalActifs / this.totalContacts) * 100);
  }

  get couleurBarre(): string {
    if (this.tauxActivite >= 70) return '#4CAF50';
    if (this.tauxActivite >= 40) return '#FF9800';
    return '#F44336';
  }

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.totalContacts = this.contactService.getAll().length;
    this.totalActifs = this.contactService.getActifs().length;
    this.scoreMoyen = this.contactService.getScoreMoyen();
  }
}