//import jsPDF from '../../node_modules/jspdf-yworks/dist/jspdf.debug';
import jsPDF from 'jspdf-yworks';
import addFontNormal from '../fonts/WorkSans-normal';
import addFontBold from '../fonts/WorkSans-bold';
import main from "./pdf2/main";

export default(printData) => {
    addFontNormal();
    addFontBold();

    const doc = new jsPDF('p', 'pt');

    doc.setFont('WorkSans');

    // <><>><><>><>><><><><><>>><><<><><><><>
    // SETTINGS
    // <><>><><>><>><><><><><>>><><<><><><><>

    const fontSizes = {
        h1:32,
        h2:24,
        h3:18.72,
        h4:16,
        h5:13.28,
        h6:12
    };

    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;
    const pageCenterX = pageWidth / 2;
    const startX = 25
    const footerHeight = 50

    const params = {
        startX: startX,
        endX: pageWidth - startX,
        pageStartY : 25,
        footerHeight: footerHeight,
        pageEndY: pageHeight - footerHeight,
        lineSpacing: 12,
        pageHeight: pageHeight,
        pageWidth: pageWidth,
        pageCenterX: pageCenterX,
    }

    let startY = params.pageStartY;

    startY = main(doc, printData, startY, fontSizes, params);

    doc.save("my_invoice.pdf");
}
