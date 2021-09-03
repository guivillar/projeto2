$(window).width();

$('.carousel-full').slick({
    dots: true,
    infinite: true,
    fade: true,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: false
        }
    }
    ]
});

function openPopup(){
    document.getElementById("popup").style.display = "block";
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}

var n;

function openCompetencia(n){
    switch (n){
        case '1':
            document.getElementById("competencia1").style.display = "block";
            document.getElementById("setaDown1").style.display = "none";
            document.getElementById("setaUp1").style.display = "block";
            break;
        case '2':
            document.getElementById("competencia2").style.display = "block";
            document.getElementById("setaDown2").style.display = "none";
            document.getElementById("setaUp2").style.display = "block";
            break;
        case '3':
            document.getElementById("competencia3").style.display = "block";
            document.getElementById("setaDown3").style.display = "none";
            document.getElementById("setaUp3").style.display = "block";
            break;
        case '4':
            document.getElementById("competencia4").style.display = "block";
            document.getElementById("setaDown4").style.display = "none";
            document.getElementById("setaUp4").style.display = "block";
            break;
    }
    
}

function closeCompetencia(n){
    switch (n){
        case '1':
            document.getElementById("competencia1").style.display = "none";
            document.getElementById("setaUp1").style.display = "none";
            document.getElementById("setaDown1").style.display = "block";
            break;
        case '2':
            document.getElementById("competencia2").style.display = "none";
            document.getElementById("setaUp2").style.display = "none";
            document.getElementById("setaDown2").style.display = "block";
            break;
        case '3':
            document.getElementById("competencia3").style.display = "none";
            document.getElementById("setaUp3").style.display = "none";
            document.getElementById("setaDown3").style.display = "block";
            break;
        case '4':
            document.getElementById("competencia4").style.display = "none";
            document.getElementById("setaUp4").style.display = "none";
            document.getElementById("setaDown4").style.display = "block";
            break;
    }
}

function competenciaDesk(n){
    switch (n){
        case '1':
            document.getElementById("competenciaDesk1").classList.add("selection-competencia");
            document.getElementById("competenciaDesk2").classList.remove("selection-competencia");
            document.getElementById("competenciaDesk3").classList.remove("selection-competencia");
            document.getElementById("competenciaDesk4").classList.remove("selection-competencia");
            document.getElementById("title1").style.fontWeight = "bold";
            document.getElementById("title2").style.fontWeight = "normal";
            document.getElementById("title3").style.fontWeight = "normal";
            document.getElementById("title4").style.fontWeight = "normal";
            document.getElementById("conteudoCompetencia1").classList.remove("display-none");
            document.getElementById("conteudoCompetencia2").classList.add("display-none");
            document.getElementById("conteudoCompetencia3").classList.add("display-none");
            document.getElementById("conteudoCompetencia4").classList.add("display-none");
            break;
        case '2':
            document.getElementById("competenciaDesk1").classList.remove("selection-competencia");
            document.getElementById("competenciaDesk2").classList.add("selection-competencia");
            document.getElementById("competenciaDesk3").classList.remove("selection-competencia");
            document.getElementById("competenciaDesk4").classList.remove("selection-competencia");
            document.getElementById("title1").style.fontWeight = "normal";
            document.getElementById("title2").style.fontWeight = "bold";
            document.getElementById("title3").style.fontWeight = "normal";
            document.getElementById("title4").style.fontWeight = "normal";
            document.getElementById("conteudoCompetencia1").classList.add("display-none");
            document.getElementById("conteudoCompetencia2").classList.remove("display-none");
            document.getElementById("conteudoCompetencia3").classList.add("display-none");
            document.getElementById("conteudoCompetencia4").classList.add("display-none");
            break;
        case '3':
            document.getElementById("competenciaDesk1").classList.remove("selection-competencia");
            document.getElementById("competenciaDesk2").classList.remove("selection-competencia");
            document.getElementById("competenciaDesk3").classList.add("selection-competencia");
            document.getElementById("competenciaDesk4").classList.remove("selection-competencia");
            document.getElementById("title1").style.fontWeight = "normal";
            document.getElementById("title2").style.fontWeight = "normal";
            document.getElementById("title3").style.fontWeight = "bold";
            document.getElementById("title4").style.fontWeight = "normal";
            document.getElementById("conteudoCompetencia1").classList.add("display-none");
            document.getElementById("conteudoCompetencia2").classList.add("display-none");
            document.getElementById("conteudoCompetencia3").classList.remove("display-none");
            document.getElementById("conteudoCompetencia4").classList.add("display-none");
            break;
        case '4':
            document.getElementById("competenciaDesk1").classList.remove("selection-competencia");
            document.getElementById("competenciaDesk2").classList.remove("selection-competencia");
            document.getElementById("competenciaDesk3").classList.remove("selection-competencia");
            document.getElementById("competenciaDesk4").classList.add("selection-competencia");
            document.getElementById("title1").style.fontWeight = "normal";
            document.getElementById("title2").style.fontWeight = "normal";
            document.getElementById("title3").style.fontWeight = "normal";
            document.getElementById("title4").style.fontWeight = "bold";
            document.getElementById("conteudoCompetencia1").classList.add("display-none");
            document.getElementById("conteudoCompetencia2").classList.add("display-none");
            document.getElementById("conteudoCompetencia3").classList.add("display-none");
            document.getElementById("conteudoCompetencia4").classList.remove("display-none");
            break;
    }
}