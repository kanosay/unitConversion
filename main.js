let input = document.getElementById('num');
let btn = document.getElementById('btn');
let value = document.querySelectorAll('.value');
let meas = {
    feet: 3.281,
    meters: 0.3048,
    gallon: 0.264,
    liter: 3.78,
    pounds: 2.204,
    kilo: 0.453592
}


btn.addEventListener('click', function() {
    for (let counter = 0; counter < value.length; counter++) {
        value[counter].innerHTML = input.value;
        if (input.value === 0) {
            value[counter].innerHTML = 0;
        }
    }

    let feet = document.getElementById('feet').innerHTML = Math.round(input.value * meas.feet);
    let meters = document.getElementById('meters').innerHTML = Math.round(input.value * meas.meters);
    let gallon = document.getElementById('gallon').innerHTML = Math.round(input.value * meas.gallon);
    let liter = document.getElementById('liter').innerHTML = Math.round(input.value * meas.liter);
    let pound = document.getElementById('pounds').innerHTML = Math.round(input.value * meas.pounds)
    let kilos = document.getElementById('kilos').innerHTML = Math.round(input.value * meas.kilo)
})