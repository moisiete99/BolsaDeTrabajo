import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaEComponent } from './prueba-e.component';

describe('PruebaEComponent', () => {
  let component: PruebaEComponent;
  let fixture: ComponentFixture<PruebaEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
