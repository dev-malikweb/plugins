document.addEventListener("DOMContentLoaded", function () {
getInformationData();
});
async function getInformationData() {
const leagueElement = document.querySelector('.LeagueRank');
if (!leagueElement) {
console.error("عنصر .LeagueRank غير موجود");
return;
}
const leagueClass = leagueElement.classList[1];
if (!leagueClass) {
console.error("الفريق غير معرف");
return;
}
const leagueIds = {
L1: "7", // الدوري الانجليزي
L2: "11", // الدوري الاسباني
L3: "17", // الدوري الايطالي
L4: "35", // الدوري الفرنسي
L5: "25", // الدوري الالماني
L6: "552", // الدوري المصري
L7: "649", // الدوري السعودي
L8: "557", // الدوري المغربي
L9: "560", // الدوري الجزائري
L10: "549", // الدوري الاماراتي
L11: "6822", // الدوري العراقي
L12: "408", // الدوري القطري
L13: "78", // الدوري التركي
L14: "73", // الدوري البرتفالي
L15: "57", // الدوري الهولندي
L16: "113", // الدوري البرازيلي
L17: "554", // الدوري التونسي

L30: "572", // دوري أبطال أوروبا
L31: "624", // دوري أبطال افريقيا
L32: "623", // دوري أبطال اسيا
L33: "573", // الدوري الأوروبي
L34: "104", // الدوري الأمريكي
L35: "7685", // الدوري المؤتمر الأوروبي

L40: "6316", // كأس أمم أوروبا
L41: "167", // كأس أمم أفريقيا
L42: "6196", // كأس أمم أسيا
L43: "5930", // كأس العالم 
L44: "7016", // دوري الأمم الأوروبية
L45: "588", // تصفيات كأس امم افريقيا
};
const leagueId = leagueIds[leagueClass];
if (!leagueId) {
return;
}
const informationLink = `https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=${leagueId}&live=false&withSeasons=true`;
try {
const tableResponse = await fetch(informationLink);
const data = await tableResponse.json();
console.log("معلومات البطولة:", data.countries);
const leagueRankDiv = document.querySelector('.LeagueRank .Information');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = `<div class="LeagueDetails">
<div class="LeagueSec">
<div class="LeagueCover">
<div class="Cover" style="background-image: url(https://cdn.statically.io/gh/dev-malikweb/images/leagues-imgs/${data.standings[0].competitionId}.png);"></div>
</div>
<div class="LeaguePanner">
<div class="LeagueImg">
<img alt="${data.standings[0].displayName}" title="${data.standings[0].displayName}" src="https://cdn.statically.io/gh/dev-malikweb/images/leagues-imgs/${data.standings[0].competitionId}.png" height="50" width="50" loading="lazy">
</div>
<div class="LeagueInfo">
<span class="League"><span class="L-Name">${data.standings[0].displayName}</span><span class="L-Season">${data.competitions[0].seasons[0].name}</span></span>
<span class="Country">
<span class="C-Img">
<img alt="${data.countries[0].name}" title="${data.countries[0].name}" src="https://cdn.statically.io/gh/dev-malikweb/images/mw-national-teams-imgs/${data.countries[0].id}.png" height="30" width="30" loading="lazy">
</span>
<span class="C-Name">${data.countries[0].nameForURL.split('-').join(' ')}</span>
</span>
</div>
</div>
</div>
</div>
<div class="Buttons">
<button id="StandingsBtn"><span class="show">ترتيب البطولة</span><span class="hide">ترتيب</span></button>
<button id="ScorersBtn"><span class="show">ترتيب الهدافين</span><span class="hide">هدافين</span></button>
<button id="ResultsBtn"><span class="show">نتائج المباريات</span><span class="hide">نتائج</span></button>
<button id="TeamsBtn"><span class="show">الفرق المشاركة</span><span class="hide">الفرق</span></button>
</div>
`;
}
document.getElementById('StandingsBtn').addEventListener('click', function () {
showElement('Standings');
});
document.getElementById('ScorersBtn').addEventListener('click', function () {
showElement('TopScorers');
});
document.getElementById('ResultsBtn').addEventListener('click', function () {
showElement('Results');
});
document.getElementById('TeamsBtn').addEventListener('click', function () {
showElement('Teams');
});
function showElement(elementId) {
var elements = document.querySelectorAll('.LeagueRank .Standings, .LeagueRank .TopScorers, .LeagueRank .Results, .LeagueRank .Teams');
elements.forEach(function (el) {
el.style.display = 'none';
});
var selectedElement = document.querySelector('.LeagueRank .' + elementId);
if (selectedElement) {
selectedElement.style.display = 'block';
}
}
} catch (error) {
console.error("حدث خطأ أثناء استرجاع البيانات:", error);
}
}

  
  
// دالة اضافة ترتيب الدوريات  
document.addEventListener("DOMContentLoaded", function () {
getStandingsData();
});
async function getStandingsData() {
const leagueElement = document.querySelector('.LeagueRank');
if (!leagueElement) {
console.error("عنصر .LeagueRank غير موجود");
return;
}
const leagueClass = leagueElement.classList[1];
if (!leagueClass) {
console.error("الفريق غير معرف");
return;
}
const leagueIds = {
L1: "7", // الدوري الانجليزي
L2: "11", // الدوري الاسباني
L3: "17", // الدوري الايطالي
L4: "35", // الدوري الفرنسي
L5: "25", // الدوري الالماني
L6: "552", // الدوري المصري
L7: "649", // الدوري السعودي
L8: "557", // الدوري المغربي
L9: "560", // الدوري الجزائري
L10: "549", // الدوري الاماراتي
L11: "6822", // الدوري العراقي
L12: "408", // الدوري القطري
L13: "78", // الدوري التركي
L14: "73", // الدوري البرتفالي
L15: "57", // الدوري الهولندي
L16: "113", // الدوري البرازيلي
L17: "554", // الدوري التونسي
L30: "572", // دوري أبطال أوروبا
L33: "573", // الدوري الأوروبي
L35: "7685", // الدوري المؤتمر الأوروبي
};
const leagueId = leagueIds[leagueClass];
if (!leagueId) {
return;
}
const standingsLink = `https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=${leagueId}&live=true&withSeasons=true`;
try {
const tableResponse = await fetch(standingsLink);
const data = await tableResponse.json();
console.log("ترتيب الدوري:", data.standings[0].rows);
const leagueRankDiv = document.querySelector('.LeagueRank .Standings');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
leagueRankDiv.innerHTML = `
<table class="standings">
<thead>
<tr>
<th><span class="show">الترتيب</span><span class="hide">#</span></th>
<th><span class="show">الفريق</span><span class="hide">ناد</span></th>
<th><span class="show">لعب</span><span class="hide">ل</span></th>
<th class="won"><span class="show">فاز</span><span class="hide">ف</span></th>
<th class="draw"><span class="show">تعادل</span><span class="hide">ت</span></th>
<th class="lost"><span class="show">خسر</span><span class="hide">خ</span></th>
<th>+/-</th>
<th>فارق</th>
<th><span class="show">النقاط</span><span class="hide">ن</span></th>
<th><span class="show">القادمة</span><span class="hide">ق</span></th>
</tr>
</thead>
<tbody>
${data.standings[0].rows.map((row, index) => `
<tr class="${index % 2 === 0 ? 'even' : 'odd'} ${row.nextMatch && row.nextMatch.isOtherCompetition ? 'other-competition' : ''}">
<th key="${row.destinationNum}" class="destination" style="${getBorderStyle(row.destinationNum, data.standings[0].destinations)}">${row.position}</th>
<th>
<span class="team-info">
<span class="team">
<span class="team-logo">
<a href="/p/club-information.html#id=${row.competitor.id}">
<img 
class="teamlogo" 
alt="${row.competitor.name}" 
title="${row.competitor.name}" 
src="https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/${row.competitor.id}.png" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</a>
</span>
<a href="/search/label/${row.competitor.name}">
<span class="team-name">${row.competitor.name}</span>
</a>
</span>
<span class="last-five-matches">
<span class="dot-${row.recentForm[0]}"></span>
<span class="dot-${row.recentForm[1]}"></span>
<span class="dot-${row.recentForm[2]}"></span>
<span class="dot-${row.recentForm[3]}"></span>
<span class="dot-${row.recentForm[4]}"></span>
</span>
</span>
</th>
<th>${row.gamePlayed}</th>
<th>${row.gamesWon}</th>
<th>${row.gamesEven}</th>
<th>${row.gamesLost}</th>
<th>${row.for} : ${row.against}</th>
<th>${row.ratio}</th>
<th>${row.points}</th>
<th>
<img 
class="next-match-team" 
src="${getNextMatchTeamImage(row)}" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</th>
</tr>
`).join('')}
</tbody>
</table>
<div class="keys">
${data.standings[0].destinations.map((row, index) => `
<span class="key">
<span key="${row.num}" class="destinations-color" style="background-color:${row.color};${row.border ? `border-right: 4px solid ${row.color};` : ''}"></span>
<span class="destinations-name">${row.guaranteedText}</span>
</span>
`).join('')}
</div>
`;
}
} catch (error) {
console.error("حدث خطأ أثناء استرجاع البيانات:", error);
const leagueRankDiv = document.querySelector('.LeagueRank .Standings');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
leagueRankDiv.innerHTML = `<h6 class="no-data">:: لا يتوافر معلومات في الوقت الحالي ::</h6>`;
}
}

function getBorderStyle(destinationNum, destinations) {
const matchedDestination = destinations.find(dest => dest.num === destinationNum);
if (matchedDestination) {
return `border-right: 4px solid ${matchedDestination.color};`;
}
return '';
}

function getNextMatchTeamImage(row) {
const nextMatchTeamImageSrc = row.nextMatch && (row.nextMatch.awayCompetitor.id !== row.competitor.id ? row.nextMatch.awayCompetitor.id : row.nextMatch.homeCompetitor.id);
const nextMatchTeamImageSrcOrDefault = nextMatchTeamImageSrc
? `https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/${nextMatchTeamImageSrc}.png`
: 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/no-team.png';
return nextMatchTeamImageSrcOrDefault;
}
}

  
  
// دالة اضافة ترتيب مجموعات الأندية
document.addEventListener("DOMContentLoaded", function () {
getTeamsGroupsData();
});
async function getTeamsGroupsData() {
const leagueElement = document.querySelector('.LeagueRank');
if (!leagueElement) {
console.error("عنصر .LeagueRank غير موجود");
return;
}
const leagueClass = leagueElement.classList[1];
if (!leagueClass) {
console.error("الفريق غير معرف");
return;
}
const leagueIds = {
L31: "624", // دوري أبطال افريقيا
L32: "623", // دوري أبطال اسيا
L34: "104", // الدوري الأمريكي
};
const leagueId = leagueIds[leagueClass];
if (!leagueId) {
return;
}
const standingsLink = `https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=${leagueId}&live=false&withSeasons=true`;
try {
const tableResponse = await fetch(standingsLink);
const data = await tableResponse.json();
console.log("ترتيب المجموعات:", data);
const leagueRankDiv = document.querySelector('.LeagueRank .Standings');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
const groups = data.standings[0].groups || [];
groups.forEach(group => {
const groupRows = data.standings[0].rows.filter(row => row.groupNum === group.num) || [];
leagueRankDiv.innerHTML += `
<h5 class="group-name">${group.name}</h5>
<table class="standings">
<thead>
<tr>
<th><span class="show">الترتيب</span><span class="hide">#</span></th>
<th><span class="show">الفريق</span><span class="hide">ناد</span></th>
<th><span class="show">لعب</span><span class="hide">ل</span></th>
<th class="won"><span class="show">فاز</span><span class="hide">ف</span></th>
<th class="draw"><span class="show">تعادل</span><span class="hide">ت</span></th>
<th class="lost"><span class="show">خسر</span><span class="hide">خ</span></th>
<th>+/-</th>
<th>فارق</th>
<th><span class="show">النقاط</span><span class="hide">ن</span></th>
<th><span class="show">القادمة</span><span class="hide">ق</span></th>
</tr>
</thead>
<tbody>
${groupRows.map((row, index) => `
<tr class="${index % 2 === 0 ? 'even' : 'odd'} ${row.nextMatch && row.nextMatch.isOtherCompetition ? 'other-competition' : ''}">
<th key="${row.destinationNum}" class="destination" style="${getBorderStyle(row.destinationNum, data.standings[0].destinations)}">${row.position}</th>
<th>
<span class="team-info">
<span class="team">
<span class="team-logo">
<a href="/search/label/${row.competitor.name}">
<img 
class="teamlogo" 
alt="${row.competitor.name}" 
title="${row.competitor.name}" 
src="https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/${row.competitor.id}.png" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</a>
</span>
<span class="team-name">${row.competitor.name}</span>
</span>
<span class="last-five-matches">
<span class="dot-${row.recentForm[0]}"></span>
<span class="dot-${row.recentForm[1]}"></span>
<span class="dot-${row.recentForm[2]}"></span>
<span class="dot-${row.recentForm[3]}"></span>
<span class="dot-${row.recentForm[4]}"></span>
</span>
</span>
</th>
<th>${row.gamePlayed}</th>
<th>${row.gamesWon}</th>
<th>${row.gamesEven}</th>
<th>${row.gamesLost}</th>
<th>${row.for} : ${row.against}</th>
<th>${row.ratio}</th>
<th>${row.points}</th>
<th>
<img 
class="next-match-team" 
src="${getNextMatchTeamImage(row)}" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</th>
</tr>
`).join('')}
</tbody>
</table>`;
});
leagueRankDiv.innerHTML += `
<div class="keys">
${data.standings[0].destinations.map((row, index) => `
<span class="key">
<span key="${row.num}" class="destinations-color" style="background-color:${row.color};${row.border ? `border-right: 4px solid ${row.color};` : ''}"></span>
<span class="destinations-name">${row.guaranteedText}</span>
</span>
`).join('')}
</div>`;
}
} catch (error) {
console.error("حدث خطأ أثناء استرجاع البيانات:", error);
const leagueRankDiv = document.querySelector('.LeagueRank .Standings');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
leagueRankDiv.innerHTML = `<h6 class="no-data">:: لا يتوافر معلومات في الوقت الحالي ::</h6>`;
}
}

function getBorderStyle(destinationNum, destinations) {
const matchedDestination = destinations.find(dest => dest.num === destinationNum);
if (matchedDestination) {
return `border-right: 4px solid ${matchedDestination.color};`;
}
return '';
}

function getNextMatchTeamImage(row) {
const nextMatchTeamImageSrc = row.nextMatch && (row.nextMatch.awayCompetitor.id !== row.competitor.id ? row.nextMatch.awayCompetitor.id : row.nextMatch.homeCompetitor.id);
const nextMatchTeamImageSrcOrDefault = nextMatchTeamImageSrc
? `https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/${nextMatchTeamImageSrc}.png`
: 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/no-team.png';
return nextMatchTeamImageSrcOrDefault;
}
}

  
  
// دالة اضافة ترتيب هدافين الأندية
document.addEventListener("DOMContentLoaded", function () {
getTeamsPlayersData();
});
async function getTeamsPlayersData() {
const leagueElement = document.querySelector('.LeagueRank');
if (!leagueElement) {
console.error("عنصر .LeagueRank غير موجود");
return;
}
const leagueClass = leagueElement.classList[1];
if (!leagueClass) {
console.error("الفريق غير معرف");
return;
}
const leagueIds = {
L1: "7", // الدوري الانجليزي
L2: "11", // الدوري الاسباني
L3: "17", // الدوري الايطالي
L4: "35", // الدوري الفرنسي
L5: "25", // الدوري الالماني
L6: "552", // الدوري المصري
L7: "649", // الدوري السعودي
L8: "557", // الدوري المغربي
L9: "560", // الدوري الجزائري
L10: "549", // الدوري الاماراتي
L11: "6822", // الدوري العراقي
L12: "408", // الدوري القطري
L13: "78", // الدوري التركي
L14: "73", // الدوري البرتفالي
L15: "57", // الدوري الهولندي
L16: "113", // الدوري البرازيلي
L17: "554", // الدوري التونسي
  
L30: "572", // دوري أبطال أوروبا
L31: "624", // دوري أبطال افريقيا
L32: "623", // دوري أبطال اسيا
L33: "573", // الدوري الأوروبي
L34: "104", // الدوري الأمريكي
L35: "7685", // الدوري المؤتمر الأوروبي
};
const leagueId = leagueIds[leagueClass];
if (!leagueId) {
return;
}
const scorersLink = `https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=${leagueId}&competitors=&withSeasons=true`;
try {
const tableResponse = await fetch(scorersLink);
const data = await tableResponse.json();
console.log("ترتيب الهدافين:", data.stats.athletesStats);
const leagueRankDiv = document.querySelector('.LeagueRank .TopScorers');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
leagueRankDiv.innerHTML = `
<div class="statistics">
<div class="scorers">
<h5>الهدافين</h5>
<table class="players">
<thead>
<tr>
<th>الترتيب</th>
<th style="text-align: center;">اللاعب</th>
<th>الفريق</th>
<th class="goals">الأهداف</th>
</tr>
</thead>
<tbody>
${data.stats.athletesStats[0].rows.map((row, index) => `
<tr class="${index % 2 === 0 ? 'even' : 'odd'}">
<th>${row.position}</th>
<th>
<span class="player-info">
<span class="player-img">
<a href="/search/label/${row.entity.name}">
<img 
alt="${row.entity.name}" 
title="${row.entity.name}" 
src="https://cdn.statically.io/gh/dev-malikweb/images/clubs-players-imgs-24-25/${row.entity.id}.png" 
loading="lazy" 
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/player-avatar.svg';">
</a>
</span>
<span class="player-name">${row.entity.name}</span>
</span>
</th>
<th>
<img 
class="player-team" 
src="https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/${row.entity.competitorId}.png" 
loading="lazy" 
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</th>
<th>${row.stats[0].value}</th>
</tr>
`).join('')}
</tbody>
</table>
</div>
<div class="makers">
<h5>صناعة الأهداف</h5>
<table class="players">
<thead>
<tr>
<th>الترتيب</th>
<th style="text-align: center;">اللاعب</th>
<th>الفريق</th>
<th class="goals">صناعة</th>
</tr>
</thead>
<tbody>
${data.stats.athletesStats[2].rows.map((row, index) => `
<tr class="${index % 2 === 0 ? 'even' : 'odd'}">
<th>${row.position}</th>
<th>
<span class="player-info">
<span class="player-img">
<a href="/search/label/${row.entity.name}">
<img 
alt="${row.entity.name}" 
title="${row.entity.name}" 
src="https://cdn.statically.io/gh/dev-malikweb/images/clubs-players-imgs-24-25/${row.entity.id}.png" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/player-avatar.svg';">
</a>
</span>
<span class="player-name">${row.entity.name}</span>
</span>
</th>
<th>
<img 
class="player-team" 
src="https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/${row.entity.competitorId}.png" 
loading="lazy" 
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</th>
<th>${row.stats[0].value}</th>
</tr>
`).join('')}
</tbody>
</table>
</div>
</div>
`;
}
} catch (error) {
console.error("حدث خطأ أثناء استرجاع البيانات:", error);
const leagueRankDiv = document.querySelector('.LeagueRank .TopScorers');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
leagueRankDiv.innerHTML = `<h6 class="no-data">:: لا يتوافر معلومات في الوقت الحالي ::</h6>`;
}
}
}

  
  
// دالة اضافة نتائج مباريات الأندية
document.addEventListener("DOMContentLoaded", function () {
getTeamsResultsData();
});
async function getTeamsResultsData() {
const leagueElement = document.querySelector('.LeagueRank');
if (!leagueElement) {
console.error("عنصر .LeagueRank غير موجود");
return;
}
const leagueClass = leagueElement.classList[1];
if (!leagueClass) {
console.error("الفريق غير معرف");
return;
}
const leagueIds = {
L1: "7", // الدوري الانجليزي
L2: "11", // الدوري الاسباني
L3: "17", // الدوري الايطالي
L4: "35", // الدوري الفرنسي
L5: "25", // الدوري الالماني
L6: "552", // الدوري المصري
L7: "649", // الدوري السعودي
L8: "557", // الدوري المغربي
L9: "560", // الدوري الجزائري
L10: "549", // الدوري الاماراتي
L11: "6822", // الدوري العراقي
L12: "408", // الدوري القطري
L13: "78", // الدوري التركي
L14: "73", // الدوري البرتفالي
L15: "57", // الدوري الهولندي
L16: "113", // الدوري البرازيلي
L17: "554", // الدوري التونسي
  
L30: "572", // دوري أبطال أوروبا
L31: "624", // دوري أبطال افريقيا
L32: "623", // دوري أبطال اسيا
L33: "573", // الدوري الأوروبي
L34: "104", // الدوري الأمريكي
L35: "7685", // الدوري المؤتمر الأوروبي
};
const leagueId = leagueIds[leagueClass];
if (!leagueId) {
return;
}
const resultsLink = `https://webws.365scores.com/web/games/results/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=${leagueId}&includeTopBettingOpportunity=1`;
try {
const tableResponse = await fetch(resultsLink);
if (!tableResponse.ok) {
console.error("فشلت عملية الاستعلام. حالة الاستجابة:", tableResponse.status);
return;
}
const data = await tableResponse.json();
data.games.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
console.log("نتائج المباريات:", data.games);
const leagueRankDiv = document.querySelector('.LeagueRank .Results');
if (!leagueRankDiv) {
console.error("عنصر .Results غير موجود في عنصر .LeagueRank");
return;
}
leagueRankDiv.innerHTML = '';
let currentDate = null;
leagueRankDiv.innerHTML = `
${data.games.reverse().map((row, index) => {
const matchDate = new Date(row.startTime).toLocaleDateString('en-GB');
if (matchDate !== currentDate) {
currentDate = matchDate;
return `
<h5 class="date">مباريات يوم : ${matchDate}</h5>
${createMatchHTML(row)}
`;
}
return createMatchHTML(row);
}).join('')}
`;
} catch (error) {
console.error("حدث خطأ أثناء استرجاع البيانات:", error);
const leagueRankDiv = document.querySelector('.LeagueRank .Results');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
leagueRankDiv.innerHTML = `<h6 class="no-data">:: لا يتوافر معلومات في الوقت الحالي ::</h6>`;
}
}
}
function createMatchHTML(row) {
const awayScore = row.awayCompetitor.score < 0 ? '-' : row.awayCompetitor.score;
const homeScore = row.homeCompetitor.score < 0 ? '-' : row.homeCompetitor.score;
return `
<div class="match-card">
<div class="match">
<div class="match-status">${row.shortStatusText}</div>
<div class="teams">
<div class="team">
<div class="team-img">
<a href="/search/label/${row.awayCompetitor.name}">
<img 
alt="${row.awayCompetitor.name}" 
title="${row.awayCompetitor.name}" 
src="https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/${row.awayCompetitor.id}.png" 
width="60" 
height="60" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</a>
</div>
<div class="team-name">${row.awayCompetitor.name}</div>
</div>
<div class="team">
<div class="team-img">
<a href="/search/label/${row.homeCompetitor.name}">
<img 
alt="${row.homeCompetitor.name}" 
title="${row.homeCompetitor.name}" 
src="https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/${row.homeCompetitor.id}.png" 
width="60" 
height="60" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</a>
</div>
<div class="team-name">${row.homeCompetitor.name}</div>
</div>
</div>
<div class="match-result">
<span>${awayScore}</span>
<span>${homeScore}</span>
</div>
</div>
</div>
`;
}

  
  
// دالة اضافة قائمة الأندية
document.addEventListener("DOMContentLoaded", function () {
getTeamsData();
});
async function getTeamsData() {
const leagueElement = document.querySelector('.LeagueRank');
if (!leagueElement) {
console.error("عنصر .LeagueRank غير موجود");
return;
}
const leagueClass = leagueElement.classList[1];
if (!leagueClass) {
console.error("الفريق غير معرف");
return;
}
const leagueIds = {
L1: "7", // الدوري الانجليزي
L2: "11", // الدوري الاسباني
L3: "17", // الدوري الايطالي
L4: "35", // الدوري الفرنسي
L5: "25", // الدوري الالماني
L6: "552", // الدوري المصري
L7: "649", // الدوري السعودي
L8: "557", // الدوري المغربي
L9: "560", // الدوري الجزائري
L10: "549", // الدوري الاماراتي
L11: "6822", // الدوري العراقي
L12: "408", // الدوري القطري
L13: "78", // الدوري التركي
L14: "73", // الدوري البرتفالي
L15: "57", // الدوري الهولندي
L16: "113", // الدوري البرازيلي
L17: "554", // الدوري التونسي
  
L30: "572", // دوري أبطال أوروبا
L31: "624", // دوري أبطال افريقيا
L32: "623", // دوري أبطال اسيا
L33: "573", // الدوري الأوروبي
L34: "104", // الدوري الأمريكي
L35: "7685", // الدوري المؤتمر الأوروبي
};
const leagueId = leagueIds[leagueClass];
if (!leagueId) {
return;
}
const teamsLink = `https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=${leagueId}&competitors=&withSeasons=true`;
try {
const tableResponse = await fetch(teamsLink);
const data = await tableResponse.json();
console.log("قائمة فرق البطولة:", data);
const leagueRankDiv = document.querySelector('.LeagueRank .Teams');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
leagueRankDiv.innerHTML = `
<div class="Mw-table">
<ul class="Mw-cards">
${data.competitors.map((row, index) => `
<li class="card">
<span class="card-image">
<a href="/search/label/${row.name}">
<img 
alt="${row.name}" 
title="${row.name}" 
src="https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/${row.id}.png" 
width="50" 
height="50" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</a>
</span>
<span class="card-info">
<span class="card-name">
<span class="name-ar">
<a href="/search/label/${row.name}">${row.name}</a>
</span>
<span class="name-en">
<a href="/search/label/${row.nameForURL}">${row.nameForURL.split('-').join(' ')}</a>
</span>
<span class="short-name-en">${row.symbolicName ? row.symbolicName : '-'}</span>
</span>
</span>
</li>
`).join('')}
</ul>
</div>
`;
}
} catch (error) {
console.error("حدث خطأ أثناء استرجاع البيانات:", error);

const leagueRankDiv = document.querySelector('.LeagueRank .Teams');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
leagueRankDiv.innerHTML = `<h6 class="no-data">:: لا يتوافر معلومات في الوقت الحالي ::</h6>`;
}
}
}

  
  
// دالة اضافة ترتيب مجموعات المنتخبات
document.addEventListener("DOMContentLoaded", function () {
getNationalsGroupsData();
});
async function getNationalsGroupsData() {
const leagueElement = document.querySelector('.LeagueRank');
if (!leagueElement) {
console.error("عنصر .LeagueRank غير موجود");
return;
}
const leagueClass = leagueElement.classList[1];
if (!leagueClass) {
console.error("الفريق غير معرف");
return;
}
const leagueIds = {
L40: "6316", // كأس أمم أوروبا
L41: "167", // كأس أمم أفريقيا
L42: "6196", // كأس أمم أسيا
L43: "5930", // كأس العالم 
L44: "7016", // دوري الأمم الأوروبية
L45: "588", // تصفيات كأس امم افريقيا
};
const leagueId = leagueIds[leagueClass];
if (!leagueId) {
return;
}
const standingsLink = `https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=${leagueId}&live=false&withSeasons=true`;
try {
const tableResponse = await fetch(standingsLink);
const data = await tableResponse.json();
console.log("ترتيب المجموعات:", data);
const leagueRankDiv = document.querySelector('.LeagueRank .Standings');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
const groups = data.standings[0].groups || [];
groups.forEach(group => {
const groupRows = data.standings[0].rows.filter(row => row.groupNum === group.num) || [];
leagueRankDiv.innerHTML += `
<h5 class="group-name">${group.name}</h5>
<table class="standings">
<thead>
<tr>
<th><span class="show">الترتيب</span><span class="hide">#</span></th>
<th><span class="show">المنتخب</span><span class="hide">منتخب</span></th>
<th><span class="show">لعب</span><span class="hide">ل</span></th>
<th class="won"><span class="show">فاز</span><span class="hide">ف</span></th>
<th class="draw"><span class="show">تعادل</span><span class="hide">ت</span></th>
<th class="lost"><span class="show">خسر</span><span class="hide">خ</span></th>
<th>+/-</th>
<th>فارق</th>
<th><span class="show">النقاط</span><span class="hide">ن</span></th>
<th><span class="show">القادمة</span><span class="hide">ق</span></th>
</tr>
</thead>
<tbody>
${groupRows.map((row, index) => `
<tr class="${index % 2 === 0 ? 'even' : 'odd'} ${row.nextMatch && row.nextMatch.isOtherCompetition ? 'other-competition' : ''}">
<th key="${row.destinationNum}" class="destination" style="${getBorderStyle(row.destinationNum, data.standings[0].destinations)}">${row.position}</th>
<th>
<span class="team-info">
<span class="team">
<span class="team-logo">
<a href="/search/label/${row.competitor.name}">
<img 
class="teamlogo" 
alt="${row.competitor.name}" 
title="${row.competitor.name}" 
src="https://cdn.statically.io/gh/dev-malikweb/images/national-teams-imgs/${row.competitor.id}.png" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</a>
</span>
<span class="team-name">${row.competitor.name}</span>
</span>
<span class="last-five-matches">
<span class="dot-${row.recentForm[0]}"></span>
<span class="dot-${row.recentForm[1]}"></span>
<span class="dot-${row.recentForm[2]}"></span>
<span class="dot-${row.recentForm[3]}"></span>
<span class="dot-${row.recentForm[4]}"></span>
</span>
</span>
</th>
<th>${row.gamePlayed}</th>
<th>${row.gamesWon}</th>
<th>${row.gamesEven}</th>
<th>${row.gamesLost}</th>
<th>${row.for} : ${row.against}</th>
<th>${row.ratio}</th>
<th>${row.points}</th>
<th>
<img 
class="next-match-team" 
src="${getNextMatchTeamImage(row)}" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</th>
</tr>
`).join('')}
</tbody>
</table>
`;
});
leagueRankDiv.innerHTML += `
<div class="keys">
${data.standings[0].destinations.map((row, index) => `
<span class="key">
<span key="${row.num}" class="destinations-color" style="background-color:${row.color};${row.border ? `border-right: 4px solid ${row.color};` : ''}"></span>
<span class="destinations-name">${row.guaranteedText}</span>
</span>
`).join('')}
</div>
`;
}
} catch (error) {
console.error("حدث خطأ أثناء استرجاع البيانات:", error);

const leagueRankDiv = document.querySelector('.LeagueRank .Standings');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
leagueRankDiv.innerHTML += `<h6 class="no-data">:: لا يتوافر معلومات في الوقت الحالي ::</h6>`;
}
}
}
function getBorderStyle(destinationNum, destinations) {
const matchedDestination = destinations.find(dest => dest.num === destinationNum);
if (matchedDestination) {
return `border-right: 4px solid ${matchedDestination.color};`;
}
return '';
}
function getNextMatchTeamImage(row) {
const nextMatchTeamImageSrc = row.nextMatch && (row.nextMatch.awayCompetitor.id !== row.competitor.id ? row.nextMatch.awayCompetitor.id : row.nextMatch.homeCompetitor.id);
const nextMatchTeamImageSrcOrDefault = nextMatchTeamImageSrc
? `https://cdn.statically.io/gh/dev-malikweb/images/national-teams-imgs/${nextMatchTeamImageSrc}.png`
: 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/no-team.png';
return nextMatchTeamImageSrcOrDefault;
}

  
  
// دالة اضافة ترتيب هدافين المنتخبات
document.addEventListener("DOMContentLoaded", function () {
getNationalsPlayersData();
});
async function getNationalsPlayersData() {
const leagueElement = document.querySelector('.LeagueRank');
if (!leagueElement) {
console.error("عنصر .LeagueRank غير موجود");
return;
}
const leagueClass = leagueElement.classList[1];
if (!leagueClass) {
console.error("الفريق غير معرف");
return;
}
const leagueIds = {
L40: "6316", // كأس أمم أوروبا
L41: "167", // كأس أمم أفريقيا
L42: "6196", // كأس أمم أسيا
L43: "5930", // كأس العالم 
L44: "7016", // دوري الأمم الأوروبية
L45: "588", // تصفيات كأس امم افريقيا
};
const leagueId = leagueIds[leagueClass];
if (!leagueId) {
return;
}
const scorersLink = `https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=${leagueId}&competitors=&withSeasons=true`;
try {
const tableResponse = await fetch(scorersLink);
const data = await tableResponse.json();
console.log("ترتيب الهدافين:", data.stats.athletesStats);
const leagueRankDiv = document.querySelector('.LeagueRank .TopScorers');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
leagueRankDiv.innerHTML += `
<div class="statistics">
<div class="scorers">
<h5>الهدافين</h5>
<table class="players">
<thead>
<tr>
<th>الترتيب</th>
<th style="text-align: center;">اللاعب</th>
<th>الفريق</th>
<th class="goals">الأهداف</th>
</tr>
</thead>
<tbody>
${data.stats.athletesStats[0].rows.map((row, index) => `
<tr class="${index % 2 === 0 ? 'even' : 'odd'}">
<th>${row.position}</th>
<th>
<span class="player-info">
<span class="player-img">
<a href="/search/label/${row.entity.name}">
<img 
alt="${row.entity.name}" 
title="${row.entity.name}" 
src="https://cdn.statically.io/gh/dev-malikweb/images/clubs-players-imgs-24-25/${row.entity.id}.png" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/player-avatar.svg';">
</a>
</span>
<span class="player-name">${row.entity.name}</span>
</span>
</th>
<th>
<img 
class="player-team" 
src="https://cdn.statically.io/gh/dev-malikweb/images/national-teams-imgs/${row.entity.competitorId}.png" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</th>
<th>${row.stats[0].value}</th>
</tr>
`).join('')}
</tbody>
</table>
</div>
<div class="makers">
<h5>صناعة الأهداف</h5>
<table class="players">
<thead>
<tr>
<th>الترتيب</th>
<th style="text-align: center;">اللاعب</th>
<th>الفريق</th>
<th class="goals">صناعة</th>
</tr>
</thead>
<tbody>
${data.stats.athletesStats[2].rows.map((row, index) => `
<tr class="${index % 2 === 0 ? 'even' : 'odd'}">
<th>${row.position}</th>
<th>
<span class="player-info">
<span class="player-img">
<a href="/search/label/${row.entity.name}">
<img 
alt="${row.entity.name}" 
title="${row.entity.name}" 
src="https://cdn.statically.io/gh/dev-malikweb/images/clubs-players-imgs-24-25/${row.entity.id}.png" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/player-avatar.svg';">
</a>
</span>
<span class="player-name">${row.entity.name}</span>
</span>
</th>
<th>
<img 
class="player-team" 
src="https://cdn.statically.io/gh/dev-malikweb/images/national-teams-imgs/${row.entity.competitorId}.png" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</th>
<th>${row.stats[0].value}</th>
</tr>
`).join('')}
</tbody>
</table>
</div>
</div>
`;
}
} catch (error) {
console.error("حدث خطأ أثناء استرجاع البيانات:", error);
const leagueRankDiv = document.querySelector('.LeagueRank .TopScorers');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
leagueRankDiv.innerHTML += `<h6 class="no-data">:: لا يتوافر معلومات في الوقت الحالي ::</h6>`;
}
}
}

  
  
// دالة اضافة نتائج مباريات المنتخبات
document.addEventListener("DOMContentLoaded", function () {
getNationalTeamsResultsData();
});
async function getNationalTeamsResultsData() {
async function getTeamsResultsData() {
const leagueElement = document.querySelector('.LeagueRank');
if (!leagueElement) {
console.error("عنصر .LeagueRank غير موجود");
return;
}
const leagueClass = leagueElement.classList[1];
if (!leagueClass) {
console.error("الفريق غير معرف");
return;
}
const leagueIds = {
L40: "6316", // كأس أمم أوروبا
L41: "167", // كأس أمم أفريقيا
L42: "6196", // كأس أمم أسيا
L43: "5930", // كأس العالم 
L44: "7016", // دوري الأمم الأوروبية
L45: "588", // تصفيات كأس امم افريقيا
};
const leagueId = leagueIds[leagueClass];
if (!leagueId) {
return;
}
const resultsLink = `https://webws.365scores.com/web/games/results/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=${leagueId}&includeTopBettingOpportunity=1`;
try {
const tableResponse = await fetch(resultsLink);
if (!tableResponse.ok) {
console.error("فشلت عملية الاستعلام. حالة الاستجابة:", tableResponse.status);
return;
}
const data = await tableResponse.json();
console.log("نتائج المباريات:", data.games);
data.games.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
const leagueRankDiv = document.querySelector('.LeagueRank .Results');
if (!leagueRankDiv) {
console.error("عنصر .Results غير موجود في عنصر .LeagueRank");
return;
}
leagueRankDiv.innerHTML = '';
let currentDate = null;
leagueRankDiv.innerHTML = data.games.reverse().map((row, index) => {
const matchDate = new Date(row.startTime).toLocaleDateString('en-GB');
if (matchDate !== currentDate) {
currentDate = matchDate;
return `
<h5 class="date">مباريات يوم : ${matchDate}</h5>
${createMatchHTML(row)}
`;
}
return createMatchHTML(row);
}).join('');
} catch (error) {
console.error("حدث خطأ أثناء استرجاع البيانات:", error);
const leagueRankDiv = document.querySelector('.LeagueRank .Results');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
leagueRankDiv.innerHTML = `<h6 class="no-data">:: لا يتوافر معلومات في الوقت الحالي ::</h6>`;
}
}
}
function createMatchHTML(row) {
const awayScore = row.awayCompetitor.score < 0 ? '-' : row.awayCompetitor.score;
const homeScore = row.homeCompetitor.score < 0 ? '-' : row.homeCompetitor.score;
return `
<div class="match-card">
<div class="match">
<div class="match-status">${row.shortStatusText}</div>
<div class="teams">
<div class="team">
<div class="team-img">
<a href="/search/label/${row.awayCompetitor.name}">
<img 
alt="${row.awayCompetitor.name}" 
title="${row.awayCompetitor.name}" 
src="https://cdn.statically.io/gh/dev-malikweb/images/national-teams-imgs/${row.awayCompetitor.id}.png" 
width="60" 
height="60" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</a>
</div>
<div class="team-name">${row.awayCompetitor.name}</div>
</div>
<div class="team">
<div class="team-img">
<a href="/search/label/${row.homeCompetitor.name}">
<img 
alt="${row.homeCompetitor.name}" 
title="${row.homeCompetitor.name}" 
src="https://cdn.statically.io/gh/dev-malikweb/images/national-teams-imgs/${row.homeCompetitor.id}.png" 
width="60" 
height="60" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</a>
</div>
<div class="team-name">${row.homeCompetitor.name}</div>
</div>
</div>
<div class="match-result">
<span>${awayScore}</span>
<span>${homeScore}</span>
</div>
</div>
</div>
`;
}

await getTeamsResultsData();
}

  
  
// دالة اضافة قائمة المنتخبات
document.addEventListener("DOMContentLoaded", function () {
getNationalsData();
});
async function getNationalsData() {
const leagueElement = document.querySelector('.LeagueRank');
if (!leagueElement) {
console.error("عنصر .LeagueRank غير موجود");
return;
}
const leagueClass = leagueElement.classList[1];
if (!leagueClass) {
console.error("الفريق غير معرف");
return;
}
const leagueIds = {
L40: "6316", // كأس أمم أوروبا
L41: "167", // كأس أمم أفريقيا
L42: "6196", // كأس أمم أسيا
L43: "5930", // كأس العالم 
L44: "7016", // دوري الأمم الأوروبية
L45: "588", // تصفيات كأس امم افريقيا
};
const leagueId = leagueIds[leagueClass];
if (!leagueId) {
return;
}
const teamsLink = `https://webws.365scores.com/web/stats/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=${leagueId}&competitors=&withSeasons=true`;
try {
const tableResponse = await fetch(teamsLink);
if (!tableResponse.ok) {
console.error("فشلت عملية الاستعلام. حالة الاستجابة:", tableResponse.status);
return;
}
const data = await tableResponse.json();
console.log("قائمة فرق البطولة:", data.competitors);
const leagueRankDiv = document.querySelector('.LeagueRank .Teams');
if (!leagueRankDiv) {
console.error("عنصر .Teams غير موجود في عنصر .LeagueRank");
return;
}
leagueRankDiv.innerHTML = '';
leagueRankDiv.innerHTML = `
<div class="Mw-table">
<ul class="Mw-cards">
${data.competitors.map((row, index) => `
<li class="card">
<span class="card-image">
<a href="/search/label/${row.name}">
<img 
alt="${row.name}" 
title="${row.name}" 
src="https://cdn.statically.io/gh/dev-malikweb/images/national-teams-imgs/${row.id}.png" 
width="50" 
height="50" 
loading="lazy"
onerror="this.onerror=null; this.src='https://cdn.statically.io/gh/dev-malikweb/images/trophies-imgs/none-club.png';">
</a>
</span>
<span class="card-info">
<span class="card-name">
<span class="name-ar">
<a href="/search/label/${row.name}">${row.name}</a>
</span>
<span class="name-en">
<a href="/search/label/${row.nameForURL}">${row.nameForURL.split('-').join(' ')}</a>
</span>
<span class="short-name-en">${row.symbolicName ? row.symbolicName : '-'}</span>
</span>
</span>
</li>
`).join('')}
</ul>
</div>
`;
} catch (error) {
console.error("حدث خطأ أثناء استرجاع البيانات:", error);
const leagueRankDiv = document.querySelector('.LeagueRank .Teams');
if (leagueRankDiv) {
leagueRankDiv.innerHTML = '';
leagueRankDiv.innerHTML = `<h6 class="no-data">:: لا يتوافر معلومات في الوقت الحالي ::</h6>`;
}
}
}

  
// دالة التنسيقات  
document.addEventListener("DOMContentLoaded", function () {
getCssData();
});
async function getCssData() {
var cssText = `
.LeagueRank{display:block;position:relative;margin-bottom:15px;overflow:hidden}.Information{display:flex;flex-direction:column;justify-content:center;position:relative;margin-bottom:12px;overflow:hidden}.LeagueDetails{display:block;position:relative;color:#fff;border-radius:12px;margin-bottom:12px;padding:0;overflow:hidden}.LeagueCover{display:block;position:absolute;width:100%;height:100%;overflow:hidden}.Cover{position:absolute;width:100%;height:100%;background-size:100% 100%;background-position:center center;filter:blur(50px);transform:scale(1.5);overflow:hidden}.LeaguePanner{display:flex;position:relative;border-radius:12px;-webkit-box-align:center;align-items:center;padding:24px 12px;background-color:rgba(0,0,0,.2);overflow:hidden}.LeagueImg{background-color:#fff;height:110px;width:110px;margin-left:24px;margin-right:12px;border-radius:20px}.LeagueImg img{display:table;height:80px;width:80px;margin:15px auto;vertical-align:top;object-fit:contain}.LeagueInfo{display:flex;flex-direction:column;position:relative;align-items:flex-start;height:110px;overflow:hidden;justify-content:space-between}span.League{display:flex;flex-direction:row;align-items:flex-end}span.L-Name{font-size:25px;font-weight:600;margin-left:12px;line-height:1.5;letter-spacing:1.5px}span.L-Season{font-size:14px;line-height:1;opacity:.5}span.Country{display:flex;flex-direction:row;align-items:center;height:45px;background:rgba(0,0,0,.2);border-radius:12px;padding:0 12px;justify-content:space-between}span.C-Img{display:block;width:45px;height:45px;margin-left:8px;overflow:hidden}span.C-Img img{display:table;width:100%;height:auto;max-width:41px;max-height:41px;margin:2px auto;padding:3px}span.C-Name{font-size:14px;line-height:1}.Buttons{display:grid;grid-gap:12px;grid-template-columns:repeat(4,1fr);width:100%;align-items:center}.Buttons button{cursor:pointer;color:#fff;font-family:"Neo Sans Arabic";border:0;border-radius:8px;background-color:#495057;font-size:16px;text-align:center;padding:6px 0;overflow:hidden}h5.group-name{display:block;width:100%;background:radial-gradient(circle,rgba(89,152,220,0.6) 0,rgb(35,35,35) 130%);color:#fff;font-weight:600;text-align:center;font-size:18px;padding:8px;border-radius:8px;margin-bottom:12px}h6.no-data{display:flex;width:100%;height:300px;font-size:18px;font-weight:600;letter-spacing:1px;background-color:#e4eeff;border-radius:8px;text-align:center;align-items:center;justify-content:center}table.standings{width:100%;font-size:14px;border-spacing:2px;margin:0 auto;margin-bottom:12px}table.standings thead tr{background-color:#718ba1;color:#fff}table.standings thead tr th{border-bottom:4px solid #fff0}table.standings thead tr th.won{border-bottom:4px solid #008d29}table.standings thead tr th.draw{border-bottom:4px solid #6610f2}table.standings thead tr th.lost{border-bottom:4px solid #dc3545}table.standings th{border-radius:6px;padding:4px 0;text-align:center}table.standings th:nth-child(1){display:table-cell;width:60px}table.standings th:not(:nth-of-type(2)){width:70px}th span.team-info{display:flex;flex-direction:row;align-items:center;justify-content:space-between}th span.team-logo{display:flex;width:20%;position:relative;overflow:hidden;flex-direction:column;align-items:center;justify-content:center}th span.team-logo img.teamlogo{display:table;width:30px!important;height:30px!important;margin:0 auto;object-fit:contain}th .team-name{position:relative;width:80%;text-align:right;overflow:hidden}table.standings th span.team{display:flex;flex-direction:row;width:70%;align-items:center;justify-content:flex-start}th img.next-match-team{display:table;width:30px!important;height:30px!important;margin:0 auto;object-fit:contain}span.last-five-matches{display:flex;align-items:center;flex-direction:row;width:30%;justify-content:flex-end;margin-left:12px}span.dot-0,span.dot-1,span.dot-2{display:inline-block;height:18px;width:18px;margin-right:3px;border-radius:50%;opacity:.8}span.dot-0{background:#dc3545}span.dot-1{background:#008d29}span.dot-2{background:#6610f2}table.standings tbody tr.odd{background:#e4eeff}table.standings tbody tr.even{background:#eceef2}table.standings thead tr th span.hide,.Buttons button span.hide{display:none}.keys{display:flex;background-color:#e4eeff;padding:12px;overflow:hidden;position:relative;line-height:35px;border-radius:8px;flex-direction:row}.keys span.key{display:flex;flex-direction:row;margin-left:12px;align-items:center;justify-content:center}span.destinations-color{width:6px;height:25px;display:inline-block;border-radius:2px;margin-left:6px}span.destinations-name{display:inline-block;font-size:14px}@media screen and (max-width:1000px){table.standings th:not(:nth-of-type(2)){width:50px}}@media screen and (max-width:750px){th span.team-info{flex-direction:column;align-items:flex-start}table.standings th span.team{width:100%;margin-bottom:6px}span.last-five-matches{display:flex;flex-direction:row;width:100%;justify-content:flex-start;margin-left:0}}@media screen and (max-width:650px){th span.team-logo{width:30%}th .team-name{width:70%}span.last-five-matches{display:none}table.standings th span.team{margin-bottom:0}table.standings th:nth-of-type(7){display:none}}@media screen and (max-width:600px){.LeaguePanner{-webkit-box-align:center;align-items:center;flex-direction:column;justify-content:center}.LeagueInfo{justify-content:flex-end;align-items:center}.LeagueImg{margin:0 auto}span.League{display:flex;flex-direction:column;align-items:center;justify-content:space-around;margin-bottom:8px}.Buttons button{font-size:12px}table.standings th:not(:nth-of-type(2)){width:50px}table.standings th span.team{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between}th span.team-logo,th .team-name{display:flex;width:100%;align-items:center;justify-content:center;flex-direction:row}table.standings th:nth-of-type(8){display:none}.keys{flex-direction:column!important;align-items:flex-start}}@media screen and (max-width:450px){span.L-Name{font-size:12px;margin-left:0;margin-bottom:10px}.LeagueImg{height:90px;width:90px}.LeagueImg img{height:60px;width:60px}table.standings thead tr th span.hide,.Buttons button span.hide{display:block}table.standings thead tr th span.show,.Buttons button span.show{display:none}table.standings th{width:30px!important}}@media screen and (max-width:400px){table.standings th{width:40px!important}table.standings tbody tr th img.teamlogo{width:30px;height:30px}th span.team-name{display:none}}.statistics{position:relative;display:grid;grid-gap:12px;grid-template-columns:repeat(2,1fr)}.scorers,.makers{display:block;width:100%;position:relative;border-radius:8px;overflow:hidden}.scorers h5,.makers h5{display:block;width:100%;background-color:#e4eeff;font-size:18px;padding:4px 0;text-align:center;border-radius:8px;margin-bottom:12px}table.players{width:100%;border-spacing:2px;font-size:14px;overflow:hidden}table.players thead tr{background-color:#718ba1;color:#fff}table.players th{border-radius:8px;padding:4px 0;text-align:center}table.players th:not(:nth-of-type(2)){width:70px}th span.player-info{display:flex;align-items:center;justify-content:flex-start;flex-direction:row;width:100%;overflow:hidden}th span.player-img{display:block;position:relative;float:right;margin-right:10px;overflow:hidden}th span.player-img img{display:table;width:100%;height:auto;max-width:40px;max-height:40px;margin:0 auto}th span.player-name{display:block;margin-right:10px;font-size:14px;float:right}th img.player-team{display:table;width:100%;height:auto;max-width:40px;max-height:40px;margin:0 auto}table.players tbody tr.odd{background-color:#e4eeff}table.players tbody tr.even{background-color:#eceef2}@media screen and (max-width:850px){.statistics{display:block;width:100%}.scorers{margin-bottom:12px}}@media screen and (max-width:450px){table.players th:nth-of-type(3){display:none}th span.player-name{font-size:12px}}@media screen and (max-width:350px){th span.player-info{align-items:flex-start;justify-content:flex-start;flex-direction:column}}h5.date{display:block;width:100%;background:#718ba1;color:#fff;font-size:16px;font-weight:600;padding:6px 12px;border-radius:8px;margin-bottom:12px}.match-card{width:100%;height:100px;background:linear-gradient(to left,#e4eeff,#eceef2);margin-bottom:12px;border-radius:8px;font-size:14px;padding:10px;position:relative;overflow:hidden}.match-card .match{display:flex;width:50%;height:80px;position:relative;text-align:center;overflow:hidden;flex-direction:row;justify-content:flex-start;align-items:center}.match .match-status{display:flex;width:20%;border-left:1px solid #ddd;height:80px;flex-direction:column;align-items:center;justify-content:center}.match .teams{display:flex;width:calc((60% - 12px) / 1);height:80px;margin-right:12px;flex-direction:column;justify-content:space-between;align-items:flex-start}.teams .team{display:flex;flex-direction:row;align-items:center;justify-content:center;height:30px}.team .team-img{display:block;position:relative;margin-left:12px;overflow:hidden}.team-img img{display:table;width:100%;height:auto;max-width:30px;max-height:30px;margin:0 auto}.match .match-result{display:flex;width:20%;height:80px;flex-direction:column;align-items:center;justify-content:space-between}.match-result span{display:block;background:#495057;width:32px;height:32px;line-height:32px;border-radius:8px;color:#fff;overflow:hidden}@media screen and (max-width:600px){.match-card .match{width:100%}.match .teams{width:calc((50% - 12px) / 1)}.match .match-status,.match .match-result{width:25%}}.Mw-table{display:block;position:relative;overflow:hidden}.Mw-table ul.Mw-cards{position:relative;display:grid;grid-gap:12px;grid-template-columns:repeat(4,1fr)}ul.Mw-cards li.card{display:flex;position:relative;background-color:#e4eeff;border-radius:8px;font-size:14px;padding:12px;flex-direction:row;align-items:center;justify-content:space-between;overflow:hidden}li.card span.card-image{display:flex;background-color:#fff;padding:8px;border-radius:50%;width:90px;height:90px;border:10px solid #e9ecef;align-items:center;justify-content:center;flex-direction:column}li.card span.card-image img{display:table;padding:6px;margin:0 auto;width:100%;height:auto;max-width:60px;max-height:60px;background-size:cover}li.card span.card-info{display:block;width:calc((100% - 100px) / 1);margin-right:10px;border-right:1px solid #ddd;text-align:right;line-height:25px}li.card span.card-name{display:flex;flex-direction:column;align-items:flex-start;padding-right:10px;height:90px;justify-content:center}span.card-name span.name-ar,span.card-name span.name-en,span.card-name span.short-name-en{display:block;float:right;font-size:12px;line-height:30px;height:30px;overflow:hidden}@media screen and (max-width:1000px){.Mw-table ul.Mw-cards{grid-template-columns:repeat(3,1fr)}}@media screen and (max-width:750px){.Mw-table ul.Mw-cards{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width:500px){.Mw-table ul.Mw-cards{grid-template-columns:repeat(1,1fr)}}.Night table.standings thead tr,.Night table.players thead tr,.Night h5.date{background-color:#000}.Night .Buttons button,.Night table.standings tbody tr.odd,.Night table.standings tbody tr.even,.Night .scorers h5,.Night .makers h5,.Night table.players tbody tr,.Night .keys,.Night h6.no-data{background-color:#0e1019!important}.Night .match-card{background:linear-gradient(to left,#0e1019,#191d2d)}.Night .match-result span{background-color:#191d2d!important}.Night .match .match-status{border-left:1px solid #252c37}.Night li.card span.card-info{border-right:1px solid #252c37}.Night ul.Mw-cards li.card{background-color:#0e1019}.Night li.card span.card-image{border:10px solid #191d2d}
`;
var styleElement = document.createElement('style');
styleElement.textContent = cssText;
document.head.appendChild(styleElement);
}
