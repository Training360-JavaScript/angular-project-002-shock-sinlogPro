import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-button-group',
  templateUrl: './action-button-group.component.html',
  styleUrls: ['./action-button-group.component.scss']
})
export class ActionButtonGroupComponent implements OnInit {

  @Output() selectClick: EventEmitter<boolean> = new EventEmitter();
  @Output() updateClick = new EventEmitter<boolean>();
  @Output() deleteClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectButtonClick(): void {
    this.selectClick.emit(true);
  }

  onUpdateButtonClick(): void {
    this.updateClick.emit(true);
  }

  onDeleteButtonClick(): void {
    this.deleteClick.emit(true);
  }

}
