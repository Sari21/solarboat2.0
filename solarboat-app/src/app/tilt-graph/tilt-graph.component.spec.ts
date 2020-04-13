import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiltGraphComponent } from './tilt-graph.component';

describe('TiltGraphComponent', () => {
  let component: TiltGraphComponent;
  let fixture: ComponentFixture<TiltGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiltGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiltGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
