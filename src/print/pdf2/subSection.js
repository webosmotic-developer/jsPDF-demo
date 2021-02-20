import newPage from "../myNewPage";
import text from "../pdf2/text";

export default (doc, printData, startY, fontSizes, params) => {
    var align = 'center';
    doc.setFontSize(fontSizes.h3);
    doc.setFontType('bold');
    startY += params.lineSpacing * 1.5;
    const neededHeight = (params.lineSpacing + doc.internal.getLineHeight())*2;
    startY = newPage(doc, startY, neededHeight, params);
    doc.text(printData.buildingComponents ? printData.buildingComponents : '', params.startX, startY, 'left');

    startY = text(doc, printData.description ?printData.description : '' , startY, fontSizes, params);

    const columnSize =   (params.endX - params.startX) / 8;
    doc.setFontSize(fontSizes.h6);
    doc.setFontType('bold');

    //-------Table Header---------------------
    startY = newPage(doc, startY, neededHeight, params);

    doc.setFillColor(241, 241, 241); // to be configure
    doc.rect(params.startX, startY - params.lineSpacing, params.endX - params.startX, params.lineSpacing*1.5 , 'F');

    let xPointer = params.startX + columnSize;
    doc.text('Post', xPointer, startY, align);
    xPointer+= columnSize*2
    doc.text('Quantity', xPointer, startY, align);
    xPointer+= columnSize
    doc.text('Enh./stk', xPointer, startY, align);
    xPointer+= columnSize
    doc.text('Enh. Pris', xPointer, startY, align);
    xPointer+= columnSize
    doc.text('Tid', xPointer, startY, align);
    xPointer+= columnSize
    doc.text('Price', xPointer, startY, align);

    startY += params.lineSpacing * 2;

    //-------Table Body---------------------
    const items = printData.subMaterials? printData.subMaterials : [] ;
    doc.setFontType('normal');


    items.forEach((item, index) => {
        doc.setFontType('normal');

        const splitPost = doc.splitTextToSize(
            item.application ? item.application: '',
            columnSize*2
        );

        //startX += doc.getStringUnitWidth(invoiceNrTxt) * fontSizes.SubTitleFontSize;
        const heightTitle = splitPost.length * doc.internal.getLineHeight();

        startY = newPage(doc, startY, heightTitle, params);

        if(index) {
            doc.setDrawColor(241, 241, 241);
            doc.line(params.startX, startY, params.endX, startY);
            startY += params.lineSpacing*1.5;
        }

        xPointer = params.startX + columnSize;
        doc.text(splitPost , xPointer, startY, align);
        xPointer+= columnSize*2
        doc.text((printData.quantity) ?printData.quantity.toString() : '', xPointer, startY, align);
        xPointer+= columnSize
        doc.text(item.unit? item.unit : '', xPointer, startY, align);
        xPointer+= columnSize
        doc.text((item.itemPrice) ? item.itemPrice.toString() : '', xPointer, startY, align);
        xPointer+= columnSize
        doc.text((item.time.minPerComponent) ? item.time.minPerComponent.toString() : '', xPointer, startY, align);
        xPointer+= columnSize
        doc.text((item.totalPrice) ? (item.totalPrice.toFixed(2)).toString(): '', xPointer, startY, align);

        startY += heightTitle - params.lineSpacing*0.5;
    });

    doc.setDrawColor(0, 0, 0);
    doc.line(params.startX, startY, params.endX, startY);
    startY += params.lineSpacing;
    doc.setFontType('bold');
    doc.setFontSize(fontSizes.h4);
    startY += 3;
    xPointer = params.startX + columnSize*6
    doc.text('Total', xPointer, startY, align);
    xPointer += columnSize
    doc.text((printData.totalPrice) ? (printData.totalPrice.toFixed(2)).toString(): '', xPointer, startY, align);

    startY += params.lineSpacing*1.5;

    return startY;
}
