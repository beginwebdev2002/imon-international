import { Component, inject, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-imon-navigation',
  templateUrl: './imon-navigation.component.html',
  styleUrl: './imon-navigation.component.scss',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterLink
  ]
})
export class ImonNavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  navLinks = signal([
    { path: '/drag-drop', label: 'Drag Drop', icon: 'drag_indicator' },
    { path: '/tree', label: 'Tree', icon: 'folder' },
  ])

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
