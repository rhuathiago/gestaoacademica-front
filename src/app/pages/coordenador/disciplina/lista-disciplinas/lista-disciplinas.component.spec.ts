import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDisciplinasComponent } from './lista-disciplinas.component';

describe('ListaDisciplinasComponent', () => {
  let component: ListaDisciplinasComponent;
  let fixture: ComponentFixture<ListaDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDisciplinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
