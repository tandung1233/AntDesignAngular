import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-nz-tabel',
  templateUrl: './nz-tabel.component.html',
  styleUrls: ['./nz-tabel.component.css'],
})
export class NzTabelComponent implements OnInit {
  // Cái data này để chứa dư liệu render ra bảng
  data: any;
  // Biến này nếu true sẽ xuất hiện xoay xoay khi nào thành false là hết xoay xoay
  isLoadingData = true;
  // Tạo biến này để chỉ định 3 item mỗi lúc phân trang
  pageSize = 3;
  // Chỉ định trang đầu tiên là 1
  pageIndex = 1;
  // Tiêm httlClient để gọi API
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    // Khi mới khởi động component thì sẽ gọi hàm này để hiển thị dữ liệu lên màn hình
    this.listData();
  }

  // offset là vị trí đầu tiên của phần tử trong mảng mà bạn muốn lấy. 
  // Nếu bạn không truyền giá trị cho tham số này, mặc định sẽ lấy từ vị trí đầu tiên của mảng(tức là offset = 0).
  // limit là số lượng phần tử mà bạn muốn lấy ra từ mảng, tính từ vị trí offset. 
  // Nếu bạn không truyền giá trị cho tham số này, mặc định sẽ lấy tất cả các phần tử từ vị trí offset trở đi.
  listData(offset?: number, limit?: number) {
    console.log("offset: " + offset,"\n limit: " + limit);
    this.isLoadingData = true;
    this.http.get('http://localhost:3000/data').subscribe(
      (response: any) => {
        response.items = response.items.splice(offset, limit);
        this.data = response;
        this.isLoadingData = false;
      },
      (err) => {
        console.log('Error while getting Data. Error : ', err);
      }
    );
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    console.log('NzTableQueryParams: ',params)
    this.listData((params.pageIndex - 1) * params.pageSize, params.pageSize);
  }

  reset() {
    this.pageIndex = 1;
    this.listData(0, this.pageSize);
  }
}
