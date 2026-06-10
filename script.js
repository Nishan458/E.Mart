/* =========================
   ADMIN LOGIN
========================= */

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "123456";

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
