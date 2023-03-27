import { Component, OnInit } from '@angular/core';
import { NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
// DataItem này là dữ liệu do ta tự định nghĩa
interface DataItem {
  name: string;
  age: number;
}
// ColumnItem này là các giá trị ta khai báo object để truyền vào
interface ColumnItem {
  name: string;
  sortFn: NzTableSortFn | null;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',// Ta định nghĩa cột có tên là name
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name), // Ta định nghĩa hàm sắp xếp tên
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Age',
      sortFn: (a: DataItem, b: DataItem) => {
        console.log("hello")
        if (a.age > b.age) {
          return 1;
        } else if (a.age < b.age) {
          return -1;
        } else return 0;
      },
      sortDirections: ['ascend', 'descend', null],
    },
  ];
  listOfData: DataItem[] = [
    {name: 'D',age: 20,},
    {name: 'F', age: 36,},
    {name: 'B',age: 15,},
    {name: 'C',age: 79,},
    {name: 'A',age: 10,},
  ];
  constructor() {}

  ngOnInit(): void {}
}
