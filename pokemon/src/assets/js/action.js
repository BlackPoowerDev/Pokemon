const container = document.querySelector('.wrapper')
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    ghost: '#eaeda1',
    fighting: '#E6E0D4',
    ice: '#97b3e6',
    normal: '#F5F5F5'
}

async function pokemonIds(){
    for (let index = 1; index < 14; index++) {
        await getResult(index)
    }
}
async function getResult(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const json = await response.json()
    await pokemon(json)
}
async function pokemon(poke){
    const nome = poke.name
    const foto = poke.sprites.other.dream_world.front_default
    const tipo = poke.types[0].type.name
    const id = poke.id.toString().padStart(3, '0')

    const card = document.createElement('div')
    card.classList.add('card-pokemon')

    const poketypes = poke.types.map( el => el.type.name)
    const type = poketypes.find(el => poketypes.indexOf(el) -1)

    const color = colors[type]
    card.style.background = `${color}`

    card.innerHTML = `<div class="card-img"><picture><img src="${foto}" alt="pikatchu"></picture></div><div class="card-text"><p>#${id}</p><p>${nome}</p><p>${tipo}</p></div>`
    container.appendChild(card)
    

}
pokemonIds()   