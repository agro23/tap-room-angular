import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent {

  constructor() { }
  @Input() childSelectedKeg2: Keg;
  @Output() clickedDone = new EventEmitter;
  @Output() clickedDelete = new EventEmitter;

  finishedEditing() {
    this.clickedDone.emit();
  }

  deleteKeg() {
    this.clickedDelete.emit();
  }

}
