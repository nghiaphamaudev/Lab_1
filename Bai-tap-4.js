'use strict';
let classRoom = [
  'nguyễn tiến duẩn',
  'Hoàng Xuân Hiếu',
  'Hồ Sỹ Hưng',
  'Nguyễn Đức Thuận',
  'đoàn Minh Tùng',
  'Hồ Sỹ Hùng',
  'Lê Trung Hiếu',
  'đoàn vua dep trai vua hoc gioi Hữu Quý',
];
// Câu 1: Tách tên và họ riêng
const name = classRoom.map(el => el.split(' ').splice(-1));
console.log(name);
const surname = classRoom.map(el => el.split(' ')[0]);
console.log(surname);

// Câu 2: Thêm 1 sinh viên vào 1 vị trí bất kì

classRoom.splice(
  Math.floor(Math.random() * classRoom.length) + 1,
  0,
  'Phạm Văn Nghĩa'
);

//Câu 3: Xóa 1 sinh viên ra khỏi mảng
classRoom.pop();
classRoom.shift();
classRoom.splice(Math.floor(Math.random() * classRoom.length) + 1, 1);

// Câu 4: Tìm kiếm theo tên, không chứa dấu
// Solution idea: Duyệt mảng lọc lấy tên của tất cả các phần tử
// Chuyển thành tên viết thường so sánh với chuỗi cần tìm
// Không ra do không thể chuyển có dấu thành không dấu

const filterName = nameSearch =>
  classRoom.filter(
    el =>
      el
        .split(' ')
        .slice(-1)
        .join('')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') === nameSearch.toLowerCase()
  );
