//grabing day of the week from local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch (dayOfWeekNumber) {
  case 0:
    nameOfDay = "Sunday";
    quote = "Time to chillax";
    break;
  case 1:
    nameOfDay = "Monday";
    quote = "Work day is Here";
    break;
  case 2:
    nameOfDay = "Tuesday";
    quote = "Another work day";
    break;
  case 3:
    nameOfDay = "Wednesday";
    quote = "Mid week Day";
    break;
  case 4:
    nameOfDay = "Thursday";
    quote = "the Weekend is almost here";
    break;
  case 5:
    nameOfDay = "Friday";
    quote = "Weekend is here!";
    break;
  case 6:
    nameOfDay = "Saturday";
    quote = "time to enjoy";
    break;
}

//display day of the week
let weekDayDiv = document.getElementById("weekday");
weekDayDiv.innerHTML = `${nameOfDay}`;
//display quote according to day of week
let quoteDiv = document.getElementById("phrase");
quoteDiv.innerHTML = `${quote}`;
