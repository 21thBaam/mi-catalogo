import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private aURL = 'https://catalogo-autos.herokuapp.com/api/autos';
  constructor(private http: HttpClient, private messagesService: MessageService) {

  }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.aURL).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(() => this.messagesService.add('Productos Obtenidos'))
    );
  }

  updateAutos(auto: any): Observable<any>{
    return this.http.put(`${this.aURL}/${auto._id}`,auto).pipe(
      catchError(this.handleError<any>('updateAutos')),
      tap((result) => this.messagesService.add(`Auto Actualizado con ID: ${result.data._id}`))
    );
  }

  addAutos(auto: any): Observable<any>{
    return this.http.post(`${this.aURL}?${auto}`,auto).pipe(
      catchError(this.handleError<any>('addAutos')),
      tap((result) => this.messagesService.add(`Auto Agregado con ID: ${result.data._id}`))
    );
  }

  deleteAutos(auto: any): Observable<any>{
    var t_id = auto._id;
    return this.http.delete(`${this.aURL}/${auto._id}`,auto).pipe(
      catchError(this.handleError<any>('deleteAutos')),
      tap(() => this.messagesService.add(`Auto Eliminado con ID: ${t_id}`))
    );
  }

  private handleError<T>(operation = 'operacion', result?: T){
    return(error: any): Observable<T> => {
      this.messagesService.add(`${operation} fallo: ${error.message}`);
      return of(result as T);
    }
  }
}
