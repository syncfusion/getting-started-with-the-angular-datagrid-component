import { Component, signal, OnInit } from '@angular/core';
import {
  GridModule, PageSettingsModel, PageService, SortService, FilterService,
  FilterSettingsModel, GroupService
} from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  imports: [GridModule],
  providers: [PageService, SortService, FilterService, GroupService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('my-angular-app');
  public data?: object[];
  public pageSettings?: PageSettingsModel;
  public filterOptions?: FilterSettingsModel;
  ngOnInit(): void {
    this.data = data;
    this.pageSettings = { pageSize: 5 },
      this.filterOptions = {
        type: 'Menu'
      }
  }
}

