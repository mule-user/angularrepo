import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // private baseUrl = 'http://springbootawscrudexample-env.eba-k85z7ibt.ap-south-1.elasticbeanstalk.com/api/v1/employees';
 // private baseUrl = 'http://localhost:8084/api/v1/employees';
  private baseUrl = 'http://licensedemov2-env-1.eba-6td2jaq2.ap-south-1.elasticbeanstalk.com/api/v1/employees';


  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
