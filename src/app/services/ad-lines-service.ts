import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdLine } from '../models/AdLinesModels';

@Injectable({ providedIn: 'root' })
export class AdLinesService {
  private baseUrl = 'http://localhost:8080/api/ad_lines';

  constructor(private http: HttpClient) {}

  getAllAdLinesByCampaignId(campaignId: number): Observable<AdLine[]> {
    const url = `${this.baseUrl}/${campaignId}`;
    console.log('Fetching Ad Lines for campaign with id', campaignId);
    return this.http.get<AdLine[]>(url);
  }
}
