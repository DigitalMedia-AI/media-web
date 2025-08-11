import { Routes } from '@angular/router';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'home'
    },
    {
        path: 'home', component: Home
    },
    {
        path:'campaigns', component: CampaignListComponent
    }
];
