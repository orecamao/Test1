

 async function  name() {
   
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const pokemon  = await data.json();

}

name();

console.log('hola1');

