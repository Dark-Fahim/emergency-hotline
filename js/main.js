// Heart count
const heartCount = () => {
    const heart = parseInt(document.getElementById('heart-count').innerText)
    document.getElementById('heart-count').innerText = heart + 1
}

function creditsUpdate(credits) {
    document.getElementById('credits').innerText = credits - 20
}
const histories = []
const historyUpdate = () => {
    const historyContainer = document.getElementById('history-container')
    for(const history of histories){
        const div = document.createElement('div')
        div.innerHTML =  `
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

const callFunc = service => {
    const credits = parseInt(document.getElementById('credits').innerText)
    if (service === 'national-emergency') {
        if (credits === 0) {
            alert("You Don't have enough Credits...")
            return
        }
        alert('Calling National emergency Service 999...')
        creditsUpdate(credits)
        const data = {
            name: "National Emergency Number",
            number: 999,
            time: new Date().toLocaleTimeString("en-Bd", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Dhaka"
            })
        }
        histories.push(data)
        historyUpdate()
        return

    }



}