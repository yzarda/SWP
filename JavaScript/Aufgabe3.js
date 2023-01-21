var month = 7; // Juli
var startDay = 2; // Montag

// Anzahl der Tage im Monat bestimmen
var daysInMonth;
if (month === 2) {
  daysInMonth = 28;
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  daysInMonth = 30;
} else {
  daysInMonth = 31;
}

// Kalender erstellen
var calendar = "";
for (var i = 1; i <= daysInMonth; i++) {
  // Tag und Wochentag bestimmen
  var day = i;
  var weekDay = (startDay + i - 1) % 7;

  // Wochentag in String umwandeln
  var weekDayString;
  switch (weekDay) {
    case 0:
      weekDayString = "Sonntag";
      day = "WE";
      break;
    case 6:
      weekDayString = "Samstag";
      day = "WE";
      break;
    case 1:
      weekDayString = "Montag";
      break;
    case 2:
      weekDayString = "Dienstag";
      break;
    case 3:
      weekDayString = "Mittwoch";
      break;
    case 4:
      weekDayString = "Donnerstag";
      break;
    case 5:
      weekDayString = "Freitag";
      break;
  }

  // Tag und Wochentag dem Kalender hinzufügen
  calendar += day + " " + weekDayString + "\n";
}

console.log(calendar);
