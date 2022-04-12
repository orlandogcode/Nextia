import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTareasComponent } from './actualizar-tareas.component';

describe('ActualizarTareasComponent', () => {
  let component: ActualizarTareasComponent;
  let fixture: ComponentFixture<ActualizarTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
