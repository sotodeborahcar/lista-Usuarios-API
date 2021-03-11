// operaciones basicas para crear informacion:
// CRUD => create update delete
// ABM => alta baja modificacion

// 🌼 🌼 🌼 metodos HTTP son: 🌼 🌼 🌼

// GET     leer
// POST    crear
// PUT      modificar
// PATCH   modificar
// DELETE  borrar

// Fetch(‘url ‘, {
//   method: (‘GET/POST/PUT/DELETE ‘,        //optional
//   headers: {                              //optional
//       Content-Type ‘: application/json ‘  //optional
//       ...
//   },
//   body: formData                          //optional
// })
// .then(res => res.json())
// .then(json => console.log(json))

// 🌼 USO EL METODO GET => (pide informacion)

// fetch("https://601da02bbe5f340017a19d60.mockapi.io/users")
//   .then((res) => res.json())
//   .then((data) => {
//     // puedo leer la informacion que recibi
//     console.log(data);
//   });

// 🌼 USO DEL METODO POST =>

// para todos los demas metodos voy a usar dos parametros:
// sirve para crear informacion, le enviamos un objeto con toda la info

// todo post tienen igual que html:
// headers
// body
// JSON => javascript objet notation, se la utiliza para enviar informacion a las APIs atraves de la web (cadena de caracteres , "strings")

// fetch("https://601da02bbe5f340017a19d60.mockapi.io/users", {
//   method: "post",
//   headers: {
//     "Content-Type": "application/json", // me indica el tipo de formato en la que le envio la informacion
//   },
//   body: JSON.stringify({
//     address: "av real 1234",
//     email: "homerito@hotmail.com",
//     fullname: "Homero Pepo",
//     phone: "1-345-5678-0022",
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("lo que recibo del post", data);

//     fetch("https://601da02bbe5f340017a19d60.mockapi.io/users")
//       .then((res2) => res2.json())
//       .then((data2) => {
//         console.log("lo que recibo del get", data2);
//       });
//   });

// const objeto = {
//   nombre: "Ana",
//   apellido: "Bolena",
// };

// console.log("objeto", objeto);

// const stringDeJson = JSON.stringify({
//   nombre: "Ana",
//   apellido: "Bolena",
// });
// console.log("de objeto a string en formato JSON", stringDeJson);
// console.log("de string de JSON a objeto", JSON.parse(stringDeJson));

// fetch("https://601da02bbe5f340017a19d60.mockapi.io/users")
//   .then((res) => res.json())
//   .then((data) => {
//     // puedo leer la informacion que recibi
//     console.log(data);
//   });

// 🌼 DELETE
// permite eliminar informacion de una API
// generalmente sera la ruta de la coleccion donde esta esa info /id del elemento

// fetch("https://601da02bbe5f340017a19d60.mockapi.io/users/98", {
//   method: "delete",
//   headers: {}, //(a veces, algunas apis piden headers para metodo delete. este no)
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// 🌼 PUT
// 🌼 PATCH ==> SE LO USA MAL

// ambos metodos sirven para modificar informacion
// en teoria el PUT recibe la info COMPLETA de un recurso que ya existe en la API
// y el PATCH recibe informacion PARCIAL de un recurso que ya existe en la API

// ==> 🌼 PUT: supongamos que tengo un objeto "homerito" a quien le quiero cambiar el nombre por "violeta"

// fetch("https://601da02bbe5f340017a19d60.mockapi.io/users/97", {
//   method: "put",
//   headers: {
//     "Content-Type": "application/json", // me indica el tipo de formato en la que le envio la informacion
//   },
//   body: JSON.stringify({
//     address: "av monte 333",
//     email: "violeta@hotmail.com",
//     fullname: "Violeta Flores",
//     phone: "345-567-022",
//   }),
// });

// ==> 🌼 PATCH : mando solo una parte del objeto a modificar

// fetch("https://601da02bbe5f340017a19d60.mockapi.io/users/97", {
//   method: "patch",
//   headers: {
//     "Content-Type": "application/json", // me indica el tipo de formato en la que le envio la informacion
//   },
//   body: JSON.stringify({
//     fullname: "Camilo Sexto",
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// ME DA ERROR porque la api no esta preparada....
