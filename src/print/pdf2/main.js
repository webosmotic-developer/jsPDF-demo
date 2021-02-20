import subSection from "./subSection";
import newPage from "../myNewPage";
import company from "./company";
import company1 from "./company1";

export default (doc, printData, startY, fontSizes, params) => {

    startY = company(doc, printData, startY, fontSizes, params);
    //startY = company1(doc, printData, startY, fontSizes, params);
    doc.setTextColor(51, 51, 51);
    var align = 'center';

    let group = JSON.parse(JSON.stringify(printData.data)).reduce(
        (r, a) => {
            r[a.type] = [...(r[a.type] || []), a];
            return r;
        },
        {}
    );

    var keysArr = Object.keys(group);

    startY += params.lineSpacing * 2;
    console.log(params)

    keysArr.forEach(d => {
        startY = newPage(doc, startY, params.pageHeight / 6, params)
        doc.setFontSize(fontSizes.h2);
        doc.setFontType('bold');
        doc.setFillColor(20, 25, 33); // need to make color configurable
        doc.rect(params.startX, startY, params.endX - params.startX, doc.internal.getLineHeight() + params.lineSpacing*0.5, 'FD'); // need to make logic for line spacing
        doc.setTextColor(255, 255, 255); // need to make color configurable
        startY += params.lineSpacing * 2;
        doc.text(d, params.pageCenterX, startY, align);
        startY += params.lineSpacing;
        doc.setTextColor(51, 51, 51);
        let totalSum = 0
        group[d].forEach(d => {
            startY = subSection(doc, d, startY, fontSizes, params);
            totalSum += d.totalPrice;
        });
        startY += params.lineSpacing;
        doc.setFontType('bold');
        doc.setFontSize(fontSizes.h3);
        var t = `${d} Total: ${totalSum.toFixed(2)}`
        doc.text(t, params.endX, startY, 'right');
        startY += params.lineSpacing * 2;
    });

    let midPointX = params.pageCenterX - 100 //startX + 150;
    let amountX = params.endX - 100;
    doc.setFontType('normal');
    doc.setFontSize(fontSizes.h4);

    let align2 = 'left';
    doc.text('Delsum', midPointX, startY, align2);
    doc.text(printData.subtotal.toString(), amountX, startY, align2);
    startY += params.lineSpacing * 1.5;
    doc.text(`Tilleggsmateriale (rigg od drift) ${printData.surchargeMaterial.toString()} %`, midPointX, startY, align2);
    doc.text(printData.surchargeMaterialValue, amountX, startY, align2);
    startY += params.lineSpacing * 1.5;
    doc.text(`Tilleggsarbeid (rigg od drift) ${printData.surchargeWork.toString()} %`, midPointX, startY, align2);
    doc.text(printData.surchargeWorkValue, amountX, startY, align2);
    startY += params.lineSpacing;
    doc.setFontType('bold');
    doc.setLineWidth(2.0);
    doc.line(params.startX, startY, params.endX, startY);
    startY += params.lineSpacing * 1.5;
    doc.text('Gesamtsumme', midPointX, startY, align2);
    doc.text(printData.total.toString(), amountX, startY, align2);
    return startY;
}
