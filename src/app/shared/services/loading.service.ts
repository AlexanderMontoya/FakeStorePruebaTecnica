import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading$ = new BehaviorSubject<boolean>(false);

  show(){
    document.body.style.overflow = 'hidden';
    this.loading$.next(true);
  }

  hide(){
    document.body.style.overflow = '';
    this.loading$.next(false);
  }

  get isLoading$(){
    return this.loading$.asObservable();
  }

}
