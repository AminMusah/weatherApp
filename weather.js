const input = document.querySelector('.input-value');
const search = document.querySelector('.fa-search');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const hum = document.querySelector('.hum');
const time = document.querySelector('.date');
const spin = document.querySelector('.fa-spinner');
const weather = document.querySelector('.weather-info');
const greetings =document.querySelector('.greetings');


window.addEventListener('load', () => {
    spin.style.display = 'none';
})

search.addEventListener('click', weatherInfo)

function weatherInfo() {  
    greetings.style.display = 'none';
    spin.style.display = 'flex';
    spin.style.animation = "spin 1s infinite"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=b2ac454ab6011b172cdc9e71696f338f`)
        .then(response => response.json())
        .then(data => {
            let cityName = data.name;
            let temperature = data.main.temp;
            let description = data.weather[0].description;
            let windSpeed = data.wind.speed;
            let humidity = data.main.humidity;

            name.innerHTML = `<i class="fas fa-map-marked-alt"></i> ${cityName}`;
            temp.innerHTML = `<i class="fas fa-temperature-low"> Temp - ${temperature}&#8451;`;
            desc.innerHTML = `<i class="fas fa-cloud"></i> ${description}`;
            wind.innerHTML = `<i class="fas fa-wind"> wind Speed - ${windSpeed}m/s`;
            hum.innerHTML = `<i class="fas fa-tint"></i> Humidity - ${humidity}%`;
            spin.style.display = 'none';
            input.value = '';
            input.focus();

            console.log(data);
            
            let date = new Date();
            time.innerHTML = date.toDateString();
            
        })
        .catch(error => alert('Wrong input!'))

        weather.style.display = 'flex';

        save()
}

input.addEventListener('keyup', e => {
    if(e.keyCode === 13) {
        weatherInfo();
    }
})
function save() {

    let newData = input.value

    if (localStorage.getItem('data') === null) {
        localStorage.setItem('data', '[]')
    }

    let oldData = JSON.parse(localStorage.getItem('data'));
    oldData.push(newData);

    localStorage.setItem('data', JSON.stringify(oldData));
}
save()


if ('serviceWorker' in  navigator) {
    navigator.serviceWorker.register('sw.js')
        .then((reg) => console.log('service worker registered', reg))
        .then((err) => console.log('service worker not registered', err))
}