import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppComponent } from './add-user.component';

describe('AddUserComponent', () => {
  let component: AddAppComponent;
  let fixture: ComponentFixture<AddAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
