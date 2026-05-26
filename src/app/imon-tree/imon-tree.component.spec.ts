import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImonTreeComponent } from './imon-tree.component';

describe('ImonTreeComponent', () => {
  let component: ImonTreeComponent;
  let fixture: ComponentFixture<ImonTreeComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImonTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
