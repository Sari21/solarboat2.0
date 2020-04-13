import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassGraphComponent } from './compass-graph.component';

describe('CompassGraphComponent', () => {
  let component: CompassGraphComponent;
  let fixture: ComponentFixture<CompassGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompassGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompassGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
