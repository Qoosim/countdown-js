const daysElem = document.getElementById('days')
const hoursElem = document.getElementById('hours')
const minutesElem = document.getElementById('minutes')
const secondsElem = document.getElementById('seconds')

const newYear = "1 Jan 2021"

function countdown(){
    const newYearsDate = new Date(newYear)
    const currentDate = new Date()


    const totalSeconds= (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60


    daysElem.innerHTML = days
    hoursElem.innerHTML = hours
    minutesElem.innerHTML = minutes
    secondsElem.innerHTML = seconds

}

// initial call
countdown()

setInterval(countdown, 1000)
