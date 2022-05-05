import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplianceService {

  readonly applianceUrl = "https://localhost:7092/api"; 

  constructor(private http : HttpClient) { }

  // Appliance

  getApplianceList():Observable<any[]>{
    return this.http.get<any>(this.applianceUrl + '/Appliances')
  }

  addAppliance(data : any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json')

    return this.http.post(this.applianceUrl + '/Appliances', data, { headers : httpHeaders})
  }

  updateAppliance(id : number|string , data : any){
    return this.http.put(this.applianceUrl + `/Appliances/${id}`, data)
  }

  deleteAppliance(id : number|string) {
    return this.http.delete(this.applianceUrl + `/Appliance/${id}`)
  }

  //TypeAppliance
  getTypeApplianceList():Observable<any[]> {
    return this.http.get<any>(this.applianceUrl + '/TypeAppliances')
  }
  


}
