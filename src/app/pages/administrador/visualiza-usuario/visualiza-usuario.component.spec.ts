import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaUsuarioComponent } from './visualiza-usuario.component';

describe('VisualizaUsuarioComponent', () => {
  let component: VisualizaUsuarioComponent;
  let fixture: ComponentFixture<VisualizaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizaUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
