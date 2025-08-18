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

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
  imports: [MaterialModule, CurrencyPipe, DatePipe]
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
    'startDate'
  ];

  dataSource = new MatTableDataSource<Campaign>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.campaignService.getAllCampaigns().subscribe
    ({
      next: (campaigns) => this.dataSource.data = campaigns, //this gets the data & sets it to the table source
      error: () => this.dataSource.data = SAMPLE_CAMPAIGNS //this gets sample data incase the API call is broken, remember to delete before in porduction cuz its only for testing.
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  navigateToCampaign(rowData: Campaign) {
    console.log(rowData);
    //this.router.navigate(['/campaign', row.id])
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

const SAMPLE_CAMPAIGNS: Campaign[] = [
  {
    id: 101,
    name: 'Spring Launch',
    description: 'Promoting new spring collection',
    status: 'Active',
    budget: 25000,
    startDate: '2025-03-15'
  },
  {
    id: 102,
    name: 'Summer Sale',
    description: 'Discounts on summer items',
    status: 'Paused',
    budget: 18000,
    startDate: '2025-06-01'
  },
  {
    id: 103,
    name: 'Back to School',
    description: 'Targeting students and parents',
    status: 'Completed',
    budget: 22000,
    startDate: '2024-08-20'
  },
  {
    id: 104,
    name: 'Holiday Specials',
    description: 'Seasonal promotions for holidays',
    status: 'Active',
    budget: 30000,
    startDate: '2025-11-25'
  },
  {
    id: 105,
    name: 'Clearance Blitz',
    description: 'End-of-season clearance push',
    status: 'Paused',
    budget: 12000,
    startDate: '2025-01-10'
  },
  {
    id: 106,
    name: 'New Year Kickoff',
    description: 'Start-of-year brand awareness',
    status: 'Active',
    budget: 27000,
    startDate: '2025-01-01'
  },
  {
    id: 107,
    name: 'Valentine Vibes',
    description: 'Romantic product promotions',
    status: 'Completed',
    budget: 15000,
    startDate: '2025-02-10'
  },
  {
    id: 108,
    name: 'Easter Engagement',
    description: 'Interactive Easter campaign',
    status: 'Active',
    budget: 20000,
    startDate: '2025-04-01'
  },
  {
    id: 109,
    name: 'Mother’s Day Magic',
    description: 'Celebrating moms with special offers',
    status: 'Paused',
    budget: 16000,
    startDate: '2025-05-05'
  },
  {
    id: 110,
    name: 'Father’s Day Focus',
    description: 'Gifts and gear for dads',
    status: 'Completed',
    budget: 14000,
    startDate: '2025-06-10'
  },
  {
    id: 111,
    name: 'Autumn Arrivals',
    description: 'Showcasing fall fashion',
    status: 'Active',
    budget: 28000,
    startDate: '2025-09-01'
  },
  {
    id: 112,
    name: 'Black Friday Frenzy',
    description: 'Massive discounts and flash sales',
    status: 'Active',
    budget: 50000,
    startDate: '2025-11-28'
  },
  {
    id: 113,
    name: 'Cyber Monday Boost',
    description: 'Online-only tech deals',
    status: 'Paused',
    budget: 35000,
    startDate: '2025-12-01'
  }
];