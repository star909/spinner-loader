import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  smallSpinner:boolean = false;
  mediumSpinner:boolean=false;
  largeSpinner:boolean=false;
  constructor(private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }
/**
   * @ functions : startSpinner and stopSpinner
   * @ Purpose  : To load the spinner as per the duration
   * @ version  : 1.0.1
   * @ author   : Shivam
   */

public startSmallSpinner(flag:boolean){
  this.smallSpinner = flag;
  this.spinner.show("small");
}
public stopSmallSpinner(flag:boolean){
  this.smallSpinner = flag;
  this.spinner.show("small");
}
public startMediumSpinner(flag:boolean){
  this.mediumSpinner = flag;
  this.spinner.show("medium");
}
public stopMediumSpinner(flag:boolean){
  this.mediumSpinner = flag;
  this.spinner.show("medium");
}
public startLargeSpinner(flag:boolean){
  this.largeSpinner = flag;
  this.spinner.show("large");
}
public stopLargeSpinner(flag:boolean){
  this.largeSpinner = flag;
  this.spinner.show("large");
}
}
