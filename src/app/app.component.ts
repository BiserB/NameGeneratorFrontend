import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './services/modal.service';
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

  constructor(
    private authService: AuthService,
    private modalService: ModalService){
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
        this.closeModal('login-modal');
      },
        error => {
          this.closeModal('login-modal');
        });
  }

  onLogout() {

    this.subscription.add(
      this.authService.logout()
        .subscribe(
          res => {
            this.isLoggedIn = false;
            this.closeModal('login-modal');
          },
          error => {
            this.closeModal('login-modal');
          }
        )
    );
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
