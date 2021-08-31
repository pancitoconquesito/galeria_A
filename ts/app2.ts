function getRandomInt(min:number, max:number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var cajaALL_padre:any = document.getElementById("caja");

//var contador=0;
let fragmento =document.createDocumentFragment();
for(var i=0;i<10;i++){

    var div = document.createElement("div");
    var img = document.createElement("img");
    div.className="cajita";

    var x=getRandomInt(400,600);
    var y=getRandomInt(500,800);
    img.src=`https://loremflickr.com/${x}/${y}/cat`;
    
    var div_mini= document.createElement("div");
    var icono = document.createElement("span");
    var numero = document.createElement("span");
    icono.className="material-icons";
    
    numero.id="fuente";
    // icono.id=String(contador);//
    // numero.className=String(contador);//
    // contador++;//

    icono.addEventListener("click",function(event:any){
        // var fuente = document.getElementById("fuente");
        // var numeroActual = document.getElementsByClassName(String(event.target.id));
        // for(var i=0;i<numeroActual.length;i++){
        //     numeroActual[i].innerHTML=String(parseInt(numeroActual[i].textContent)+1);
        // }
        var numeroActual = event.target.parentNode.lastChild;
        numeroActual.textContent = parseInt(numeroActual.textContent)+1;
        //event.target.parentNode.lastChild.innerHTML=parseInt(event.target.parentNode.lastChild.innerHTML)+1;
    });

    div_mini.appendChild(icono).textContent="favorite";
    div_mini.appendChild(numero).textContent="1";

    div.appendChild(img);
    div.appendChild(div_mini);
    //cajaALL_padre.appendChild(div);
    fragmento.appendChild(div);
}

cajaALL_padre.appendChild(fragmento);

