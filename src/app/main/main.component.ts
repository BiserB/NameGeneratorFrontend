import { Component, OnInit, OnDestroy } from '@angular/core';
import { NamesService } from '../services/names.service';
import { Observable, Subscription } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  names: string[] = [];
  loginModel: LoginModel = new LoginModel();

  constructor(private namesService: NamesService, private authService: AuthService) { }

  ngOnInit() {
    
  }

  onSubmit(){
    console.log("username..", this.loginModel.username);
    console.log("password..", this.loginModel.password);

    this.authService.login(this.loginModel)
      .subscribe(res => {
        console.log("res..", res);
      },
      error => {
        console.log("error..", error)
      });
  }

  onFetch(){

    this.subscription.add(this.namesService.getNames()
      .subscribe(res => {
        this.names = res;
      }));
  }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

}
