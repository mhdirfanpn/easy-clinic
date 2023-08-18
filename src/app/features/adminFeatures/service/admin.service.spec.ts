import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminService } from './admin.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { UserData } from 'src/app/interface/user';
import { ADMIN_API } from 'src/app/shared/api.config';
import { Appointment } from 'src/app/interface/doctor';

const mockApiResponse = {
  success: true,
  adminToken: 'mockAdminToken',
  token: 'mockToken',
  doctorToken: 'mockDoctorToken'
};

describe('AdminService', () => {
  let service: AdminService; // The service being tested
  let httpMock: HttpTestingController; // Mock for HTTP requests
  let authServiceSpy: jasmine.SpyObj<AuthService>; // Spy on AuthService methods

  beforeEach(() => {
    // Create a mock of AuthService with the setAdminToken method
    const authServiceMock = jasmine.createSpyObj('AuthService', ['setAdminToken']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule for HTTP requests
      providers: [AdminService, { provide: AuthService, useValue: authServiceMock }]
    });

    // Inject the components and services
    service = TestBed.inject(AdminService); // Inject the service tested
    httpMock = TestBed.inject(HttpTestingController); // Inject the HTTP request 
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>; // Inject AuthService spy
  });


  
  //verify all HTTP requests 
  afterEach(() => {
    httpMock.verify();
  });



  // service is created
  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  // Test fetching all users
  it('should fetch all users', () => {
    const user: UserData[] = [];

    service.allUsers().subscribe((users) => {
      expect(users).toEqual(user);
    });

    const req = httpMock.expectOne(`${ADMIN_API}/allUsers`);
    expect(req.request.method).toBe('GET');
    req.flush(user);
  });



  // Test adminLogin API call and token setting
  it('should call the adminLogin API and set token if success', () => {
    authServiceSpy.setAdminToken.and.callThrough(); // Set up the spy to call the actual method

    service.adminLogin('test@example.com', 'password').subscribe((response) => {
      expect(response).toEqual(mockApiResponse);
      expect(authServiceSpy.setAdminToken).toHaveBeenCalledWith('mockAdminToken');
    });

    const req = httpMock.expectOne(`${ADMIN_API}/login`);
    expect(req.request.method).toBe('POST');
    req.flush(mockApiResponse);
  });



  //should send a blockUser request
  it('should send a blockUser request', () => {
    // Define the user ID to use in the test
    const userId = 'user123';

    // Call the blockUser method
    service.blockUser(userId).subscribe();

    // HTTP request is made to the specified URL
    const req = httpMock.expectOne(`${ADMIN_API}/blockUser/${userId}`);
    // Check that the HTTP method is GET
    expect(req.request.method).toBe('GET');

  });




   // Test for the getAppointments function
   it('should fetch appointments', () => {
    const mockAppointments: Appointment[] = [
      // Mock appointment data here
    ];

    // Call the function
    service.getApppointments().subscribe((appointments) => {
      expect(appointments).toEqual(mockAppointments);
    });

    // expected request URL and method
    const expectedUrl = `${ADMIN_API}/appointment`;
    const expectedMethod = 'GET';

    // HTTP request with the expected URL and method
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe(expectedMethod);

    // Respond to the request with the data
    req.flush(mockAppointments);
  });
});
