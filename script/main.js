window.onload = function() {
  setParagraphLines();

  windowSize();

  $("#viewChooser").click(function() {
    chooseViewOfArticles();
  });

  $("#menu").click(function() {
    $(".nav").slideToggle(150);

    if (this.innerHTML == "arrow_back") {
      this.innerHTML = "menu";
    } else {
      this.innerHTML = "arrow_back";
    }
  });

  $(".header-logo").click(function() {
    $(".hot-news").slideToggle(150);
  });
};

window.onresize = function() {
  windowSize();
};

function windowSize() {
  var articleButtonNames = document.getElementsByClassName("article__btn-text");

  if ($(window).width() <= "800") {
    $(".nav").hide(10);
    $(".hot-news").hide(10);
  } else {
    $(".nav").show(10);
    $(".hot-news").show(10);
  }

  if ($(".article").width() >= "400") {
    Array.prototype.forEach.call(articleButtonNames, function(el) {
      el.style.setProperty("display", "block");
    });
  } else {
    Array.prototype.forEach.call(articleButtonNames, function(el) {
      el.style.setProperty("display", "none");
    });
  }
}

function setParagraphLines() {
  var rnd;
  var elem;
  var articles = document.getElementsByClassName("article");

  for (item = 0; item < articles.length; item++) {
    rnd = Math.floor(Math.random() * 5 + 3);

    elem = document.getElementsByClassName("article-paragraph")[item];
    elem.style.setProperty("-webkit-line-clamp", rnd);
  }
} //регулирует кол-во строчек в посиах

function chooseViewOfArticles() {
  $(".article-wrapper").toggleClass("article-wrapper-mini");
  $(".article-img").toggleClass("article-img-mini");
  $(".article-img-wrapper").toggleClass("article-img-wrapper-mini");
  $(".article").toggleClass("article-mini");

  var articleButtonNames = document.getElementsByClassName("article__btn-text");

  if ($(window).width() >= "600" && $(".article").width() <= "400") {
    Array.prototype.forEach.call(articleButtonNames, function(el) {
      el.style.setProperty("display", "block");
    });
  } else {
    Array.prototype.forEach.call(articleButtonNames, function(el) {
      el.style.setProperty("display", "none");
    });
  }

  chooseIcon();
}

function chooseIcon() {
  var chooser = document.getElementById("viewChooser");

  if (chooser.innerHTML == "view_module") {
    chooser.innerHTML = "view_list";
  } else {
    chooser.innerHTML = "view_module";
  }
}
