import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaDialogComponent } from './programa-dialog.component';

describe('ProgramaDialogComponent', () => {
  let component: ProgramaDialogComponent;
  let fixture: ComponentFixture<ProgramaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
