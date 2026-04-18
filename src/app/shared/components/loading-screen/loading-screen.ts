import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'shared-loading-screen',
  imports: [AsyncPipe],
  templateUrl: './loading-screen.html',
  styleUrl: './loading-screen.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingScreen { 
  loading$!:Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.loading$ = this.loadingService.isLoading$;
  }
}
