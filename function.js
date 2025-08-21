function loginFunction() {
    let useremail = document.getElementById("userName").value.trim();
    let username = document.getElementById("userEmail").value.trim();
    let userpassword = document.getElementById("userPassword").value.trim();

    if(useremail === "" || username === "" || userpassword === "") {
        alert("Please fill in all fields!");
        return;
    }

    alert("login Successfull")
    window.location.href = "./Figma-website/index.html";

}