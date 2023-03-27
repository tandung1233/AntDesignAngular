import { Component, OnInit } from '@angular/core';

interface Person {
  id: number;
  name: string;
  age: number;
}
@Component({
  selector: 'app-th',
  templateUrl: './th.component.html',
  styleUrls: ['./th.component.css'],
})
export class ThComponent implements OnInit {
  data: Person[] = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 32 },
    { id: 3, name: 'Charlie', age: 18 },
  ];

  sortByName = (a: Person, b: Person) => {
    return a.name.localeCompare(b.name);
  };

  sortByAge = (a: Person, b: Person) => {
    return a.age - b.age;
  };
  constructor() {}
  ngOnInit(): void {}
}
