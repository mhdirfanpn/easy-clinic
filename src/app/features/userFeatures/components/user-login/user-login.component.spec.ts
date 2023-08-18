import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserLoginComponent } from './user-login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { of } from 'rxjs';


describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;
  let formBuilder: FormBuilder;
  let userServiceStub: Partial<UserService>; // Create a stub for the UserService

  // Initialize the testing module and create component fixture
  beforeEach(async () => {
    userServiceStub = {
      loginUser: jasmine.createSpy().and.returnValue(of({ success: true })), // Stub loginUser with success response
    };

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule], // Import ReactiveFormsModule for form control
      declarations: [UserLoginComponent],
      providers: [FormBuilder, { provide: UserService, useValue: userServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
  });

  // Test for component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test for ngOnInit method
  it('should initialize loginForm with default values', () => {
    // Call ngOnInit
    component.ngOnInit();

    // loginForm to have default values
    expect(component.loginForm.value.email).toEqual('irfan@gmail.com');
    expect(component.loginForm.value.password).toEqual('Irfan@123');
  });


 
});

