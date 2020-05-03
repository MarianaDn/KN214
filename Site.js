let isScrolling;

window.addEventListener('scroll', function() {
  document.getElementById('showScroll').style.backgroundColor = "white";
  window.clearTimeout( isScrolling );

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    } else {
        isScrolling = setTimeout(function() {
            document.getElementById('showScroll').style.backgroundColor = "";
            console.log( 'Scrolling has stopped.' );
        }, 66);
    }
});

function check(element){
    if(parseInt(element)){
        document.getElementById("wrong").innerHTML = "*";
        document.getElementById("wrong").style.color = "red";
    }
}
function check__(element__){
    if(!parseInt(element__)){
        document.getElementById("wrong__").innerHTML = "*";
        document.getElementById("wrong__").style.color = "red";
    }
}

let form_submit = document.getElementById('form__');

form_submit.addEventListener('submit', function(event){
    event.preventDefault();
    let name = document.querySelector('input[name="contactName"]').value;
    let tel = document.querySelector('input[name="contactNumber"]').value;
    check(name);
    check__(tel);
});


let button_up = document.getElementById('upper');

button_up.addEventListener('click', function(event){
    event.preventDefault();
    window.scrollTo({top:0, behavior:"smooth"});
});
