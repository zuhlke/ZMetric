import moment from 'moment';

export const convertFromJiraToTimeSpent = (data) => {
  const fixingBugsData = data.issues
    .filter(issue => issue.fields.issuetype.name == 'Bug')
    .map (issue => {
      return {
        key: issue.key,
        resolutionDate: new Date(issue.fields.resolutiondate).toString(),
        created: new Date(issue.fields.created).toString(),
        timeSpent: convertMiliseconds(new Date(new Date(issue.fields.resolutiondate).getTime() - new Date(issue.fields.created).getTime()).getTime(), 'd')
      }
    });

  return groupDataBasedOnWeeksSpent(fixingBugsData);
}

function convertMiliseconds(miliseconds, format) {
  var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

  total_seconds = parseInt(Math.floor(miliseconds/1000));
  total_minutes = parseInt(Math.floor(total_seconds/60));
  total_hours = parseInt(Math.floor(total_minutes/60));
  days = parseInt(Math.floor(total_hours/24));

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);

  switch (format) {
    case 's':
      return total_seconds;
      break;
    case 'm':
      return total_minutes;
      break;
    case 'h':
      return total_hours;
      break;
    case 'd':
      return days;
      break;
    default:
      return days + " " + hours + " " + minutes + " " + seconds;

  }
}

function groupDataBasedOnWeeksSpent(data) {
  let filteredFixingBugsData = [];

  for (var week = 1; week <= 26; week++) {
    let temp = data.filter(issue => {
      if (week == 1) // include days 0 to 7
        return ((issue.timeSpent >= (week-1) * 7 && issue.timeSpent <= week*7) ? 1 : 0);
      else
        return ((issue.timeSpent > (week-1) * 7 && issue.timeSpent <= week*7) ? 1 : 0);
    });
    filteredFixingBugsData.push({ 'Week': "Week " + week, 'Days Range': (week - 1) * 7 + " - "  + week * 7, 'Number Of Fixed Bugs': temp.length});
  }

  return filteredFixingBugsData;
}
