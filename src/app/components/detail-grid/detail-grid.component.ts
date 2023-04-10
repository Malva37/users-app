import { User } from './../../types/user';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.scss']
})
export class DetailGridComponent {
  @Input() key!: User;


  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }

}
