import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraDisciplinaComponent } from './cadastra-disciplina.component';

describe('CadastraDisciplinaComponent', () => {
  let component: CadastraDisciplinaComponent;
  let fixture: ComponentFixture<CadastraDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraDisciplinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
