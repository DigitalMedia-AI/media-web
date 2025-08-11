import { Routes } from '@angular/router';
import { Test } from './test/test';
import { CampaignListComponent } from './components/campaign-list.component';

export const routes: Routes = [ 
    {path:'campaigns', component: CampaignListComponent}
];
