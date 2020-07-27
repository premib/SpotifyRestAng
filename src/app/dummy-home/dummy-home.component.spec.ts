import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyHomeComponent } from './dummy-home.component';

describe('DummyHomeComponent', () => {
  let component: DummyHomeComponent;
  let fixture: ComponentFixture<DummyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
