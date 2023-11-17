const fs = require('fs');
generateContentTable = (data, itemKeys, calulateSummary) => {
  let contentHTLM = data.reduce((html, item, index) => {
    html += `<table style="margin-top:-1px"><tr><td style="width:38px" class="text-center">
    ${index + 1}
    </td>`;
    for (let i = 0; i < itemKeys.length; i++) {
      html += `<td style="width:${itemKeys[i].width}px">
      ${item[itemKeys[i].key]}
      </td>`;
    }
    html += `</tr></table>`;

    return html;
  }, '');
  if (calulateSummary) {
    const total = data.reduce(
      (total, item, index) => {
        total.value += item[calulateSummary.key];
        return total;
      },
      { totalColWidth: 0, valueColWidth: 0, value: 0 }
    );
    for (let i = 0; i < itemKeys.length; i++) {
      if (i <= itemKeys.length - 3) {
        total.totalColWidth += itemKeys[i].width;
      } else {
        total.valueColWidth += itemKeys[i].width;
      }
    }
    contentHTLM += `<table style="margin-top:-1px">
    <tr>
    <td class="text-center" style="width:${total.totalColWidth + 38}px">Tổng
    </td>
       <td class="text-center" style="width:${total.valueColWidth}px">
       ${total.value}
    </td>
    </tr>
    </table>
    `;
  }
  return contentHTLM;
};

generateContentTableForm4 = (data, itemKeys) => {
  console.log(Object.keys(data));
  const contentHTML = Object.keys(data).reduce((html, key, index) => {
    html += `<table style="margin-top:-1px">
      <tr>
      <th>${data[key].title}</th>
      </tr>
      </table>
      `;
    html += data[key].content.reduce((row, item, index) => {
      row += `<table style="margin-top:-1px">
      <tr>
      <td style="width:38px">${index + 1}</td>
      <td style="width:${itemKeys[0].width}px">${item}</td>
      <td style="width:${itemKeys[1].width}px">&nbsp;</td>
      <td style="width:${itemKeys[2].width}px">&nbsp;</td>
      <td style="width:${itemKeys[3].width}px">&nbsp;</td>
      </tr>
      </table>
      `;
      return row;
    }, '');
    return html;
  }, '');
  console.log(contentHTML);
  return contentHTML;
};
module.exports = { generateContentTable, generateContentTableForm4 };
