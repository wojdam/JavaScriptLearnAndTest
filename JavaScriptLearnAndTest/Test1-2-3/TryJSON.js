var text = "{\"employees\":[" +
"{\"firstName\":\"John\",\"lastName\":\"Doe\" }," +
"{\"firstName\":\"Anna\",\"lastName\":\"Smith\" }," +
"{\"firstName\":\"Peter\",\"lastName\":\"Jones\" }]}";

var obj = JSON.parse(text);
console.log(obj);
console.log(obj.constructor);
console.log(obj["employees"][0]["firstName"]);
console.log(obj.employees[2].firstName);

var jsonObject = {
    "employees": [{ "firstName": "Martin", "lastName": "Vojik" },
                  { "firstName": "Tomas", "lastName": "Mintel" }
    ]
}

console.log(jsonObject);
console.log(jsonObject.employees[0].firstName);

var xmlHttpRequest = new XMLHttpRequest();
var path = "ListOfTutorials.txt";

xmlHttpRequest.onreadystatechange = function () {

    if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
        var myArr = JSON.parse(xmlHttpRequest.responseText);
        showMeResult(myArr);
    }
}

xmlHttpRequest.open("GET", path, true);
xmlHttpRequest.send();

function showMeResult(arr) {

    var out = "";

    for (var i = 0; i < arr.length; i++) {

        out += "<a href=\"" + arr[i].url + "\">" + arr[i].display + "</a><br>";
    }

    document.getElementById("idJSON").innerHTML = out;
}