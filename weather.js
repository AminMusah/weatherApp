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
const greetings = document.querySelector('.greetings');

let suggestions = ['Abidjan','ACCRA','Adana','ADDIS ABABA','Adelaide','Agra','Ahmadabad','Aleppo','Alexandria','ALGIERS','Allahabad','ALMATY','AMMAN','Amritsar','ANKARA','Anshan',
'BAGHDAD','Baku','Bandung','Bangalore','BANGKOK','Baotou','Barcelona','Barquisimeto','Barranquilla','Basrah','BEIJING','BEIRUT','Belem','BELGRADE','Belo Horizonte','Benghazi','Benin','BERLIN','Bhopal','Birmingham','BOGOTA','BRASILIA','BRAZZAVILLE','Brisbane','BUCHAREST','BUDAPEST','BUENOS AIRES','Bursa','Busan',
'CAIRO','Cali','Campinas','Capetown','CARACAS','Casablanca','Changchun','Changsha','Changzhou','Chelyabinsk','Chengdu','Chennai','Chicago','Chittagong','Chongquin','Ciudad Juarez','CONAKRY','COPENHAGEN','Cordoba','Curitiba',
'Daegu','Daejon','DAKAR','Dalian','Dallas','DAMASCUS','DAR ES SALAAM','Datong','DELHI','DHAKA','Dnipropetrovsk','Donetsk','Douala','Durban',
'Ecatepec','Ekaterinburg','Faisalabad','Fortaleza','Foshan','FREETOWN','Fukuoka','Fuzhou','Giza','Goiania','Guadalajara','Guangzhou','Guarulhos','GUATAMALA CITY','Guayaquil','Guiyang','Gujranwala','Gwangju',
'Haiphong','Hamburg','Handan','Hangzhou','HANOI','Haora','HARARE','Harbin','HAVANA','Hefei','Hiroshima','Ho Chi Minh City','Hong Kong','Houston','Hyderabad','Hyderabad',
'Ibadan','Incheon','Indore','Irbil','Isfahen','Istanbul','Izmir','Jaipur','JAKARTA','Jeddah','Jilin','Jinan','Jodphur','Johannesburg',
'KABUL','Kaduna','Kano','Kanpur','Kaohsiung','Karachi','Kawasaki','Kazan','Kharkiv','KHARTOUM','Khulna','KIEV','KINSHASA','Kitakyushu','Kobe','Kolkata','Kowloon','KUALA LUMPUR','kumasi','Kunming','Kyoto',
'LA PAZ','Lagos','Lahore','Lanzhou','Leon','LIMA','LONDON','Los Angeles','LUANDA','Lubumbashi','Lucknow','Ludhiana','Luoyang','LUSAKA',
'MADRID','Maiduguri','Makassar','MANAGUA','Manaus','MANILA','MAPUTO','Maracaibo','Mashhad','Mecca','Medan','Medellin','Medina','Meerut','Melbourne','Mexicali','MEXICO CITY','Milan','MINSK','MOGADISHU','Monterrey','MONTEVIDEO','Montreal','MOSCOW','Mosul','Multan','Mumbai','Munich',
'Nagoya','Nagpur','NAIROBI','Nanchang','Nanjing','Nanning','Napoli','Nashik','New York City','Nezahualcoyotl','Nizhny Novgorod','Novosibirsk',
'Odessa','Omdurman','Omsk','Osaka','Palembang','PARIS','Patna','Perm','Perth','Peshawar','Philadelphia','PHNOM PENH','Phoenix','Pimpri','Port Harcourt','PORT-AU-PRINCE','Porto Alegre','PRAGUE','Puebla','Pune','PYONGYANG',
'Qingdao','Qiqihar','QUITO','RABAT','Rajkot','Ranchi','Rawalpindi','Recife','Rio de Janeiro','RIYADH','ROME','Rosario','Rostov on Don',
'Salvador','Samara','San Antonio','San Diego','SANAA','Santa Cruz','SANTIAGO','SANTO DOMINGO','Sao Paulo','Sapporo','Semarang','Sendai','Seongnam','Seoul','Shanghai','Shenyang','Shenzhen','Shiraz','Shiziahuang','Shubra El Kheima','SINGAPORE','SOFIA','Soweto','St Petersburg','STOCKHOLM','Surabaya','Surat','Suzhou','Sydney',
'Tabriz','Taichung','TAIPEI','Taiyuan','Tangshan','TASHKENT','TBILISI','Tegucigalpa','TEHRAN','Tianjin','Tijuana','TOKYO','Toronto','TRIPOLI','TSHWANE','TUNIS',
'Ufa','Ulsan','Urumqi','Vadodara','Valencia','Varanasi','VIENNA','Volgograd','WARSAW','Wuhan','Wuxi','Xian','Xuzhou','Yangon','YAOUNDE','Yerevan','Yokohama','Zapopan','Zhengzhou','Zibo'
];
 

 // DOM elemnts
let searchInput = document.querySelector('.search-input');
let inputBox = document.querySelector('input');
let suggestion = document.querySelector('.autoComplete-box');

 
 // Init web link
let webLink;
 
 // Set input value

inputBox.onkeyup = (event) => {
    // Get users data
    let usersData = event.target.value;
 
    // Init empty table
    let emptyArr = [];
 
    // If user data equal to true
    if(usersData) {
       emptyArr = suggestions.filter(data => (
          // Filtering array value, User charac to lowerCase and return only those...
          // ... word which are start with user entered word
          data.toLocaleLowerCase().startsWith(usersData.toLocaleLowerCase())
       ));
 
       // Result
       emptyArr = emptyArr.map(data => {
          return data = `<li>${data}</li>`;
       });
       // Show auto complete box
       searchInput.classList.add('active');
       
       // Call show suggestion
       showSuggestions(emptyArr);
 
       // All list
       let allList = document.querySelectorAll('li');
       allList.forEach(list => list.setAttribute('onclick', 'selectItem(this)'));
    } else {
       // Hide auto Complete box
       searchInput.classList.remove('active');
    }
 }
 
function selectItem(element) {
    let selectUserData = element.textContent;
    // Passing user select list item data in text field
    inputBox.value = selectUserData;
 
    // Hide auto Complete box
    searchInput.classList.remove('active');
}
 
 // Show suggestions
function showSuggestions(list) {
    // Init list result
    let listResult;
 
    if(!list.length) {
       // Set user value
       userValue = inputBox.value;
       listResult = `<li>${userValue}</li>`;
    } else {
       listResult = list.join('');
    }
 
    // AutoComplete
    suggestion.innerHTML = list
}



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
            console.log(data.name);
            
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


if ('serviceWorker' in  navigator) {
    navigator.serviceWorker.register('sw.js')
        .then((reg) => console.log('service worker registered', reg))
        .then((err) => console.log('service worker not registered', err))
}