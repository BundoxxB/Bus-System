function signup(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("Password").value;


if (name ==="" || email==="" || password==="") {
    alert("All fields are required!");
    return;
}  
let user = {
    name: name,
    email: email,
    password: password,
};

localStorage.setItem(email,JSON.stringify(user));
alert("signup successful!");
window.location.href = "Login.html";

}
function login(){
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginpassword").value;
     if(email ===""  password ==="") {
        alert("please fill all fields")
    return;
     }
   let user = Localstorage.getItem(email);

   if (user === null ) {
    alert("User not found!");
    return;
   }

   let userData = JSON.parse(user);

   if (userData.password ===password) {
    alert("Login Successful");
    window.location.href ="dashboard.html";
   } else {alert("Incorect password");
   }
   }

   function bookbus() {
    alert("Bus booked successfully (prototype)!");
   }

   function logout(){
   window.location.href ="login.html";
}

   function adminLogin(){
    let username =
    document.getElementId("adminUser").value;
     let password =
    document.getElementId("adminpass").value;

    if (username==="admin"&& password==="admin123"){
        alert("Admin login successful");
        window.location.href="reports.html"
    }else {
        alert("Invalid admin credential!")
    }
   }

   function generateReport(){
    let totalUsers = Localstorage.length;

    document.getElementById("reports").innerHTML = "Total Registerd Users:" + totalUsers;
   }

   function toggleForm() {
    const login = document.getElementById("login-form")
    const signup = document.getElementById("signup-form")

    if (login.style.display === "none"){
        login.style.display === "block";
        signup.style.display === "none";
    } else{
        login.style.display === "none"
        signup.style.display === "block"
    }

   }

   function signup() {
    const email =document.getElementById('signgup-email').value;
    const pass =document.getElementById('signgup-pass').value;

    if (email && pass){
        localstorage.setItem(email, pass);
        alert("account createdsuccesfully! please login")
        ;
    } else {
        alert("please fill in all fields.")
    }
   }

   function Login(){
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;

    const storedpass = localstorage.getItem(email);

    if ( storedpass && storedpass === pass){
        alert("Login Successfully welcome back.")
    }
   }


   function signgup() 
   {
    const user = document.getElementById('signup-user').value;
    const pass = document.getElementById('signup-pass').value;

    if (user && pass) {
        localStorage.setItem( user, pass);
           alert("account createdsuccesfully! please login")
        ;
    } else {
        alert("please fill in all fields.")
    }
   
    
}

function login(){
    const user = document.getElementById('login-user').value;
    const pass = document.getElementById('login-pass').value;
    const msg = document.getElementById('message');

    const storedpass = localstorage.getItem(user);

    if (storedpass === pass ) {
        msg.style.color = "green";
        msg.innerText = "Login successfull! welcome, " + user;
    } else {
        msg.style.color = "red";
        msg.innerText = "Invalid username or password.";
    }
    
}
