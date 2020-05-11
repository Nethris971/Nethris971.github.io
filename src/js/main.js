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

sr.reveal('section', slideUp);

sr.reveal('.containertotal', slideUp)

sr.reveal('.banner-content', slideUp1)

sr.reveal('.heading-site', slideUp)

sr.reveal('.heading-site1', slideUp)

sr.reveal('.divider-tbl', slideUp)

sr.reveal('.cards', slideUp)

sr.reveal('.subsub', slideUp)



//COVID19API
window.fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
		"x-rapidapi-key": "d749563cacmsh5e89f4481d92967p1d08d7jsn61aa775c0131"
	}
})
.then(response => response.json())
.then(json1 => {

	window.fetch("https://covid-193.p.rapidapi.com/statistics?country=All", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "covid-193.p.rapidapi.com",
			"x-rapidapi-key": "d749563cacmsh5e89f4481d92967p1d08d7jsn61aa775c0131"
		}
	})
	.then(res => res.json())
	.then(resJson => {
		console.log(resJson)

		window.fetch(`https://covid-19-data.p.rapidapi.com/totals?format=json`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
				"x-rapidapi-key": "d749563cacmsh5e89f4481d92967p1d08d7jsn61aa775c0131"
			}
		})
		.then(response => response.json())
		.then(json => {
			console.log(json[0])
		
			var nbrelement7 = (resJson.response[0].cases.new).substr(1);
			var nbrelement12 = (resJson.response[0].deaths.new).substr(1);
			var nbrActive = json[0].confirmed - (json[0].deaths + json[0].recovered);
		
			var element = document.getElementById('CovidCases');
			element.innerHTML = `${(json[0].confirmed).toLocaleString('en-US')}`;
			//var element2 = document.getElementById('maj');
			//element2.innerHTML = `Dernière mise à jour : ${json[0].lastUpdate}`;
			var element3 = document.getElementById('CovidDeaths');
			element3.innerHTML = `${(json[0].deaths).toLocaleString('en-US')}`;
			var element4 = document.getElementById('CovidRecovered');
			element4.innerHTML = `${(json[0].recovered).toLocaleString('en-US')}`;
			var element5 = document.getElementById('CovidActive');
            element5.innerHTML = `${(nbrActive).toLocaleString('en-US')}`;
            var element16 = document.getElementById('CovidCritical');
			element16.innerHTML = `${(json[0].critical).toLocaleString('en-US')}`;
			var element6 = document.getElementById('CovidACritical');
			element6.innerHTML = `${Math.round((100 * json[0].critical) / (json[0].confirmed - (json[0].deaths + json[0].recovered)))}% de cas critiques`;
			var element11 = document.getElementById('CovidMild');
			element11.innerHTML = `${Math.round((100 * (nbrActive - json[0].critical)) / nbrActive)}% de cas légers`
			var element13 = document.getElementById('CovidDesactive');
			element13.innerHTML = `${(json[0].confirmed - nbrActive).toLocaleString('en-US')}`;
			var element14 = document.getElementById('CovidADeaths');
			element14.innerHTML = `${Math.round((100 * json[0].deaths) / (json[0].confirmed - nbrActive))}% de décès`;
			var element15 = document.getElementById('CovidARecovered');
			element15.innerHTML = `${Math.round((100 * json[0].recovered) / (json[0].confirmed - nbrActive))}% de guéris`;
			var element7 = document.getElementById('CovidNewCases');
			element7.innerHTML = `+${(parseInt(nbrelement7)).toLocaleString('en-US')}`;
			var element12 = document.getElementById('CovidNewDeaths');
			element12.innerHTML = `+${(parseInt(nbrelement12)).toLocaleString('en-US')}`;
			//var element8 = document.getElementById('CovidC-M');
			//element8.innerHTML = `${json1.world_total.total_cases_per_1m_population}`;
			//var element9 = document.getElementById('CovidD-M');
			//element9.innerHTML = `${json1.world_total.deaths_per_1m_population}`;
			//var element16 = document.getElementById('p-cache-nbr');
			//element16.innerHTML = `${(json[0].confirmed).toLocaleString('en-US')}`;
			console.log(resJson.response[0].cases.total - resJson.response[0].cases.active)

			var countries_stat = json1.countries_stat;

			//////////////// 1 ////////////////
			var tbl1n = document.getElementById('tbl1-c');
			tbl1n.innerHTML = `${countries_stat[0].country_name}`;
			var tbl1c = document.getElementById('tbl1-ca');
			tbl1c.innerHTML = `${countries_stat[0].cases}`;
			var tbl1d = document.getElementById('tbl1-d');
			tbl1d.innerHTML = `${countries_stat[0].deaths}`
			var tbl1r = document.getElementById('tbl1-r');
			tbl1r.innerHTML = `${countries_stat[0].total_recovered}`
			var tbl1a = document.getElementById('tbl1-a');
			tbl1a.innerHTML = `${countries_stat[0].active_cases}`;
			//////////////// 2 ////////////////
			var tbl2n = document.getElementById('tbl2-c');
			tbl2n.innerHTML = `${countries_stat[1].country_name}`;
			var tbl2c = document.getElementById('tbl2-ca');
			tbl2c.innerHTML = `${countries_stat[1].cases}`;
			var tbl2d = document.getElementById('tbl2-d');
			tbl2d.innerHTML = `${countries_stat[1].deaths}`
			var tbl2r = document.getElementById('tbl2-r');
			tbl2r.innerHTML = `${countries_stat[1].total_recovered}`
			var tbl2a = document.getElementById('tbl2-a');
			tbl2a.innerHTML = `${countries_stat[1].active_cases}`;
			//////////////// 3 ////////////////
			var tbl3n = document.getElementById('tbl3-c');
			tbl3n.innerHTML = `${countries_stat[2].country_name}`;
			var tbl3c = document.getElementById('tbl3-ca');
			tbl3c.innerHTML = `${countries_stat[2].cases}`;
			var tbl3d = document.getElementById('tbl3-d');
			tbl3d.innerHTML = `${countries_stat[2].deaths}`
			var tbl3r = document.getElementById('tbl3-r');
			tbl3r.innerHTML = `${countries_stat[2].total_recovered}`
			var tbl3a = document.getElementById('tbl3-a');
			tbl3a.innerHTML = `${countries_stat[2].active_cases}`;
			//////////////// 4 ////////////////
			var tbl4n = document.getElementById('tbl4-c');
			tbl4n.innerHTML = `${countries_stat[3].country_name}`;
			var tbl4c = document.getElementById('tbl4-ca');
			tbl4c.innerHTML = `${countries_stat[3].cases}`;
			var tbl4d = document.getElementById('tbl4-d');
			tbl4d.innerHTML = `${countries_stat[3].deaths}`
			var tbl4r = document.getElementById('tbl4-r');
			tbl4r.innerHTML = `${countries_stat[3].total_recovered}`
			var tbl4a = document.getElementById('tbl4-a');
			tbl4a.innerHTML = `${countries_stat[3].active_cases}`;
			//////////////// 5 ////////////////
			var tbl5n = document.getElementById('tbl5-c');
			tbl5n.innerHTML = `${countries_stat[4].country_name}`;
			var tbl5c = document.getElementById('tbl5-ca');
			tbl5c.innerHTML = `${countries_stat[4].cases}`;
			var tbl5d = document.getElementById('tbl5-d');
			tbl5d.innerHTML = `${countries_stat[4].deaths}`
			var tbl5r = document.getElementById('tbl5-r');
			tbl5r.innerHTML = `${countries_stat[4].total_recovered}`
			var tbl5a = document.getElementById('tbl5-a');
			tbl5a.innerHTML = `${countries_stat[4].active_cases}`;
			//////////////// 6 ////////////////
			var tbl6n = document.getElementById('tbl6-c');
			tbl6n.innerHTML = `${countries_stat[5].country_name}`;
			var tbl6c = document.getElementById('tbl6-ca');
			tbl6c.innerHTML = `${countries_stat[5].cases}`;
			var tbl6d = document.getElementById('tbl6-d');
			tbl6d.innerHTML = `${countries_stat[5].deaths}`
			var tbl6r = document.getElementById('tbl6-r');
			tbl6r.innerHTML = `${countries_stat[5].total_recovered}`
			var tbl6a = document.getElementById('tbl6-a');
			tbl6a.innerHTML = `${countries_stat[5].active_cases}`;
			//////////////// 7 ////////////////
			var tbl7n = document.getElementById('tbl7-c');
			tbl7n.innerHTML = `${countries_stat[6].country_name}`;
			var tbl7c = document.getElementById('tbl7-ca');
			tbl7c.innerHTML = `${countries_stat[6].cases}`;
			var tbl7d = document.getElementById('tbl7-d');
			tbl7d.innerHTML = `${countries_stat[6].deaths}`
			var tbl7r = document.getElementById('tbl7-r');
			tbl7r.innerHTML = `${countries_stat[6].total_recovered}`
			var tbl7a = document.getElementById('tbl7-a');
			tbl7a.innerHTML = `${countries_stat[6].active_cases}`;
			//////////////// 8 ////////////////
			var tbl8n = document.getElementById('tbl8-c');
			tbl8n.innerHTML = `${countries_stat[7].country_name}`;
			var tbl8c = document.getElementById('tbl8-ca');
			tbl8c.innerHTML = `${countries_stat[7].cases}`;
			var tbl8d = document.getElementById('tbl8-d');
			tbl8d.innerHTML = `${countries_stat[7].deaths}`
			var tbl8r = document.getElementById('tbl8-r');
			tbl8r.innerHTML = `${countries_stat[7].total_recovered}`
			var tbl8a = document.getElementById('tbl8-a');
			tbl8a.innerHTML = `${countries_stat[7].active_cases}`;
			//////////////// 9 ////////////////
			var tbl9n = document.getElementById('tbl9-c');
			tbl9n.innerHTML = `${countries_stat[8].country_name}`;
			var tbl9c = document.getElementById('tbl9-ca');
			tbl9c.innerHTML = `${countries_stat[8].cases}`;
			var tbl9d = document.getElementById('tbl9-d');
			tbl9d.innerHTML = `${countries_stat[8].deaths}`
			var tbl9r = document.getElementById('tbl9-r');
			tbl9r.innerHTML = `${countries_stat[8].total_recovered}`
			var tbl9a = document.getElementById('tbl9-a');
			tbl9a.innerHTML = `${countries_stat[8].active_cases}`;
			//////////////// 10 ////////////////
			var tbl10n = document.getElementById('tbl10-c');
			tbl10n.innerHTML = `${countries_stat[9].country_name}`;
			var tbl10c = document.getElementById('tbl10-ca');
			tbl10c.innerHTML = `${countries_stat[9].cases}`;
			var tbl10d = document.getElementById('tbl10-d');
			tbl10d.innerHTML = `${countries_stat[9].deaths}`
			var tbl10r = document.getElementById('tbl10-r');
			tbl10r.innerHTML = `${countries_stat[9].total_recovered}`
			var tbl10a = document.getElementById('tbl10-a');
			tbl10a.innerHTML = `${countries_stat[9].active_cases}`;
			//////////////// 11 ////////////////
			var tbl11n = document.getElementById('tbl11-c');
			tbl11n.innerHTML = `${countries_stat[10].country_name}`;
			var tbl11c = document.getElementById('tbl11-ca');
			tbl11c.innerHTML = `${countries_stat[10].cases}`;
			var tbl11d = document.getElementById('tbl11-d');
			tbl11d.innerHTML = `${countries_stat[10].deaths}`
			var tbl11r = document.getElementById('tbl11-r');
			tbl11r.innerHTML = `${countries_stat[10].total_recovered}`
			var tbl11a = document.getElementById('tbl11-a');
			tbl11a.innerHTML = `${countries_stat[10].active_cases}`;
			//////////////// 12 ////////////////
			var tbl12n = document.getElementById('tbl12-c');
			tbl12n.innerHTML = `${countries_stat[11].country_name}`;
			var tbl12c = document.getElementById('tbl12-ca');
			tbl12c.innerHTML = `${countries_stat[11].cases}`;
			var tbl12d = document.getElementById('tbl12-d');
			tbl12d.innerHTML = `${countries_stat[11].deaths}`
			var tbl12r = document.getElementById('tbl12-r');
			tbl12r.innerHTML = `${countries_stat[11].total_recovered}`
			var tbl12a = document.getElementById('tbl12-a');
			tbl12a.innerHTML = `${countries_stat[11].active_cases}`;
			//////////////// 13 ////////////////
			var tbl13n = document.getElementById('tbl13-c');
			tbl13n.innerHTML = `${countries_stat[12].country_name}`;
			var tbl13c = document.getElementById('tbl13-ca');
			tbl13c.innerHTML = `${countries_stat[12].cases}`;
			var tbl13d = document.getElementById('tbl13-d');
			tbl13d.innerHTML = `${countries_stat[12].deaths}`
			var tbl13r = document.getElementById('tbl13-r');
			tbl13r.innerHTML = `${countries_stat[12].total_recovered}`
			var tbl13a = document.getElementById('tbl13-a');
			tbl13a.innerHTML = `${countries_stat[12].active_cases}`;
			//////////////// 14 ////////////////
			var tbl14n = document.getElementById('tbl14-c');
			tbl14n.innerHTML = `${countries_stat[13].country_name}`;
			var tbl14c = document.getElementById('tbl14-ca');
			tbl14c.innerHTML = `${countries_stat[13].cases}`;
			var tbl14d = document.getElementById('tbl14-d');
			tbl14d.innerHTML = `${countries_stat[13].deaths}`
			var tbl14r = document.getElementById('tbl14-r');
			tbl14r.innerHTML = `${countries_stat[13].total_recovered}`
			var tbl14a = document.getElementById('tbl14-a');
			tbl14a.innerHTML = `${countries_stat[13].active_cases}`;
			//////////////// 15 ////////////////
			var tbl15n = document.getElementById('tbl15-c');
			tbl15n.innerHTML = `${countries_stat[14].country_name}`;
			var tbl15c = document.getElementById('tbl15-ca');
			tbl15c.innerHTML = `${countries_stat[14].cases}`;
			var tbl15d = document.getElementById('tbl15-d');
			tbl15d.innerHTML = `${countries_stat[14].deaths}`
			var tbl15r = document.getElementById('tbl15-r');
			tbl15r.innerHTML = `${countries_stat[14].total_recovered}`
			var tbl15a = document.getElementById('tbl15-a');
			tbl15a.innerHTML = `${countries_stat[14].active_cases}`;
			//////////////// 16 ////////////////
			var tbl16n = document.getElementById('tbl16-c');
			tbl16n.innerHTML = `${countries_stat[15].country_name}`;
			var tbl16c = document.getElementById('tbl16-ca');
			tbl16c.innerHTML = `${countries_stat[15].cases}`;
			var tbl16d = document.getElementById('tbl16-d');
			tbl16d.innerHTML = `${countries_stat[15].deaths}`
			var tbl16r = document.getElementById('tbl16-r');
			tbl16r.innerHTML = `${countries_stat[15].total_recovered}`
			var tbl16a = document.getElementById('tbl16-a');
			tbl16a.innerHTML = `${countries_stat[15].active_cases}`;
			//////////////// 17 ////////////////
			var tbl17n = document.getElementById('tbl17-c');
			tbl17n.innerHTML = `${countries_stat[16].country_name}`;
			var tbl17c = document.getElementById('tbl17-ca');
			tbl17c.innerHTML = `${countries_stat[16].cases}`;
			var tbl17d = document.getElementById('tbl17-d');
			tbl17d.innerHTML = `${countries_stat[16].deaths}`
			var tbl17r = document.getElementById('tbl17-r');
			tbl17r.innerHTML = `${countries_stat[16].total_recovered}`
			var tbl17a = document.getElementById('tbl17-a');
			tbl17a.innerHTML = `${countries_stat[16].active_cases}`;
			//////////////// 18 ////////////////
			var tbl18n = document.getElementById('tbl18-c');
			tbl18n.innerHTML = `${countries_stat[17].country_name}`;
			var tbl18c = document.getElementById('tbl18-ca');
			tbl18c.innerHTML = `${countries_stat[17].cases}`;
			var tbl18d = document.getElementById('tbl18-d');
			tbl18d.innerHTML = `${countries_stat[17].deaths}`
			var tbl18r = document.getElementById('tbl18-r');
			tbl18r.innerHTML = `${countries_stat[17].total_recovered}`
			var tbl18a = document.getElementById('tbl18-a');
			tbl18a.innerHTML = `${countries_stat[17].active_cases}`;
			//////////////// 19 ////////////////
			var tbl19n = document.getElementById('tbl19-c');
			tbl19n.innerHTML = `${countries_stat[18].country_name}`;
			var tbl19c = document.getElementById('tbl19-ca');
			tbl19c.innerHTML = `${countries_stat[18].cases}`;
			var tbl19d = document.getElementById('tbl19-d');
			tbl19d.innerHTML = `${countries_stat[18].deaths}`
			var tbl19r = document.getElementById('tbl19-r');
			tbl19r.innerHTML = `${countries_stat[18].total_recovered}`
			var tbl19a = document.getElementById('tbl19-a');
			tbl19a.innerHTML = `${countries_stat[18].active_cases}`;
			//////////////// 20 ////////////////
			var tbl20n = document.getElementById('tbl20-c');
			tbl20n.innerHTML = `${countries_stat[19].country_name}`;
			var tbl20c = document.getElementById('tbl20-ca');
			tbl20c.innerHTML = `${countries_stat[19].cases}`;
			var tbl20d = document.getElementById('tbl20-d');
			tbl20d.innerHTML = `${countries_stat[19].deaths}`
			var tbl20r = document.getElementById('tbl20-r');
			tbl20r.innerHTML = `${countries_stat[19].total_recovered}`
			var tbl20a = document.getElementById('tbl20-a');
			tbl20a.innerHTML = `${countries_stat[19].active_cases}`;
			//////////////// 21 ////////////////
			var tbl21n = document.getElementById('tbl21-c');
			tbl21n.innerHTML = `${countries_stat[20].country_name}`;
			var tbl21c = document.getElementById('tbl21-ca');
			tbl21c.innerHTML = `${countries_stat[20].cases}`;
			var tbl21d = document.getElementById('tbl21-d');
			tbl21d.innerHTML = `${countries_stat[20].deaths}`
			var tbl21r = document.getElementById('tbl21-r');
			tbl21r.innerHTML = `${countries_stat[20].total_recovered}`
			var tbl21a = document.getElementById('tbl21-a');
			tbl21a.innerHTML = `${countries_stat[20].active_cases}`;
			//////////////// 22 ////////////////
			var tbl22n = document.getElementById('tbl22-c');
			tbl22n.innerHTML = `${countries_stat[21].country_name}`;
			var tbl22c = document.getElementById('tbl22-ca');
			tbl22c.innerHTML = `${countries_stat[21].cases}`;
			var tbl22d = document.getElementById('tbl22-d');
			tbl22d.innerHTML = `${countries_stat[21].deaths}`
			var tbl22r = document.getElementById('tbl22-r');
			tbl22r.innerHTML = `${countries_stat[21].total_recovered}`
			var tbl22a = document.getElementById('tbl22-a');
			tbl22a.innerHTML = `${countries_stat[21].active_cases}`;
			//////////////// 23 ////////////////
			var tbl23n = document.getElementById('tbl23-c');
			tbl23n.innerHTML = `${countries_stat[22].country_name}`;
			var tbl23c = document.getElementById('tbl23-ca');
			tbl23c.innerHTML = `${countries_stat[22].cases}`;
			var tbl23d = document.getElementById('tbl23-d');
			tbl23d.innerHTML = `${countries_stat[22].deaths}`
			var tbl23r = document.getElementById('tbl23-r');
			tbl23r.innerHTML = `${countries_stat[22].total_recovered}`
			var tbl23a = document.getElementById('tbl23-a');
			tbl23a.innerHTML = `${countries_stat[22].active_cases}`;
			//////////////// 24 ////////////////
			var tbl24n = document.getElementById('tbl24-c');
			tbl24n.innerHTML = `${countries_stat[23].country_name}`;
			var tbl24c = document.getElementById('tbl24-ca');
			tbl24c.innerHTML = `${countries_stat[23].cases}`;
			var tbl24d = document.getElementById('tbl24-d');
			tbl24d.innerHTML = `${countries_stat[23].deaths}`
			var tbl24r = document.getElementById('tbl24-r');
			tbl24r.innerHTML = `${countries_stat[23].total_recovered}`
			var tbl24a = document.getElementById('tbl24-a');
			tbl24a.innerHTML = `${countries_stat[23].active_cases}`;
			//////////////// 25 ////////////////
			var tbl25n = document.getElementById('tbl25-c');
			tbl25n.innerHTML = `${countries_stat[24].country_name}`;
			var tbl25c = document.getElementById('tbl25-ca');
			tbl25c.innerHTML = `${countries_stat[24].cases}`;
			var tbl25d = document.getElementById('tbl25-d');
			tbl25d.innerHTML = `${countries_stat[24].deaths}`
			var tbl25r = document.getElementById('tbl25-r');
			tbl25r.innerHTML = `${countries_stat[24].total_recovered}`
			var tbl25a = document.getElementById('tbl25-a');
			tbl25a.innerHTML = `${countries_stat[24].active_cases}`;
			//////////////// 26 ////////////////
			var tbl26n = document.getElementById('tbl26-c');
			tbl26n.innerHTML = `${countries_stat[25].country_name}`;
			var tbl26c = document.getElementById('tbl26-ca');
			tbl26c.innerHTML = `${countries_stat[25].cases}`;
			var tbl26d = document.getElementById('tbl26-d');
			tbl26d.innerHTML = `${countries_stat[25].deaths}`
			var tbl26r = document.getElementById('tbl26-r');
			tbl26r.innerHTML = `${countries_stat[25].total_recovered}`
			var tbl26a = document.getElementById('tbl26-a');
			tbl26a.innerHTML = `${countries_stat[25].active_cases}`;
			//////////////// 27 ////////////////
			var tbl27n = document.getElementById('tbl27-c');
			tbl27n.innerHTML = `${countries_stat[26].country_name}`;
			var tbl27c = document.getElementById('tbl27-ca');
			tbl27c.innerHTML = `${countries_stat[26].cases}`;
			var tbl27d = document.getElementById('tbl27-d');
			tbl27d.innerHTML = `${countries_stat[26].deaths}`
			var tbl27r = document.getElementById('tbl27-r');
			tbl27r.innerHTML = `${countries_stat[26].total_recovered}`
			var tbl27a = document.getElementById('tbl27-a');
			tbl27a.innerHTML = `${countries_stat[26].active_cases}`;
			//////////////// 28 ////////////////
			var tbl28n = document.getElementById('tbl28-c');
			tbl28n.innerHTML = `${countries_stat[27].country_name}`;
			var tbl28c = document.getElementById('tbl28-ca');
			tbl28c.innerHTML = `${countries_stat[27].cases}`;
			var tbl28d = document.getElementById('tbl28-d');
			tbl28d.innerHTML = `${countries_stat[27].deaths}`
			var tbl28r = document.getElementById('tbl28-r');
			tbl28r.innerHTML = `${countries_stat[27].total_recovered}`
			var tbl28a = document.getElementById('tbl28-a');
			tbl28a.innerHTML = `${countries_stat[27].active_cases}`;
			//////////////// 29 ////////////////
			var tbl29n = document.getElementById('tbl29-c');
			tbl29n.innerHTML = `${countries_stat[28].country_name}`;
			var tbl29c = document.getElementById('tbl29-ca');
			tbl29c.innerHTML = `${countries_stat[28].cases}`;
			var tbl29d = document.getElementById('tbl29-d');
			tbl29d.innerHTML = `${countries_stat[28].deaths}`
			var tbl29r = document.getElementById('tbl29-r');
			tbl29r.innerHTML = `${countries_stat[28].total_recovered}`
			var tbl29a = document.getElementById('tbl29-a');
			tbl29a.innerHTML = `${countries_stat[28].active_cases}`;
			//////////////// 30 ////////////////
			var tbl30n = document.getElementById('tbl30-c');
			tbl30n.innerHTML = `${countries_stat[29].country_name}`;
			var tbl30c = document.getElementById('tbl30-ca');
			tbl30c.innerHTML = `${countries_stat[29].cases}`;
			var tbl30d = document.getElementById('tbl30-d');
			tbl30d.innerHTML = `${countries_stat[29].deaths}`
			var tbl30r = document.getElementById('tbl30-r');
			tbl30r.innerHTML = `${countries_stat[29].total_recovered}`
			var tbl30a = document.getElementById('tbl30-a');
			tbl30a.innerHTML = `${countries_stat[29].active_cases}`;
			//////////////// 31 ////////////////
			var tbl31n = document.getElementById('tbl31-c');
			tbl31n.innerHTML = `${countries_stat[30].country_name}`;
			var tbl31c = document.getElementById('tbl31-ca');
			tbl31c.innerHTML = `${countries_stat[30].cases}`;
			var tbl31d = document.getElementById('tbl31-d');
			tbl31d.innerHTML = `${countries_stat[30].deaths}`
			var tbl31r = document.getElementById('tbl31-r');
			tbl31r.innerHTML = `${countries_stat[30].total_recovered}`
			var tbl31a = document.getElementById('tbl31-a');
			tbl31a.innerHTML = `${countries_stat[30].active_cases}`;
			//////////////// 32 ////////////////
			var tbl32n = document.getElementById('tbl20-c');
			tbl32n.innerHTML = `${countries_stat[31].country_name}`;
			var tbl32c = document.getElementById('tbl20-ca');
			tbl32c.innerHTML = `${countries_stat[31].cases}`;
			var tbl32d = document.getElementById('tbl20-d');
			tbl32d.innerHTML = `${countries_stat[31].deaths}`
			var tbl32r = document.getElementById('tbl20-r');
			tbl32r.innerHTML = `${countries_stat[31].total_recovered}`
			var tbl32a = document.getElementById('tbl20-a');
            tbl32a.innerHTML = `${countries_stat[31].active_cases}`;

            moment.locale('fr')

            const event = new Date(json[0].lastUpdate)

            console.log(moment(event.toDateString()).format('LLLL'))

            var element19 = document.getElementById('maj');
            element19.innerHTML = `Dernière mise à jour : ${moment(event).format('LLLL')}`
            
            if (resJson.response[0].cases.total !== 0) {
                $(document).ready(function() {
                    $(".progressbar").fadeOut(2000);
                })
            }

		})
	})
})