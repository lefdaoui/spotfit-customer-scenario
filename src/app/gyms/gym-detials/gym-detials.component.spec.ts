import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymDetialsComponent } from './gym-detials.component';

describe('GymDetialsComponent', () => {
  let component: GymDetialsComponent;
  let fixture: ComponentFixture<GymDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
