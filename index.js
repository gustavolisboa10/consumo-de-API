// Crie uma matriz com pares de números representando as cartas
const cards = [1,1,2,2,3,3,4,4]

// Crie um objeto para armazenar as imagens correspondentes para cada carta
async function generateImagePairs(){
    const imagePairs = {}
    for(let i = 0; i < cards.length; i++ ){
            if(!imagePairs[cards[i]]){
                const id = Math.floor(Math.random() * 1000)+ 1 // para gerar id aleatorio 
                const acessApiUrl = `https://picsum.photos/id/${id}/300/400`
                imagePairs[cards[i]] = [acessApiUrl,acessApiUrl] // dobra de imagem 
            }
        }
    console.log(imagePairs)
    return imagePairs
}

function shuffleCards(cards){
    cards.sort(()=> Math.random() - 0.5)

}

async function createCard(){

    const imagePairs = await generateImagePairs()
    shuffleCards(cards)

    console.log(cards)
}

createCard()