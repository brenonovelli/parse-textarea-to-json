(function ($) {
  "use strict";
  $(document).ready(function () {
    const textarea = document.getElementById("txt");

    // tabOverride => tabOverride.js
    tabOverride.set(textarea);

    const tabSize = tabOverride.tabSize();

    tabOverride.tabSize(0);

    $(".op-js-process-textarea").on("click", function (e) {
      e.preventDefault();

      const arrayOfLines = $("#txt").val();

      var lines = arrayOfLines.toString().split("\n");

      // parse() => parse.js
      const treeNode = parse(lines);

      console.log(treeNode["children"]);
    });
  });
})(jQuery);
