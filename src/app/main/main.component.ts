import { Component, OnInit, OnDestroy } from '@angular/core';
import { NamesService } from '../services/names.service';
import { Observable, Subscription } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';

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

  constructor(
    private namesService: NamesService,
    private authService: AuthService,
    private modalService: ModalService) { }

  ngOnInit() {

  }

  onSubmit() {

    this.authService.login(this.loginModel)
      .subscribe(res => {
        console.log("res..", res);
      },
        error => {
          console.log("error..", error)
        });
  }

  onLogout() {

    this.subscription.add(
      this.authService.logout()
        .subscribe(
          res => {

          }
        )
    );
  }

  onFetch() {

    this.subscription.add(this.namesService.getNames()
      .subscribe(res => {
        this.names = res;
      }));
  }

  onCreateName() {

    this.subscription.add(this.namesService.createName()
      .subscribe(res => {
        this.randomName = res;
        console.log("randomName..", this.randomName);
      }));
  }

  onCreateNames() {

    this.subscription.add(this.namesService.createNames(5)
      .subscribe(res => {
        this.names = res;
        console.log("res..", res);
      }));
  }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
