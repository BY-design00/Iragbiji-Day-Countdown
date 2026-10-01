const eventDate = new Date("2026-11-21T00:00:00")

const daysNum = document.getElementById("days")
const hoursNum = document.getElementById("hours")
const minutesNum = document.getElementById("minutes")
const secondsNum = document.getElementById("seconds")

function countDown () {
    const now = new Date()

    const difference = eventDate - now

    if (difference <= 0) {
        daysNum.innerText = 0
        hoursNum.innerText = 0
        minutesNum.innerText = 0
        secondsNum.innerText  = 0
    }

    const days = Math.floor(difference / (1000*60*60*24))
    const hours = Math.floor((difference / (1000*60*60)) %24 )
    const minutes = Math.floor((difference / (1000*60)) %60)
    const seconds = Math.floor((difference / (1000)) %60)

    daysNum.innerText = days
    hoursNum.innerText = hours
    minutesNum.innerText = minutes
    secondsNum.innerText = seconds


}

countDown()
setInterval(countDown, 1000)
