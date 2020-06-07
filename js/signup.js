window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.getElementById("signupBtn").addEventListener('click', onSubmitClick);

    function onSubmitClick() {
        // alert("hi");
        
        var ino = document.getElementById("i_no").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var role = document.getElementById("role").value;
        var psw = document.getElementById("password").value;

        const jsonObject = {
            "ino": ino,
            "name": name,
            "email": email,
            "role": role,
            "password": psw
        }
    // console.log(jsonObject);
        // console.log(jsonObject);
        // //TODO Pass this jsonObject to the ajax call

        // const dummyData = {
        //     "name": "test",
        //     "salary": "123",
        //     "age": "23"
        // };

        const jsonString = JSON.stringify(jsonObject);
        // console.log(jsonString);
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                // alert(xhr.responseText);
                // console.log(xhr.responseText);
                // var datatext = xhr.responseText;
                // var jsonResponse = JSON.parse(datatext);
                // console.log("Your id is "+jsonResponse.id);
                alert("Registration Successful! " );
            }
        }
        xhr.open("POST", "http://localhost:8020/register");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin","*");
        xhr.send(jsonString);


    }


});

