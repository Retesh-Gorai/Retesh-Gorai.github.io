window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.getElementById("submitBtn").addEventListener('click', onSubmitBtnClick);

    function onSubmitBtnClick() {

        var startDate = document.getElementById("startDate").value;
        var endDate = document.getElementById("endDate").value;
        var comment = document.getElementById("comment").value;

        var jsonObject = {
            "startdate": startDate,
            "enddate": endDate,
            "comment":comment
        }
        console.log(jsonObject);

        const jsonString = JSON.stringify(jsonObject);
        console.log(jsonString);

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {

                var datatext = xhr.responseText;
                var jsonResponse = JSON.parse(datatext);
                var status = jsonResponse.status;
                if (status == 200){
                    alert("Leave Requested Successfully");
                }
                else
                    alert("Could not communicate with server");

            }
        }
        xhr.open("POST", "http://localhost:8020/applyLeave");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin",'*');
        xhr.send(jsonString);

    }


});
