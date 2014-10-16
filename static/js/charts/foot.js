BUI.use(['bui/cookie', 'bui/menu', 'bui/tab'], function(Cookie, Menu, Tab) {
    var loaderStr = Cookie.get('loader'),
        // loadParam = '?loader=' + loaderStr,
        regxScript = /<script[^><]*>[^<]*<\/script>/ig,
        indexStr = '<!--t为时间戳-->';

    var CLS_DOC = 'doc-content',
        demoEl = $('#J_Demo'),
        sideMenu = $('#J_SideBar');
    // sideMenu = new Menu.Menu({//new BUI.Tab.Tab({
    //   render : '#J_Menu',
    //   autoRender : true,
    //   elCls : 'demo-menu',//'nav-tabs',
    //   idField : 'href',
    //   children : menus,
    //   itemTpl : '<a href="{href}'+ loadParam+'">{text}</a>'
    // });


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

    // var tab = new Tab.TabPanel({
    //   render : '#tab',
    //   elCls : 'nav-tabs',
    //   panelContainer : '#panel',
    //   autoRender: true,
    //   children:[
    //     {text:'源代码',value:'1'},
    //     {text:'JS',value:'2'}
    //   ]
    // });
    // tab.setSelected(tab.getItemAt(0));

    // $('#J_Edit').on('click',function(){
    //   var sender = $(this);
    //   if(sender.text() == '编辑'){
    //     sender.text('取消');
    //     $('#J_Txtjs').show();
    //     $('#J_Txtjs').height($('#J_JS').height());
    //     $('#J_JS').hide();
    //   }else{
    //     sender.text('编辑');
    //     $('#J_JS').show();
    //     $('#J_Txtjs').hide();
    //   }
    // });

    // $('#J_SelLoader').val(loaderStr);
    // $('#J_SelLoader').on('change',function(){
    //   var loader = $('#J_SelLoader').val();
    //   Cookie.set('loader',loader);
    //   location.reload();
    // });
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
        $('pre.prettyprinted').removeClass('prettyprinted');
        $('#J_Src').text(data);
        prettyPrint();
    }

    function setScript(script) {
        $('#J_JS').text(script);
        $('#J_Txtjs').val(script);
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
});