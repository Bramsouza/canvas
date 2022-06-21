var lastPositionX, lastPositionY;//criada para fins do desenho

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";//cor padrão
    widthLine = 1;//largura padrão

    var width = screen.width;//armazenando o tamanho de tela (mobile ou pc)
    newWidth = screen.width - 70;//o 70 é pixels (70px)
    
    newHeight = screen.height - 300; // ex: A height da tela é 700px. newHeight = screen.height - 300 // 700 - 300 logo, newHeight = 400

    if(width < 992)
    {
        document.getElementById("myCanvas").width = newWidth;
        document.getElementById("myCanvas").height = newHeight;
        document.body.style.overflow = "hidden";
    }
    //1º EVENTO - MOUSEDOWN
    canvas.addEventListener("touchstart", myTouchStart);
    function myTouchStart(e)
    {
        console.log("myTouchStart");
      
        color = document.getElementById("color").value;
        widthLine = document.getElementById("widthLine").value;

        //Fim da Atividade Adicional
        //e indica o evento. touches[0]: Significa que, apenas, exibirá as coordenadas de um dedo. clientX: Fornecerá as coordenadas x.
        lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
        lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
        
    }
    
    //2º EVENTO MOUSEMOVE -  Este é o evento principal onde será realizado o desenho.
    canvas.addEventListener("touchmove", myTouchMove);
    function myTouchMove(e)
    {
        console.log("MyTouchMove")
        
        currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
        currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();//Diz ao Canvas para começar a desenhar a forma/objeto.
        ctx.strokeStyle = color;//define a cor do desenho
        ctx.lineWidth = widthLine;//define a largura do desenho
        
        //moveTo começa e lineTo termina as linhas
        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionX + "y = " + lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY);

        console.log("Posição atual das coordenadas x e y ");
        console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
        ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
        ctx.stroke(); //desenha a linha
       
        //queremos que o desenho seja feito entre as variáveis oldCoordinates e newCoordinates.
        //Para conseguir isso, precisamos armazenar as oldCoordinates. E armazenamos as oldCoordinates em relação às coordenadas "x" e "y"
        //da seguinte forma:
        lastPositionX = currentPositionOfTouchX; 
        lastPositionY = currentPositionOfTouchY;

    }
    


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
