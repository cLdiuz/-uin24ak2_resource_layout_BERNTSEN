//Starter med å lage en variabel categoryList som skal holde på informasjon som skrives ut
//i menyen.  
let categoryList = "";
//Mapper inn menyen ved hjelp av .map funksjonen og gjør slik at den skrives ut i HTML under nav ved hjelp av queryselector som 
//legger til listeelementene i navigasjonen. 
resources.map(category => categoryList += 
    `<li class=listcolor><a href="#">${category.category}</a></li>`)
document.querySelector("nav ul").innerHTML = categoryList

//Legger til en eventlistener til ul inne i nav. Gjør at man kan trykke på punktene i listen.
document.querySelector("nav ul").addEventListener("click", function(event){
//Henter teksten til elementet som ble klikket på ved hjelp av event.target.innerText og lagrer dette i mainarticle.
//Bruker .find metoden for å sjekke om resource.category er lik mainhtml variabelen. 
    const mainhtml = event.target.innerText
    const mainarticle = resources.find(resource => resource.category === mainhtml)

    
//Lager en variabel som ved hjelp av querySelector som refererer til "main" i HTML dokumentet og setter innerHTML til å vise 
//informasjonen som skal vises der ved hjelp av template literals.
        const mainInfo = document.querySelector("main")
        mainInfo.innerHTML = `
        <article id="${mainarticle.category}">
            <h2>${mainarticle.category}</h2>
            <p>${mainarticle.text}</p>
            <ul>
                ${mainarticle.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
            </ul>
        </article>`
    
});
/* //Kode for at knappene(Nav menyen) skal endre farge når man trykker på dem:
Kilde: 
this. : https://www.w3schools.com/js/js_this.asp
active: https://www.w3schools.com/howto/howto_js_active_element.asp
 */
const navLinks = document.querySelectorAll('nav li')

//Legger til click eventlistener som først fjerner active fra alle elementene og ved hjelp av this. setter active 
//på den man har trykket på. 
navLinks.forEach(item => {
    item.addEventListener('click', function() {
        navLinks.forEach(i => i.classList.remove('active'))
        this.classList.add('active')
    })
})

