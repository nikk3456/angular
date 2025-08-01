import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from "./common-ui/profile-card/profile-card";
import { Profile } from './data/services/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('chameleon');
  profileServices = inject(Profile);
  profiles:any=[]


  constructor() {
    this.profileServices.getTestAccounts()
      .subscribe(val=>{
        this.profiles = val;
      })
  }

}
