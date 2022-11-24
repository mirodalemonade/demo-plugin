function runPlugin(){
    //Get # of selected elements
    let selectedElements = figma.currentPage.selection.length

    // console.log(selectedElements)
    if (selectedElements === 0){
        figma.closePlugin('No element selected')
        return
    }

    if (selectedElements > 1){
    figma.closePlugin('Please select a single element')
    return
    }

    // find the name of the selected element
    let selectedName = figma.currentPage.selection[0].name

    // Callback function for findAll()
    function hasSameName(Node){
        return Node.name === selectedName
    }

    // Get all elements with the same name as the selected one
    let withsameName = figma.currentPage.findAll(hasSameName)

    // Select all elements with the same name as the sselected one
    figma.currentPage.selection = withsameName

    figma.closePlugin(withsameName.length + ' Elements selected');
}

runPlugin()
