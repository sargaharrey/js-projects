var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var password2 = document.querySelector('#password2');
var submit = document.querySelector('button');



submit.addEventListener('click',function(e){
    e.preventDefault();
    checkUser();
     checkEmail();
     checkPassword()
}) 




function checkUser(){
    var reg = /\d/;
    if (username.value == '' || username.value.match(reg)){
        username.style.border = '1px solid red';
    }
    else{
        username.style.border = '1px solid green';
    }
};

function checkEmail(){
    var reg = /.com/gi;
     var reg2 = /[a-z]/gi;
     var str = reg.test(email.value);
     var str2 = reg2.test(email.value);
     var arr = [];
      arr.push(str,str2)
    //  var full = str.input + email.value.match(reg);
    // var emailCh =  str.input.charAt(length).substring(0,9);
    // var str = email.value;
    // var res = str.charAt(str.length);
    if ( arr[0] && arr[1] ) {
        email.style.border = '1px solid green';
    }
    else {
        email.style.border = '1px solid red';
    }
}


function checkPassword(){
    if(password2.value == password.value){
        password.style.border = '1px solid green';
        password2.style.border = '1px solid green';
    }
    else{
        password.style.border = '1px solid green';
        password2.style.border = '1px solid red';
    }

}