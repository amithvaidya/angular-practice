import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent {
  userName: string = '';
  email: string = '';
  age: number = 0;
  height: number = 0;
  gender: string = '';
  center: string = '';
  bookingDate: Date = new Date();
  heightBar: boolean = false;
  private httpOptions =  {
    "headers": new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    })
  };
  // httpClient = {};
  constructor(private httpClient: HttpClient){}

  submitForm(result: any){
    this.httpClient.post<boolean>("http://localhost:8080/create-application", result, this.httpOptions)
    .subscribe((status) => { console.log(status);});
    console.log(result); 

  }

  displayHeight(h: number){
    this.height = h;
  }

  displayHeightBar(flag: boolean){
    this.heightBar = flag;
  }

}
