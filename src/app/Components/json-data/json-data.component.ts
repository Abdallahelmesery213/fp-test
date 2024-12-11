import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDataService } from '../../Services/JsonData.service';

@Component({
  selector: 'app-json-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './json-data.component.html',
  styleUrl: './json-data.component.css',
  providers:[JsonDataService]
})
export class JsonDataComponent implements OnInit {
  posts: any[] = [];
  filterID: any[] = [];

  constructor(private jsonDataService: JsonDataService) {}

  ngOnInit(): void {
    this.jsonDataService.getPosts().subscribe((data:any)=>{
      this.posts = data;
    },(error:any)=>{
      alert("Sorry Can you Try Again")
    })
  }

  fiter(): void{
    debugger
    this.filterID = this.posts.filter(pst=>pst.userId==1);
    this.posts = this.filterID
  }

}
