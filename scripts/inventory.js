append()

function append() {

    let data = JSON.parse(localStorage.getItem("products")) || [];

    let container = document.getElementById("all_products");
    container.innerHTML=null;


    data.forEach((el,ind) => {

        console.log(el, el.desc)

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;

        let  p = document.createElement("h4")
        p.innerHTML = el.type;

        let p1 = document.createElement("h3");
        p1.innerHTML=el.desc;

        let p2 = document.createElement("p");
        p2.innerText = el.price;

        let btn = document.createElement("button");
        btn.innerText = "REMOVE";
        btn.setAttribute("id","remove_product");
        btn.addEventListener("click", function () {
            remove(ind);
        })

        div.append(img,p,p1,p2,btn);

        container.append(div);
        
    });

    
}


function remove(ind) {

    let data = JSON.parse(localStorage.getItem("products")) || [];

    let data1 = data.filter(function(el,i) {

        return i !== ind;

    })

    localStorage.setItem("products",JSON.stringify(data1));
    append();
}