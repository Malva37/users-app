import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  // @Output() filterUsers = new EventEmitter($event);
  @Input()
  cities!: string[];

  showParam(event:Event) {
    const param = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).value;
    console.log(param, value);
  }
}
