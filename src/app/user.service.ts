import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "./model/app.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8100/AddUser';
  private apiGetUrl = 'http://localhost:8100/DisplayUsers';
  private apiupdateUrl = 'http://localhost:8100/UpdateUser';
  private apideleteUrl = 'http://localhost:8100/DeleteUser';
  private apiLoginUrl = 'http://localhost:8100/login';


  constructor(private http: HttpClient) {
  }

  addUser(name: string, email: string, file: File): Observable<string> {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('file', file);

    return this.http.post<string>(this.apiUrl, formData);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiGetUrl);
  }

  updateUser(id: string, name: string, email: string, file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('file', file);

    return this.http.put(`${this.apiupdateUrl}/${id}`, formData, { responseType: 'text' });
  }
  deleteUser(id: string): Observable<string> {
    return this.http.delete<string>(`${this.apideleteUrl}/${id}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  login(name: string, email: string) {
    const user = { name, email };
    return this.http.post(this.apiLoginUrl, user, { responseType: 'text' });
  }


}

