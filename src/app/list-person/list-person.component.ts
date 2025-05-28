import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {
    this.people = this.personService.getPeople();
  }

  editPerson(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: number) {
    this.router.navigate(['/delete', id]);
  }
}
