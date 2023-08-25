import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMatrizCurricularComponent } from './lista-matriz-curricular.component';

describe('ListaMatrizCurricularComponent', () => {
  let component: ListaMatrizCurricularComponent;
  let fixture: ComponentFixture<ListaMatrizCurricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMatrizCurricularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMatrizCurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
