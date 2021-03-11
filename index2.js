const lista = document.querySelector("ul");
const formulario = document.querySelector(".formulario");
const fullname = document.querySelector("#fullname");
const address = document.querySelector("#address");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const botonAgregarUsuario = document.getElementById("agregar-usuario");
const formularioParaModificar = document.querySelector(".formulario-modificar");
const nameModificado = document.querySelector(".name-modificar");
const emailModificado = document.querySelector(".email-modificar");
const addressModificado = document.querySelector(".address-modificar");
const phoneModificado = document.querySelector(".phone-modificar");

const baseURL = "https://601da02bbe5f340017a19d60.mockapi.io/users";
let urlActualizada = "";

const obtenerUsuariosYHacerHTML = () => {
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // => se ejecuta cuando el fetch termino
      crearLista(data);

      //   const listaDeBotones = document.querySelectorAll("button");

      //   console.log("listaDeBotones", listaDeBotones);
    });
};
obtenerUsuariosYHacerHTML();

// **** funciones ****

const crearLista = (data) => {
  lista.innerHTML = "";
  data.map((usuario) => {
    lista.innerHTML += `<li>
        ${usuario.fullname}
        <button class="borrar-usuario" data-userid=${usuario.id}>Borrar</button>
        <button class="modificar-usuario" data-fullname=${usuario.fullname} data-phone=${usuario.phone} data-address=${usuario.address} data-email=${usuario.email}>Modificar</button>
        </li>`;
  });
  botonBorrarOnClick();
  botonModificarOnclick(data);
  usuarioModificado(data);
};

const botonBorrarOnClick = () => {
  const botonesBorrar = document.querySelectorAll(".borrar-usuario");

  botonesBorrar.forEach((boton) => {
    boton.onclick = () => {
      id = boton.dataset.userid;
      urlActualizada = `${baseURL}/${id}`;
      console.log(urlActualizada);

      eliminarUsuario(urlActualizada);
    };
  });
};

const eliminarUsuario = (urlActualizada) => {
  // DELETE => borro un objeto del array
  fetch(urlActualizada, {
    method: "delete",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // funcion recursiva, que llama a si misma , para hacer de nuevo el HTML
      obtenerUsuariosYHacerHTML(data);
    });
};

formulario.onsubmit = (e) => {
  // "onclick" es para el boton y "onsubmit" para el form
  e.preventDefault();
};

botonAgregarUsuario.onclick = () => agregarUsuarios(baseURL);
// informacion que le quiero enviar a la API ****
const agregarUsuarios = (baseURL) => {
  fetch(baseURL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    }, //=> en esta API no es obligatorio enviar un "headers" segun la documentacion
    body: JSON.stringify({
      fullname: `${fullname.value}`,
      address: `${address.value}`,
      phone: `${phone.value}`,
      email: `${email.value}`,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      obtenerUsuariosYHacerHTML();
    });
};

const botonModificarOnclick = () => {
  const botonModificar = document.querySelectorAll(".modificar-usuario");

  botonModificar.forEach((boton) => {
    boton.onclick = () => {
      formularioParaModificar.classList.remove("hidden");
      nameModificado.value = boton.dataset.fullname;
      emailModificado.value = boton.dataset.email;
      addressModificado.value = boton.dataset.address;
      phoneModificado.value = boton.dataset.phone;

      id = boton.dataset.userid;
      urlActualizada = `${baseURL}/${id}`;
      console.log(urlActualizada);

      usuarioModificado(urlActualizada);
    };
  });
};

const usuarioModificado = (urlActualizada) => {
  const botonModificarUsuario = document.querySelector("#modificar-usuario");

  botonModificarUsuario.onclick = () => {
    //console.log(botonModificarUsuario);
    fetch(urlActualizada, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: nameModificado.value,
        email: emailModificado.value,
        address: addressModificado.value,
        phone: phoneModificado.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        formularioParaModificar.classList.add("hidden");

        // obtenerUsuariosYHacerHTML(data);
        fetch(baseURL)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            crearLista(data);
          });
      });
  };
};
