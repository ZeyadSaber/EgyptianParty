$('.open').click(function(){
    $('#side-bar').toggleClass('side-close', 'side-open');
})

$('.singer').click(function(e){
    $(`.details${e.currentTarget.id}`).toggleClass('d-none', 'd-block');
})

let countDownDate = new Date("Nov 25, 2023 00:00:00").getTime();


let x = setInterval(function(){
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $("#days")[0].innerHTML = days + "d";
  $("#hours")[0].innerHTML = hours + "h";
  $("#mins")[0].innerHTML = minutes + "m";
  $("#seconds")[0].innerHTML = seconds + "s";
}, 1000);

$("#hire-me form textarea").keyup(function(){
    let len = $("#hire-me form textarea")[0].value.length;
    console.log(len);
    if(len > 100){
        $("#char")[0].innerHTML = 'No';
    }else{
        $("#char")[0].innerHTML = 100 - len;
    }
})
