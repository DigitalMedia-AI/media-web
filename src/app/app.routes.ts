import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home').then(c => c.Home);
        },
        
    },
    {   
        path: 'campaigns', 
        loadComponent: () => {
            return import('./components/campaign-list.component').then(m => m.CampaignListComponent);
        },
    },
    {
        path: 'test',
        loadComponent: () => {
            return import('./test/test').then(m => m.Test);
        },
    }
];
