import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  volunteer = {
    full_name : "Mahmoud Turki",
    email: "mahmoud.tuurki@gmail.com",
    password: "12345",
    country: "Tunisia"
  }
  constructor(    private firestore: AngularFirestore,
    ) {
      this.addVolunteer();
    }

    addVolunteer() {
      this.firestore.collection("/volunteer/").add(this.volunteer).then(()=> {
        console.log("Doc Added");
        this.displayVolunteers();
      });
    }

    displayVolunteers() {
      this.firestore.collection('/volunteer/').snapshotChanges().subscribe(res => {
        console.log(res);
      })
    }
}
