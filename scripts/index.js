//store the products array in localstorage as "products"

function product(t,d,p,i) {
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}


function storeProduct(e) {
    e.preventDefault();

    let prodetails = document.getElementById("products");

    let type = prodetails.type.value;
    let desc = prodetails.desc.value;
    let price = prodetails.price.value;
    let image = prodetails.image.value;

    let s1 = new product (type, desc, price, image);

    let data = JSON.parse(localStorage.getItem("products")) || [];

    data.push(s1);

    localStorage.setItem("products",JSON.stringify(data));

    document.getElementById("products").reset();
}