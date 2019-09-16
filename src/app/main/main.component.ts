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
  randomName: string = "zzz";

  constructor(private namesService: NamesService, private authService: AuthService) { }

  ngOnInit() {
    
  }

  onSubmit(){

    this.authService.login(this.loginModel)
      .subscribe(res => {
        console.log("res..", res);
      },
      error => {
        console.log("error..", error)
      });
  }

  onLogout(){

    this.subscription.add(
      this.authService.logout()
        .subscribe(
          res => {
            
          }
        )
      );
  }

  onFetch(){

    this.subscription.add(this.namesService.getNames()
      .subscribe(res => {
        this.names = res;
      }));
  }

  onCreate(){

    this.subscription.add(this.namesService.createName()
      .subscribe(res => {
        this.randomName = res;
        console.log("randomName..", this.randomName);
      }));
  }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

}
