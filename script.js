//Função assíncrona
async function getAllCharacter() {

    //Requisição com método fetch
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const characters = await data.results;




    //Utilizando DOM para adicionar o char na pagina
    const charactersElement = document.getElementById('items');
    characters.forEach(character => {
        const charElement = document.createElement('div');
        charElement.classList.add("item")
        charElement.innerHTML = `
            <img src="${character.image}" alt="${character.name}" />
            <li>${character.name}</li>
            <li>${character.species}</li>
            <li>${character.origin.name}</li>
        `;
        charactersElement.appendChild(charElement)
        
        charElement.addEventListener('click', () => {
            view(character.id)
          })
    });


    charactersElement.addEventListener("wheel", event => {
        if (event.deltaY > 0) {
            event.target.scrollBy(300, 0)
        } else {
            event.target.scrollBy(-300, 0)
        }
    })

    
};
getAllCharacter();

