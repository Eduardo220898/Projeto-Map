const list = document.querySelector('ul')
const produtos = { name: 'X-Bacon', price: 27, vegan: false, src: './assets/xbacon.png' }


list.innerHTML = `
        <li>
            <img src="${produtos.src}" alt="${produtos.name}">
            <p>${produtos.name}</p>
            <p class="preco">R$ ${produtos.price.toFixed(2)}</p>
        </li>
`
