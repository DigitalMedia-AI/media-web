import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { CampaignService } from '../../services/campaign-service';
import { Campaign } from '../../models/campaignModels';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MaterialModule } from '../../material/material-module';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CampaignsStats } from '../../models/campaignsStatsModels';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
  imports: [MaterialModule, CurrencyPipe, DatePipe, DecimalPipe]
})

export class CampaignListComponent
  implements OnInit, AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns = [
    'id',
    'name',
    'description',
    'status',
    'budget',
    'startDate',
    'endDate',
    'createdAt',
    'targetAudience'
  ];

  dataSource = new MatTableDataSource<Campaign>([]);

  campaignsStats!: CampaignsStats;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private campaignService: CampaignService, private router: Router) { }

  ngOnInit(): void {
    this.campaignService.getAllCampaigns().subscribe
      ({
        next: (campaigns) => this.dataSource.data = campaigns, //this gets the data & sets it to the table source
        //error: () => this.dataSource.data = SAMPLE_CAMPAIGNS //this gets sample data incase the API call is broken, remember to delete before in porduction cuz its only for testing.
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
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  navigateToCampaign(rowData: Campaign) {
    console.log(rowData);
    this.router.navigate(['/campaign', rowData.id])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filter = filterValue;
    this.dataSource.paginator?.firstPage();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(
        `Sorted ${sortState.direction}ending`
      );
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
