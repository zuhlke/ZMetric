import moment from 'moment';

export const convertFromJiraToTimeSpent = (data) => {
  const sample = [
    {
      name: 'Page A', uv: 10000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

  //let fixingBugsData = data.issues.map((issue) => {return {key: issue.key, created: issue.created, resolutiodate: issue.resolutiondate}});

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
    //return {d: days, h:hours, m: minutes, s: seconds};

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
    filteredFixingBugsData.push({ 'Week': "Week " + week, 'Start Day': (week - 1) * 7, 'End Day': week * 7, 'Number Of Fixed Bugs': temp.length});
  }

  return filteredFixingBugsData;
}

function checkTimeSpent(timeSpent, start, end) {
  return (timeSpent >= start && timeSpent <= end) ? 1 : 0;
}
