import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoginModel } from './models/login.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  title = 'NameGenerator';
  isLoggedIn: boolean = false;
  subscription: Subscription = new Subscription();
  loginModel: LoginModel = new LoginModel();

  constructor(private authService: AuthService){
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
}
