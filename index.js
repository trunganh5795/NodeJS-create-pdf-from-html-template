const pdf = require('pdf-creator-node');
const fs = require('fs');
const formService = require('./services/form');
///////////////////
const request_1 = {
  body: {
    formType: 'form1',
    itemKeys: [
      'maVatTu',
      'tenVatTu',
      'quyCach',
      'nhanHieu',
      'nuocSanXuat',
      'donViTinh',
      'soLuong',
      'donGia',
      'thanhTien',
      'ghiChu',
    ],
    calulateSummary: {
      key: 'thanhTien',
    },
    records: [
      {
        maVatTu: 1,
        tenVatTu: '2 asA SAsSAw`1 AS A0d-2e asid- -12i asi -i-l',
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
      {
        maVatTu: 1,
        tenVatTu: 2,
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
      {
        maVatTu: 1,
        tenVatTu: 2,
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
      {
        maVatTu: 1,
        tenVatTu: 2,
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
      {
        maVatTu: 1,
        tenVatTu: 2,
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
    ],
    thongTinHeader: {
      maLenh: 12,
      nguoiLap: 'user 123456',
      ngayLap: '20/10/2023',
      maSanPham: 'ASPPO',
      boPhan: 'BP1',
      maSo: 99900,
      phienBan: 5.0,
      NgayBanHanh: '20/09/2023',
    },
  },
};
const request_2 = {
  body: {
    formType: 'form2',
    calulateSummary: {
      key: 'thanhTien',
    },
    itemKeys: [
      'maVatTu',
      'tenVatTu',
      'quyCach',
      'nhanHieu',
      'nuocSanXuat',
      'donViTinh',
      'soLuong',
      'donGia',
      'thanhTien',
      'ghiChu',
    ],
    records: [
      {
        maVatTu: 1,
        tenVatTu:
          'Kiểm tra sản phẩm abc,xyz, rt as,d asd,qwe ,qwe, qweqw,e ,qwe, q,we,,213,,1312 21312as asd 12 sad da',
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
      {
        maVatTu: 1,
        tenVatTu:
          'Kiểm tra sản phẩm abc,xyz, rt as,d asd,qwe ,qwe, qweqw,e ,qwe, q,we,,213,,1312 21312as asd 12 sad da',
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
      {
        maVatTu: 1,
        tenVatTu: '1',
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
      {
        maVatTu: 1,
        tenVatTu: '1',
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
      {
        maVatTu: 1,
        tenVatTu: '1',
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
      {
        maVatTu: 1,
        tenVatTu: '1',
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
      {
        maVatTu: 1,
        tenVatTu: '1',
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
      {
        maVatTu: 1,
        tenVatTu: '1',
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
      {
        maVatTu: 1,
        tenVatTu: '1',
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
      {
        maVatTu: 1,
        tenVatTu: 'sa tru oas qwp21 123las opas 213 asd1',
        quyCach: 3,
        nhanHieu: 4,
        nuocSanXuat: 54,
        donViTinh: 1,
        soLuong: 9,
        donGia: 190,
        thanhTien: 9,
        ghiChu: 99,
      },
    ],
    thongTinHeader: {
      maLenh: 12,
      nguoiLap: 'user 123456',
      ngayLap: '20/10/2023',
      maSanPham: 'ASPPO',
      boPhan: 'BP1',
      maSo: 99900,
      phienBan: 5.0,
      NgayBanHanh: '20/09/2023',
      congDoan: 1,
    },
  },
};
const request_3 = {
  body: {
    formType: 'form3',
    calulateSummary: false,
    itemKeys: [
      'noiDungKiemTra',
      'phuongPhapDo',
      'thongSoThucTe',
      'thongSoThietKe',
      'soLuongDat',
      'soLuongKhongDat',
      'ghiChu',
    ],
    records: [
      {
        noiDungKiemTra:
          'Kiểm tra sản phẩm abc,xyz, rt as,d asd,qwe ,qwe, qweqw,e ,qwe, q,we,,213,,1312 21312as asd 12 sad da',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra:
          'Kiểm tra sản phẩm abc,xyz, 1, 2,1 ,tru,as ,qwe,hyu ,,32 ,32,1 112 31',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
      {
        noiDungKiemTra: 'Kiểm tra sản phẩm abc,xyz',
        phuongPhapDo: 'Thủ công',
        thongSoThucTe: '300cm',
        thongSoThietKe: 300,
        soLuongDat: 300,
        soLuongKhongDat: 0,
        ghiChu: 'Đạt rồi',
      },
    ],
    thongTinHeader: {
      maLenh: 12,
      nguoiLap: 'user 123456',
      ngayLap: '20/10/2023',
      maSanPham: 'ASPPO',
      boPhan: 'BP1',
      maSo: 99900,
      phienBan: 5.0,
      NgayBanHanh: '20/09/2023',
      congDoan: 1,
    },
  },
};
const request_4 = {
  body: {
    formType: 'form4',
    calulateSummary: false,
    records: {
      KCSCauHinh: {
        title: 'KCS Cấu Hình',
        content: [
          'Số lượng rọ đựng vật hấp theo cấu hình chào',
          'Dây cáp nguồn: 01 cái, kích thước 2x4mm2',
          'Dây nối đất: 01 cái, dài 2m, kích thước 1x1mm2',
          'Sách hướng dẫn sử dụng: 01 quyển',
          'Quy trình vận hành: 01 tờ (dán trên máy)',
          'Đồng hồ đo và theo dõi áp suất buồng khử khuẩn (mặt trước): -1 kgf/cm2 đến 5 kgf/cm2',
          'Aptomat tổng: 1P, 32A, chức năng chống dòng dò',
          'Công suất thanh đốt (50,75 lít : 4kW / 100 lít: 4,5kW)',
          'Đầy đủ tem nhãn cho công tắc, đèn báo, mác sản phẩm',
        ],
      },
      KCSLapRap: {
        title: 'KCS Lắp ráp',
        content: [
          'Tất cả các vị trí đấu dây, hàn dây chắc chắn, không bị tuột khi chịu lựu kéo bằng tay',
          'Các vị trí đi dây đúng theo quy định, các vị trí buộc dây khi lắp ráp đúng vị trí, buộc dây chắc chắn',
          'Kích thước, màu dây và đánh số dây đúng như bản vẽ',
          'Mở và khóa nắp buồng hấp dễ dàng, và chắc chắn',
          'Thanh đốt không bị cong, vênh, trồi lên khỏi mực nước trong nồi (khi đủ nước)',
          'Đo điện trở thanh đốt ~ 12 ôm (R=U2/P)',
          'Đo trở kháng cách điện giữa thanh đốt với vỏ máy',
        ],
      },
      KCSChucNangHoatDong: {
        title: 'KCS Chức Năng Hoạt Động',
        content: [
          'Màn hình LED: Sáng rõ, không bị nhiễu',
          'Test chức năng, độ nhạy của các phím điều khiển',
          'Kiểm tra tham số cài đặt 10 chương trình mặc định đúng như cấu hình kỹ thuật',
          'Test chức năng chọn chương trình (cài đặt sẵn và tùy chọn), cài đặt tham số, hiệu chỉnh tham số chương trình',
          'Không dò rỉ hơi hoặc nước trong quá trình chạy thử',
          'Van an toàn tự động mở khi áp suất ≥ 2,7kgf/cm2 và tự động đóng khi áp suất ≤ 2.5 kgf/cm2',
          'Các đèn báo heat, power, water sáng rõ và hoạt động đúng chức năng',
          'Test chức năng hoạt động và hiển thị nút thoát hiểm Exhaust',
          'Test lỗi E1: Khóa van cấp nước sau đó chạy nồi hấp, kiểm tra xem thiết bị có báo lỗi E1 hay không (sau 15p)',
          'Test lỗi E2: Khóa van cấp nước trong quá trình tiệt trùng, kiểm tra xem thiết bị có báo lỗi E2 hay không',
          'Test lỗi E3: Ngắt tín hiệu cảm biến nhiệt độ, kiểm tra xem thiết bị có báo lỗi E3 hay không',
          'Test lỗi E4: Rút role điều khiển của thanh đốt. Kiểm tra xem nồi hấp có báo lỗi E4 hay không',
          'Chức năng hoạt động đóng mở của các van điện bình thường, không có tiếng kêu lạch cạch khi van mở',
          'Chức năng báo cạn nước',
          'Chạy thử ít nhất 3 chương trình hoàn chỉnh Chường trình 3; Chường trình 6; Chường trình 10',
          'Các đường ống kín không bị rò rỉ',
          'Gioăng thiết bị không bị rò rỉ',
          'Cơ cấu đóng, mở nắp nồi nhẹ nhàng',
        ],
      },
    },
    thongTinHeader: {
      maLenh: 12,
      nguoiLap: 'user 123456',
      ngayLap: '20/10/2023',
      maSanPham: 'ASPPO',
      boPhan: 'BP1',
      maSo: 99900,
      phienBan: 5.0,
      NgayBanHanh: '20/09/2023',
      congDoan: 1,
      soSeri: 99099,
    },
  },
};
/////////////////
const kiemTraCongDoanCol = [
  {
    key: 'noiDungKiemTra',
    title: 'Nội dung kiểm tra',
    width: 200,
  },
  {
    key: 'phuongPhapDo',
    title: 'Phương pháp đo',
    width: 80,
  },
  {
    key: 'thongSoThucTe',
    title: 'Thông số thực tế',
    width: 80,
  },
  {
    key: 'thongSoThietKe',
    title: 'Thông số thiết kết',
    width: 80,
  },
  {
    key: 'soLuongDat',
    title: 'Số lượng đạt',
    width: 80,
  },
  {
    key: 'soLuongKhongDat',
    title: 'Số lượng không đạt',
    width: 80,
  },
  {
    key: 'ghiChu',
    title: 'Ghi chú',
    width: 130,
  },
];

const deNghiMuaVatTuCol = [
  {
    key: 'maVatTu',
    title: 'Mã vật tư',
    width: 70,
  },
  {
    key: 'tenVatTu',
    title: 'Tên vật tư',
    width: 270,
  },
  {
    key: 'quyCach',
    title: 'Quy cách',
    width: 50,
  },
  {
    key: 'nhanHieu',
    title: 'Nhãn Hiệu',
    width: 50,
  },
  {
    key: 'nuocSanXuat',
    title: 'Nước SX',
    width: 50,
  },
  {
    key: 'donViTinh',
    title: 'Đơn vị tính',
    width: 70,
  },
  {
    key: 'soLuong',
    title: 'Số lượng',
    width: 50,
  },
  {
    key: 'donGia',
    title: 'Đơn giá',
    width: 50,
  },
  {
    key: 'thanhTien',
    title: 'Thành tiền',
    width: 50,
  },
  {
    key: 'ghiChu',
    title: 'Ghi Chú',
    width: 100,
  },
];

const phieuKCSCol = [
  {
    key: 'noiDungKiemTra',
    title: 'Nội dung kiểm tra',
    width: 300,
  },
  {
    key: 'dat',
    title: 'Đạt',
    width: 50,
  },
  {
    key: 'khongDat',
    title: 'Không Đạt',
    width: 70,
  },
  {
    key: 'ghiChu',
    title: 'Ghi chú',
    width: 150,
  },
];
/////////////////
async function getPdfDonHang(request, response, conn) {
  try {
    console.log('running to here....');
    let { records, thongTinHeader, formType, calulateSummary, col } =
      request.body;

    var html = fs.readFileSync(
      __dirname + '/template/html/template.html',
      'utf8'
    );
    var cCSS = fs.readFileSync(
      __dirname + '/template/html/styles/style.html',
      'utf8'
    );
    var cHeader = fs.readFileSync(
      __dirname + `/template/html/${formType}/header.html`,
      'utf8'
    );
    var cFooter = fs.readFileSync(
      __dirname + `/template/html/${formType}/footer.html`,
      'utf8'
    );

    /////////////////////////////////////////////
    html = html.replace('<!-- CSS -->', cCSS);
    html = html.replace('<!-- Header -->', cHeader);
    html = html.replace('<!-- Footer -->', cFooter);
    /////////////////////////////////////////////
    // select generate conntent function
    if (formType !== 'form4') {
      html = html.replace(
        '<!-- Content -->',
        formService.generateContentTable(records, col, calulateSummary)
      );
    } else {
      html = html.replace(
        '<!-- Content -->',
        formService.generateContentTableForm4(records, col, calulateSummary)
      );
    }

    fs.writeFileSync(
      __dirname +
        '/template/output/' +
        new Date().getTime() +
        '_' +
        formType +
        '.html',
      html
    );
    // conver logo image to base64
    const bitmap = fs.readFileSync(
      __dirname + '/template/html/assets/imgs/logo.png'
    );
    const logo = bitmap.toString('base64');
    ////
    var document = {
      html: html,
      data: {},
      path:
        __dirname +
        '/template/output/' +
        new Date().getTime() +
        '_' +
        formType +
        '.pdf',
      type: '',
      data: {
        thongTinHeader: {
          ...thongTinHeader,
          logo: logo,
        },

        config: {
          __dirname: __dirname,
          columns: col,
        },
      },
    };
    /// CREATE PDF ////
    await pdf
      .create(document, {
        format: 'A4',
        orientation: 'landscape',
        childProcessOptions: {
          env: {
            OPENSSL_CONF: '/dev/null',
          },
        },
        border: {
          top: '2cm',
          right: '1cm',
          bottom: '2cm',
          left: '1.5cm',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });

    return document.path;
  } catch (err) {
    console.log('err===', err);
    throw err;
  }
}

//Form mua vật tư
request_1.body.col = deNghiMuaVatTuCol;
getPdfDonHang(request_1);

//Form lĩnh vật tư
request_2.body.col = deNghiMuaVatTuCol;
getPdfDonHang(request_2);

//Form kiểm tra công đoạn
request_3.body.col = kiemTraCongDoanCol;
getPdfDonHang(request_3);

//Form KCS
request_4.body.col = phieuKCSCol;
getPdfDonHang(request_4);
