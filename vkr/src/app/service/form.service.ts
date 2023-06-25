import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUsers} from "../model/userData";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }


  sendUserData(data: IUsers): Observable<any>{
    return this.http.post<IUsers>('', data)
  }

}
