var asabetcer
var vaipralua
var coletaae
var botao1
var botao2
var botao3
var pedralul = 4
var contage = 0
var estadoJogo = 0
var estadoJogoinicio= 1
var estadoJogolua = 2
var estadoJogoMarte = 3
var localjogo="a"
var localjogoInicio= "b"
var localJogoLua="c"
var localJogoMarte = "d"
var contagemEvento1 = 0
var dinheiros = 0
var aeae = 0
var botaum = true
var botao3 = false 
var botaomarte = true
var botaocoletaremarte
var contagemEvento2 = 0
var ferros = 0
var botao4
function preload(){
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  asabetcer = createImg("Abastecer.png")
  asabetcer.position(200,200)
  asabetcer.size(130,50)
  asabetcer.mouseClicked(abasrecer)
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    text("Warning: Better on PC's", 200,200)
  }
  estadoJogo = estadoJogoinicio  
  localjogo = localjogoInicio

}

function draw() {
  background(40)
  textSize(14)
  fill("white")
  text("pedra lunar:"+pedralul,1000,100)
  text( contage, 200, 200)

  //evento para desbloquear o ouro espacial
  if(botao3 && contagemEvento1 >= 10){
    textSize(14)
    text("ouro espacial: "+dinheiros,1000,120 )
  }
  if(botao3 && contagemEvento1 >= 10){
    botao3 = createButton("coleta mais")
    botao3.mousePressed(dinheiross)
    botao3.position(200,400)
    botao3.size(130,50)
   }
   if(botao4 && contagemEvento2 >=20){
    textSize(14)
    text("ferro marciano: "+ferros,1000,140 )
   }
   if(botao4 && contagemEvento2 >=20){
    botao4 = createButton("pega ferro")
    botao4.mousePressed(ferross)
    botao4.position(200,400)
    botao4.size(130,50)
   }
  //---------------------------------------------------------------

   //mudança do estado jogo normal para o estado jogo lua
  if(estadoJogo == estadoJogoinicio && localjogo==localjogoInicio ){  
    if(contage == 4){
    estadoJogo = estadoJogolua
    contage = 0
   }
 }
//----------------------------------------------------------------------------------------

// mudança do local de jogo normal para a lua
 if(estadoJogo == estadoJogolua && botaum){
botao1 = createSprite(265,95,130,50)
if(mousePressedOver(botao1)){
  localjogo = localJogoLua 
}
  vaipralua = createImg("Lua.png")
  vaipralua.position(200,70)
  vaipralua.size(130,50)

//----------------------------------------------------------------------------------------

//criar a coleta de pedras lunares
  if(localjogo == localJogoLua){
   
    coletaae = createButton("coletar")
    coletaae.mousePressed(coletarpedralunarlua)
    coletaae.position(200,300)
    coletaae.size(130,50)
    
    botao3 = true
  }
  if(contage == 50){
    estadoJogo = estadoJogoMarte
    contage = 0
    botaum = false
    }
 }
 //-------------------------------------------------------------------------------------------
if(estadoJogo == estadoJogoMarte && botaomarte){
  irmarte = createButton("ir pra marte")
  irmarte.mousePressed(localjogo = localJogoMarte)
  irmarte.position(270,90)
  irmarte.size(130,50)

  if(localjogo == localJogoMarte){
    coletaae.hide
    botao3.hide

    botaocoletaremarte = createButton("coletabastante")
    botaocoletaremarte.mousePressed(coletarpedralunarmarte)
    botaocoletaremarte.position(200,300)
    botaocoletaremarte.size(130,50)

    botao4 = true
  }
}

 drawSprites()
 }

function abasrecer(){
  if(pedralul > 0){ 
  pedralul = pedralul-1
  contage = contage + 1
  }
}

function coletarpedralunarlua(){
  pedralul = pedralul +2
  contagemEvento1 ++
}
function coletarpedralunarmarte(){
  pedralul = pedralul +6
  contagemEvento2 ++
}
function dinheiross(){
  dinheiros = dinheiros +1
}
function ferross(){
  ferros = ferros +1
}


