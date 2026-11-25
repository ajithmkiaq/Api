function getStudent() {

    fetch("https://jsonplaceholder.typicode.com/users/5")

    .then(response => response.json())

    .then(data => {

        document.getElementById("result").innerHTML =
        "Name: " + data.name + "<br>" +
        "Email: " + data.email + "<br>" +
        "City: " + data.address.city;

    })

    .catch(error => {
        console.log("API Error:", error);
    });

}