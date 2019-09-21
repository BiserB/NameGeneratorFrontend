import { Component, OnInit, OnDestroy } from '@angular/core';
import { NamesService } from '../services/names.service';
import { Observable, Subscription } from 'rxjs';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  namesCount: number = 1;
  names: string[] = [];

  constructor(
    private namesService: NamesService,
    private modalService: ModalService) { }

  ngOnInit() {

  }


  onCreateNames() {

    this.subscription.add(this.namesService.createNames(this.namesCount)
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
