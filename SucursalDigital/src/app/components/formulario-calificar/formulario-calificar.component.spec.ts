import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCalificarComponent } from './formulario-calificar.component';

describe('FormularioCalificarComponent', () => {
  let component: FormularioCalificarComponent;
  let fixture: ComponentFixture<FormularioCalificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCalificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCalificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
