(function () {
    let timer = prompt("Enter the time(in 's')")*1000;

    setInterval(timeAlert, timer);

    setInterval(timeAlerts, 1000);

    for (let i = 0; i < timer/1000; i++) {
        console.log(i);
    }

    let i = 0;
    function timeAlerts() {
        i++;
        document.getElementById("demo").innerHTML += i + " ";
    }

    function timeAlert() {
        alert("Counted " + timer/1000 + " sec.");
    }




    // const element = document.getElementById("demo");
    // setInterval(function () { element.innerHTML += "Hello" }, 1000);





    // setInterval(displayHello, 1000);

    // function displayHello() {
    //     document.getElementById("demo").innerHTML += "Hello";
    // }
})();