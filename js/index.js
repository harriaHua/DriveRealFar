/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-31 12:01:36
 * @LastEditors: Harria
 * @LastEditTime: 2022-01-11 22:55:35
 */
// import "https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js";

// console.log($("body"));
let directoryTop = "";
let musicState = 0;
// let lightState = 1;
let lightState = localStorage.getItem("lightState") == "true" ? true : false;
let mainColor16 = localStorage.getItem("mainColor16") ?? "#2175bc";
const DEVICE = navigator.userAgent.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i
)
  ? "phone"
  : "computer";

$("body").append(`   
<div id="load-container">
  <div id="loading">
    <div class="loading">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>
    <div id="content">Loading...</div>
  </div>
</div> 
`);
$("#footer").append(
  `
    <a href="https://github.com/harriaHua/cnblogs-theme-DriveRealFar">🎨 Theme DriveRealFar</a>
  `
);

//滚动滑轮触发  scrollProggressBar方法 //ie 谷歌
addMoveListen(scrollProggressBar);
addMoveListen(affix);
addMoveListen(dic_affix);

$(function () {
  setTimeout(() => {
    let theme = lightState ? "light" : "dark";
    setTheme(theme);
    setWater();
    setProgressBar();
    affix();
    if ($(".post")[0]) {
      directory();
      directoryTop = $("#my-directory").offset().top - 80;
    }
    dic_affix();
    setSideBar();
    setMusic();
    setColor();
    setLightSwitch();
    headerTyping();
    drawCity();
    $("#navigator").after(`        
    <div id="poetry">
    <p>莫听穿林打叶声，</p>
    <p>何妨吟啸且徐行。</p>
    <p>竹杖芒鞋轻胜马，谁怕？</p>
    <p>一蓑烟雨任平生。</p>
    <p>料峭春风吹酒醒，</p>
    <p>微冷，山头斜照却相迎。</p>
    <p>回首向来萧瑟处，</p>
    <p>归去，也无风雨也无晴</p>
  </div>`);
    // WIDTH = window.innerWidth;
    // HEIGHT = window.innerHeight;
    setLoading();
  }, 500);
  $("#blogLogo").attr(
    "src",
    "https://s3.bmp.ovh/imgs/2022/01/c5f97d8b0b788deb.png"
  );
});
function headerTyping() {
  $("#blogTitle>h1,#blogTitle>h2").wrapAll("<div id='typeHello'></div>");
  $("#typeHello").prepend("<span><  </span>");
  $("#typeHello").append("<span>  /></span>");
  let text = $("#typeHello>h2").text().split("");
  $("#typeHello>h2").text("");
  $("#typeHello>h2").append("<span class='cursor'></span>");
  text.forEach((char, index) => {
    setTimeout(() => {
      $("#typeHello>h2>.cursor").before(char);
    }, index * 300);
  });
  $("#navList").append(`
  <li onclick="window.location.href='https://www.cnblogs.com/harria/'">Harria</li>
  `);
  $("#header").append(`
  <canvas id="header-canvas"></canvas>
  <div id="drive-car">
      <svg t="1641874470670" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3598"><path d="M107.140741 632.414815c-3.792593-32.237037-8.533333-64.474074-12.325926-96.711111 6.637037-6.637037 13.274074-12.325926 19.911111-18.962963 17.066667-49.303704 42.666667-93.866667 75.851852-134.637037 113.777778-17.066667 230.4-15.17037 347.022222-7.585185 68.266667 24.651852 128.948148 56.888889 178.251852 100.503703 57.837037 16.118519 115.674074 31.288889 174.459259 47.407408 35.081481 42.666667 38.874074 91.97037 12.325926 140.325926l-60.681481 7.585185c2.844444-8.533333 4.740741-18.014815 4.74074-28.444445 0-25.6-10.42963-48.355556-27.496296-65.422222-17.066667-17.066667-39.822222-27.496296-65.422222-27.496296s-48.355556 10.42963-65.422222 27.496296c-17.066667 17.066667-27.496296 39.822222-27.496297 65.422222 0 14.222222 2.844444 27.496296 8.533334 38.874074H295.822222c5.688889-12.325926 8.533333-25.6 8.533334-38.874074 0-25.6-10.42963-48.355556-27.496297-65.422222-17.066667-17.066667-39.822222-27.496296-65.422222-27.496296s-48.355556 10.42963-65.422222 27.496296c-17.066667 17.066667-27.496296 39.822222-27.496296 65.422222v3.792593l-11.377778-13.274074z m105.244444-68.266667c-21.807407 0-41.718519 8.533333-55.940741 22.755556S132.740741 621.037037 132.740741 642.844444c0 21.807407 8.533333 41.718519 22.755555 55.940741s34.133333 22.755556 55.940741 22.755556c21.807407 0 41.718519-8.533333 55.940741-22.755556s22.755556-34.133333 22.755555-55.940741c0-21.807407-8.533333-41.718519-22.755555-55.94074-13.274074-14.222222-33.185185-22.755556-54.992593-22.755556z m541.392593 0c-21.807407 0-41.718519 8.533333-55.940741 22.755556s-22.755556 34.133333-22.755556 55.94074c0 21.807407 8.533333 41.718519 22.755556 55.940741s34.133333 22.755556 55.940741 22.755556c21.807407 0 41.718519-8.533333 55.940741-22.755556s22.755556-34.133333 22.755555-55.940741c0-21.807407-8.533333-41.718519-22.755555-55.94074s-34.133333-22.755556-55.940741-22.755556z m12.325926 69.214815c1.896296 1.896296 3.792593 4.740741 4.74074 8.533333 6.637037 0 16.118519-1.896296 18.962963-2.844444 4.740741-0.948148 9.481481-2.844444 14.222223-3.792593-1.896296-10.42963-6.637037-19.911111-14.222223-27.496296l-11.377777 11.377778c-2.844444 1.896296-9.481481 8.533333-12.325926 14.222222z m-7.585185 27.496296c-0.948148 0-2.844444 0.948148-3.792593 0.948148-1.896296 0-3.792593 0-5.688889-0.948148-3.792593 5.688889-6.637037 15.17037-6.637037 18.014815-0.948148 3.792593-1.896296 8.533333-2.844444 12.325926 4.740741 1.896296 10.42963 2.844444 16.118518 2.844444 4.740741 0 9.481481-0.948148 14.222222-1.896296-0.948148-4.740741-1.896296-8.533333-2.844444-13.274074-2.844444-3.792593-5.688889-12.325926-8.533333-18.014815z m-19.911112-20.859259c0.948148-2.844444 2.844444-5.688889 5.688889-7.585185-2.844444-5.688889-10.42963-13.274074-12.325926-15.170371-3.792593-3.792593-7.585185-7.585185-11.377777-10.429629 0 0-0.948148 0-1.896297 0.948148-6.637037 6.637037-11.377778 15.17037-13.274074 25.6 4.740741 1.896296 9.481481 2.844444 14.222222 3.792593 2.844444 0.948148 12.325926 2.844444 18.962963 2.844444z m17.066667-13.274074c4.740741-9.481481 14.222222-18.962963 22.755556-27.496296-7.585185-3.792593-15.17037-6.637037-23.703704-6.637037-7.585185 0-15.17037 1.896296-21.807407 4.74074 8.533333 9.481481 18.014815 19.911111 22.755555 29.392593z m47.407407 22.755555c-11.377778 2.844444-24.651852 5.688889-34.133333 4.740741 4.740741 8.533333 8.533333 19.911111 11.377778 30.340741 2.844444-1.896296 5.688889-4.740741 8.533333-6.637037 7.585185-7.585185 13.274074-17.066667 14.222222-28.444445z m-76.8 34.133334c2.844444-11.377778 7.585185-22.755556 12.325926-31.288889-10.42963 0-22.755556-2.844444-34.133333-5.688889 0.948148 12.325926 6.637037 22.755556 14.222222 31.288889 2.844444 1.896296 4.740741 3.792593 7.585185 5.688889z m-502.518518-50.251852c1.896296 1.896296 3.792593 4.740741 4.740741 8.533333 6.637037 0 16.118519-1.896296 18.962963-2.844444 4.740741-0.948148 9.481481-2.844444 14.222222-3.792593-1.896296-10.42963-6.637037-19.911111-14.222222-27.496296l-11.377778 11.377778c-2.844444 1.896296-9.481481 8.533333-12.325926 14.222222z m-7.585185 27.496296c-0.948148 0-2.844444 0.948148-3.792593 0.948148-1.896296 0-3.792593 0-5.688889-0.948148-3.792593 5.688889-6.637037 15.17037-6.637037 18.014815-0.948148 3.792593-1.896296 8.533333-2.844444 12.325926 4.740741 1.896296 10.42963 2.844444 16.118518 2.844444 4.740741 0 9.481481-0.948148 14.222223-1.896296-0.948148-4.740741-1.896296-8.533333-2.844445-13.274074-2.844444-3.792593-4.740741-12.325926-8.533333-18.014815z m-18.962963-20.859259c0.948148-2.844444 2.844444-5.688889 5.688889-7.585185-2.844444-5.688889-10.42963-13.274074-12.325926-15.170371-3.792593-3.792593-7.585185-7.585185-11.377778-10.429629l-1.896296 1.896296c-6.637037 6.637037-11.377778 15.17037-13.274074 25.6 4.740741 1.896296 9.481481 2.844444 14.222222 3.792593 2.844444 0 12.325926 1.896296 18.962963 1.896296z m16.118518-13.274074c4.740741-9.481481 14.222222-18.962963 22.755556-27.496296-7.585185-3.792593-15.17037-6.637037-23.703704-6.637037-7.585185 0-15.17037 1.896296-21.807407 4.74074 8.533333 9.481481 18.014815 19.911111 22.755555 29.392593z m48.355556 22.755555c-11.377778 2.844444-24.651852 5.688889-34.133333 4.740741 4.740741 8.533333 8.533333 19.911111 11.377777 30.340741 2.844444-1.896296 5.688889-4.740741 8.533334-6.637037 7.585185-7.585185 12.325926-17.066667 14.222222-28.444445z m-77.748148 34.133334c2.844444-11.377778 7.585185-22.755556 12.325926-31.288889-10.42963 0-22.755556-2.844444-34.133334-5.688889 0.948148 12.325926 6.637037 22.755556 14.222223 31.288889 2.844444 1.896296 4.740741 3.792593 7.585185 5.688889z m383.051852-189.62963c3.792593-11.377778 7.585185-21.807407 11.377777-33.185185 26.548148 0.948148 46.459259 10.42963 62.577778 24.651852l-2.844444 5.688889 17.066666 7.585185 16.118519-15.17037c-42.666667-37.925926-99.555556-65.422222-141.274074-86.281482-51.2-2.844444-99.555556-3.792593-147.911111-2.844444l3.792592 50.251851 3.792593 54.044445 221.866667 3.792593c5.688889 24.651852 7.585185 49.303704 7.585185 73.955555 0 26.548148-3.792593 53.096296-10.42963 79.644445H394.42963c-4.740741-16.118519-8.533333-33.185185-10.42963-50.251852-2.844444-18.014815-4.740741-36.977778-5.688889-56.888889v-41.718519H369.777778V549.925926c0.948148 19.911111 2.844444 38.874074 5.688889 57.837037s7.585185 36.02963 12.325926 54.044444l0.948148 2.844445H615.348148l0.948148-2.844445c7.585185-28.444444 11.377778-56.888889 12.325926-84.385185 0-24.651852-1.896296-49.303704-7.585185-73.955555H635.259259l-21.807407-8.533334-46.459259-0.948148z m-170.666667 34.133334v9.481481h41.718518v-9.481481h-41.718518z m-35.081482-132.740741c-31.288889 0.948148-62.577778 1.896296-93.866666 3.792592-18.962963 23.703704-31.288889 49.303704-41.718519 74.903704 5.688889 7.585185 11.377778 14.222222 17.066667 21.807407l113.777778 1.896297 4.74074-102.4z m528.118519 147.911111l-71.111111-14.222222s32.237037 49.303704 48.355555 50.251852c15.17037 0.948148 25.6-7.585185 25.6-7.585186h11.377778l-14.222222-28.444444z m-757.57037-53.096296h35.081481c4.740741-36.977778 7.585185-52.148148 17.066667-86.281482H180.148148c-21.807407 30.340741-30.340741 47.407407-48.355555 86.281482z" p-id="3599"></path></svg>
  </div>
  `);
}
function scrollProggressBar(event) {
  setTimeout(() => {
    $(".proggress").css(
      "width",
      `${
        ($(document).scrollTop() /
          ($("body")[0].scrollHeight - $(window).height())) *
        100
      }%`
    );
  }, 100);
}
// const navHeight = $("#navigator")[0].offsetHeight;
const navTop = $("#navigator").offset().top;
function affix() {
  setTimeout(() => {
    const scrollTop = $(document).scrollTop();
    if (scrollTop >= navTop) {
      // $().css('position', value);
      $("#navigator").css({
        position: "fixed",
        top: "0",
      });
      $("#main").css("z-index", "1");
    } else {
      $("#navigator").css({
        position: "absolute",
        top: "35vh",
      });
      $("#main").css("z-index", "101");
    }
  }, 50);
}
function drawCity() {
  setTimeout(() => {
    var Application = (function () {
      var canvas;
      var ctx;
      var WIDTH;
      var HEIGHT;

      var init = function () {
        canvas = document.getElementById("header-canvas");
        ctx = canvas.getContext("2d");
        bindEventHandlers();
        resize();
      };
      var genSkyline = function () {
        canvas.width = WIDTH;
        var maxWidth = WIDTH / 40;
        var minWidth = maxWidth / 15;
        var maxHeight = HEIGHT / 1.2;
        var minHeight = maxHeight / 5;
        var amount = random(WIDTH / 20, WIDTH / 10);
        var pos = 0;
        while (pos < WIDTH + maxWidth) {
          var currWidth = random(minWidth, maxWidth);
          drawSkyscraper(pos, currWidth, random(minHeight, maxHeight));
          pos += currWidth;
        }
      };
      var drawSkyscraper = function (pos, scraper_width, scraper_height) {
        ctx.beginPath();
        ctx.rect(pos, HEIGHT - scraper_height, scraper_width, scraper_height);
        ctx.strokeStyle = "#202020";
        ctx.stroke();
        ctx.fillStyle = "#202020";
        ctx.fill();
      };
      var bindEventHandlers = function () {
        window.onresize = resize;
        canvas.addEventListener("click", genSkyline, false);
      };
      var resize = function () {
        canvas.width = WIDTH = window.innerWidth * 0.8;
        canvas.height = HEIGHT = window.innerHeight * 0.4;
        genSkyline();
      };
      var random = function (a, b) {
        return Math.random() * (b - a) + a;
      };
      return {
        init: init,
      };
    })();

    Application.init();
  }, 100);
}
function directory() {
  const hs = ["H1", "H2", "H3", "H4", "H5", "H6"];

  let nodes = [];
  function filter(node) {
    for (const item of node.children) {
      if (node.children) {
        if (hs.includes(item.nodeName)) {
          nodes.push(item);
        }
        filter(item);
      }
    }
    // return nodes;
  }
  filter($(".post")[0]);

  $("#main").prepend(`
    <div id="my-directory"></div>
  `);
  // console.log(html);
  nodes.forEach((item) => {
    let node = $(`
    <div class="all-directory" data-level="${
      hs.indexOf(item.nodeName) + 1
    }" htitle="${item.innerText}">
        ${item.innerText}    
    </div>
  `)[0];
    // console.log(node);
    $(node).click(function (e) {
      item.scrollIntoView({
        behavior: "auto",
      });
      setTimeout(() => {
        scrollProggressBar();
        affix();
        dic_affix();
        catalogTrack();
      }, 100);
    });
    $("#my-directory").append(node);
    $(item).attr("id", item.innerText);
  });
  function catalogTrack() {
    setTimeout(() => {
      const scrollTop = $(document).scrollTop();
      nodes.forEach((element) => {
        if ($(element).offset().top <= scrollTop + 20) {
          console.log(element, getElementToPageTop(element), scrollTop + 400);
          // console.log($(`.all-directory`));

          $(`.all-directory`).each(function (index, element) {
            // element == this
            $(element).removeClass("all-directory-active");
          });

          $(`.all-directory[htitle="${$(element).attr("id")}"]`).addClass(
            "all-directory-active"
          );
        }
      });
    }, 200);
  }
  addMoveListen(catalogTrack);
}

function dic_affix() {
  setTimeout(() => {
    const scrollTop = $(document).scrollTop();

    if (scrollTop >= directoryTop) {
      // console.log(111);

      // $().css('position', value);
      $("#my-directory").css({
        position: "fixed",
        top: "80px",
        right: "15px",
        transform: "translateX(0)",
      });
    } else {
      $("#my-directory").css({
        position: "absolute",
        right: "15px",
        top: "20vh",
        transform: "translateX(100%)",
      });
    }
  }, 50);
}
function getElementToPageTop(el) {
  if (el.parentElement) {
    return this.getElementToPageTop(el.parentElement) + el.offsetTop;
  }
  return el.offsetTop;
}
function addMoveListen(f) {
  if (document.addEventListener) {
    //firefox
    document.addEventListener("DOMMouseScroll", f, false);
  }
  window.addEventListener("mousewheel", f);
  document.addEventListener("touchend", f);
  document.addEventListener("touchmove", f);
}
function lightToggle() {
  console.log('"#light-switch input")', $("#light-switch input")[0].checked);
  lightState = !lightState;
  if (lightState) {
    //变亮
    setTheme("light");
  } else {
    setTheme("dark");
    //变黑
  }
  localStorage.setItem("lightState", lightState);
}
function setTheme(themeName) {
  console.log(
    "🚀 ~ file: index.js ~ line 475 ~ setTheme ~ themeName",
    themeName
  );
  let themeObj = "";
  switch (themeName) {
    case "light":
      console.log("light");
      themeObj = {
        "--back-color": "#ffffff",
        "--blockquote-back-color": "#f8f8f8",
        "--boder-color": "#eef2f8",
        "--deputy-color": "#fa8072",
        "--hello-color": "#ffffff",
        "--light-main-color": "#c5e2ff",
        "--link-color": "#5695d3",
        "--main-color": `${mainColor16}`,
        "--nav-color": "#ffffff94",
        "--table-border-color": "#ffffff",
        "--table-even-color": "#f6f6f6",
        "--table-odd-color": "#e9e9e9",
        "--table-th-color": "whitesmoke",
        "--water-color": "#ddedfe",
        "--word-color": "rgb(89, 97, 114)",
        "--word-contrast-color": "rgb(248, 248, 248)",
      };
      themeObj["--link-color"] = LightenDarkenColor(
        themeObj["--main-color"],
        50
      );
      break;
    case "dark":
      console.log("dark");
      themeObj = {
        "--back-color": "#202020",
        "--blockquote-back-color": "#333",
        "--boder-color": "#666",
        "--city-color": "#202020",
        "--deputy-color": "#fa8072",
        "--hello-color": "#ffffff",
        "--light-main-color": "#516476",
        "--link-color": "#97cbff",
        "--main-color": `${mainColor16}`,
        "--nav-color": "#20202094",
        "--table-border-color": "rgb(240 240 240)",
        "--table-even-color": "#808080",
        "--table-odd-color": "#a9a9a9",
        "--table-th-color": "whitesmoke",
        "--water-color": "#7d8d9e",
        "--word-color": "#d8d8d8",
        "--word-contrast-color": "#f8f8f8",
      };
      themeObj["--link-color"] = LightenDarkenColor(
        themeObj["--main-color"],
        80
      );
      break;
    default:
      console.log("default");
      themeObj = {
        "--main-color": `${mainColor16}`,
        "--link-color": "#5695d3",
        "--light-main-color": "#c5e2ff",
        "--water-color": "#ddedfe",
        "--deputy-color": "#fa8072",
        "--word-color": "rgb(89, 97, 114)",
        "--word-contrast-color": "rgb(248, 248, 248)",
        "--boder-color": "#eef2f8",
        "--back-color": "#ffffff",
        "--nav-color": "#ffffff94",
        "--hello-color": "#ffffff",
        "--blockquote-back-color": "#f8f8f8",
        "--table-border-color": "#ffffff",
        "--table-even-color": "#f6f6f6",
        "--table-odd-color": "#e9e9e9",
        "--table-th-color": "whitesmoke",
      };
      break;
  }
  var Colorjs = net.brehaut.Color;
  // console.log(Color);
  // const Color = require("color");
  colorObj = Colorjs(themeObj["--main-color"]);
  colorObj = colorObj.shiftHue(180);
  themeObj["--deputy-color"] = colorObj.toCSS();
  themeObj["--word-contrast-color"] = Color.contrastTextColor(
    `${themeObj["--link-color"]}`,
    "hex"
  );
  themeObj["--light-main-color"] = themeObj["--link-color"];
  let waterObj = {
    "--wave1": "#ffffff",
    "--wave2": "#ffffff",
    "--wave3": "#ffffff",
    "--wave4": "#ffffff",
  };
  let initAlpha = 0.05;
  let waterColor = Colorjs(themeObj["--light-main-color"]);
  for (const key in waterObj) {
    waterObj[key] = waterColor.setAlpha(initAlpha).toCSS();
    initAlpha += 0.02;
  }
  themeObj["--selection-color"] = Colorjs(themeObj["--main-color"])
    .setAlpha(0.7)
    .toCSS();
  console.log("🚀 ~ file: index.js ~ line 547 ~ setTheme ~ waterObj", waterObj);
  Object.assign(themeObj, waterObj);
  const vars = Object.keys(themeObj)
    .map((key) => `${key}:${themeObj[key]}`)
    .join(";");
  document.documentElement.setAttribute("style", vars);
}
function LightenDarkenColor(col, amt) {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
function setMaincolor() {
  localStorage.setItem("mainColor16", mainColor16);
  setTheme(`${lightState ? "light" : "dark"}`);
}
function setLoading() {
  $(".post > .clear ").css("opacity", "0");
  $(".postBody > .clear ").css("opacity", "0");
  $("#load-container").css("opacity", "0");
  $(".day .clear:last-of-type").css("opacity", "0");
  setTimeout(() => {
    $(".post > .clear ").remove();
    // $(".postBody > .clear ").remove();
    $("#load-container").remove();
    $(".day .clear:last-of-type").remove();
  }, 2000);
}
function setProgressBar() {
  $("body").append(`
<div id="progressbar1">
</div>
`);
  let percent =
    ($(document).scrollTop() /
      ($("body")[0].scrollHeight - $(window).height())) *
    100;
  $("#progressbar1").LineProgressbar({
    percentage: percent,
    ShowProgressCount: false,
    duration: 0,
    unit: "%",
    animation: true,
    // Styling Options
    fillBackgroundColor: "rgba(33, 117, 188,1)",
    backgroundColor: "transparent",
    radius: "0px",
    height: "5px",
    width: "100%",
  });
}
function setSideBar() {
  $("#header").append($("#sideBar"));
  $("#header").append(`
  <div class="menu-button"> 
    <input class="checkbox" type="checkbox" name="" id="" />           
    <div class="hamburger-lines">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
  </div>
`);
  $("#sideBar").after(`
<div id="full-mask"></div>
`);
  $(".menu-button>.checkbox").click(function (e) {
    $("#sideBar").toggleClass("sideBar-active");
    $("html").toggleClass("html-hidden");
    $("#full-mask").toggle();
  });
  $("#full-mask")[0].addEventListener("click", () => {
    $(".menu-button>.checkbox").trigger("click");
  });
}
function setMusic() {
  if (DEVICE == "phone") return;
  $("#header").append(`
  <div class="music-container ">
  <div class="switch">
    <label for="toggle">
      <input id="toggle" type="checkbox">
      <div class="arm">
        <div class="stem"></div>
      </div>
      <div class="notes"></div>
      <div class="record">
        <div class="grooves"></div>
      </div>
      </label>
    </div>
  </div>
  <audio
  id="bgMusic"
  style="position: fixed;
  top: 0;
  z-index: 100000;"
  src="https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FY3VPVnhMMjFEMU1ocEtGM3ROV0d3UUJyZ29tWUtMTmhJcm9JRlhZdTVDc1JB.mp3"
  preload="auto" 
  loop
  >
  </audio>
`);
  $("#bgMusic")[0].volume = 0.1;
  $("#toggle")[0].addEventListener("click", () => {
    bgMusic = $("#bgMusic")[0];
    setTimeout(() => {
      musicState = !musicState;

      if (musicState) {
        bgMusic.play();
      } else {
        bgMusic.pause();
      }
    }, 500);
  });
  setTimeout(() => {
    $("#toggle").trigger("click");
  }, 500);
}
function setColor() {
  $("#home").append(`
  <div class="color-set">
  <svg t="1641804787342" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2622" width="200" height="200"><path d="M936.672 193.216l-226.88-64c-8.704-2.528-18.112-1.12-25.824 3.776-7.68 4.864-12.896 12.736-14.432 21.728C655.712 236.928 595.328 288 512 288c-71.424 0-142.464-103.296-163.776-143.104-7.136-13.28-22.528-19.84-37.024-15.68l-224 64C73.472 197.152 64 209.728 64 224l0 256c0 9.6 4.288 18.656 11.712 24.736 7.392 6.08 17.152 8.512 26.56 6.624L224 487.04 224 832c0 52.928 43.072 96 96 96l384 0c52.928 0 96-43.072 96-96l0-312.96 121.728 24.352c9.44 1.92 19.2-0.544 26.56-6.624C955.68 530.656 960 521.6 960 512L960 224C960 209.664 950.464 197.088 936.672 193.216zM672 800 352 800c-17.664 0-32-14.304-32-32s14.336-32 32-32l320 0c17.696 0 32 14.304 32 32S689.696 800 672 800z" p-id="2623"></path></svg>
  <input type="color" id="main-color" value="#2175bc">
  </div>
  `);
  mainColorNode = $("#main-color")[0];
  mainColorNode.addEventListener("change", () => {
    console.log(mainColorNode.value);
    mainColor16 = mainColorNode.value;
    setMaincolor();
  });
  $(".color-set")[0].addEventListener("click", () => {
    $(mainColorNode).trigger("click");
  });
}
function setLightSwitch() {
  $("#home").append(`
  <div id="light-switch">
  <label>
  <input class='toggle-checkbox' type='checkbox'></input>
  <div class='toggle-slot'>
  <div class="sun-icon-wrapper">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify sun-icon" data-icon="feather-sun" data-inline="false"><g fill="rgb(255, 187, 82)" stroke="rgb(255, 187, 82)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path></g></svg>
</div>
    <div class='toggle-button'></div>
    <div class="moon-icon-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify moon-icon" data-icon="feather-moon" data-inline="false"><g fill="none" stroke="rgb(255, 255, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z"></path></g></svg>
  </div>
  </div>
</label>
  </div>
`);
  lightSwitchNode = $("#light-switch input")[0];
  lightSwitchNode.addEventListener("click", lightToggle);
  lightSwitchNode.checked = !lightState;
}
function setWater() {
  $("#water")
    .append(`<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
  <defs>
  <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
  </defs>
  <g class="parallax">
  <use xlink:href="#gentle-wave" x="48" y="0"  />
  <use xlink:href="#gentle-wave" x="48" y="3"  />
  <use xlink:href="#gentle-wave" x="48" y="5" />
  <use xlink:href="#gentle-wave" x="48" y="7"  />
  </g>
  </svg> `);
}
