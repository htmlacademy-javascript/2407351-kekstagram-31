function isMeetingWithinWorkingHours(startWorking, endWorking, startMeeting, duration) {
  // Преобразование времени в минуты
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startWorkingMinutes = timeToMinutes(startWorking);
  const endWorkingMinutes = timeToMinutes(endWorking);
  const startMeetingMinutes = timeToMinutes(startMeeting);

  // Проверка, что время начала встречи находится в пределах рабочего дня
  if (startMeetingMinutes < startWorkingMinutes || startMeetingMinutes > endWorkingMinutes) {
    return false;
  }

  // Проверка, что время окончания встречи находится в пределах рабочего дня
  if (startMeetingMinutes + duration > endWorkingMinutes) {
    return false;
  }

  return true;
}

window.console.log(isMeetingWithinWorkingHours('08:00', '17:30', '14:00', 90));
window.console.log(isMeetingWithinWorkingHours('8:0', '10:0', '8:0', 120));
window.console.log(isMeetingWithinWorkingHours('08:00', '14:30', '14:00', 90));
window.console.log(isMeetingWithinWorkingHours('14:00', '17:30', '08:0', 90));
window.console.log(isMeetingWithinWorkingHours('8:00', '17:30', '08:00', 900));
