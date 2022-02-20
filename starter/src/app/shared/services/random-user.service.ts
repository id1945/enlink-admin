import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RandomUserService {
    randomUserUrl = 'https://api.randomuser.me/';

    getUsers(pageIndex: number = 1, pageSize: number = 10, sortField: string, sortOrder: string, genders: string[]): Observable<{}> {
        let params = new HttpParams()
        .append('page', `${pageIndex}`)
        .append('results', `${pageSize}`)
        .append('sortField', sortField)
        .append('sortOrder', sortOrder);
        genders.forEach(gender => {
            params = params.append('gender', gender);
        });
        return this.http.get(`${this.randomUserUrl}`, {
            params
        });
    }

    constructor(private http: HttpClient) {
    }
}