/* =========================
   DEFAULT PRODUCTS
========================= */

const products = [
{
    id:1,
    name:"Black T-Shirt",
    price:699,
    image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
},
{
    id:2,
    name:"White T-Shirt",
    price:799,
    image:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500"
},
{
    id:3,
    name:"Blue Polo Shirt",
    price:999,
    image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"
},
{
    id:4,
    name:"Formal Shirt",
    price:1499,
    image:"https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500"
}
];


/* =========================
   CART SYSTEM
========================= */

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

function addToCart(id){

    const product =
    products.find(
        p => p.id === id
    );

    if(product){

        cart.push(product);

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        updateCartCount();

        alert(
            product.name +
            " added to cart"
        );
    }
}

function updateCartCount(){

    const cartCount =
    document.getElementById("cartCount");

    if(cartCount){
        cartCount.innerText =
        cart.length;
    }
}

updateCartCount();


/* =========================
   USER SIGNUP
========================= */

function signupUser(){

    const user = {

        name:
        document.getElementById(
            "signupName"
        ).value,

        email:
        document.getElementById(
            "signupEmail"
        ).value,

        password:
        document.getElementById(
            "signupPassword"
        ).value
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    alert(
        "Account Created Successfully"
    );

    window.location.href =
    "login.html";
}


/* =========================
   USER LOGIN
========================= */

function loginUser(){

    const email =
    document.getElementById(
        "loginEmail"
    ).value;

    const password =
    document.getElementById(
        "loginPassword"
    ).value;

    const user =
    JSON.parse(
        localStorage.getItem("user")
    );

    if(
        user &&
        user.email === email &&
        user.password === password
    ){

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        alert(
            "Login Successful"
        );

        window.location.href =
        "index.html";

    }else{

        alert(
            "Invalid Email or Password"
        );
    }
}


/* =========================
   LOGOUT
========================= */

function logoutUser(){

    localStorage.removeItem(
        "loggedIn"
    );

    alert(
        "Logged Out Successfully"
    );

    window.location.href =
    "login.html";
}


/* =========================
   ADMIN ADD PRODUCT
========================= */

function addProduct(){

    let adminProducts =
    JSON.parse(
        localStorage.getItem(
            "adminProducts"
        )
    ) || [];

    const name =
    document.getElementById(
        "productName"
    ).value;

    const price =
    document.getElementById(
        "productPrice"
    ).value;

    const image =
    document.getElementById(
        "productImage"
    ).value;

    const product = {

        name:name,
        price:price,
        image:image
    };

    adminProducts.push(
        product
    );

    localStorage.setItem(
        "adminProducts",
        JSON.stringify(
            adminProducts
        )
    );

    alert(
        "Product Added Successfully"
    );

    displayProducts();

    document.getElementById(
        "productName"
    ).value = "";

    document.getElementById(
        "productPrice"
    ).value = "";

    document.getElementById(
        "productImage"
    ).value = "";
}


/* =========================
   DISPLAY PRODUCTS
========================= */

function displayProducts(){

    const productList =
    document.getElementById(
        "productList"
    );

    if(!productList) return;

    let adminProducts =
    JSON.parse(
        localStorage.getItem(
            "adminProducts"
        )
    ) || [];

    productList.innerHTML = "";

    adminProducts.forEach(
    (product,index)=>{

        productList.innerHTML +=

        `
        <div class="card">

            <img src="${product.image}">

            <h3>${product.name}</h3>

            <p class="price">
            ৳${product.price}
            </p>

            <button onclick=
            "deleteProduct(${index})">

            Delete

            </button>

        </div>
        `;
    });
}


/* =========================
   DELETE PRODUCT
========================= */

function deleteProduct(index){

    let adminProducts =
    JSON.parse(
        localStorage.getItem(
            "adminProducts"
        )
    ) || [];

    adminProducts.splice(
        index,
        1
    );

    localStorage.setItem(
        "adminProducts",
        JSON.stringify(
            adminProducts
        )
    );

    displayProducts();

    loadHomepageProducts();
}


/* =========================
   HOMEPAGE PRODUCTS
========================= */

function loadHomepageProducts(){

    const dynamicProducts =
    document.getElementById(
        "dynamicProducts"
    );

    if(!dynamicProducts) return;

    let adminProducts =
    JSON.parse(
        localStorage.getItem(
            "adminProducts"
        )
    ) || [];

    dynamicProducts.innerHTML = "";

    adminProducts.forEach(
    (product)=>{

        dynamicProducts.innerHTML +=

        `
        <div class="card">

            <img src="${product.image}">

            <h3>${product.name}</h3>

            <p class="price">
            ৳${product.price}
            </p>

        </div>
        `;
    });
}


/* =========================
   PAGE LOAD
========================= */

document.addEventListener(
"DOMContentLoaded",
function(){

    updateCartCount();

    displayProducts();

    loadHomepageProducts();

});
/* =========================
   ADMIN LOGIN
========================= */

const ADMIN_USERNAME = "nishan";
const ADMIN_PASSWORD = "2016081";

function adminLogin(){

    const username =
    document.getElementById(
        "adminUsername"
    ).value;

    const password =
    document.getElementById(
        "adminPassword"
    ).value;

    if(
        username === ADMIN_USERNAME &&
        password === ADMIN_PASSWORD
    ){

        localStorage.setItem(
            "adminLoggedIn",
            "true"
        );

        showAdminDashboard();

        alert(
            "Admin Login Successful"
        );

    }else{

        alert(
            "Wrong Username or Password"
        );
    }
}


/* =========================
   ADMIN LOGOUT
========================= */

function adminLogout(){

    localStorage.removeItem(
        "adminLoggedIn"
    );

    location.reload();
}


/* =========================
   SHOW ADMIN DASHBOARD
========================= */

function showAdminDashboard(){

    const loginSection =
    document.getElementById(
        "loginSection"
    );

    const dashboard =
    document.getElementById(
        "adminDashboard"
    );

    if(loginSection){
        loginSection.style.display =
        "none";
    }

    if(dashboard){
        dashboard.style.display =
        "block";
    }
}


/* =========================
   CHECK ADMIN LOGIN
========================= */

document.addEventListener(
"DOMContentLoaded",
function(){

    if(
        localStorage.getItem(
            "adminLoggedIn"
        ) === "true"
    ){

        showAdminDashboard();
    }
});
