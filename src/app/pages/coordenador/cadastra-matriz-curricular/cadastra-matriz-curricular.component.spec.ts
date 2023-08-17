import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraMatrizCurricularComponent } from './cadastra-matriz-curricular.component';

describe('CadastraMatrizCurricularComponent', () => {
  let component: CadastraMatrizCurricularComponent;
  let fixture: ComponentFixture<CadastraMatrizCurricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraMatrizCurricularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraMatrizCurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
