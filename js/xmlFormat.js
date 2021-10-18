jQuery.fn.highlight = function (str, className) {
  var regex = new RegExp(str, "gi");
  console.log("BIN DRINNEN");

  return this.each(function () {
    this.innerHTML = this.innerHTML.replace(regex, function(matched) {return "<span class=\"" + className + "\">" + matched + "</span>";});
  });
};

$("pre").highlight("<","special");
