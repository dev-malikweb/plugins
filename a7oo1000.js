$(document).ready(function() {
"use strict";

// 1. التحقق من التفعيل
var ActivationBlogId = '6795614954886779704';
var PluginPageId = '1564387803224764254';
var url = `https://www.blogger.com/feeds/${ActivationBlogId}/pages/default/${PluginPageId}?alt=json-in-script`;

function redirectToDesigner() {
window.location.href = "https://www.malik-web.com";
}

function parseContent(response) {
if (response.entry && response.entry.content && response.entry.content.$t) {
return $(response.entry.content.$t);
}
throw new Error("Invalid content or no content found");
}

function checkActivation() {
$.ajax({
dataType: "jsonp",
url: url,
method: "GET",
success: function(response) {
try {
var content = parseContent(response);
var n = [];
content.find("#BlogIds li").each(function(index, listItem) {
n.push($(listItem).text().trim());
});
var currentID1 = getBlogIdFromLink();
var currentID2 = $('[data-id]').attr('data-id');
var currentID3 = $('meta[name="BlogId"]').attr('content');
if (n.includes(currentID1) && n.includes(currentID2) && n.includes(currentID3)) {
console.log('%c  >> License : %cPlugin Activated', 'color: #fbc121', 'color: #fff');

// الانتقال إلى الخطوة 2 بعد التحقق من التفعيل
createSearchBar();
} else {
throw new Error("IDs do not match");
}
} catch (error) {
handleActivationFailure(content);
}
},
error: function(xhr, status, error) {
console.error("Error:", error);
redirectToDesigner();
}
});
}

function getBlogIdFromLink() {
var link = document.querySelector('link[rel="service.post"]');
if (!link) throw new Error("Link not found");
var href = link.getAttribute('href');
var startIndex = href.indexOf('feeds/') + 'feeds/'.length;
var endIndex = href.indexOf('/posts');
return href.substring(startIndex, endIndex);
}

function handleActivationFailure(content) {
console.log('%c  >> License : %cPlugin Not Activated', 'color: #fbc121', 'color: #fff');
var styleContent = content.find("style").html();
var scriptContent = content.find("script").html();
var redirectMessage = content.find(".redirect").html();
if (styleContent) $("head").append(styleContent);
if (scriptContent) $("head").append(scriptContent);
if (redirectMessage) {
$("html").html(redirectMessage);
} else {
redirectToDesigner();
}
}

checkActivation();

// 2. إضافة حقل الإدخال وزر البحث
function createSearchBar() {
const searchDiv = $('#search');

// إنشاء عنصر الإدخال
const input = $('<input>', {
type: 'text',
class: 'search-input',
placeholder: 'أدخل المعرف الخاص بك...'
});

// إنشاء زر البحث
const button = $('<button>', {
class: 'search-but',
text: 'عرض التفاصيل'
});

// إنشاء المعرف الرئيسي
const container = $('<div>', {
class: 'search-box'
});

// إضافة الإدخال والزر إلى المعرف الرئيسي
container.append(input).append(button);
searchDiv.append(container);

// إضافة حدث النقر على زر البحث
button.on('click', function() {
var searchTerm = input.val().trim(); // إزالة المسافات الزائدة
if (searchTerm) {
searchAndFetchData(searchTerm);
} else {
alert('يرجى إدخال مصطلح البحث');
}
});
}

// 3. جلب العناصر عند إدخال المستخدم للقيمة
function searchAndFetchData(searchTerm) {
var PluginBlogId = '855240666527212326';
var PluginCodePageId = '1084878228217099633';
var pluginUrl = `https://www.blogger.com/feeds/${PluginBlogId}/pages/default/${PluginCodePageId}?alt=json-in-script&callback=?`;

$.ajax({
url: pluginUrl,
dataType: 'jsonp',
success: function(data) {
try {
var content = data.entry.content.$t;
var tempDiv = $('<div>').html(content);

// تعديل البحث ليتطابق مع المعرفات بالتنسيق المطلوب
var searchElement = tempDiv.find(`[id="${searchTerm}"]`);

if (searchElement.length) {
var agentDiv = $('#agent');
agentDiv.empty(); // تنظيف المحتوى السابق
agentDiv.append(searchElement.clone()); // استنساخ المعرف وإضافته

console.log('تم العثور على المعرف وإضافته بنجاح.');
} else {
console.log('المعرف غير صحيح.');
$('#agent').text('المعرف غير صحيح.');
}
} catch (error) {
console.error('حدث خطأ أثناء معالجة البيانات:', error);
}
},
error: function(jqXHR, textStatus, errorThrown) {
console.error('حدث خطأ أثناء جلب البيانات:', textStatus, errorThrown);
}
});
}
});






document.addEventListener("DOMContentLoaded", function () {
initializeEarningsSystem();
});

function initializeEarningsSystem() {
const observerConfig = { childList: true, subtree: true }; // Configuration for the observer

// Create a MutationObserver to monitor DOM changes in the #agent div
const observer = new MutationObserver(function(mutationsList) {
mutationsList.forEach(function(mutation) {
if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
calculateCommission();  // Recalculate commissions when new elements are added
calculateTotalEarnings();  // Recalculate total earnings
}
});
});

// Start observing the #agent div for changes
const agentDiv = document.getElementById('agent');
if (agentDiv) {
observer.observe(agentDiv, observerConfig);
} else {
console.warn("Element with id 'agent' not found in the DOM.");
}

// Functions for earnings and commission calculation
function updateCircleBorder() {
const numberElement = document.getElementById('number');
if (numberElement) {
let number = parseFloat(numberElement.textContent.replace('$', ''));
if (number > 10) number = 10;
const percentage = (number / 10) * 360;
const circleElement = document.querySelector('.circle');
if (circleElement) {
circleElement.style.background = 
`conic-gradient(rgb(0 117 255) ${percentage}deg, rgb(232 232 232) ${percentage}deg)`;
} else {
console.warn("Element with class 'circle' not found.");
}
} else {
console.warn("Element with id 'number' not found in the DOM.");
}
}

function calculateTotalEarnings() {
const earningsElements = document.querySelectorAll('.mo');
if (earningsElements.length > 0) {
let totalEarnings = 0;
earningsElements.forEach(element => {
let earning = parseFloat(element.textContent.replace('$', ''));
totalEarnings += earning;
});

const numberElement = document.getElementById('number');
if (numberElement) {
numberElement.textContent = `${totalEarnings}$`;
updateCircleBorder();
if (totalEarnings >= 10) {
createWithdrawButton();
}
} else {
console.warn("Element with id 'number' not found in the DOM.");
}
} else {
console.warn("No elements with class 'mo' found in the DOM.");
}
}

function createWithdrawButton() {
const paymentDiv = document.getElementById('payment');
if (paymentDiv && !document.querySelector('#payment button')) {  // Only create button if it doesn't already exist
const withdrawButton = document.createElement('button');
withdrawButton.textContent = 'سحب الأرباح';
withdrawButton.style.marginRight = '25px';
withdrawButton.style.padding = '6px 12px';
withdrawButton.style.backgroundColor = '#4CAF50';
withdrawButton.style.color = '#fff';
withdrawButton.style.border = 'none';
withdrawButton.style.borderRadius = '8px';
withdrawButton.style.cursor = 'pointer';
withdrawButton.style.fontSize = '16px';
withdrawButton.onclick = function() {
window.open("https://wa.me/201028156063?text=أريد%20سحب%20الأرباح", "_blank");
};
paymentDiv.appendChild(withdrawButton);
} else if (!paymentDiv) {
console.warn("Element with id 'payment' not found in the DOM.");
}
}

function calculateCommission() {
const rows = document.querySelectorAll('#sales tbody tr');
if (rows.length > 0) {
rows.forEach(row => {
const priceElement = row.querySelector('.price');
const percentageElement = row.querySelector('.percentage');
const earningsElement = row.querySelector('.mo');
if (priceElement && percentageElement && earningsElement) {
const price = parseFloat(priceElement.textContent.replace('$', ''));

// استخراج النسبة من العنصر percentageElement
const percentageText = percentageElement.textContent;
const commissionPercentage = parseFloat(percentageText.replace('%', ''));

const earnings = (price * commissionPercentage) / 100;
percentageElement.textContent = `${commissionPercentage}%`;
earningsElement.textContent = `${earnings}$`;
} else {
console.warn("One or more elements (.price, .percentage, .mo) missing in a row.");
}
});
} else {
console.warn("No rows found in the sales table.");
}
}


// Initial calculation
calculateCommission();
calculateTotalEarnings();
}
