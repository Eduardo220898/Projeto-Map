const list = document.querySelector('ul')
const buttonShow = document.querySelector('.Show-All')
let myLy = ''


function showAll() {
    menuOptions.forEach((produtos) => {
        myLy += `
        <li>
            <img src="${produtos.src}" alt="${produtos.name}">
            <p>${produtos.name}</p>
            <p class="preco">R$ ${produtos.price.toFixed(2)}</p>
        </li>
    `
    })
    list.innerHTML = myLy
}

buttonShow.addEventListener('click', showAll)