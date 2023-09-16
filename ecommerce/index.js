function searchProductList(searchTerm) {

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
        resolve(products.filter(p => p.name.toLowerCase() === searchTerm.toLowerCase()))
    })
}

function getAvailableFilters(){
    return new Promise((resolve, reject) => {
        let availableFilters = {
            brands: ["Blue ribbon", "Pedigree", "Amazon Basics"],
            types: ["wet", "dry"],
            minPrice: 0,
            maxPrice: 600
        }
        resolve(availableFilters)
    })
}
function displayFilters(){}
function displayProducts() {}
//build the page
async function buildSearchPage() {
    debugger
    let userSearchTerm = prompt("Enter the product you want to search")
    if (userSearchTerm === undefined) {
        console.log("go to homescreen")
    }
    //get filters
    let filters = await getAvailableFilters()
    displayFilters(filters)
    let userFilters = {
        brand: "Pedigree",
        type: "dry"
    }
    let products = await searchProductList(userSearchTerm,userFilters)
    //assume I can draw on screen, how to get the products?
    displayProducts(products)
}


function searchProducts(){
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
    console.log(products)
}

function messageStudents(){
    alert("This is much better, please use the pattern of js code in .js and html in html")
}

//selecting elements
let searchForm = document.querySelector("#search-form")
console.log(searchForm)


//brittle can break
// console.log(document.querySelector("button"))
// console.log(searchForm.children[1])

let searchButton = document.querySelector("#search-button")
console.log("selected by id",searchButton)

let productCards = document.querySelectorAll(".product-card")
console.log("selected by class", productCards)


//js can change the style elements but can get unwieldy with too much
document.querySelector(".product-price").style.color = "greeen"