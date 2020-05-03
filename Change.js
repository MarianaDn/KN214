function switchBtnTheme() {
  let switchBtn = document.querySelector('.dark_theme');
  let switchBtn_ = document.querySelector('.light_theme');
  let light = true;


  const lightPalette = {
    bcgImg: "url('img/main3.jpg')",
    bcgImg_: "url('img/goods.jpg')",
    border_goods: 'rgba(247, 194, 187, 0.72)',
    fon_about: 'rgba(251, 219, 255, 0.98)',
    about_font_main: 'rgba(113, 27, 73, 0.77)',
    about_font_top: 'rgb(37, 3, 21)',
    bg_serve_cakes: 'rgba(247, 194, 187, 0.72)',
    serve_cakes_border: 'rgba(255, 163, 150, 0.51)',
    serve_cakes_font_top: 'rgba(255, 163, 150, 0.51)',
    serve_pynkty: 'rgba(116, 5, 64, 0.68)',
    serve_all: 'rgba(116, 5, 64, 0.55)',
    wave: 'rgba(116, 5, 64, 0.68)',
    footer_bg: 'rgba(249, 210, 204, 0.72)',
    tit: '#9a8c8a',
    tit1: 'rgb(120, 109, 107)',
    line: '#beaba8',
    last_text: '#9a8c8a',
    pic: 'rgb(120, 109, 107)',
    ennd_text: '#9a8c8a',
    ennd__text:'#9a8c8a',
    upper: 'rgb(120, 109, 107)',
    button: 'rgb(231, 210, 207)',
    button_text: '#9a8c8a',
    menu: '#716836'
  }

  const darkPalette = {
    bcgImg: "url('img/фон2.jpg')",
    bcgImg_: "url('img/фон2.0.jpg')",
    border_goods: 'rgba(37, 48, 153, 0.83)',
    fon_about: 'rgba(105, 51, 173, 0.66)',
    about_font_main: '#efe5f4',
    about_font_top: '#f8f1fb',
    bg_serve_cakes: '#6a8add',
    serve_cakes_border:'rgba(19, 65, 181, 0.51)',
    serve_cakes_font_top: '#faf5fc',
    serve_pynkty: '#faf5fc',
    serve_all: '#efe5f4',
    wave: '#efe5f4',
    footer_bg: '#7e99e0',
    tit: 'rgb(255, 255, 255)',
    tit1: 'rgb(255, 255, 255)',
    line: '#faf5fc',
    last_text: '#efe5f4',
    pic: '#efe5f4',
    ennd_text:'#faf5fc',
    ennd__text:'#faf5fc',
    upper: '#efe5f4',
    button: '#faf5fc',
    button_text: '#9a8c8a',
    menu: '#000228'
}

  switchBtn.onclick = function (event) {
    if(light)getElements(darkPalette);
    light = !light;
    document.querySelector('.dark_theme').style.visibility = "hidden";
    document.querySelector('.light_theme').style.visibility = "visible";
    document.querySelector('.nameof').style.textShadow = "none";
    document.querySelector('.nameof1').style.textShadow = "none";
  }
  switchBtn_.onclick = function (event) {
    if(!light)getElements(lightPalette);
    light = !light;
    document.querySelector('.dark_theme').style.visibility = "visible";
    document.querySelector('.light_theme').style.visibility = "hidden";
    document.querySelector('.nameof').style.textShadow = '3px 2px rgba(113, 27, 73, 0.57)';
    document.querySelector('.nameof1').style.textShadow = '3px 2px rgba(113, 27, 73, 0.57)';
  }


  function getElements(pallet) {
        document.querySelector('.main_page').style.backgroundImage = pallet.bcgImg;
        document.querySelector('.Goods').style.backgroundImage = pallet.bcgImg_;
        var pcr = document.body.querySelectorAll('.cakess');
        for(let i = 0; i < 6; i++){
            pcr[i].style.borderColor = pallet.border_goods;
        }
        document.querySelector('.about').style.backgroundColor = pallet.fon_about;
        let ab = document.body.querySelectorAll('p');
        for(let i = 0; i < 3; i++){
            ab[i].style.color = pallet.about_font_main;
        }
        document.querySelector('.aboutus').style.color = pallet.about_font_top;
        document.querySelector('.cakes').style.backgroundColor = pallet.bg_serve_cakes;
        var cake = document.body.querySelectorAll('.bd');
        for(let i = 0; i < 3; i++){
            cake[i].style.borderColor = pallet.serve_cakes_border;
        }
        document.querySelector('.nameof').style.color = pallet.serve_cakes_font_top;
        document.querySelector('.nameof1').style.color = pallet.serve_cakes_font_top;
        var pynktu_ = document.body.querySelectorAll('.pynktu');
        for(let i = 0; i < 5; i++){
            pynktu_[i].style.color = pallet.serve_pynkty;
        }
        let text_ = document.body.querySelectorAll('.reserve');
        for(let i = 0; i < 7; i++){
            text_[i].style.color = pallet.serve_all;
        }
        document.querySelector('.end').style.color = pallet.wave;
        document.querySelector('.footer').style.backgroundColor = pallet.footer_bg;
        document.querySelector('.Theend').style.backgroundColor = pallet.footer_bg;
        document.querySelector('.tit').style.color = pallet.tit;
        var tit_ = document.body.querySelectorAll('.tit1');
        for(let i = 0; i < 2; i++){
            tit_[i].style.color = pallet.tit1;
        }
        var line_ = document.body.querySelectorAll('hr');
        for(let i = 0; i < 2; i++){
            line_[i].style.backgroundColor = pallet.line;
            line_[i].style.borderColor = pallet.line;
        }
        var last_texts = document.body.querySelectorAll('.ennd');
        for(let i = 0; i < 7; i++){
            last_texts[i].style.color = pallet.last_text;
        }
        var pict = document.body.querySelectorAll('.endof');
        for(let i = 0; i < 4; i++){
            pict[i].style.color = pallet.pic;
        }
        document.querySelector('.ennd_').style.color = pallet.ennd_text;
        var last = document.body.querySelectorAll('.ennd__');
        for(let i = 0; i < 1; i++){
            last[i].style.color = pallet.ennd__text;
        }
        document.querySelector('.up').style.color = pallet.upper;
        document.querySelector('.submitform').style.backgroundColor = pallet.button;
        document.querySelector('.submitform').style.color = pallet.button_text;
        var menu = document.body.querySelectorAll('.menu > ul li a');
        for(let i = 0; i < 14; i++){
            menu[i].style.color = pallet.menu;
        }
    }

}
switchBtnTheme();
