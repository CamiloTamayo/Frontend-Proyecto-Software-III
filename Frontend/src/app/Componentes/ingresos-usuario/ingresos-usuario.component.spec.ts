import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosUsuarioComponent } from './ingresos-usuario.component';

describe('IngresosUsuarioComponent', () => {
  let component: IngresosUsuarioComponent;
  let fixture: ComponentFixture<IngresosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
