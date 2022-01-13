
var nav = document.querySelector("nav");
var button = document.querySelector(".back_to_top");
var schedule = {
    schedule_nav: document.querySelectorAll(".schedule_nav a"),
    day_content: document.querySelectorAll(".day_content")
};
var case_remplir = document.querySelector(".case");

document.onscroll = (e) => {

    if (window.pageYOffset > 300) { 
        nav.classList.add("fixed");
        button.classList.add("visi");
    }

    else { nav.classList.remove("fixed"); 
           button.classList.remove("visi");
    }
} ;

schedule.schedule_nav.forEach((elm,i)=>{
    elm.onclick = function navigation(e){
        schedule.schedule_nav.forEach(elm=>{ elm.classList.remove("active") });
        schedule.day_content.forEach(elm=>{ elm.classList.add("hidden")});

        elm.classList.add("active");
        schedule.day_content[i].classList.remove("hidden");
    }

});

// case_remplir.focus();
