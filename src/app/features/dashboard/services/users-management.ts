import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersManagement {

  url: string;

  constructor(private http: HttpClient, @Inject('BASE_API_URL') baseUrl: string) {
    this.url = baseUrl + 'users';
  }

  async getUser(id_user:number): Promise<UserModel.User | undefined>{
    const urlEndPoint = `${this.url}/${id_user}`;

    try {

      const res = await this.http.get<UserModel.User | undefined>(`${urlEndPoint}`).toPromise();

      return res;

    } catch (error) {
      console.error(error);
      return undefined
    }
  }
}
