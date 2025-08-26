// Heart count
const heartCount = () => {
    const heart = parseInt(document.getElementById('heart-count').innerText)
    document.getElementById('heart-count').innerText = heart + 1
}

function creditsUpdate(credits) {
    document.getElementById('credits').innerText = credits - 20
}
let histories = []
const historyUpdate = () => {
    const historyContainer = document.getElementById('history-container')
    historyContainer.textContent = ''
    for (const history of histories) {
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="flex justify-between items-center">
                        <div>
                            <p class="font-bold">${history.name}</p>
                            <p>${history.number}</p>
                        </div>
                        <p>${history.time}</p>
                    </div>
        `
        historyContainer.appendChild(div)
    }

}

const storeHistoryData = (name, num) => {
    const data = {
        name: name,
        number: num,
        time: new Date().toLocaleTimeString("en-Bd", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            second: "2-digit",
            timeZone: "Asia/Dhaka"
        })
    }
    histories.push(data)
    historyUpdate()
}
const callFunc = service => {
    const credits = parseInt(document.getElementById('credits').innerText)
    if (service === 'national-emergency') {
        if (credits === 0) {
            alert("You Don't have enough Credits...")
            return
        }
        alert('Calling National emergency Service 999...')
        creditsUpdate(credits)
        storeHistoryData("National Emergency Number", 999)
        
    }
    if (service === 'police-helpline') {
        if (credits === 0) {
            alert("You Don't have enough Credits...")
            return
        }
        alert('Calling Police helpline Service 999...')
        creditsUpdate(credits)
        storeHistoryData("Police Helpline Number", 999)
        
    }
    if (service === 'fire-service') {
        if (credits === 0) {
            alert("You Don't have enough Credits...")
            return
        }
        alert('Calling Fire Service 999...')
        creditsUpdate(credits)
        storeHistoryData("Fire Service Number", 999)
        
    }
    if (service === 'ambulance') {
        if (credits === 0) {
            alert("You Don't have enough Credits...")
            return
        }
        alert('Calling Ambulance Service 1994-999999...')
        creditsUpdate(credits)
        storeHistoryData("Ambulance Service Number", "1994-999999")
        
    }
    if (service === 'wc-help') {
        if (credits === 0) {
            alert("You Don't have enough Credits...")
            return
        }
        alert('Calling Women & Child Helpline 109...')
        creditsUpdate(credits)
        storeHistoryData("Women & Child Helpline Number", "109")
        
    }
    if (service === 'anti-corruption') {
        if (credits === 0) {
            alert("You Don't have enough Credits...")
            return
        }
        alert('Anti-Corruption Helpline 106...')
        creditsUpdate(credits)
        storeHistoryData("Anti-Corruption Helpline Number", "106")
        
    }
    if (service === 'electricity') {
        if (credits === 0) {
            alert("You Don't have enough Credits...")
            return
        }
        alert('Electricity Helpline 16216...')
        creditsUpdate(credits)
        storeHistoryData("Electricity Helpline Number", "16216")
        
    }
    if (service === 'brac') {
        if (credits === 0) {
            alert("You Don't have enough Credits...")
            return
        }
        alert('Brac Helpline 16445...')
        creditsUpdate(credits)
        storeHistoryData("Brac Helpline Number", "16445")
        
    }
    if (service === 'railway') {
        if (credits === 0) {
            alert("You Don't have enough Credits...")
            return
        }
        alert('Bangladesh Railway Helpline 163...')
        creditsUpdate(credits)
        storeHistoryData("Bangladesh Railway Helpline Number", "163")
        
    }

}

document.getElementById('clear-btn').addEventListener('click', function() {
    histories = []
    historyUpdate()
}) 