export default (doc, printData, startY, fontSizes, params) => {

    const imgHeight = 49;
    const imgWidth = 125;

    doc.addImage('img/logo1.png', 'png', params.pageWidth - imgWidth - params.startX, startY, imgWidth, imgHeight);

    // -------Customer Info Address---------------------
    doc.setFontType('bold');
    doc.setFontSize(fontSizes.h6);

    printData.receiveCompany = Object.values(printData.receiveCompany);

    printData.receiveCompany.map(text => {
        if (text) {
            doc.text(text, params.startX, startY += params.lineSpacing);
        }
    });

    return startY;
}
