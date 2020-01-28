import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'expenses';
  dataset = ["test", "test2", "test3", "test4"];
  displayedColumns: string[] = ['name'];
}
