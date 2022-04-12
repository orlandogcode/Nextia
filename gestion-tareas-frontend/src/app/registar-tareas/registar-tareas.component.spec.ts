import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarTareasComponent } from './registar-tareas.component';

describe('RegistarTareasComponent', () => {
  let component: RegistarTareasComponent;
  let fixture: ComponentFixture<RegistarTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistarTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistarTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
