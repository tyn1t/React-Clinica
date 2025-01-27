import { error } from "console";

async function GetData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/")
                                    .then(response => response)
                                    .catch(error => error);

    return response
}

console.log()

    interface ProPokemon {
        name:string,
        url:string
    }

    export default async function Pokemon(){
        
        const { results } = await GetData()
        
        const detailsPokemon = async () => {
            const ulr = results.map((p: ProPokemon) => (p.url))


            return await fetch(ulr)
                                .then(response => response.json())
                                .then(detailspokemon => detailspokemon.id)
                                .catch(error => error);
    }

    return (
        <>
            <main>
                <h1>Pokemon</h1>
                <ul>
                    {   
                        results 
                            ? results.map((p: ProPokemon) => (<li>{p.name}</li>))
                            : <></>
                    }
                </ul>
            </main>
        </>

    )
}