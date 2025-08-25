import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from '../../services/campaign-service';
import { Campaign } from '../../models/campaignModels';
import { CommonModule } from '@angular/common';
import { AdLine } from '../../models/AdLinesModels';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-campaign-desc',
  imports: [CommonModule, MaterialModule],
  templateUrl: './campaign-desc.html',
  styleUrl: './campaign-desc.scss'
})

export class CampaignDesc {
  adlines: AdLine[] = [];
  campaignId!: string;

  constructor(private campaignService: CampaignService, private route: ActivatedRoute) { }

  campaign!: Campaign;

  ngOnInit() {
    this.campaignId = this.route.snapshot.paramMap.get('id')!;
    this.campaignService.getAllCampaigns().subscribe(
      campaigns => {
        this.campaign = campaigns.find(c => c.id.toString() === this.campaignId)!;
      }
    );

    this.adlines = [
      {
        lineId: 'line-1',
        platform: 'GOOGLE',
        dailyBudget: '300',
        biddingStrategy: 'TARGET_CPA',
        targetKpi: { type: 'CPA', targetValue: '4.00' },
        countries: ['UK', 'DE'],
        ageRange: '18-35',
        placements: ['GOOGLE_SEARCH'],
        frequencyCapPerDay: null,
        flight: { start: '2025-09-01', end: '2025-09-30' },
        predictedMetrics: "",
        lineType: 'GOOGLE_SEARCH',
        headlineStyle: 'URGENCY_SOCIAL_PROOF',
        descriptionStyle: 'QUALITY_FOCUS',
        keywords: [
          { term: 'eco-friendly water bottle', match: 'BROAD', intent: 'PURCHASE' },
          { term: 'sustainable gym bottle', match: 'PHRASE', intent: 'PURCHASE' }
        ]
      }
    ];
  }
}
