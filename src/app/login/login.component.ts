import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean = false;
  subscription: Subscription = new Subscription();
  loginModel: LoginModel = new LoginModel();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.subscription.add(
      this.authService.isLoggedId()
        .subscribe(res => {
          this.isLoggedIn = res;
        }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onLogin() {
    this.authService.login(this.loginModel)
      .subscribe(
        res => {
        this.isLoggedIn = true;
        this.router.navigate(['/main']);
      },
        error => {
        });
  }

  onLogout() {
    this.subscription.add(
      this.authService.logout()
        .subscribe(
          res => {
            this.isLoggedIn = false;
            this.router.navigate(['/main']);
          },
          error => {
          }
        )
    );
  }
}
