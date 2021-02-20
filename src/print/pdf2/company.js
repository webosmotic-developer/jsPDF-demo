export default (doc, printData, startY, fontSizes, params) => {
    let xPointer = params.pageCenterX;
    let yPointer = startY;
    let align = 'left'
    doc.setFontType('bold');
    doc.setFontSize(fontSizes.h3);
    doc.text('Brodrene Skog As', xPointer, yPointer, align);
    yPointer += doc.internal.getLineHeight();
    let fontSize =fontSizes.h5
    doc.setFontSize(fontSize);
    yPointer = printRow(doc, xPointer, yPointer, 'Address', 'Noraway', fontSize, align);
    yPointer = printRow(doc, xPointer, yPointer, 'Tel', '123456', fontSize, align);
    yPointer = printRow(doc, xPointer, yPointer, 'E-post', 'Mochine@gmail.com', fontSize, align);

    let imgHeight = (yPointer - startY);
    let imgWidth = params.pageCenterX - params.startX;

    doc.addImage('img/logo1.png', 'png', 0 , 0 , imgWidth, imgHeight);
    yPointer += params.lineSpacing*1.5;

    /*======================================Second Company======================================================*/
    const heading2start = yPointer;
    xPointer = params.startX;
    doc.setFontType('bold');
    doc.setFontSize(fontSizes.h3);
    doc.text('Tillbud', xPointer, yPointer, align);
    yPointer += doc.internal.getLineHeight();
    doc.setFontSize(fontSize);
    yPointer = printRow(doc, xPointer, yPointer, 'Customer Name', 'Nirmal Solanki', fontSize, align);
    yPointer = printRow(doc, xPointer, yPointer, 'Address', 'Surat', fontSize, align);
    yPointer = printRow(doc, xPointer, yPointer, 'Tel', '32323544353', fontSize, align);
    yPointer = printRow(doc, xPointer, yPointer, 'E-post', 'nirmal.webosmotic@gmail.com', fontSize, align);

    imgHeight = (yPointer - heading2start);
    imgWidth = params.pageCenterX - params.startX - 50;

    doc.addImage('img/logos.png', 'png', params.pageCenterX, heading2start , imgWidth, imgHeight);
    return yPointer;
}

function printRow(doc, xPointer, yPointer, text1, text2 , fontSize, align) {
    doc.setFontSize(fontSize);
    doc.setFontType('bold');
    text1 += ":  ";
    doc.text(text1, xPointer , yPointer, align);
    doc.setFontType('normal');
    const textSize = doc.getStringUnitWidth(text1) * fontSize;
    doc.text(text2, xPointer + textSize, yPointer, align);
    yPointer += doc.internal.getLineHeight();
    return yPointer;
}

