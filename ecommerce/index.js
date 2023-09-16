function searchProductList(searchTerm) {
    console.log("searchTerm", searchTerm)
    let products = [
        {
            name: "Pedigree Dog food",
            price: 8.94
        },
        {
            name: "Pedigree wet dog food",
            price: 8.94
        },
        {
            name: "Blue ribbon Dog food",
            price: 8.94
        },
        {
            name: "macbook pro",
            price: 2900
        },
        {
            name: "potatoes",
            price: 3.74
        }
    ]

    return new Promise(function (resolve, reject) {
        //no search return home screen
        if(searchTerm === undefined || searchTerm === ''){
            resolve(products)
        }
        //they searched
        else {
            resolve(products.filter(p => p.name.toLowerCase() === searchTerm.toLowerCase()))
        }
        
    })
}

//build the page
async function buildSearchPage() {
    //clear results
    let productsContainer = document.querySelector("#products-container")
    productsContainer.innerHTML = ""
    //get filters
    // let filters = await getAvailableFilters()
    // displayFilters(filters)
    let userFilters = {
        brand: "Pedigree",
        type: "dry"
    }
    //gets my search input
    let searchTermInput = document.querySelector("#product-search-input")

    let products = await searchProductList(searchTermInput.value)
    
    // No results for asdofijsdaoifjasdoifjiopjf.Try checking your spelling or use more general terms
    if(products === null || products.length === 0){
        //display error
        let noResultsMessage = document.createElement("p")
        noResultsMessage.textContent = "No results for: " + searchTermInput.value
        productsContainer.append(noResultsMessage)
    }else {
        //assume I can draw on screen, how to get the products?
        products.forEach(p => addProductCard(p.name,p.price))

    }
}
buildSearchPage()

function messageStudents() {
    alert("This is much better, please use the pattern of js code in .js and html in html")
}

//selecting elements
// let searchForm = document.querySelector("#search-form")
// console.log(searchForm)


//brittle can break
// console.log(document.querySelector("button"))
// console.log(searchForm.children[1])

let searchButton = document.querySelector("#search-button")
console.log("selected by id",searchButton)
searchButton.addEventListener('click',function (){
    buildSearchPage()
})

// let productCards = document.querySelectorAll(".product-card")
// console.log("selected by class", productCards)


//js can change the style elements but can get unwieldy with too much
// document.querySelector(".product-price").style.color = "greeen"

{/* 
<div class="product-card">
    <h2 class="product-title">Blue ribbon dog food</h2>
    <p>$59.99</p>
</div> 
*/}
function addProductCard(productName, productPrice) {

    //i'm assemblying an h2
    let productsContainer = document.querySelector("#products-container")

    console.log("conatiner", productsContainer)

    let productCard = document.createElement("div")
    //allows you to add any html attribute and value
    productCard.setAttribute("class", "product-card")

    let productHeader = document.createElement("h2")
    productHeader.textContent = productName

    //install the part onto house
    //a better place would products container right?
    productCard.append(productHeader)

    //How to create price paragrahp
    let priceP = document.createElement('p')
    priceP.textContent = productPrice
    productCard.append(priceP)

    //append product card to container
    productsContainer.append(productCard)

}

// addProductCard("Pedigree dog food", "$59.99")


