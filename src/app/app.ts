import { Component, signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { ImonNavigationComponent } from "./imon-navigation/imon-navigation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImonNavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('imon-international');
}
