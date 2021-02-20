import newPage from "../myNewPage";

export default (doc, text, startY, fontSizes, params) => {

    let startX = params.startX;
    doc.setFontSize(fontSizes.h6);

    startY += params.lineSpacing * 1.5;

    doc.setFontType('normal');

    let splitText = doc.splitTextToSize(
        text,
        params.endX - params.startX  //doc.internal.pageSize.width - (startX * 2)
    );

    //const pageHeight = doc.internal.pageSize.height;
    //const endY = pageHeight - 50; // minus footerHeight
    const neededSpacing = params.lineSpacing * 4;
    let neededHeight = splitText.length * doc.internal.getLineHeight();
    let spaceForLines = Math.floor((params.pageEndY - startY) / doc.internal.getLineHeight());

    // check if new page is needed right at beginning
    startY = newPage(doc, startY, neededSpacing, params);

    let textStart;

    while (params.pageEndY - startY - neededHeight < 0 && splitText.length > spaceForLines) {
        spaceForLines = Math.floor((params.pageEndY - startY) / doc.internal.getLineHeight());
        neededHeight = splitText.length * doc.internal.getLineHeight();

        textStart = splitText.slice(0,spaceForLines);
        doc.setFont('WorkSans'); // set font here again, else weirdo things are printed out
        console.log(startY);
        doc.text(textStart, startX, startY);
        console.log(startY);
        splitText = splitText.slice(spaceForLines);

        startY = newPage(doc, startY, neededHeight, params);
    }

    // set font here again, else weirdo things are printed out
    doc.setFont('WorkSans');
    doc.text(splitText, startX, startY);
    neededHeight = splitText.length * doc.internal.getLineHeight();
    startY += neededHeight + params.lineSpacing;

    return startY;
}
