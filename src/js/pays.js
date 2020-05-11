//SCROLLREVEAL
const sr = ScrollReveal();

var slideUp = {
    distance: '50%',
    origin: 'bottom',
    opacity: 0,
    duration: 1500,
    delay: 400,
};

var slideUp1 = {
    distance: '50%',
    origin: 'bottom',
    opacity: 0,
    duration: 1000,
    delay: 100,
};

sr.reveal('.divider-tbl', slideUp)

sr.reveal('.containertotal', slideUp)

sr.reveal('.banner-content', slideUp1)

sr.reveal('.heading-site', slideUp)

sr.reveal('.cards', slideUp)



//COVID19API
const numpays = prompt("Quelle pays voulez-vous rechercher ?");

const notyf1 = new Notyf({
    duration: 4000,
    dismissible: true,
})

if (!numpays) {
    alert('(!) Veuillez indiquer un pays.')
    window.history.back()
}

window.fetch(`https://covid-193.p.rapidapi.com/statistics?country=${numpays}`,
{
    "async": true,
    "crossDomain": true,
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "d749563cacmsh5e89f4481d92967p1d08d7jsn61aa775c0131"
    }
})
    .then(res3 => res3.json())
    .then(json3 => {
        console.log(json3);

        if (json3.results === 0) {
            notyf1.error('Pays non-existant !')
            alert(`Le pays ${numpays} n'existe pas.\nVeillez à ce que le nom du pays soit en anglais.`)
            window.history.back()
        } else {
            notyf1.success({
                message: `Pays trouvé !`,
            })
        }

        var nbrelement7 = json3.response[0].cases.new
        if (nbrelement7 == null) {
            nbrelement7 = 0
        } else {
            nbrelement7 = (json3.response[0].cases.new).substr(1);
        }

        var nbrelement12 = json3.response[0].deaths.new
        if (nbrelement12 == null) {
            nbrelement12 = 0
        } else {
            nbrelement12 = (json3.response[0].deaths.new).substr(1);
        }
    
        var element0 = document.getElementById("CountryName");
        element0.innerHTML = `Bienvenue en ${json3.response[0].country}`;
        var element17 = document.getElementById("CountrySub");
        element17.innerHTML = `Tout savoir sur le Coronavirus en ${json3.response[0].country}`;
        var element = document.getElementById('CovidCases');
        element.innerHTML = `${(json3.response[0].cases.total).toLocaleString('en-US')}`;
        //var element2 = document.getElementById('maj');
        //element2.innerHTML = `Dernière mise à jour : ${json3.response[0].time}`;
        var element3 = document.getElementById('CovidDeaths');
        element3.innerHTML = `${(json3.response[0].deaths.total).toLocaleString('en-US')}`;
        var element4 = document.getElementById('CovidRecovered');
        element4.innerHTML = `${(json3.response[0].cases.recovered).toLocaleString('en-US')}`;
        var element5 = document.getElementById('CovidActive');
        element5.innerHTML = `${(json3.response[0].cases.active).toLocaleString('en-US')}`;
        var element6 = document.getElementById('CovidCritical');
        element6.innerHTML = `${(json3.response[0].cases.critical).toLocaleString('en-US')}`;
        var element18 = document.getElementById('CovidACritical');
        element18.innerHTML = `${Math.round((100 * json3.response[0].cases.critical) / json3.response[0].cases.active)}% de cas critiques`;
        var element11 = document.getElementById('CovidMild');
        element11.innerHTML = `${Math.round((100 * (json3.response[0].cases.active - json3.response[0].cases.critical)) / json3.response[0].cases.active)}% de cas légers`
        var element13 = document.getElementById('CovidDesactive');
        element13.innerHTML = `${(json3.response[0].cases.total - json3.response[0].cases.active).toLocaleString('en-US')}`;
        var element14 = document.getElementById('CovidADeaths');
        element14.innerHTML = `${Math.round((100 * json3.response[0].deaths.total) / (json3.response[0].cases.total - json3.response[0].cases.active))}% de décès`;
        var element15 = document.getElementById('CovidARecovered');
        element15.innerHTML = `${Math.round((100 * json3.response[0].cases.recovered) / (json3.response[0].cases.total - json3.response[0].cases.active))}% de guéris`;
        var element7 = document.getElementById('CovidNewCases');
        element7.innerHTML = `+${(parseInt(nbrelement7)).toLocaleString('en-US')}`;
        var element12 = document.getElementById('CovidNewDeaths');
        element12.innerHTML = `+${(parseInt(nbrelement12)).toLocaleString('en-US')}`;
        console.log(json3.response[0].cases.total - json3.response[0].cases.active)
        console.log(`guéris : ${(json3.response[0].cases.recovered)}`);




        if (json3.response[0].cases.total !== 0) {
            $(document).ready(function() {
                $(".progressbar").fadeOut(2000);
            })
        }
    
    
    
    
})