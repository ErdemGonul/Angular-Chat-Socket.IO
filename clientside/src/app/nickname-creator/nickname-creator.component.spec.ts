import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicknameCreatorComponent } from './nickname-creator.component';

describe('NicknameCreatorComponent', () => {
  let component: NicknameCreatorComponent;
  let fixture: ComponentFixture<NicknameCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicknameCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
