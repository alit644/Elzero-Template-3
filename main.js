
const time = document.getElementById("time")


const myfun = () => {
    const now = new Date()

    let Days = now.getDay() +1
    let Hours = now.getHours()
    let Min = now.getMinutes()
    let sec = now.getSeconds()

    if (Hours < 10) {
        Hours = `0${Hours}`
    }
    if (Min < 10) {
        Min = `0${Min}`
    }
    if (sec < 10) {
        sec = `0${sec}`
    }

    if (Days < 10) {
        Days = `0${Days}`
      }

    time.innerHTML = `

    <div class="time" id="time">
                    <div class="unit">
                        <span>${Days}</span>
                        <span>Days</span>
                    </div>
                    <div class="unit">
                        <span>${Hours}</span>
                        <span>Hours</span>
                    </div>

                    <div class="unit">
                        <span>${Min}</span>
                        <span>Minutes</span>
                    </div>

                    <div class="unit">
                        <span>${sec}</span>
                        <span>seconds</span>
                    </div>
                </div>
  

    `
}

setInterval( myfun , 1000);

