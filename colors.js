var body = {
  setColor: function (color) {
    //document.querySelector("body").style.color = color;
    $("body").css("color", color);
  },
  setBackgroundColor: function (color) {
    //document.querySelector("body").style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  },
};

var links = {
  setColor: function (color) {
    // var a_list = document.querySelectorAll("a");
    // var i = 0;
    // while (i < a_list.length) {
    //   a_list[i].style.color = color;
    //   i += 1;
    // }
    $("a").css("color", color);
  },
};

function nightDayHandler(self) {
  if (self.value === "night") {
    body.setBackgroundColor("hsl(255, 5%, 15%)");
    body.setColor("white");
    self.value = "day";

    links.setColor("powderblue");
  } else {
    body.setBackgroundColor("white");
    body.setColor("black");
    self.value = "night";

    links.setColor("blue");
  }
}
