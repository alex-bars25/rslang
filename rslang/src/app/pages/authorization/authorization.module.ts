import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
import { LoginModule } from './components/login/login.module';
import { RegistrationModule } from './components/registration/registration.module';
import { PageContainerModule } from 'src/app/shared/page-container/page-container.module';



@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    PageContainerModule,
    LoginModule,
    RegistrationModule
  ],
  exports: [
    AuthorizationComponent
  ]
})
export class AuthorizationModule { }
