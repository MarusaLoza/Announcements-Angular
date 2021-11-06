import { Component } from '@angular/core';
import { Announcement } from '../app/announ-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-task';
  announcement = Announcement;
 
  filteredAnnouncement = Announcement;
  searchValue:string='';
  
  delete(i: number) {
    this.announcement.splice(i, 1);
    this.filterItems()
  }

  add() {
    let newItem =  {
      title: `Announcement ${this.announcement.length+1}`,
      description: 'Lorem Ipsum',
      nowDate: new Date
    }

    this.announcement.push(newItem);
    this.filterItems()
  }

  filterItems() {
    this.filteredAnnouncement = JSON.parse(JSON.stringify(this.announcement))
    this.filteredAnnouncement = this.announcement.filter((item) =>
    ((item.title.toUpperCase().indexOf(this.searchValue.toUpperCase()) !==-1)
      || (item.description.toUpperCase().indexOf(this.searchValue.toUpperCase()) !==-1)
    )
    );
  } 
  
}
