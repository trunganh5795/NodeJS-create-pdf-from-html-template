const content = `
<style>
  /* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } */
  body {
    margin-top: 0px;
    margin-left: 0px;
  }

  #page_1 {
    position: relative;
    overflow: hidden;
    margin: 37px 0px 177px 74px;
    padding: 0px;
    border: none;
    width: calc(100% - 148px);
  }

  #page_1 #id1_1 {
    border: none;
    margin: 6px 0px 0px 0px;
    padding: 0px;
    border: none;
    width: 719px;
    overflow: hidden;
  }

  #page_1 #id1_2 {
    border: none;
    margin: 10px 0px 0px 4px;
    padding: 0px;
    border: none;
    width: 489px;
    overflow: hidden;
  }

  #page_1 #id1_2 #id1_2_1 {
    float: left;
    border: none;
    margin: 0px 0px 0px 0px;
    padding: 0px;
    border: none;
    width: 402px;
    overflow: hidden;
  }

  #page_1 #id1_2 #id1_2_2 {
    float: left;
    border: none;
    margin: 0px 0px 0px 0px;
    padding: 0px;
    border: none;
    width: 87px;
    overflow: hidden;
  }

  #page_1 #id1_3 {
    border: none;
    margin: 12px 0px 0px 4px;
    padding: 0px;
    border: none;
    width: 715px;
    overflow: hidden;
  }

  #page_1 #id1_4 {
    border: none;
    margin: 9px 0px 0px 4px;
    padding: 0px;
    border: none;
    width: 100%;
    overflow: hidden;
  }

  #page_1 #id1_4 #id1_4_1 {
    float: left;
    border: none;
    margin: 1px 0px 0px 0px;
    padding: 0px;
    border: none;
    width: 50%;
    overflow: hidden;
  }

  #page_1 #id1_4 #id1_4_2 {
    float: left;
    border: none;
    margin: 0px 0px 0px 0px;
    padding: 0px;
    width: 49%;
    overflow: hidden;
  }

  #page_1 #id1_5 {
    border: none;
    margin: 1px 0px 0px 4px;
    padding: 0px;
    border: none;
    width: 715px;
    overflow: hidden;
  }

  #page_1 #id1_6 {
    border: none;
    margin: 10px 0px 0px 4px;
    padding: 0px;
    border: none;
    width: 489px;
    overflow: hidden;
  }

  #page_1 #id1_6 #id1_6_1 {
    float: left;
    border: none;
    margin: 0px 0px 0px 0px;
    padding: 0px;
    border: none;
    width: 402px;
    overflow: hidden;
  }

  #page_1 #id1_6 #id1_6_2 {
    float: left;
    border: none;
    margin: 0px 0px 0px 0px;
    padding: 0px;
    border: none;
    width: 87px;
    overflow: hidden;
  }

  #page_1 #id1_7 {
    border: none;
    margin: 12px 0px 0px 4px;
    padding: 0px;
    border: none;
    width: 715px;
    overflow: hidden;
  }

  #page_1 #id1_8 {
    border: none;
    margin: 10px 0px 0px 4px;
    padding: 0px;
    border: none;
    width: 475px;
    overflow: hidden;
  }

  #page_1 #id1_8 #id1_8_1 {
    float: left;
    border: none;
    margin: 0px 0px 0px 0px;
    padding: 0px;
    border: none;
    width: 402px;
    overflow: hidden;
  }

  #page_1 #id1_8 #id1_8_2 {
    float: left;
    border: none;
    margin: 0px 0px 0px 0px;
    padding: 0px;
    border: none;
    width: 73px;
    overflow: hidden;
  }

  #page_1 #id1_9 {
    border: none;
    margin: 1px 0px 0px 52px;
    padding: 0px;
    border: none;
    width: 100%;
    overflow: hidden;
  }

  #page_1 #id1_10 {
    border: none;
    margin: 1px 0px 0px 52px;
    padding: 0px;
    border: none;
    width: 667px;
    overflow: hidden;
  }

  #page_1 #p1dimg1 {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    width: 645px;
    height: 864px;
  }

  #page_1 #p1dimg1 #p1img1 {
    width: 645px;
    height: 864px;
  }

  .dclr {
    clear: both;
    float: none;
    height: 1px;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
  }

  .ft0 {
    font: 26px 'Arial';
    color: #6d64e8;
    line-height: 31px;
  }

  .ft1 {
    font: 13px 'Arial';
    color: #666666;
    line-height: 16px;
  }

  .ft2 {
    font: 13px 'Arial';
    line-height: 1px;
  }

  .ft3 {
    font: bold 43px 'Arial';
    color: #283592;
    line-height: 46px;
  }

  .ft4 {
    font: bold 16px 'Arial';
    color: #e01b84;
    line-height: 19px;
  }

  .ft5 {
    font: bold 16px 'Arial';
    color: #434343;
    line-height: 19px;
  }

  .ft6 {
    font: bold 18px 'Arial';
    color: #666666;
    line-height: 21px;
  }

  .ft7 {
    font: 1px 'Arial';
    line-height: 2px;
  }

  .ft8 {
    font: bold 16px 'Arial';
    color: #2a3990;
    line-height: 19px;
  }

  .ft9 {
    font: bold 13px 'Arial';
    color: #2a3990;
    line-height: 16px;
  }

  .ft10 {
    font: bold 14px 'Arial';
    color: #2a3990;
    line-height: 16px;
  }

  .ft11 {
    font: 13px 'Arial';
    line-height: 16px;
  }

  .ft12 {
    font: bold 18px 'Arial';
    color: #2a3990;
    line-height: 21px;
  }

  .ft13 {
    font: bold 13px 'Arial';
    line-height: 16px;
  }

  .ft14 {
    font: 13px 'Arial';
    line-height: 24px;
  }

  .ft15 {
    font: 13px 'Arial';
    color: #666666;
    line-height: 24px;
  }

  .ft16 {
    font: bold 17px 'Arial';
    color: #666666;
    line-height: 19px;
  }

  .p0 {
    text-align: left;
    padding-left: 4px;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .p1 {
    text-align: left;
    padding-left: 4px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }

  .p2 {
    text-align: left;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }

  .p3 {
    text-align: right;
    padding-right: 2px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }

  .p4 {
    text-align: right;
    padding-right: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }

  .p5 {
    text-align: left;
    padding-left: 2px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }

  .p6 {
    text-align: left;
    padding-left: 9px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }

  .p7 {
    text-align: right;
    padding-right: 46px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }

  .p8 {
    text-align: right;
    padding-right: 5px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }

  .p9 {
    text-align: right;
    padding-right: 37px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }

  .p10 {
    text-align: left;
    padding-left: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }

  .p11 {
    text-align: right;
    padding-right: 3px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;
  }

  .p12 {
    text-align: left;
    padding-left: 4px;
    margin-top: 28px;
    margin-bottom: 0px;
  }

  .p13 {
    text-align: left;
    padding-left: 4px;
    margin-top: 8px;
    margin-bottom: 0px;
  }

  .p14 {
    text-align: left;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .p15 {
    text-align: left;
    margin-top: 8px;
    margin-bottom: 0px;
  }

  .td0 {
    padding: 0px;
    margin: 0px;
    width: 217px;
    vertical-align: bottom;
  }

  .td1 {
    padding: 0px;
    margin: 0px;
    width: 120px;
    vertical-align: bottom;
  }

  .td2 {
    padding: 0px;
    margin: 0px;
    width: 229px;
    vertical-align: bottom;
  }

  .td3 {
    padding: 0px;
    margin: 0px;
    width: 79px;
    vertical-align: bottom;
  }

  .td4 {
    padding: 0px;
    margin: 0px;
    width: 67px;
    vertical-align: bottom;
  }

  .td5 {
    padding: 0px;
    margin: 0px;
    width: 162px;
    vertical-align: bottom;
  }

  .td6 {
    padding: 0px;
    margin: 0px;
    width: 52px;
    vertical-align: bottom;
  }

  .td7 {
    padding: 0px;
    margin: 0px;
    width: 165px;
    vertical-align: bottom;
  }

  .td8 {
    border-bottom: #b7b7b7 1px solid;
    padding: 0px;
    margin: 0px;
    width: 52px;
    vertical-align: bottom;
  }

  .td9 {
    border-bottom: #b7b7b7 1px solid;
    padding: 0px;
    margin: 0px;
    width: 165px;
    vertical-align: bottom;
  }

  .td10 {
    border-bottom: #b7b7b7 1px solid;
    padding: 0px;
    margin: 0px;
    width: 120px;
    vertical-align: bottom;
  }

  .td11 {
    border-bottom: #b7b7b7 1px solid;
    padding: 0px;
    margin: 0px;
    width: 67px;
    vertical-align: bottom;
  }

  .td12 {
    border-bottom: #b7b7b7 1px solid;
    padding: 0px;
    margin: 0px;
    width: 162px;
    vertical-align: bottom;
  }

  .td13 {
    border-bottom: #b7b7b7 1px solid;
    padding: 0px;
    margin: 0px;
    width: 79px;
    vertical-align: bottom;
  }

  .td14 {
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 52px;
    vertical-align: bottom;
  }

  .td15 {
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 165px;
    vertical-align: bottom;
  }

  .td16 {
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 120px;
    vertical-align: bottom;
  }

  .td17 {
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 67px;
    vertical-align: bottom;
  }

  .td18 {
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 162px;
    vertical-align: bottom;
  }

  .td19 {
    border-bottom: #000000 1px solid;
    padding: 0px;
    margin: 0px;
    width: 79px;
    vertical-align: bottom;
  }

  .td20 {
    padding: 0px;
    margin: 0px;
    width: 213px;
    vertical-align: bottom;
  }

  .td21 {
    padding: 0px;
    margin: 0px;
    width: 133px;
    vertical-align: bottom;
  }

  .td22 {
    padding: 0px;
    margin: 0px;
    width: 218px;
    vertical-align: bottom;
  }

  .tr0 {
    height: 26px;
  }

  .tr1 {
    height: 46px;
  }

  .tr2 {
    height: 20px;
  }

  .tr3 {
    height: 22px;
  }

  .tr4 {
    height: 45px;
  }

  .tr5 {
    height: 28px;
  }

  .tr6 {
    height: 2px;
  }

  .tr7 {
    height: 29px;
  }

  .tr8 {
    height: 34px;
  }

  .tr9 {
    height: 24px;
  }

  .tr10 {
    height: 25px;
  }

  .tr11 {
    height: 30px;
  }

  .t0 {
    width: 100%;
    font: 13px 'Arial';
    color: #666666;
  }

  .t1 {
    width: 346px;
    margin-top: 7px;
    font: 13px 'Arial';
  }

  .t2 {
    width: 100%;
    margin-top: 6px;
    font: 13px 'Arial';
    padding: 5px;
  }

  .t3 {
    width: 100%;
    font: bold 18px 'Arial';
    color: #666666;
  }
  /* /////////////////// */
  .d-flex {
    display: flex;
  }
  .flex-1 {
    flex-grow: 1;
  }
  .flex-50 {
    flex: 50%;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .align-self-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }
  span {
    color: rgb(101, 103, 107);
    font-weight: normal;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  .no-border-table,
  .no-border-table td,
  .no-border-table th {
    border: none;
    border-collapse: unset;
  }

  tr {
    page-break-inside: avoid;
    /* page-break-after: always; */
    /* break-inside: avoid-page;
    break-inside: avoid-page; */
  }
  .align-bottom {
    vertical-align: bottom;
  }
  .font-weight-100 {
    font-weight: 100;
  }
  .margin-0 {
    margin: 0;
  }

  table,tr, td { page-break-inside: avoid; } 
</style>

<table>
  <tr>
    <td>Forename</td>
    <td>John</td>
  </tr>
</table>
<table>
  <tr>
    <td>Surname</td>
    <td>Piper</td>
  </tr>
</table>
<table>
  <tr>
    <td>Website</td>
    <td>desiringgod.org</td>
  </tr>
</table>
<table>
  <tr>
    <td>Forename</td>
    <td>John</td>
  </tr>
</table>
<table>
  <tr>
    <td>Surname</td>
    <td>Piper</td>
  </tr>
</table>
<table>
  <tr>
    <td>Website</td>
    <td>desiringgod.org</td>
  </tr>
</table>
<table>
  <tr>
    <td>Forename</td>
    <td>John</td>
  </tr>
</table>
<table>
  <tr>
    <td>Surname</td>
    <td>Piper</td>
  </tr>
</table>
<table>
  <tr>
    <td>Website</td>
    <td>desiringgod.org</td>
  </tr>
</table>
<table>
  <tr>
    <td>Forename</td>
    <td>John</td>
  </tr>
</table>
<table>
  <tr>
    <td>Surname</td>
    <td>Piper</td>
  </tr>
</table>
<table>
  <tr>
    <td>Website</td>
    <td>desiringgod.org</td>
  </tr>
</table>
<table>
  <tr>
    <td>Forename</td>
    <td>John</td>
  </tr>
</table>
<table>
  <tr>
    <td>Surname</td>
    <td>Piper</td>
  </tr>
</table>
<table>
  <tr>
    <td>Website</td>
    <td>desiringgod.org</td>
  </tr>
</table>
<table>
  <tr>
    <td>Forename</td>
    <td>John</td>
  </tr>
</table>
<table>
  <tr>
    <td>Surname</td>
    <td>Piper</td>
  </tr>
</table>
<table>
  <tr>
    <td>Website</td>
    <td>desiringgod.org</td>
  </tr>
</table>
<table>
  <tr>
    <td>Forename</td>
    <td>John</td>
  </tr>
</table>
<table>
  <tr>
    <td>Surname</td>
    <td>Piper</td>
  </tr>
</table>
<table>
  <tr>
    <td>Website</td>
    <td>desiringgod.org</td>
  </tr>
</table>
<table>
  <tr>
    <td>Forename</td>
    <td>John</td>
  </tr>
</table>
<table>
  <tr>
    <td>Surname</td>
    <td>Piper</td>
  </tr>
</table>
<table>
  <tr>
    <td>Website</td>
    <td>desiringgod.org</td>
  </tr>
</table>
<table>
  <tr>
    <td>Forename</td>
    <td>John</td>
  </tr>
</table>
<table>
  <tr>
    <td>Surname</td>
    <td>Piper</td>
  </tr>
</table>
<table>
  <tr>
    <td>Website</td>
    <td>desiringgod.org</td>
  </tr>
</table>
<table>
  <tr>
    <td>Forename</td>
    <td>John</td>
  </tr>
</table>
<table>
  <tr>
    <td>Surname</td>
    <td>Piper</td>
  </tr>
</table>
<table>
  <tr>
    <td>Website</td>
    <td>desiringgod.org</td>
  </tr>
</table>
<table>
  <tr>
    <td>Forename</td>
    <td>John</td>
  </tr>
</table>
<table>
  <tr>
    <td>Surname</td>
    <td>Piper</td>
  </tr>
</table>
<table>
  <tr>
    <td>Website</td>
    <td>desiringgod.org</td>
  </tr>
</table>
<table>
  <tr>
    <td>Forename</td>
    <td>John</td>
  </tr>
</table>
<table>
  <tr>
    <td>Surname</td>
    <td>Piper</td>
  </tr>
</table>
<table>
  <tr>
    <td>Website</td>
    <td>desiringgod.org</td>
  </tr>
</table>
<table>
  <tr>
    <td>Forename</td>
    <td>John</td>
  </tr>
</table>
<table>
  <tr>
    <td>Surname</td>
    <td>Piper</td>
  </tr>
</table>
<table>
  <tr>
    <td>Website</td>
    <td>desiringgod.org</td>
  </tr>
</table>
`;
const pdf = require('pdf-creator-node');
const fs = require('fs');

var document = {
  html: content,
  data: {},
  //   path: __dirname + '/html2pdf/output' + uuid + '.pdf',
  path: __dirname + '/template/output/' + Math.random() + '.pdf',
  type: '',
};
pdf
  .create(document, {
    format: 'A3',
    orientation: 'portrait',
    childProcessOptions: {
      env: {
        OPENSSL_CONF: '/dev/null',
      },
    },
    border: {
      top: '2cm', // default is 0, units: mm, cm, in, px
      bottom: '2cm',
    },
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });