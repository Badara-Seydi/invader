var form = document.querySelector(".configuration");
var inputSize = document.createElement("input");
inputSize.classList.add("taille");
inputSize.setAttribute("type", "number");
inputSize.setAttribute("placeholder", "Taille de la grille");
form.appendChild(inputSize);
var inputSizePx = document.createElement("input");
inputSizePx.classList.add("SizePx");
inputSizePx.setAttribute("type", "number");
inputSizePx.setAttribute("placeholder", "Taille des pixels");
form.appendChild(inputSizePx);
var inputColor = document.createElement("input");
inputColor.classList.add("color");
inputColor.setAttribute("type", "color");
form.appendChild(inputColor);
var button = document.createElement("button")
button.classList.add("btn");
button.textContent = "Valider";
form.appendChild(button);
var invader = document.getElementById('invader');
var table = document.createElement('table')
invader.appendChild(table);
var color = "red";
var app = { //je crée un objet contenant les méthodes necessaire pour faire marcher le site.
    init: function (event) {
        event.preventDefault();
        var nbCell = document.querySelector('.taille').value;
        var nbLine = nbCell;
        var sizePx = document.querySelector('.SizePx').value;
        console.log(sizePx);
        // app.changePx(sizePx);
        console.log(nbCell + nbLine)
        app.reset();
        app.tab(nbLine, nbCell, sizePx);
        table.addEventListener('click', app.changeColor);
    },
    // changePx:function(){
    // }
    reset: function () {
        while (table.firstChild) {
            table.removeChild(table.lastChild);
        }
    },
    changeColor: function (event) {
        // event.target.style.backgroundColor = color === "red" ? "red" : "blue";
        // if (color === "red") {
        //     event.target.style.backgroundColor = "red"
        // } else {
        //     event.target.style.backgroundColor = "blue"
        // }
        // if (event.target.style.backgroundColor === "red") {
        //     color = "blue";
        // } else
        // {
        //     color = "red";
        // }
       let color= document.querySelector('.color').value;
       event.target.style.backgroundColor = color;
    },
    tab: function (nbLine, nbCell, sizePx) {
        for (var line = 0; line < nbLine; line++) {
            var row = table.insertRow(line);
            for (var cell = 0; cell < nbCell; cell++) {
                row.insertCell(cell);
                var test = document.getElementsByTagName('td');
                for (let i = 0; i < test.length; i++) {
                    test[i].style.height = sizePx + 'px';
                    test[i].style.width = sizePx + 'px';
                }
            }
        }
    }
}
var button2 = document.querySelector(".btn");
button2.addEventListener('click', app.init);