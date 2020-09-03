import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatvalComponent } from './katval.component';

describe('KatvalComponent', () => {
  let component: KatvalComponent;
  let fixture: ComponentFixture<KatvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
