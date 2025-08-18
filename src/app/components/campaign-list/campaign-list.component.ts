import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { CampaignService } from '../../services/campaign-service';
import { Campaign } from '../../models/campaignModels';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../material/material-module';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';


@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
  imports: [MaterialModule],
})

export class CampaignListComponent implements OnInit, AfterViewInit {

  private _liveannouncer = inject(LiveAnnouncer)
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  campaigns: Campaign[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    console.log('Fetching campaigns.. (campaign-list.component.ts)');
    this.campaignService
      .getAllCampaigns()
      .subscribe((data: Campaign[]) => (this.campaigns = data)
      );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  navigateToCampaign(rowData: any) {
    console.log(rowData);
    // Implement navigation logic here, I will prob use Router
    // this.router.navigate(['/campaign', RowData.id]);
  }

  applyFilter(searchTarget: Event) {
    const filterValue = (searchTarget.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveannouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveannouncer.announce('Sorting cleared');
    }
  }
}



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
