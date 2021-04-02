import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3aComponent } from './task3a.component';

describe('Task3aComponent', () => {
  let component: Task3aComponent;
  let fixture: ComponentFixture<Task3aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task3aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
