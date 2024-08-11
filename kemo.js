const clubCompetitionsIds = [
7,   // الدوري الإنجليزي
11,  // الدوري الأسباني
17,  // الدوري الإيطالي
35,  // الدوري الفرنسي
25,  // الدوري الألماني
552, // الدوري المصري
649, // الدوري السعودي
557, // الدوري المغربي
554, // الدوري التونسي
560, // الدوري الجزائري
549, // الدوري الاماراتي
78,  // الدوري التركي
572, // دوري أبطال أوروبا
624, // دوري أبطال افريقيا
623, // دوري أبطال اسيا
573, // الدوري الأوروبي
7685,// دوري المؤتمر الأوروبي
13,  // كأس ملك أسبانيا
20,  // كأس إيطاليا
28,  // كأس ألمانيا
37,  // كأس فرنسا
8,   // كأس الأتحاد الانجليزي
553, // كأس مصر
5595,// كأس السوبر المصري
7808, // كأس الرابطة المصرية
];

const internationalCompetitionsIds = [
6316,// كأس أمم أوروبا
167, // كأس أمم أفريقيا
6196,// كأس أمم أسيا
5930,// كأس العالم
5421,// تصفيات كأس العالم أوروبا
645, // تصفيات كأس العالم أفريقيا
605, // تصفيات كأس العالم أسيا
595, // كوبا أمريكا
104, // الدوري الأمريكي
611, // تصفيات كأس العالم أمريكا الشمالية
613, // تصفيات كأس العالم أمريكا الجنوبية
6370,// اولمبياد فرنسا رجال
6371, // اولمبياد فرنسا نساء
];

function fetchMatches(date, timezone) {
const language = document.getElementById('language-select').value;
let url = `https://webws.365scores.com/web/games/allscores/?appTypeId=5&langId=${language}&timezoneName=Africa/Cairo&userCountryId=131&sports=1&startDate=${date}`;
fetch(url)
.then(response => response.json())
.then(data => {
console.log("Matches Data:", data.games);
let matchesContainer = document.getElementById('Matches');
matchesContainer.innerHTML = "";
const matchesByLeague = {
clubs: {},
internationals: {}
};
data.games.forEach(game => {
if (clubCompetitionsIds.includes(game.competitionId)) {
if (!matchesByLeague.clubs[game.competitionId]) {
matchesByLeague.clubs[game.competitionId] = {
leagueName: game.competitionDisplayName || "Unnamed League",
leagueLogo: game.competitionId,
matches: []
};
}
matchesByLeague.clubs[game.competitionId].matches.push(game);
} else if (internationalCompetitionsIds.includes(game.competitionId)) {
if (!matchesByLeague.internationals[game.competitionId]) {
matchesByLeague.internationals[game.competitionId] = {
leagueName: game.competitionDisplayName || "Unnamed Competition",
leagueLogo: game.competitionId,
matches: []
};
}
matchesByLeague.internationals[game.competitionId].matches.push(game);
}
});
if (Object.keys(matchesByLeague.clubs).length > 0) {
for (const leagueId in matchesByLeague.clubs) {
const league = matchesByLeague.clubs[leagueId];
let leagueHTML = `
<div class="league-container">
<div class="league-header">
<img src="https://cdn.statically.io/gh/dev-malikweb/images/leagues-imgs/${league.leagueLogo}.png" loading="lazy" 
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-cup.png';"  
alt="${league.leagueName}" height="50">
<h6>${league.leagueName}</h6>
</div>
<div class="league-matches">
`;
league.matches.forEach(match => {
const awayScore = match.awayCompetitor.score < 0 ? '0' : match.awayCompetitor.score;
const homeScore = match.homeCompetitor.score < 0 ? '0' : match.homeCompetitor.score;
leagueHTML += `
<div class="Event-Card" id="match-id-${match.id}">
<div class="Right-Team">
<div class="Team-Logo"><img alt="${match.homeCompetitor.name}" height="50" src="https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/${match.homeCompetitor.id}.png" onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';" title="${match.homeCompetitor.name}" width="50" loading="lazy" /></div>
<div class="Team-Name">${match.homeCompetitor.name}</div>
</div>
<div class="Event-Timing">
<div id="Event-Result">
<div class="Team-Score"><span>${homeScore}</span></div>
-
<div class="Team-Score"><span>${awayScore}</span></div>
</div>
<div id="Event-Time"></div>
<span class="Event-Date" data-start="${match.startTime}"></span>
</div>
<div class="Left-Team">
<div class="Team-Logo"><img alt="${match.awayCompetitor.name}" height="50" src="https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/${match.awayCompetitor.id}.png" onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';" title="${match.awayCompetitor.name}" width="50" /></div>
<div class="Team-Name">${match.awayCompetitor.name}</div>
</div>
</div>
`;
});
leagueHTML += `
</div>
</div>
`;
matchesContainer.innerHTML += leagueHTML;
}
}
if (Object.keys(matchesByLeague.internationals).length > 0) {
for (const leagueId in matchesByLeague.internationals) {
const league = matchesByLeague.internationals[leagueId];
let leagueHTML = `
<div class="league-container">
<div class="league-header">
<img src="https://cdn.statically.io/gh/dev-malikweb/images/leagues-imgs/${league.leagueLogo}.png" loading="lazy" 
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-cup.png';"  
alt="${league.leagueName}" height="50">
<h6>${league.leagueName}</h6>
</div>
<div class="league-matches">
`;
league.matches.forEach(match => {
const awayScore = match.awayCompetitor.score < 0 ? '0' : match.awayCompetitor.score;
const homeScore = match.homeCompetitor.score < 0 ? '0' : match.homeCompetitor.score;
leagueHTML += `
<div class="Event-Card" id="match-id-${match.id}">
<div class="Right-Team">
<div class="Team-Logo"><img alt="${match.homeCompetitor.name}" height="50" src="https://cdn.statically.io/gh/dev-malikweb/images/national-teams-imgs/${match.homeCompetitor.id}.png" onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';" title="${match.homeCompetitor.name}" width="50" loading="lazy" /></div>
<div class="Team-Name">${match.homeCompetitor.name}</div>
</div>
<div class="Event-Timing">
<div id="Event-Result">
<div class="Team-Score"><span>${homeScore}</span></div>
-
<div class="Team-Score"><span>${awayScore}</span></div>
</div>
<div id="Event-Time"></div>
<span class="Event-Date" data-start="${match.startTime}"></span>
</div>
<div class="Left-Team">
<div class="Team-Logo"><img alt="${match.awayCompetitor.name}" height="50" src="https://cdn.statically.io/gh/dev-malikweb/images/national-teams-imgs/${match.awayCompetitor.id}.png" onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';" title="${match.awayCompetitor.name}" width="50" /></div>
<div class="Team-Name">${match.awayCompetitor.name}</div>
</div>
</div>
`;
});
leagueHTML += `
</div>
</div>
`;
matchesContainer.innerHTML += leagueHTML;
}
}
if (Object.keys(matchesByLeague.clubs).length === 0 && Object.keys(matchesByLeague.internationals).length === 0) {
matchesContainer.innerHTML = `<h6 class="no-match">لا يتوافر مباريات لهذا اليوم</h6>`;
}
updateMatchStatus();
})
.catch(error => {
console.error('حدث خطأ في جلب البيانات:', error);
});
}

function updateCountdown(element, days, hours, minutes, seconds) {
days = days < 10 ? "0" + days : days;
hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;
element.innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
}

function updateMatchStatus() {
document.querySelectorAll(".Event-Date").forEach(function (matchDateElement) {
if (matchDateElement.classList.contains("End")) return;
var startTime = matchDateElement.getAttribute("data-start");
if (startTime) {
var startMoment = moment(startTime, "YYYY-MM-DDTHH:mm:ssZ");
var estimatedEndMoment = moment(startMoment).add(120, 'minutes'); 
var currentUtcMoment = moment.utc();
var secondsUntilStart = startMoment.diff(currentUtcMoment, "seconds");
var secondsUntilEnd = estimatedEndMoment.diff(currentUtcMoment, "seconds");
var matchHourElement = matchDateElement.parentElement.querySelector("#Event-Time");
var resultNowElement = matchDateElement.parentElement.querySelector("#Event-Result");
matchDateElement.classList.remove("NotStart", "Soon", "Live", "End");
matchDateElement.closest(".Event-Card").classList.remove("Event-NotStart", "Event-Soon", "Event-Live", "Event-End");
if (secondsUntilStart > 1800) {
var daysUntilStart = Math.floor(secondsUntilStart / 86400);
var hoursUntilStart = Math.floor((secondsUntilStart % 86400) / 3600);
var minutesUntilStart = Math.floor((secondsUntilStart % 3600) / 60);
var seconds = secondsUntilStart % 60;
var startTimeFormatted = moment.utc(startTime).format("LT");
matchHourElement.innerText = startTimeFormatted;
resultNowElement.style.display = "none";
updateCountdown(matchDateElement, daysUntilStart, hoursUntilStart, minutesUntilStart, seconds);
matchDateElement.classList.add("NotStart");
matchDateElement.closest(".Event-Card").classList.add("Event-NotStart");
} else if (secondsUntilStart > 0) {
var daysUntilStart = Math.floor(secondsUntilStart / 86400); // حساب الأيام
var hoursUntilStart = Math.floor((secondsUntilStart % 86400) / 3600);
var minutesUntilStart = Math.floor((secondsUntilStart % 3600) / 60);
var seconds = secondsUntilStart % 60;
var startTimeFormatted = moment.utc(startTime).format("LT");
matchHourElement.innerText = startTimeFormatted;
resultNowElement.style.display = "none";
updateCountdown(matchDateElement, daysUntilStart, hoursUntilStart, minutesUntilStart, seconds);
matchDateElement.classList.add("Soon");
matchDateElement.closest(".Event-Card").classList.add("Event-Soon");
} else if (secondsUntilEnd > 0) {
matchHourElement.style.display = "none";
matchDateElement.innerHTML = "جارية الآن";
matchDateElement.classList.add("Live");
matchDateElement.closest(".Event-Card").classList.add("Event-Live");
} else {
var startTimeFormatted = moment.utc(startTime).format("LT");
matchHourElement.style.display = "none";
matchHourElement.innerText = startTimeFormatted;
matchDateElement.innerHTML = "إنتهت المباراة";
matchDateElement.classList.add("End");
matchDateElement.closest(".Event-Card").classList.add("Event-End");
}
}
});
}

function updateCountdowns() {
document.querySelectorAll(".Event-Date.Soon, .Event-Date.NotStart").forEach(function (matchDateElement) {
var timeParts = matchDateElement.innerHTML.split(":");
var days = parseInt(timeParts[0]);
var hours = parseInt(timeParts[1]);
var minutes = parseInt(timeParts[2]);
var seconds = parseInt(timeParts[3]);
if (days > 0 || hours > 0 || minutes > 0 || seconds > 0) {
seconds--;
if (seconds < 0) {
seconds = 59;
minutes--;
if (minutes < 0) {
minutes = 59;
hours--;
if (hours < 0) {
hours = 23;
days--;
}
}
}
updateCountdown(matchDateElement, days, hours, minutes, seconds);
}
});
}

setInterval(function () {
updateCountdowns();
updateMatchStatus();
}, 1000);
updateMatchStatus();


document.addEventListener("DOMContentLoaded", function () {
document.getElementById('Dates').value = new Date().toISOString().split('T')[0];
let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let date = getDate(document.getElementById('Dates').value);
fetchMatches(date, timezone);
setInterval(updateMatchStatus, 1000);
});

document.querySelector("#Dates").addEventListener("change", function () {
let date = getDate(this.value);
let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
fetchMatches(date, timezone);
});

document.getElementById('language-select').addEventListener('change', function () {
let date = getDate(document.getElementById('Dates').value);
let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
fetchMatches(date, timezone);
});

function getDate(dateInput) {
let today = new Date(dateInput);
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();
return `${dd}/${mm}/${yyyy}`;
}
