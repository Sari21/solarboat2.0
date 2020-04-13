import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelerationGraphComponent } from './acceleration-graph.component';

describe('AccelerationGraphComponent', () => {
  let component: AccelerationGraphComponent;
  let fixture: ComponentFixture<AccelerationGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccelerationGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccelerationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
