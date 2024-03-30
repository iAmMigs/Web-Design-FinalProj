const product = [
    {
        id: 1,
        image: 'image/ticket.jpg',
        title: 'Wonder Ticket',
        price: 289.00,
    },
    {
        id: 2,
        image: 'image/box.jpg',
        title: 'Rocket Box',
        price: 289.00,
    },
    {
        id: 3,
        image: 'image/coin-small.jpg',
        title: '600 PokeCoins',
        price: 149.00,
    },
    {
        id: 4,
        image: 'image/coin-medium.jpg',
        title: '1,300 PokeCoins',
        price: 289.00,
    },
    {
        id: 5,
        image: 'image/coin-large.jpg',
        title: '2,700 PokeCoins',
        price: 589.00,
    },
    {
        id: 6,
        image: 'image/coin-xlarge.jpg',
        title: '5,600 PokeCoins',
        price: 1169.00,
    },
    {
        id: 7,
        image: 'image/coin-xxlarge.jpg',
        title: '15,500 PokeCoins',
        price: 2950.00,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>PHP ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Php "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Php "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Php ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}

function checkout() {
    
    window.alert("Thank you for Purchasing!");
    window.location.href = "loggedindex.html"
}

function cancel() {
    window.alert("Cancelling Order...");
    window.location.href = "loggedindex.html"
}