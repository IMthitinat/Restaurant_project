
var searchLoginBTN = document.getElementById('loginBTN');
searchLoginBTN.addEventListener('click', login)

function login() {
    var userName = document.getElementById('username').value;
    var userPassword = document.getElementById('password').value;
    fetch('https://my-json-server.typicode.com/IMthitinat/RestaurantUserData/db')

    .then((response) => {
            return response.json();
        })
        .then((json) => {
            result = json.datas;
            var token = ""
            for (let i = 0; i < result.length; i++) {
                if (userName == result[i].Username && userPassword == result[i].Password) {
                    token = result[i]
                    break
                }
            }
            if (token != "") {
                window.location.href = "../Homepage/Homepage.html";
            } else {
                console.log("not found")
            }
        })
}