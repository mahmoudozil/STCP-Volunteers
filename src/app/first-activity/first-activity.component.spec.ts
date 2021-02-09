import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstActivityComponent } from './first-activity.component';

describe('FirstActivityComponent', () => {
  let component: FirstActivityComponent;
  let fixture: ComponentFixture<FirstActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstActivityComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
