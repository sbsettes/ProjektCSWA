import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../models/authresponse.model';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {

    constructor(private http: HttpClient) { }
    authenticated = false;
    authenticate(): string{
        const headers: HttpHeaders = new HttpHeaders({"Authorization":btoa(`${environment.apiUser}:${environment.apiPassword}`)})
        this.http.get<AuthResponse>(environment.apiBaseUrl,{headers}).subscribe(
            authResponse => {
                if(authResponse){
                    this.authenticated = true;
                    return authResponse;
                }                
            }
        )
        return "";
    }
}