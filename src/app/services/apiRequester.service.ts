import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/apiResponse.model';

type EntityArrayResponseType = HttpResponse<ApiResponse[]>

@Injectable({
    providedIn: 'root',
})
export class ApiRequesterService {

    constructor(private http: HttpClient) { }

    search(searchQuery: string): Observable<EntityArrayResponseType> {
        const headers: HttpHeaders = new HttpHeaders({ "Authorization": "Basic "+btoa(`${environment.apiUser}:${environment.apiPassword}`) })        
        const response = this.http.get<EntityArrayResponseType>(environment.apiBaseUrl + searchQuery, { headers });
        return response;
    }

    
}