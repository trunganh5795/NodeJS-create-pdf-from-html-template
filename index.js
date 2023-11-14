var pdf = require('pdf-creator-node');
var fs = require('fs');

(async function getPdfDonHang(request, response, conn) {
  try {
    console.log('running to here....');
    // let donHangTemp = request.body;
    // donHangTemp = utilities.convertMapToJson(donHangTemp);
    // let donHang = donHangTemp['data'];
    // // console.log('donHang===', donHang)
    // if (!donHang || JSON.stringify(donHang) === JSON.stringify({}))
    //   return __dirname + '/html2pdf/output_template.pdf';
    // Read HTML Template
    var html = fs.readFileSync(
      __dirname + '/html2pdf/html/template.html',
      'utf8'
    );
    var cCSS = fs.readFileSync(
      __dirname + '/html2pdf/html/components/style-donhang.html',
      'utf8'
    );
    var cHeader = fs.readFileSync(
      __dirname + '/html2pdf/html/components/header-donhang.html',
      'utf8'
    );
    var cTongHangHoa = fs.readFileSync(
      __dirname +
        '/html2pdf/html/components/tong-hanghoa-donhang/tong-hanghoa-donhang.html',
      'utf8'
    );
    var cTong = fs.readFileSync(
      __dirname + '/html2pdf/html/components/tong-hanghoa-donhang/tong.html',
      'utf8'
    );
    var cHangHoa = fs.readFileSync(
      __dirname + '/html2pdf/html/components/tong-hanghoa-donhang/hanghoa.html',
      'utf8'
    );

    var cGiaCuoc = fs.readFileSync(
      __dirname + '/html2pdf/html/components/gia-cuoc-donhang.html',
      'utf8'
    );

    var cDiemBocTra = fs.readFileSync(
      __dirname +
        '/html2pdf/html/components/diem-boctra-hang/diem-boctra-hang.html',
      'utf8'
    );
    var cHangHoaBocTra = fs.readFileSync(
      __dirname + '/html2pdf/html/components/diem-boctra-hang/hanghoa.html',
      'utf8'
    );
    var cMoRongDiemBocTra = fs.readFileSync(
      __dirname +
        '/html2pdf/html/components/diem-boctra-hang/morong-boctra.html',
      'utf8'
    );
    html = html.replace('<!-- CSS -->', cCSS);
    // update header
    // cHeader = capNhatHeader(cHeader, donHang);
    // html = html.replace('<!-- Header_Don_Hang -->', cHeader);
    // console.log(cHeader);
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
    // fs.writeFileSync(__dirname + '/html2pdf/output' + uuid + '.html', html);
    //// comment here
    var document = {
      html: html,
      data: {},
      //   path: __dirname + '/html2pdf/output' + uuid + '.pdf',
      path: __dirname + '/html2pdf/output/' + Math.random() + '.pdf',
      type: '',
    };
    // By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.

    await pdf
      .create(document, {
        format: 'A3',
        orientation: 'landscape',
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
})();
