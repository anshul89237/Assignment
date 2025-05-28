import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {
  personId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit() {
    this.personId = +this.route.snapshot.paramMap.get('id')!;
  }

  confirmDelete() {
    this.personService.deletePerson(this.personId);
    this.router.navigate(['/people']);
  }

  cancel() {
    this.router.navigate(['/people']);
  }
}
