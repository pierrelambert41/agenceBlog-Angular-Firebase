import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monAgence';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAwf4fbCW3zuLMOeCf0PwQ5K-PZk5O5qXM',
      authDomain: 'monagence-81cd4.firebaseapp.com',
      databaseURL: 'https://monagence-81cd4.firebaseio.com',
      projectId: 'monagence-81cd4',
      storageBucket: 'monagence-81cd4.appspot.com',
      messagingSenderId: '500435405913',
      appId: '1:500435405913:web:76c8b3c9f38bb2b2d77548'
    };
    firebase.initializeApp(firebaseConfig);
  }
}
