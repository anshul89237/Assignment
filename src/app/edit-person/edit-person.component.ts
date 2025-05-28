import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  person: Person = { id: 0, name: '', age: 0, email: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const foundPerson = this.personService.getPersonById(id);
    if (foundPerson) {
      this.person = { ...foundPerson };
    } else {
      alert('Person not found');
      this.router.navigate(['/people']);
    }
  }

  save() {
    this.personService.updatePerson(this.person);
    this.router.navigate(['/people']);
  }

  cancel() {
    this.router.navigate(['/people']);
  }
}
