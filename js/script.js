const calendarData = {
    "April 2024": {
        days: 30,
        startDay: 0, // Monday
        images: {
            23: "April/imageapril23.png",
            26: "April/imageapril26.png",
            // Add images for other days if needed
        }
    },
    "May 2024": {
        days: 31,
        startDay: 2, // Wednesday
        images: {
            1: "May/imagemay1.png",
            2: "May/imagemay2.png",
            // Add images for other days if needed
        }
    },
    "June 2024": {
        days: 30,
        startDay: 5, // Saturday
        images: {
            1: "June/imagejune1.png",
            2: "June/imagejune2.png",
            // Add images for other days if needed
        }
    },
    "July 2024": {
        days: 31,
        startDay: 0, // Monday
        images: {
            1: "July/imagejuly1.png",
            2: "July/imagejuly2.png",
            // Add images for other days if needed
        }
    },
    "August 2024": {
        days: 31,
        startDay: 3, // Thursday
        images: {
            1: "August/imageaugust1.png",
            2: "August/imageaugust2.png",
            // Add images for other days if needed
        }
    },
    "September 2024": {
        days: 30,
        startDay: 6, // Sunday
        images: {
            1: "September/imageseptember1.png",
            2: "September/imageseptember2.png",
            // Add images for other days if needed
        }
    },
    "October 2024": {
        days: 31,
        startDay: 1, // Tuesday
        images: {
            1: "October/imageoctober1.png",
            2: "October/imageoctober2.png",
            // Add images for other days if needed
        }
    },
    "November 2024": {
        days: 30,
        startDay: 4, // Friday
        images: {
            1: "November/imagenovember1.png",
            2: "November/imagenovember2.png",
            // Add images for other days if needed
        }
    },
    "December 2024": {
        days: 31,
        startDay: 6, // Sunday
        images: {
            1: "December/imagedecember1.png",
            2: "December/imagedecember2.png",
            // Add images for other days if needed
        }
    }
};

let currentMonthIndex = 1; // Assuming starting from May 2024
const months = Object.keys(calendarData);

function generateCalendar(month) {
    const monthData = calendarData[month];
    const daysInMonth = monthData.days;
    const startDay = monthData.startDay;
    const images = monthData.images || {};
    const calendarBody = document.getElementById("calendarBody");
    const calendarHeader = document.getElementById("calendarHeader");

    calendarHeader.innerHTML = month;
    calendarBody.innerHTML = '';

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");

            if (i === 0 && j < startDay) {
                cell.innerHTML = "";
            } else if (date > daysInMonth) {
                cell.innerHTML = "";
            } else {
                cell.innerHTML = `<span class="day-number"><b>${date}</b></span>`;
                if (images[date]) {
                    cell.innerHTML += `<img src="${images[date]}" alt="Image ${date}" class="day-image">`;
                }
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

document.getElementById("prevMonth").addEventListener("click", () => {
    if (currentMonthIndex > 0) {
        currentMonthIndex--;
        generateCalendar(months[currentMonthIndex]);
    }
});

document.getElementById("nextMonth").addEventListener("click", () => {
    if (currentMonthIndex < months.length - 1) {
        currentMonthIndex++;
        generateCalendar(months[currentMonthIndex]);
    }
});

// Initialize the calendar
generateCalendar(months[currentMonthIndex]);
