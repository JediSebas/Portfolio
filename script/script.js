$("#me").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about-me").offset().top
    }, 700);
});

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    const scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

$("#scrollBtn").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: document.body.scrollTop
    }, 700);
});

$(document).ready(function () {
    $('#menu-icon').click(function () {
        $('nav ul').toggle('visible');
    });
});

function insertAge() {
    const birth = 2004;
    const currentYear = new Date().getFullYear();

    document.getElementById('age').innerHTML = currentYear - birth;
}