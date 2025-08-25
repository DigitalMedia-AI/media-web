import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from '../models/campaignModels';
import { CampaignsStats } from '../models/campaignsStatsModels';

@Injectable({ providedIn: 'root' })
export class CampaignService {
  private baseUrl = 'http://localhost:8080/api/campaigns';

  constructor(private http: HttpClient) {}

  getAllCampaigns(): Observable<Campaign[]> {
    console.log('Fetching all campaigns');
    return this.http.get<Campaign[]>(this.baseUrl);
  }

  getAllCampaignsStats(): Observable<CampaignsStats> {
    const url = `${this.baseUrl}/stats`;
    console.log('Fetching all campaigns stats');
    return this.http.get<CampaignsStats>(url);
  }

  getCampaignById(campaignId: number): Observable<Campaign> {
    const url = `${this.baseUrl}/${campaignId}`;
    console.log('Fetching campaign with id', campaignId);
    return this.http.get<Campaign>(url);
  }
}
