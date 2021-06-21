import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelTrabajoComponent } from './del-trabajo.component';

describe('DelTrabajoComponent', () => {
  let component: DelTrabajoComponent;
  let fixture: ComponentFixture<DelTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
