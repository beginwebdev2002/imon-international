import { Routes } from '@angular/router';
import { ImonDragDropComponent } from './imon-drag-drop/imon-drag-drop.component';
import { ImonTreeComponent } from './imon-tree/imon-tree.component';

export const routes: Routes = [
    { path: 'drag-drop', component: ImonDragDropComponent },
    { path: 'tree', component: ImonTreeComponent },
    { path: '', redirectTo: 'drag-drop', pathMatch: 'full' }
];
