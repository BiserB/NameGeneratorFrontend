import { Component, OnInit, OnDestroy } from '@angular/core';
import { NamesService } from '../services/names.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  names: string[] = [];

  constructor(private namesService: NamesService) { }

  ngOnInit() {

    this.subscription.add(this.namesService.getNames()
      .subscribe(res => {
        this.names = res;
      }));
  }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

}
