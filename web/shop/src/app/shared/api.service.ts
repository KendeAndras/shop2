import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  addProducts(data: any) {
    let endpoint = 'products';
    let url = environment.apihost + endpoint;

    let token = localStorage.getItem('token');
    
    let data2 = {
      name: "billentyűzet",
      itemNumber: "cab34",
      count: 25,
      price: 8
    };

    let headers = new HttpHeaders({
      'Content-Type': 'applicaton/json',
      'Authorization': 'Bearer ' + token
    });

    let httpOption = {
      headers: headers
    };
    return this.http.post<any>(url, data2, httpOption);
  }
}
