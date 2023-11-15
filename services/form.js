const emptyLine = `<tr>
        <td colspan="11" style="border: none">&nbsp;</td>
      </tr>`;
generateContentForm1 = (data, itemKeys, calulateSummary) => {
  let numberOfLineOnPage = 22;
  /* everypage contains 24 lines
  first page includes : header : 6 lines, 1 empty lines
  table: 1 line for thead, every record is 1 line
  1 line for summary ( total : .....) 
  signature section : 9 lines
  */
  let currentLine = 7;

  let contentHTLM = data.reduce((html, item, index) => {
    currentLine++;
    if (currentLine > numberOfLineOnPage) {
      html += ` </tr>
    <td colspan="11" style="border: none">&nbsp;</td>
    </tr> 
    `;
      currentLine = 1;
    }

    html += `<tr><td>${index + 1}</td>`;
    for (let key of itemKeys) {
      html += `<td>${item[key]}</td>`;
    }
    html += `</tr>`;

    return html;
  }, '');
  if (calulateSummary) {
    if (currentLine > numberOfLineOnPage) {
      contentHTLM += ` </tr>
    <td colspan="11" style="border: none">&nbsp;</td>
    </tr> 
    `;
      currentLine = 0;
    }
    currentLine++;
    contentHTLM += `<tr>
      <td colspan="9" class="text-right">Tổng tiền:</td>
      <td colspan="2" >1</td>
    </tr>`;
  }

  if (currentLine >= numberOfLineOnPage - 8) {
    contentHTLM += emptyLine.repeat(numberOfLineOnPage - currentLine + 1);
  }
  return contentHTLM;
};
module.exports = { generateContentForm1 };
