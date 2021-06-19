import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTrabajoComponent } from './ver-trabajo.component';

describe('VerTrabajoComponent', () => {
  let component: VerTrabajoComponent;
  let fixture: ComponentFixture<VerTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
