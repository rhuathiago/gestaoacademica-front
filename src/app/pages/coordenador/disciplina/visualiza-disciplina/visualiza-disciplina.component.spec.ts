import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaDisciplinaComponent } from './visualiza-disciplina.component';

describe('VisualizaDisciplinaComponent', () => {
  let component: VisualizaDisciplinaComponent;
  let fixture: ComponentFixture<VisualizaDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizaDisciplinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
