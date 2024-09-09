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
        const searchDiv = $('#search-div');

        // إنشاء عنصر الإدخال
        const input = $('<input>', {
            type: 'text',
            class: 'search-input',
            placeholder: 'ابحث هنا...'
        });

        // إنشاء زر البحث
        const button = $('<button>', {
            class: 'search-button',
            text: 'بحث'
        });

        // إنشاء العنصر الرئيسي
        const container = $('<div>', {
            class: 'search-container'
        });

        // إضافة الإدخال والزر إلى العنصر الرئيسي
        container.append(input).append(button);
        searchDiv.append(container);

        // إضافة حدث النقر على زر البحث
        button.on('click', function() {
            var searchTerm = input.val();
            if (searchTerm) {
                searchAndFetchData(searchTerm);
            } else {
                alert('يرجى إدخال مصطلح البحث');
            }
        });
    }

    // 3. جلب العناصر عند إدخال المستخدم للقيمة
    function searchAndFetchData(searchTerm) {
        var PluginBlogId = '6795614954886779704';
        var PluginCodePageId = '1564387803224764254';
        var pluginUrl = `https://www.blogger.com/feeds/${PluginBlogId}/pages/default/${PluginCodePageId}?alt=json-in-script&callback=?`;

        $.ajax({
            url: pluginUrl,
            dataType: 'jsonp',
            success: function(data) {
                try {
                    var content = data.entry.content.$t;
                    var tempDiv = $('<div>').html(content);
                    var searchElement = tempDiv.find(`#${searchTerm}`); // استخدام # للبحث عن العنصر بواسطة id

                    if (searchElement.length) {
                        var agentDiv = $('#agent');
                        agentDiv.empty(); // تنظيف المحتوى السابق
                        agentDiv.append(searchElement.clone()); // استنساخ العنصر وإضافته

                        console.log('تم العثور على العنصر وإضافته بنجاح.');
                    } else {
                        console.log('العنصر المطلوب غير موجود.');
                        $('#agent').text('العنصر المطلوب غير موجود.');
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
