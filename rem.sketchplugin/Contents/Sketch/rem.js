
var sketch = require('sketch')

var document = sketch.getSelectedDocument()
const ROOT = 16;

var selections = document.selectedLayers;
selections.forEach(layer =>
  show(layer)
);

function show(layer){
  var str = 'rem - width:' + layer.frame.width / ROOT + ' height:' + layer.frame.height / ROOT;
  sketch.UI.message(str);

  let pasteboard = NSPasteboard.generalPasteboard()
  pasteboard.stringForType( NSPasteboardTypeString )


  pasteboard.declareTypes_owner( [NSPasteboardTypeString], null )
  pasteboard.setString_forType( str, NSPasteboardTypeString )
}
