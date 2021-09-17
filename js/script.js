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
displayBlock = "block";
displayNone = "none"

function openCompetencia(n){
        
    switch (n){
        case '1':
            if (document.getElementById("competencia1").style.display == "block"){
                document.getElementById("competencia1").style.display = displayNone;
                document.getElementById("setaDown1").style.display = displayBlock;
                document.getElementById("setaUp1").style.display = displayNone;
            }
            else{
                document.getElementById("competencia1").style.display = displayBlock;
                document.getElementById("setaDown1").style.display = displayNone;
                document.getElementById("setaUp1").style.display = displayBlock;
            }
            break;
        case '2':
            if (document.getElementById("competencia2").style.display == "block"){
                document.getElementById("competencia2").style.display = displayNone;
                document.getElementById("setaDown2").style.display = displayBlock;
                document.getElementById("setaUp2").style.display = displayNone;
            }
            else{
                document.getElementById("competencia2").style.display = displayBlock;
                document.getElementById("setaDown2").style.display = displayNone;
                document.getElementById("setaUp2").style.display = displayBlock;
            }
            break;
        case '3':
            if (document.getElementById("competencia3").style.display == "block"){
                document.getElementById("competencia3").style.display = displayNone;
                document.getElementById("setaDown3").style.display = displayBlock;
                document.getElementById("setaUp3").style.display = displayNone;
            }
            else{
                document.getElementById("competencia3").style.display = displayBlock;
                document.getElementById("setaDown3").style.display = displayNone;
                document.getElementById("setaUp3").style.display = displayBlock;
            }
            break;
        case '4':
            if (document.getElementById("competencia4").style.display == "block"){
                document.getElementById("competencia4").style.display = displayNone;
                document.getElementById("setaDown4").style.display = displayBlock;
                document.getElementById("setaUp4").style.display = displayNone;
            }
            else{
                document.getElementById("competencia4").style.display = displayBlock;
                document.getElementById("setaDown4").style.display = displayNone;
                document.getElementById("setaUp4").style.display = displayBlock;
            }
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
            document.getElementById("title4").style.fontWeight = "normal";
            document.getElementById("title3").style.fontWeight = "bold";
            document.getElementById("title3").style.fontWeight = "normal";
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
            document.getElementById("title3").style.fontWeight = "normal";
            document.getElementById("title4").style.fontWeight = "bold";
            document.getElementById("title1").style.fontWeight = "normal";
            document.getElementById("conteudoCompetencia1").classList.add("display-none");
            document.getElementById("conteudoCompetencia2").classList.add("display-none");
            document.getElementById("conteudoCompetencia3").classList.add("display-none");
            document.getElementById("conteudoCompetencia4").classList.remove("display-none");
            break;
    }
}