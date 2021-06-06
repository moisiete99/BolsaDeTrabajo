import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEComponent } from './home-e.component';

describe('HomeEComponent', () => {
  let component: HomeEComponent;
  let fixture: ComponentFixture<HomeEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
