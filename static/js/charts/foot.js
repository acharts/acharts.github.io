BUI.use(['bui/cookie', 'bui/menu', 'bui/tab','bui/select'], function(Cookie, Menu, Tab , Select) {
    var loaderStr = Cookie.get('loader'),
        // loadParam = '?loader=' + loaderStr,
        regxScript = /<script[^><]*>[^<]*<\/script>/ig,
        indexStr = '<!--t为时间戳-->';

    var CLS_DOC = 'doc-content',
        demoEl = $('#J_Demo'),
        sideMenu = $('#J_SideBar');

    var navPage = getNavPage(),
        selectedItem = null;

    sideMenu.delegate('a[href!="#"]', 'click', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('li', sideMenu).removeClass('active');
        selectedItem = $(this).parent().addClass('active');
        selectedItem.parents('li.treeview').addClass('active');
        resetDemo(href);
        resetTitle(selectedItem, selectedItem.parents('li.treeview'));
        $(window).scrollTop(0);
    });
    // 页面加载完后根据hash值设置当前选中项
    if (navPage) {
        selectedItem = sideMenu.find('a[href="' + navPage + '"]').parent();
    }
    selectedItem = selectedItem || $('a[href!="#"]:first', sideMenu).parent();
    selectedItem.find('a:first').trigger('click').parents('li.treeview').find('a:first').trigger('click');


    demoEl.on('load', function() {
        var frameDoc = demoEl[0].contentWindow.document,
            docBody = frameDoc.body || frameDoc.documentElement,
            docHeight = $(docBody).height() + 50,
            // selectedItem = sideMenu.getSelected(),
            minHeight = parseInt(selectedItem.attr('data-minHeight')) || 0,
            maxHeight = parseInt(selectedItem.attr('data-maxHeight')),
            finalHeight = minHeight > docHeight ? minHeight : docHeight,
            noSrc = parseInt(selectedItem.attr('data-noSrc'));

        if (maxHeight && finalHeight > maxHeight) {
            finalHeight = maxHeight;
        }
        demoEl.height(finalHeight);

        // 是否显示源码。 noSrc == true 时不现实
        if(!noSrc){
            var docContent = $(docBody).find('.' + CLS_DOC),
                lastScript = $(docBody).find('script').last();
            // htmlEl = $(docBody).find('.demo-content');
            if (!lastScript.hasClass('ga-script')) {
                setScript(lastScript.html());
            }

            // setHtml(htmlEl.html());
            if (docContent.length) {
                setSrc(docContent.html());
            } else {
                // fetchSrc(selectedItem.get('href') + loadParam);
                fetchSrc(selectedItem.find('a').attr('href'));
            }
            $('#J_SrcBox').removeClass('hidden');
        }else{
            $('#J_SrcBox').addClass('hidden');
        }
    });

    function resetDemo(href) {
        // demoEl.attr('src',href + loadParam);
        demoEl.attr('src', href);
        setNavPage(href);
    }

    function resetTitle(li, parentLi) {
        var title = '<h1>' +
            $('a:first', li).text() +
            (parentLi.length ? '<small>' + $('a:first', parentLi).text() + '</small>' : '') +
            '</h1>';
        $('#J_ContentHeader').html(title);
    }

    function setSrc(data) {
        data = dealCodes(data);
        $('pre.prettyprinted').removeClass('prettyprinted');
        $('#J_Src').text(data);
        prettyPrint();
    }

    function setScript(script) {
        script = dealCodes(script);
        $('#J_JS').text(script);
        $('#J_Txtjs').val(script);
    }

    //根据主题替换；
    function dealCodes(data){
        if(localStorage){
            var theme = localStorage['AChartIOTheme'] ? localStorage['AChartIOTheme'] : 'SmoothBase';
            if($.trim(theme) != 'Base'){
                var reg = /(\s+)series/ig;
                var arr = reg.exec(data);
                if(arr && arr[1]){
                    var spaces = arr[1];
                    var hash = location.hash;
                    //if(hash.indexOf('/graphic-') < 0){
                        data = data.replace("new AChart({","new AChart({" + spaces + "theme : AChart.Theme."+ theme);
                        data = data.replace("new AStock({","new AStock({" + spaces + "theme : AChart.Theme."+ theme);
                    //}
                }
            } 
            //删除展示script
            data = data.replace("<script>if(localStorage){var theme = localStorage['AChartIOTheme'] ? localStorage['AChartIOTheme'] : 'Smooth1';AChart.ATTRS.theme = AChart.Theme[theme];}</script>","")
        }
        return data;
    }

    function setHtml(html) {
        var index = html.indexOf(indexStr);
        if (index !== -1) {
            html = html.substring(0, index);
        }
        //html = html.replace(regxScript,'');
        $('#J_Html').text(html);
        $('#J_TxtHtml').text(html);
    }
    //source
    function fetchSrc(src) {
        if (src.indexOf('?') !== -1) {
            src = src + '&source=true';
        } else {
            src = src + '?source=true';
        }
        $.get(src, function(data) {
            setSrc(data);
        })
    }

    //更改地址栏连接
    function setNavPage(href) {
        href = href || '';

        var str = '#' + href;
        location.hash = str;
    }

    function getNavPage() {
        var str = location.hash,
            href = '';
        if (str) {
            href = str.substring(1);
        }
        return href;
    }
    if(localStorage){
        //修改theme
        if(!localStorage['AChartIOTheme']){
            $('#themeSelHide').val('Smooth1');
        }
        else{
            $('#themeSelHide').val(localStorage['AChartIOTheme']);
        }
        var items = [
              {text:'default',value:'Base'},
              {text:'Smooth1',value:'Smooth1'},
              {text:'Smooth2',value:'Smooth2'},
              {text:'Smooth3',value:'Smooth3'},
              {text:'Smooth4',value:'Smooth4'},
              {text:'Smooth5',value:'Smooth5'},
              {text:'Smooth6',value:'Smooth6'},
              {text:'Smooth7',value:'Smooth7'},
            ],
            select = new Select.Select({  
              render:'#themeSel',
              valueField:'#themeSelHide',
              items:items
            });
        select.render();
        select.on('change', function(ev){
            localStorage['AChartIOTheme'] = ev.value;
            window.location.reload();
        }); 
    }
});