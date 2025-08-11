import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../services/campaign-service';

//start of imports for angular material
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Campaign } from '../models/campaignModels';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-campaign-list',
  standalone: true,
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css'],
  imports: [CommonModule, MatCardModule]//angular material imports
})

export class CampaignListComponent implements OnInit {
  campaigns: Campaign[] = [];

  constructor(private campaignService: CampaignService) {}

  ngOnInit(): void {
    console.log('Fetching campaigns.. (campaign-list.component.ts)');
    this.campaignService.getAllCampaigns().subscribe((data: Campaign[]) => this.campaigns = data);
  }
}