window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.getElementById("loginbtn").addEventListener('click', onSubmitClick);

    function onSubmitClick() {
        // alert("hi");
        
        var i_no = document.getElementById("i_no").value;
        var psw = document.getElementById("password").value;

        var jsonObject = {
            "i_no": i_no,
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
                var datatext = xhr.responseText;
                var jsonResponse = JSON.parse(datatext);
                // console.log("Your id is "+jsonResponse.id);
                var status = jsonResponse.status;
                if (status == 200){
                    window.location.href = "homeDummy.html";
                }
                else
                    alert("Wrong Credentials")
                
            }
        }
        xhr.open("POST", "http://localhost:8020/login");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin",'*');
        xhr.send(jsonString);


    }


});

