console.log("1. Executam codul nostru");
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response) {
    // se executa asyncron
    console.log("2. Vin datele de la server");
    console.log(response);
    return response.json();
  })
  .then(function (value) {
    console.log(value);
  });
console.log("3. Dupa ce au venit datele");
// orice cod avem aici
// while(true){
//   console.log('------------') // va bloca pagina
// }
