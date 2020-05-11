console.log('test 1 2 1 2');

moment.locale('fr')

var date = Date.now()

date = moment(date).format('LLLL');

var element = document.getElementById('title');
element.innerHTML = `Test : ${date}`;