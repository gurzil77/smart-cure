import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CureMainComponent } from './cure-main.component';

describe('CureMainComponent', () => {
  let component: CureMainComponent;
  let fixture: ComponentFixture<CureMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CureMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CureMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
