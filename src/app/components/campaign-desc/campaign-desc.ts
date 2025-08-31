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
    'predictedMetrics',
    'lineType',
  ];

  dataSource = new MatTableDataSource<AdLine>([]);
  private _liveAnnouncer = inject(LiveAnnouncer);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private campaignService: CampaignService, private route: ActivatedRoute, private adLinesService: AdLinesService) { }

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
}