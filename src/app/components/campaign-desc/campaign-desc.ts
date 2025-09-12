import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from '../../services/campaign-service';
import { Campaign } from '../../models/campaignModels';
import { CommonModule } from '@angular/common';
import { AdLine } from '../../models/AdLinesModels';
import { MaterialModule } from '../../material/material-module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AdLinesService } from '../../services/ad-lines-service';
import { CampaignsStats } from '../../models/campaignsStatsModels';

@Component({
  selector: 'app-campaign-desc',
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, MaterialModule],
  templateUrl: './campaign-desc.html',
  styleUrl: './campaign-desc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CampaignDesc implements AfterViewInit {
  campaignId!: string;
  campaign!: Campaign;
  campaignsStats!: CampaignsStats;
  adlines: AdLine[] = [];

  displayedColumns: string[] = [
    'platform',
    'dailyBudget',
    'biddingStrategy',
    'targetKpiType',
    'targetKpiValue',
    'countries',
    'ageRange',
    'placements',
    'frequencyCapPerDay',
    'flightStart',
    'flightEnd',
    'lineType',
  ];

  dataSource = new MatTableDataSource<AdLine>([]);
  private _liveAnnouncer = inject(LiveAnnouncer);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private campaignService: CampaignService, private route: ActivatedRoute, private adLinesService: AdLinesService) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit() {
    this.campaignId = this.route.snapshot.paramMap.get('id')!;
    this.campaignService.getCampaignById(Number(this.campaignId)).subscribe({
      next: (data) => {
        this.campaign = data;
      },
      error: (err) => {
        console.error('Failed to fetch campaign:', err);
      }
    });

    this.campaignService.getAllCampaignsStats().subscribe
      ({
        next: (stats) => {
          this.campaignsStats = stats;
        },
        error: (err) => {
          console.error('Failed to fetch campaign stats:', err);
        }
      });

    this.adLinesService.getAllAdLinesByCampaignId(Number(this.campaignId)).subscribe({
      next: (lines) => {
        this.dataSource.data = lines;
      },
      error: (err) => {
        console.log('Fail to fetch adLines', err);
        this.dataSource.data = this.adlines;
      }
    });

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
        frequencyCapPerDay: 6,
        flight: { start: '2025-09-01', end: '2025-09-30' },
        predictedMetrics: "",
        lineType: 'GOOGLE_SEARCH',
        headlineStyle: 'URGENCY_SOCIAL_PROOF',
        descriptionStyle: 'QUALITY_FOCUS',
        keywords: [
          { term: 'eco-friendly water bottle', match: 'BROAD', intent: 'PURCHASE' },
          { term: 'sustainable gym bottle', match: 'PHRASE', intent: 'PURCHASE' }
        ]
      },
      {
        lineId: 'line-2',
        platform: 'META',
        dailyBudget: '150',
        biddingStrategy: 'MAXIMIZE_CONVERSIONS',
        targetKpi: { type: 'CTR', targetValue: '2.50' },
        countries: ['US', 'CA'],
        ageRange: '25-45',
        placements: ['FACEBOOK_FEED', 'INSTAGRAM_STORIES'],
        frequencyCapPerDay: 3,
        flight: { start: '2025-10-01', end: '2025-10-15' },
        predictedMetrics: "",
        lineType: 'SOCIAL_DISPLAY',
        headlineStyle: 'EMOTIONAL_APPEAL',
        descriptionStyle: 'BENEFIT_DRIVEN',
        keywords: [
          { term: 'organic skincare', match: 'BROAD', intent: 'AWARENESS' },
          { term: 'natural face cream', match: 'PHRASE', intent: 'PURCHASE' }
        ]
      },
      {
        lineId: 'line-3',
        platform: 'TIKTOK',
        dailyBudget: '200',
        biddingStrategy: 'TARGET_ROAS',
        targetKpi: { type: 'ROAS', targetValue: '5.00' },
        countries: ['AU', 'NZ'],
        ageRange: '16-30',
        placements: ['TIKTOK_FEED'],
        frequencyCapPerDay: 2,
        flight: { start: '2025-09-15', end: '2025-10-15' },
        predictedMetrics: "",
        lineType: 'SHORT_VIDEO',
        headlineStyle: 'TREND_HIJACK',
        descriptionStyle: 'STORYTELLING',
        keywords: [
          { term: 'wireless earbuds', match: 'BROAD', intent: 'PURCHASE' },
          { term: 'best bluetooth headphones', match: 'PHRASE', intent: 'PURCHASE' }
        ]
      },
      {
        lineId: 'line-4',
        platform: 'LINKEDIN',
        dailyBudget: '400',
        biddingStrategy: 'TARGET_CPC',
        targetKpi: { type: 'CPC', targetValue: '2.00' },
        countries: ['UK', 'IE'],
        ageRange: '30-55',
        placements: ['LINKEDIN_FEED'],
        frequencyCapPerDay: 1,
        flight: { start: '2025-11-01', end: '2025-11-30' },
        predictedMetrics: "",
        lineType: 'B2B_DISPLAY',
        headlineStyle: 'AUTHORITY_BUILDING',
        descriptionStyle: 'DATA_DRIVEN',
        keywords: [
          { term: 'enterprise CRM software', match: 'BROAD', intent: 'PURCHASE' },
          { term: 'best CRM for sales teams', match: 'PHRASE', intent: 'PURCHASE' }
        ]
      },
      {
        lineId: 'line-5',
        platform: 'GOOGLE',
        dailyBudget: '250',
        biddingStrategy: 'MAXIMIZE_CLICKS',
        targetKpi: { type: 'CTR', targetValue: '3.00' },
        countries: ['FR', 'ES'],
        ageRange: '20-40',
        placements: ['GOOGLE_DISPLAY'],
        frequencyCapPerDay: 4,
        flight: { start: '2025-09-20', end: '2025-10-20' },
        predictedMetrics: "",
        lineType: 'DISPLAY_BANNER',
        headlineStyle: 'DISCOUNT_FOCUS',
        descriptionStyle: 'VALUE_PROPOSITION',
        keywords: [
          { term: 'cheap flight deals', match: 'BROAD', intent: 'PURCHASE' },
          { term: 'last minute holiday offers', match: 'PHRASE', intent: 'PURCHASE' }
        ]
      }
    ];
  }
}