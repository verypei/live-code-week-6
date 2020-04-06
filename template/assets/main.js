$(document).ready(()=>{
    let token = localStorage.getItem('token')
    if(token){
        $("#table").show()
        foodTable()
    }
    else{
        $("#login").show()
    }
})

$("#loginForm").submit((event)=>{

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

function foodTable(){
    let token = localStorage.getItem("token")

    $.ajax({
        type:"GET",
        url:"http://localhost:3000/foods",
        headers:{token:token}
    })
    .done(data=>{
        
        for (let index = 0; index < data.length; index++) {
            $("#appendTable").append(`
            <tr>
                <td>${data[i].title}</td>
                <td>${data[i].price}</td>
                <td>${data[i].ingredients}</td>
                <td>${data[i].tag}</td>
                <td>
                <button onclick = deleteFood(${data[i].id})>delete</button>
                </td>
            </tr>

            `)
            
        }
    })
    .fail()
}