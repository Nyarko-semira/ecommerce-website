const product = [

    {
        id: 0,
        image: 'images/5bRBli0s.jpeg',
        title: 'head set',
        price: 120,


    },


    {
        id: 1,
        image: 'images/5vMjO_R4.jpeg',
        title: 'galaxy fold',
        price: 620,


    },

    {
        id: 2,
        image: 'images/7ujsN-b0.jpeg',
        title: 'bluetooth set',
        price: 95,


    },



    {
        id: 3,
        image: 'images/rUOdoU3o.jpeg',
        title: 'camera set',
        price: 450,


    },




];

const categories = [...new Set(product.map((item) => { return item }))]

let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (

        `<div class="box">
    <div class= 'img-box'>
    <img class= 'images' src=${image}></img>
    </div>

    <div class = 'buttom'>
    <p>${title}</p>
    <h2>$ ${price}.00 </h2> ` + "<button onclick ='addtocart(" + (i++) + ")'>Add to cart</button>" + ` </div>
    </div>`


    )


}).join(' ');


var cart = [];
function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();


}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartitem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
    else {
        document.getElementById("cartitem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }



}





