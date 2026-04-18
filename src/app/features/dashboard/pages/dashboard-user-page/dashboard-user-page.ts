import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { UsersManagement } from '../../services/users-management';
import { LoadingService } from '../../../../shared/services/loading.service';
import { AuthService } from '../../../../core/services/auth.service';
import { UserModel } from '../../models/user.model';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-user-page',
  imports: [CardModule, SkeletonModule, TitleCasePipe],
  templateUrl: './dashboard-user-page.html',
  styleUrl: './dashboard-user-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardUserPage {
  user = signal<UserModel.User | null>(null)

  constructor(
    private usersService:UsersManagement,
    private loadingService:LoadingService,
    private authService: AuthService
  ){

  }

  ngOnInit(){
    this.getData()
  }

  getData(){
    this.loadingService.show();

    const id_user = this.authService.user().id_user

    this.usersService.getUser(id_user).then((data)=>{
      this.user.set(data as UserModel.User);
      this.loadingService.hide();
    })
  }
}
