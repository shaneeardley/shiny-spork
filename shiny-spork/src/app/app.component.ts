import { AuthService } from './shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  topics: FirebaseListObservable<any[]>;
  user = null;
  constructor(private auth: AuthService,
    public db: AngularFireDatabase) { }

  ngOnInit() {
    this.auth.getAuthState().subscribe(user => { this.user = user; });
    this.topics = this.db.list('/topics');
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

}
