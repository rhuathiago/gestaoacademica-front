import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaMatrizCurricularComponent } from './visualiza-matriz-curricular.component';

describe('VisualizaMatrizCurricularComponent', () => {
  let component: VisualizaMatrizCurricularComponent;
  let fixture: ComponentFixture<VisualizaMatrizCurricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizaMatrizCurricularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaMatrizCurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
