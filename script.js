let records
getData()
function getData(){
	fetch('https://raw.githubusercontent.com/ShedeurCoder/wcadata/main/records.json')
		.then(function(response) {
			return response.json()
		})
		.then(function(data) {
			records = data
			updateRecords('cup-wr', 'bottle-wr', records.wr)
            updateRecords('cup-afr', 'bottle-afr', records.afr)
            updateRecords('cup-asr', 'bottle-asr', records.asr)
            updateRecords('cup-eur', 'bottle-eur', records.eur)
            updateRecords('cup-ocr', 'bottle-ocr', records.ocr)
            updateRecords('cup-nar', 'bottle-nar', records.nar)
            updateRecords('cup-sar', 'bottle-sar', records.sar)
		});
}

function getClass(className) {
    return document.getElementsByClassName(className)
}

function updateRecords(cupName, bottleName, record) {
    const cup = getClass(cupName)
    cup[0].innerHTML = record.cup.hundred
    cup[1].innerHTML = record.cup.two
    cup[2].innerHTML = record.cup.twofifty
    cup[3].innerHTML = record.cup.three
    cup[4].innerHTML = record.cup.four
    cup[5].innerHTML = record.cup.five
    cup[6].innerHTML = record.cup.sevenfifty
    cup[7].innerHTML = record.cup.liter

    const bottle = getClass(bottleName)
    bottle[0].innerHTML = record.bottle.hundred
    bottle[1].innerHTML = record.bottle.two
    bottle[2].innerHTML = record.bottle.twofifty
    bottle[3].innerHTML = record.bottle.three
    bottle[4].innerHTML = record.bottle.four
    bottle[5].innerHTML = record.bottle.five
    bottle[6].innerHTML = record.bottle.sevenfifty
    bottle[7].innerHTML = record.bottle.liter
}

// updateRecords('cup-wr', 'bottle-wr', records.wr)


// updateRecords('cup-afr', 'bottle-afr', records.afr)