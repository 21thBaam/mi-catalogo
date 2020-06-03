import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private aURL = 'https://catalogo-autos.herokuapp.com/api/autos';
  constructor(private http: HttpClient) {

  }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.aURL)
  }

  updateAutos(auto: any): Observable<any>{
    return this.http.put(`${this.aURL}/${auto._id}`,auto);
  }

  addAutos(auto: any): Observable<any>{
    return this.http.post(`${this.aURL}?${auto}`,auto);
  }

  deleteAutos(auto: any): Observable<any>{
    return this.http.delete(`${this.aURL}/${auto._id}`,auto);
  }
}
