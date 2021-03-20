import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    
    constructor(private http: HttpClient) { }
    encodedData = btoa(`${environment.user}:${environment.password}`)
    authData = `Basic ${this.encodedData}`
    headers = new HttpHeaders({"Authorization":this.authData});
    search(): void{
        this.http.get(environment.baseUrl+"",{headers:this.headers})
    }
}