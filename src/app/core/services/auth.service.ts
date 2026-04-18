import { Inject, inject, Injectable, signal } from '@angular/core';
import { StorageService } from '../api/services/storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const loadUserFromLocalStorage = (storage: StorageService): any | undefined => {
  const token = storage.getItem<string>('currentToken') ?? '';
  if(token){
    const parts = token.split('.');

    // validar formato JWT
    if (parts.length !== 3) {
      localStorage.removeItem('currentToken');
      return undefined;
    }

    const payload = JSON.parse(atob(parts[1]));
    
    return {
      id_user: payload.sub,
      name_user: payload.user,
    }
  }
  return undefined;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string;
  
  private storage = inject(StorageService)
  user = signal<any | undefined>(loadUserFromLocalStorage(this.storage))

  constructor(private http: HttpClient, @Inject('BASE_API_URL') baseUrl: string, private router: Router) {
    this.url = baseUrl + 'auth';
  }

  logout() {
    this.storage.removeItem('currentToken');
    this.router.navigateByUrl('/login');
  }

  async login(data: {
    username:string;
    password: string;
  }) {
    const urlEndpoint = `${this.url}/login`;

    const res = await this.http
      .post<any>(
        `${urlEndpoint}`,
        data
      )
      .toPromise();

    if (res.token) {
      this.storage.setItem('currentToken', res!.token);
      this.user.set(loadUserFromLocalStorage(this.storage))
    } else {
      this.logout();
    }

    return res;
  }
}
