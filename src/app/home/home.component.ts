import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropertiesService } from '../services/properties.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  status = false;

  properties = [];

  propertiesSubscription: Subscription;

  ngOnInit(): void {
    this.propertiesSubscription = this.propertiesService.propertiesSubject.subscribe(
      (data: any[]) => {
        this.properties = data;
      }
    );
    this.propertiesService.getProperties();
    this.propertiesService.emitProperties();
  }

  getSold(index) {
    if(!this.properties[index].status) {
      return "green";
    } else  {
      return 'red';
    }
  }

  constructor(private propertiesService: PropertiesService) { }

  ngOnDestroy() {
    this.propertiesSubscription.unsubscribe();
  }
}
