function() {
  for (var x = 0; x < 256; x++) {
    var uiByClass = document.getElementsByClassName(".ui-state-default");
    var uiLen = uiByClass.length;

    for (var y = 0; y < uiLen; y++) {
      uiByClass[y].style.color = "rgb(1,1,1)"
    }
  }
};
