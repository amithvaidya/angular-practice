import { Component, OnInit } from '@angular/core';
import { Application } from '../Application';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-application-dashboard',
  templateUrl: './application-dashboard.component.html',
  styleUrls: ['./application-dashboard.component.css']
})
export class ApplicationDashboardComponent implements OnInit{
  
  apps: Application[] = [];

  ngOnInit(): void {
    this.httpClient.get<Application[]>("http://localhost:8080/")
      .subscribe((data) => { this.apps = data; console.log(this.apps);});
  }
  constructor(private httpClient:HttpClient){}  
}
