import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymsListComponent } from './gyms-list.component';

describe('GymsListComponent', () => {
  let component: GymsListComponent;
  let fixture: ComponentFixture<GymsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
