// API utilizada para el ejercicio: => https://malerey.github.io/ABM-vanilla-js/

// Un fetch recibe dos parametros, uno es "obligatorio" y otro "optativo"

// El parametro obligatorio es un string que representa una URL

// si no pongo segundo parametro JS asume que quiero hacer un GET

// GET => traerme informacion para que yo pueda leerla:

// ****

const obtenerUsuariosYHacerHTML = () => {
  fetch("https://601da02bbe5f340017a19d60.mockapi.io/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // => se ejecuta cuando el fetch termino

      const lista = document.querySelector("ul");

      lista.innerHTML = "";
      data.map((usuario) => {
        //puedo usar un "map()", "forEach()" o "for()"
        lista.innerHTML += `<li>
      ${usuario.fullname}
      <button data-userid=${usuario.id}>Borrar</button>
      
      </li>`;
      });

      const listaDeBotones = document.querySelectorAll("button");

      console.log("listaDeBotones", listaDeBotones); // "boton" me da una lista de botones por eso no le puedo hacer onclick a una lista
      listaDeBotones.forEach((boton) => {
        // listaDeBotones.map((boton) => {
        // ==> tengo que suar "forEach", en lugar de "map", xq "listaDeBotones" es una lista de nodos de HTML, que nos e puede recorrer con un "map"(y si con un "forEach")

        boton.onclick = () => {
          // console.log("Me hiciste click", boton.dataset.userid);
          const id = boton.dataset.userid; // => declaro la variable "id" para usarla dentro del "fetch"

          // DELETE => borro un objeto del array
          fetch(`https://601da02bbe5f340017a19d60.mockapi.io/users/${id}`, {
            method: "delete",
          })
            .then((res) => res.json())
            .then((usuarioBorrado) => {
              // funcion recursiva, que llama a si misma , para hacer de nuevo el HTML
              obtenerUsuariosYHacerHTML();
              // pido la informacion nuevamente de la API, sin el objeto borrado
              // fetch("https://601da02bbe5f340017a19d60.mockapi.io/users") // => no lo hago porque es repetitivo el codigo por cada elemento a borrar
              //   .then((res) => res.json())
              //   .then((data) => console.log(data));
            });
        };
      });
    });
};

obtenerUsuariosYHacerHTML();

// el formulario se sigue enviando y el preventDefault no lo bloquea, por que se *** lo tengo que hacer al formulario no al boton solo ***

// const botonEnviar = document.getElementById("botonEnviar");

// botonEnviar.onclick = (e) => {
//   e.preventDefault();
// };

const formulario = document.querySelector("form");

formulario.onsubmit = (e) => {
  // "onclick" es para el boton y "onsubmit" para el form
  e.preventDefault();

  // informacion que le quiero enviar a la API ****
  const fullname = document.querySelector("#fullname").value;
  const address = document.querySelector("#address").value;
  const phone = document.querySelector("#phone").value;
  const email = document.querySelector("#email").value;

  fetch("https://601da02bbe5f340017a19d60.mockapi.io/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    }, //=> en esta API no es obligatorio enviar un "headers" segun la documentacion
    body: JSON.stringify({
      fullname: fullname,
      address: address,
      phone: phone,
      email: email,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      obtenerUsuariosYHacerHTML();
    });

  //console.log(fullname, address, phone, email); // me muestra los datos que el usuario cargo en el formulario en ese orden!!!
};
