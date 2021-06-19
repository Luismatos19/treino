import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl:string = 'hhttps://swapi.dev/api/'

  constructor(private http: HttpClient) {}



}
