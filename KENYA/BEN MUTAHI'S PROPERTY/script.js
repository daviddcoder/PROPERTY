
window.onload = ()=>{
    this.sessionStorage.setItem("username", "David-Nyakundi");
    this.sessionStorage.setItem("password", "DaViD-XYZ");

}

var input = document.getElementsByTagName('input');
var login = document.getElementById('log-in');
var form = document.querySelector('form');
form.onsubmit = ()=>{return false}

login.onclick = ()=>{
    if ((input[0].value !="") && (input[1].value != ""))
    {
        if ((input[0].value == sessionStorage.getItem("username", "sakaos_userooo")) && (input[1].value
            == sessionStorage.getItem("password")))
            {
                form.onsubmit = ()=>{return 1}
                document.cookie = "username"+input[0].value;
                document.cookie = "password"+input[1].value;
            }

    }
    else
    {
        if ((input[0].value != sessionStorage.getItem("username")))
        {
            input[0].nextElememtSibling.textContent = "username Not match";
            setTimeout(()=>{
                input[0].nextElementSibling.textcontent = "";
            },2000);

        }
        if (input[0].value != "")
        {
            input[0].nextElememtSibling.textContent = "password is empty";
            setTimeout(()=>{
                input[0].nextElementSibling.textcontent = "";
            },2000);
    }
}

