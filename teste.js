
async function GetData(){
    const text = await fetch("https://pokeapi.co/api/v2/pokemon-species/")
    .then(response => response.json())
    .then(data => data.results);
}

console.log(GetData())
