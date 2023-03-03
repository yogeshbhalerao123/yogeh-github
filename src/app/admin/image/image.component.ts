import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  Product=[
    {img:'../assets/Player/dhoni.jpg'},
    {img:'../assets/Player/kohli.jpg'},
    {img:'../assets/Player/Rohit.jpg'},
    {img:'../assets/Player/smriti.jpg'},
    {img:'../assets/Player/Boomrah.jpg'},
    {img:'../assets/Player/Dhavan.jpg'},
    {img:'../assets/Player/Rahul.jpg'},
    {img:'../assets/Player/kuldeep.jpg'},
    {img:'../assets/Player/Saurav.jpg'},
    
   ]
  
 
  events:any;
  constructor() { }

  ngOnInit(): void {
  }
 // urls=[];
  // onSelect(event:any)
  // {
  //   if(event.target.files)
  //   {
  //     for(let i=0;i<File.length;i++)
  //     {
  //       var reader = new FileReader();
  //       reader.readAsDataURL(event.target.files[i])
  //       reader.onload = (event:any)=>{
  //         this.urls.push(event.target.result);
  //       }
        
  //     }
  //   }
  // }
  }
