import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajesProgramacionComponent } from './lenguajes-programacion.component';

describe('LenguajesProgramacionComponent', () => {
  let component: LenguajesProgramacionComponent;
  let fixture: ComponentFixture<LenguajesProgramacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenguajesProgramacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguajesProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
