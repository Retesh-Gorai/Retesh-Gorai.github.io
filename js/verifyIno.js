window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.getElementById("submitBtn").addEventListener('click', onSubmitBtnClick);

    function onSubmitBtnClick() {
        var ino = document.getElementById("ino").value;
    
        var jsonObject = {
            "ino": ino,
        }
        console.log(jsonObject);

        const jsonString = JSON.stringify(jsonObject);
        console.log(jsonString);

        const xhr = new XMLHttpRequest();

        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState == XMLHttpRequest.DONE) {

        //         var datatext = xhr.responseText;
        //         var jsonResponse = JSON.parse(datatext);
        //         var status = jsonResponse.status;
        //         if (datatext === "ok"){
        //             alert("Verified");
        //         }
        //         else
        //             alert("Could not verify");

        //     }
        // }
        xhr.open("POST", "http://localhost:8020/approve");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin","*");
        xhr.send(jsonString);

    }


});
