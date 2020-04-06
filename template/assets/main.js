$(document).ready(()=>{
    let token = localStorage.getItem('token')
    if(token){
        $("#table").show()
    }
    else{
        $("#login").show()
    }
})

$("loginForm").submit((event)=>{

    event.preventDefault()

    console.log("masuk sini")

    let obj = {
        email:$("#emailLogin").val(),
        password:$("#passwordLogin").val()
    }

    $.ajax({
        type:"POST",
        url:"http://localhost:3000/users/login",
        data:obj
    })
    .done(data=>{
        console.log(data,"entering here====================")
        localStorage.setItem("token",data.access_token)
        afterLogin()
    })
    .fail(err=>{
        console.log(err)
    })
})

function afterLogin(){
    $("#login").hide()
    $("#table").show()
}

function deleteFood(){
    let token = localStorage.getItem("token")
    // $.ajax("")
}