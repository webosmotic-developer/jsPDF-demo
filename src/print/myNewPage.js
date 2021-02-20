
export default (doc, startY, neededHeight, params) => {

    if (params.pageEndY - startY - neededHeight < 0) {
        doc.addPage();
        return params.pageStartY;
    }
    return startY;
};
