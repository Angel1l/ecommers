import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProd } from './agregar-prod';

describe('AgregarProd', () => {
  let component: AgregarProd;
  let fixture: ComponentFixture<AgregarProd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarProd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarProd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
