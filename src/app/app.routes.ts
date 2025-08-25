import { Routes } from '@angular/router';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { Home } from './components/home/home';
import { CampaignDesc } from './components/campaign-desc/campaign-desc';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'home'
    },
    {
        path: 'home', component: Home
    },
    {
        path: 'campaigns', component: CampaignListComponent
    },
    {
        path: 'campaign/:id', component: CampaignDesc
    }
];
