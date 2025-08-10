import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from '../models/campaignModels';

@Injectable({ providedIn: 'root' })
export class CampaignService {
  private apiUrl = 'http://localhost:8080/api/campaigns';

  constructor(private http: HttpClient) {}

  getAllCampaigns(): Observable<Campaign[]> {
    console.log('Fetching all campaigns');
    return this.http.get<Campaign[]>(this.apiUrl);
  }
}