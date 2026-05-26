import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImonNavigationComponent } from './imon-navigation.component';

describe('ImonNavigationComponent', () => {
  let component: ImonNavigationComponent;
  let fixture: ComponentFixture<ImonNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ImonNavigationComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImonNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
