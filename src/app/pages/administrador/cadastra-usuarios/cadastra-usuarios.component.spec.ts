import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraUsuariosComponent } from './cadastra-usuarios.component';

describe('CadastraUsuariosComponent', () => {
  let component: CadastraUsuariosComponent;
  let fixture: ComponentFixture<CadastraUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
