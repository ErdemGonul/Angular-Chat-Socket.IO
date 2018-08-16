import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbiespageComponent } from './lobbiespage.component';

describe('LobbiespageComponent', () => {
  let component: LobbiespageComponent;
  let fixture: ComponentFixture<LobbiespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobbiespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbiespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
