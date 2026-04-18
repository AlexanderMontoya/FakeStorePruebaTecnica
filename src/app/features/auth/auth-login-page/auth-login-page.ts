import { ChangeDetectionStrategy, Component, Inject, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { LoadingService } from '../../../shared/services/loading.service';
import { ErrorForm } from '../models/form.model';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth-login-page',
  imports: [ButtonModule, InputTextModule, CheckboxModule, IconFieldModule, InputIconModule, PasswordModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth-login-page.html',
  styleUrl: './auth-login-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginPage { 
  hidePassword = signal(true);
  loginsent =signal(false);

  loadingService = inject(LoadingService);

  errors = signal<ErrorForm[]>([
    {
      id: 1,
      descriptionError: "El usuario que ingresaste tiene algun campo incorrecto.",
      state: false
    }
  ])

  
  /* private titleService = inject(Title);
  private meta= inject(Meta); */
  private formBuilder = inject(FormBuilder);

  private authService = inject(AuthService);
  private router = inject(Router);
  //readonly dialog = inject(MatDialog);
  get name_user(){
    return this.user.get('name_user') as FormControl;
  }

  get password(){
    return this.user.get('password') as FormControl;
  }

  user:FormGroup = this.formBuilder.group({
    name_user: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
    password: ['',[Validators.required, Validators.minLength(5)]]
  })

  submitLogin(){
    if(this.user.valid){
      this.loadingService.show();
      this.errors().map(e=>e.state = false)
      this.authService.login({username: this.name_user.value,password: this.password.value}).then(
        (response) => {
          console.log(response.token);
          if(response.token){
            this.loadingService.hide();
            this.router.navigateByUrl('/dashboard');
          }else{
            this.loginsent.set(true)

            this.errors.update(errors => {
              return errors.map((e, index) =>
                index === 0 ? { ...e, state: true } : e
              );
            });

            this.loadingService.hide();
            
            Swal.fire({
              title: `${response}`,
              text: `No se pudo iniciar sesion.`,
              icon: 'error',
              confirmButtonText: 'Continuar',
            })
          }
        }
      ).catch(error=>{
        this.loadingService.hide();

        this.errors.update(errors => {
          return errors.map((e, index) =>
            index === 0 ? { ...e, state: true } : e
          );
        });

        Swal.fire({
          title: `Alerta`,
          text: `No se pudo iniciar sesion.`,
          icon: 'error',
          confirmButtonText: 'Continuar',
        })
      })
    }
  }
}
