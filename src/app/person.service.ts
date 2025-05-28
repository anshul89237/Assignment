import { Injectable } from '@angular/core';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private people: Person[] = [
    { id: 1, name: 'Ansh', age: 20, email: 'ansh@gmail.com' },
    { id: 2, name: 'Ram', age: 22, email: 'ram@gmail.com' },
    { id: 3, name: 'Shyam', age: 21, email: 'shyam@gmail.com' }
  ];

  getPeople(): Person[] {
    return this.people;
  }

  getPersonById(id: number): Person | undefined {
    return this.people.find(p => p.id === id);
  }

  updatePerson(updatedPerson: Person): void {
    const index = this.people.findIndex(p => p.id === updatedPerson.id);
    if (index !== -1) {
      this.people[index] = updatedPerson;
    }
  }

  deletePerson(id: number): void {
    this.people = this.people.filter(p => p.id !== id);
  }
}
