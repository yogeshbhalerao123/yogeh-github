import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  title = 'Select/ Unselect All Checkboxes';
  masterSelected:boolean;
  checklist:any;
  checkedList:any;

  constructor() { 
    this.masterSelected = false;
      this.checklist = [
        {id:1,value:'Red',isSelected:false},
        {id:2,value:'Pink',isSelected:true},
        {id:3,value:'Yellow',isSelected:true},
        {id:4,value:'Green',isSelected:false},
        {id:5,value:'Black',isSelected:false},
        {id:6,value:'Brown',isSelected:false},
        {id:7,value:'White',isSelected:false},
        {id:8,value:'Blue',isSelected:false}
      ];
      this.getCheckedItemList();
  }

  ngOnInit(): void {
  }
  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }


}
