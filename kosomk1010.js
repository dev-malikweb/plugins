$(document).ready(function () {
  "use strict";
  var PluginBlogId = "6795614954886779704";
  var PluginCodePageId = "1564387803224764254";
  var pluginUrl = `https://www.blogger.com/feeds/${PluginBlogId}/pages/default/${PluginCodePageId}?alt=json-in-script&callback=?`;

  // إنشاء حقل الإدخال وزر البحث
  function createSearchBar() {
    const searchDiv = $("#search-div");

    // إنشاء عنصر الإدخال
    const input = $("<input>", {
      type: "text",
      class: "search-input",
      placeholder: "ابحث هنا...",
    });

    // إنشاء زر البحث
    const button = $("<button>", {
      class: "search-button",
      text: "بحث",
    });

    // إنشاء العنصر الرئيسي
    const container = $("<div>", {
      class: "search-container",
    });

    // إضافة الإدخال والزر إلى العنصر الرئيسي
    container.append(input).append(button);
    searchDiv.append(container);

    // إضافة حدث النقر على زر البحث
    button.on("click", function () {
      var searchTerm = input.val();
      if (searchTerm) {
        searchAndFetchData(searchTerm);
      } else {
        alert("يرجى إدخال مصطلح البحث");
      }
    });
  }

  // استدعاء الدالة لإنشاء عناصر البحث عند تحميل الصفحة
  createSearchBar();

  // جلب البيانات وتنفيذ البحث
  function searchAndFetchData(searchTerm) {
    $.ajax({
      url: pluginUrl,
      dataType: "jsonp",
      success: function (data) {
        try {
          var content = data.entry.content.$t;
          var tempDiv = $("<div>").html(content);
          var searchElement = tempDiv.find(`#${searchTerm}`);

          if (searchElement.length) {
            var agentDiv = $("#agent");
            agentDiv.empty(); // تنظيف المحتوى السابق
            agentDiv.append(searchElement.clone()); // استنساخ العنصر وإضافته

            console.log("تم العثور على العنصر وإضافته بنجاح.");

            // إعادة تهيئة الدوال بعد إضافة العنصر
            reinitializeFunctions(agentDiv);
          } else {
            console.log("العنصر المطلوب غير موجود.");
            $("#agent").text("العنصر المطلوب غير موجود.");
          }
        } catch (error) {
          console.error("حدث خطأ أثناء معالجة البيانات:", error);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("حدث خطأ أثناء جلب البيانات:", textStatus, errorThrown);
      },
    });
  }

  // دالة إعادة تهيئة الوظائف بعد إضافة العنصر
  function reinitializeFunctions(agentDiv) {
    // استدعاء الدوال المطلوبة للعناصر الجديدة
    getCssData(agentDiv);
    initializeEarningsSystem();
    observeDOMChanges();
  }

  // دوال فارغة لاستدعائها بعد إضافة العناصر الجديدة
  function getCssData() {
    console.log("تم استدعاء getCssData");
  }

  function initializeEarningsSystem() {
    console.log("تم استدعاء initializeEarningsSystem");
  }

  function observeDOMChanges() {
    console.log("تم استدعاء observeDOMChanges");
  }
});
