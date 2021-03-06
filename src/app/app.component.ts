import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
// import { ViewKegComponent } from './view-keg/view-keg.component';
// import { EditKegComponent } from './edit-keg/edit-keg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';

  masterKegList: Keg[] = [new Keg("Goose IPA","Goose Island Brewery",8.00,12,124),
  new Keg("Generic IPA","Harpoon Brewing Co.",8.00,5.9,124),
  new Keg("Budweiser","Anheiser Busch",6.00,3.45,124)];
  selectedKeg: Keg = null;
  selectedKeg2: Keg = null;
  showForm: boolean = false;

  updateShowForm(formState) {
    this.showForm = formState;
    this.selectedKeg = null;
    this.selectedKeg2 = null;
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
    this.showForm = false;
  }

  editKeg(clickedKeg) {
    this.selectedKeg2 = clickedKeg;
    this.selectedKeg = null;
  }

  editBtnClicked(childSelectedKeg) {
    console.log("Look at me I'm editing keg # " + childSelectedKeg);
    childSelectedKeg.editButtonClicked(childSelectedKeg);
  }

  viewKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
    this.selectedKeg2 = null;
    this.showForm = false;
  }

  finishedEditing() {
    this.selectedKeg2 = null;
  }

  deleteKeg() {
    let index = this.masterKegList.indexOf(this.selectedKeg2)
    this.masterKegList.splice(index, 1);
    this.selectedKeg2 = null;
  }
}
