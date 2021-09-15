import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() years!:Array<any>;
  @Output() selectedYear = new EventEmitter();

  public setupForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createSetupForm();
  }

  createSetupForm(){
    this.setupForm = new FormGroup({
      dropDown: new FormControl('')
    })
  }

  changeCity(){
    // alert(this.setupForm.controls['dropDown'].value)
    this.selectedYear.emit(this.setupForm.controls['dropDown'].value);
  }

}
