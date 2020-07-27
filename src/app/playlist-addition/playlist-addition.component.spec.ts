import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistAdditionComponent } from './playlist-addition.component';

describe('PlaylistAdditionComponent', () => {
  let component: PlaylistAdditionComponent;
  let fixture: ComponentFixture<PlaylistAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
