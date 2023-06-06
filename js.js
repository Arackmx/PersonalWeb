let titulo = true;

setInterval(()=> {
    document.title = titulo
    ? "Cesar Quiñonez" : "Pagina personal de: "
    titulo = !titulo
},2000)

let iconoMenu = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

iconoMenu.onclick = () => {
    iconoMenu.classList.toggle("bx-message-square-x"); 
    navBar.classList.toggle("active");
}


//scroll NavBar
let secciones = document.querySelectorAll("section");
let linksMenu = document.querySelectorAll("header nav a");


window.onscroll = () => {
    secciones.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            //Resalta los links de la barra de navegacion
            linksMenu.forEach (links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*= " + id + "]").classList.add("active");
            });
            // animacion de las sections al hacer scroll
            sec.classList.add("carga-animacion")
        } else {
            sec.classList.remove("carga-animacion")
        }

    })
    //Fijar NavBar (encabezado)
    let encabezado = document.querySelector("header");

    encabezado.classList.toggle("fijo", window.scrollY > 60);

    //cerrar menu al dar clic en el link
    iconoMenu.classList.remove("bx-message-square-x"); 
    navBar.classList.remove("active");

    // animacion del footer cuando se hace scroll
    let footer = document.querySelector("footer");
    
    footer.classList.toggle("carga-animacion", this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

