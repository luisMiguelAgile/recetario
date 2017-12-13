import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroRecetaComponent } from './registro-receta.component';

describe('RegistroRecetaComponent', () => {
  let component: RegistroRecetaComponent;
  let fixture: ComponentFixture<RegistroRecetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroRecetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia contener un label con el titulo de la receta',()=>{
    fixture = TestBed.createComponent(RegistroRecetaComponent);
    component = fixture.componentInstance
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('label').textContent).toContain('Nombre');


  });
});
