import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImonDragDropComponent } from './imon-drag-drop.component';

describe('ImonDragDropComponent', () => {
  let component: ImonDragDropComponent;
  let fixture: ComponentFixture<ImonDragDropComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImonDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
