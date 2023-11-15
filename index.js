const pdf = require('pdf-creator-node');
const fs = require('fs');
const formService = require('./services/form');
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
    calulateSummary: true,
    records: [
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
    calulateSummary: true,
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
async function getPdfDonHang(request, response, conn) {
  try {
    console.log('running to here....');
    let { records, thongTinHeader, formType, itemKeys } = request.body;
    // donHangTemp = utilities.convertMapToJson(donHangTemp);
    // let donHang = donHangTemp['data'];
    // // console.log('donHang===', donHang)
    // if (!donHang || JSON.stringify(donHang) === JSON.stringify({}))
    //   return __dirname + '/html2pdf/output_template.pdf';
    // Read HTML Template
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

    var tableContent = fs.readFileSync(
      __dirname + `/template/html/${formType}/content.html`,
      'utf8'
    );

    var cFooter = fs.readFileSync(
      __dirname + `/template/html/${formType}/footer.html`,
      'utf8'
    );
    html = html.replace('<!-- CSS -->', cCSS);
    // update header
    html = html.replace('<!-- Header -->', cHeader);
    html = html.replace('<!-- Footer -->', cFooter);
    tableContent = tableContent.replace(
      '<!-- content -->',
      formService.generateContentForm1(records, itemKeys)
    );
    html = html.replace('<!-- Content -->', tableContent);

    // comment here
    // // update hang hoa
    // let temp = capNhatHangHoa(cHangHoa, cTong, donHang);

    // cTongHangHoa = cTongHangHoa.replace(
    //   '<!-- DanhSachHangHoa -->',
    //   temp.cHangHoa
    // );
    // cTongHangHoa = cTongHangHoa.replace('<!-- TongHangHoa -->', temp.cTong);
    // html = html.replace('<!-- Tong_Hang_Hoa_DonHang -->', cTongHangHoa);

    // // update boc tra
    // let danhSachDiemBoc = capNhatDiemBocTra(
    //   cDiemBocTra,
    //   cHangHoaBocTra,
    //   cMoRongDiemBocTra,
    //   donHang,
    //   true
    // );
    // let danhSachDiemTra = capNhatDiemBocTra(
    //   cDiemBocTra,
    //   cHangHoaBocTra,
    //   cMoRongDiemBocTra,
    //   donHang,
    //   false
    // );

    // html = html.replace('<!-- Danh_Sach_DiemGiaoHang -->', danhSachDiemBoc);
    // html = html.replace('<!-- Danh_Sach_DiemNhanHang -->', danhSachDiemTra);

    // update gia cuoc
    // cGiaCuoc = capNhatGiaCuoc(cGiaCuoc, donHang);
    // html = html.replace('<!-- Gia_Cuoc -->', cGiaCuoc);
    // let uuid = donHang['soPhieu'] + '_' + utilities.generateUUIDValue();
    fs.writeFileSync(
      __dirname + '/template/output/' + Math.random() + '.html',
      html
    );
    //// comment here

    const bitmap = fs.readFileSync(
      __dirname + '/template/html/assets/imgs/logo.png'
    );
    const logo = bitmap.toString('base64');
    var document = {
      html: html,
      data: {},
      //   path: __dirname + '/html2pdf/output' + uuid + '.pdf',
      path: __dirname + '/template/output/' + Math.random() + '.pdf',
      type: '',
      data: {
        thongTinHeader: {
          ...thongTinHeader,
          logo: logo,
        },

        config: {
          __dirname: __dirname,
        },
      },
    };
    // By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.

    await pdf
      .create(document, {
        format: 'A3',
        orientation: 'portrait',
        childProcessOptions: {
          env: {
            OPENSSL_CONF: '/dev/null',
          },
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
// getPdfDonHang(request_1);

//Form lĩnh vật tư
getPdfDonHang(request_3);
