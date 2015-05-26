;

function getMenus() {
    var menus = [{
        text: '首页',
        href: 'index.html',
        noSrc: 1,
        minHeight: 520
    }, {
        text: '基本图形',

        list: [{
            text: '基本图形',
            href: 'graphic/shape.php',
            minHeight: 520
        }, {
            text: '图形分组',
            href: 'graphic/group.php',
            minHeight: 520
        }, {
            text: '图形填充',
            href: 'graphic/fill.php',
            minHeight: 520
        }, {
            text: '动画',
            href: 'graphic/animate.php',
            minHeight: 520
        }, {
            text: '文本',
            href: 'graphic/text.php',
            minHeight: 520
        }, {
            text: 'Markers',
            href: 'graphic/marker.php',
            minHeight: 520
        }]
    }, {
        text: '折线图',

        list: [{
            text: '折线图',
            href: 'line/base.php',
            minHeight: 520
        }, {
            text: '折线图click出现tips',
            href: 'line/base-click.php',
            minHeight: 520
        }, {
            text: '曲线图',
            href: 'line/smooth.php',
            minHeight: 520
        }, {
            text: '显示点值',
            href: 'line/label.php',
            minHeight: 520
        }, {
            text: '自定义marker',
            href: 'line/marker.php',
            minHeight: 520
        }, {
            text: '单个marker',
            href: 'line/share-marker.php',
            minHeight: 520
        }, {
            text: '时间不连续的折线图',
            href: 'line/disperse.php',
            minHeight: 520
        }, {
            text: 'y轴非均值折线图',
            href: 'line/disorder.php',
            minHeight: 520
        }, {
            text: '多y轴曲线',
            href: 'line/multiple-y.php',
            minHeight: 520
        }, {
            text: '更改数据格式',
            href: 'line/data.php',
            minHeight: 520
        }, {
            text: '使用store',
            href: 'line/store.php',
            minHeight: 520
        }, {
            text: '图例位置',
            href: 'line/legend.php',
            minHeight: 520
        }, {
            text: '自定义tooltip',
            href: 'line/tooltip.php',
            minHeight: 520
        }, {
            text: '自定义tooltip(现有Dom）',
            href: 'line/tooltip-id.php',
            minHeight: 520
        }, {
            text: '固定tooltip',
            href: 'line/tooltip-fixed.php',
            minHeight: 520
        }, {
            text: '使用flag',
            href: 'line/flag-base.php',
            minHeight: 520
        }, {
            text: '修改flag样式',
            href: 'line/flag-fix.php',
            minHeight: 520
        }, {
            text: '自定义flag',
            href: 'line/flag-html.php',
            minHeight: 520
        }, {
            text: '自适应宽度',
            href: 'line/auto-width.php',
            minHeight: 520
        }, {
            text: '自适应宽度（保持高宽比）',
            href: 'line/auto-ratio.php',
            minHeight: 520
        }, {
            text: '坐标轴转换',
            href: 'line/invert.php',
            minHeight: 520
        }]
    }, {
        text: '区域图',

        list: [{
                text: '基本区域图',
                href: 'area/base.php',
                minHeight: 520
            }, {
                text: '时间区域图',
                href: 'area/time.php',
                minHeight: 520
            }, {
                text: '异步时间区域图',
                href: 'area/time-ajax.php',
                minHeight: 520
            }, {
                text: '断点区域图',
                href: 'area/break.php',
                minHeight: 520
            }, {
                text: '层叠区域图',
                href: 'area/stacked.php',
                minHeight: 520
            }, {
                text: '层叠百分比',
                href: 'area/percent.php',
                minHeight: 520
            }, {
                text: '坐标轴翻转',
                href: 'area/invert.php',
                minHeight: 520
            }

        ]
    }, {
        text: '柱状图',

        list: [{
                text: '基本柱状图',
                href: 'column/base.php',
                minHeight: 520
            }, {
                text: '多个柱状图',
                href: 'column/columns.php',
                minHeight: 520
            }, {
                text: '断点柱状图',
                href: 'column/break.php',
                minHeight: 520
            }, {
                text: '层叠柱状图',
                href: 'column/stacked.php',
                minHeight: 520
            }, {
                text: '层叠百分比',
                href: 'column/percent.php',
                minHeight: 520
            }, {
                text: '使用store',
                href: 'column/store.php',
                minHeight: 520
            }, {
                text: '翻转坐标轴',
                href: 'column/bar.php',
                minHeight: 520
            }, {
                text: '翻转层叠',
                href: 'column/bar-stacked.php',
                minHeight: 520
            }

        ]
    }, {
        text: '饼图',

        list: [{
                text: '基本饼图',
                href: 'pie/base.php',
                minHeight: 520
            }, {
                text: '多文本饼图',
                href: 'pie/text.php',
                minHeight: 520
            }, {
                text: '内部显示文本',
                href: 'pie/inner-text.php',
                minHeight: 520
            }, {
                text: '环形图',
                href: 'pie/ring.php',
                minHeight: 520
            }, {
                text: '半饼图',
                href: 'pie/half.php',
                minHeight: 520
            }, {
                text: '不可选中的饼图',
                href: 'pie/select.php',
                minHeight: 520
            }, {
                text: '更改颜色',
                href: 'pie/colors.php',
                minHeight: 520
            }, {
                text: '自定义文本',
                href: 'pie/custom-labels.php',
                minHeight: 520
            }, {
                text: '嵌套的饼图',
                href: 'pie/stacked.php',
                minHeight: 520
            }, {
                text: '多层嵌套饼图',
                href: 'pie/placeholder.php',
                minHeight: 520
            }, {
                text: '计算起始位置',
                href: 'pie/start.php',
                minHeight: 520
            }, {
                text: '多层嵌套饼图（逆时针）',
                href: 'pie/clockwise.php',
                minHeight: 520
            }, {
                text: '使用store',
                href: 'pie/store.php',
                minHeight: 520
            }

        ]
    }, {
        text: '雷达图',

        list: [{
                text: '折线图',
                href: 'radar/line.php',
                minHeight: 520
            }, {
                text: '区域图',
                href: 'radar/area.php',
                minHeight: 520
            }, {
                text: '层叠区域图',
                href: 'radar/area-stacked.php',
                minHeight: 520
            }, {
                text: '层叠区域图百分比',
                href: 'radar/area-percent.php',
                minHeight: 520
            }, {
                text: '柱状图',
                href: 'radar/column.php',
                minHeight: 520
            }, {
                text: '多个柱状图',
                href: 'radar/columns.php',
                minHeight: 520
            }, {
                text: '层叠柱状图',
                href: 'radar/column-stacked.php',
                minHeight: 520
            }, {
                text: '层叠柱状图百分比',
                href: 'radar/column-percent.php',
                minHeight: 520
            }, {
                text: '混杂图',
                href: 'radar/mix.php',
                minHeight: 520
            }, {
                text: '圆形栅格线',
                href: 'radar/circle.php',
                minHeight: 520
            }

        ]
    }, {
        text: '散列/气泡图',
        folder: 'scatter,bubble',
        list: [{
                text: '散列图',
                href: 'scatter/base.php',
                minHeight: 520
            }, {
                text: '气泡图',
                href: 'bubble/base.php',
                minHeight: 520
            }, {
                text: '渐变气泡图',
                href: 'bubble/gradual.php',
                minHeight: 520
            }

        ]
    }, {
        text: '图表集成',

        list: [{
                text: '折线图与区域图',
                href: 'mix/line-area.php',
                minHeight: 520
            }, {
                text: '折线图与柱状图',
                href: 'mix/line-column.php',
                minHeight: 520
            }, {
                text: '折线图与柱状图多Y轴',
                href: 'mix/multiple-y.php',
                minHeight: 520
            }, {
                text: '多个图形',
                href: 'mix/multiple.php',
                minHeight: 520
            }, {
                text: '饼图与表格',
                href: 'mix/pie-grid.php',
                minHeight: 520
            }
            /*,{
          text : '雷达图与表单' ,
          href : 'mix/radar-form.php',
          minHeight : 520
        },{
          text : '柱状图与表格' ,
          href : 'mix/column-grid.php',
          minHeight : 520
        }*/
            , {
                text: '多种图表与表格',
                href: 'mix/mix.php',
                minHeight: 1000
            }

        ]
    }, {
        text: '自定义皮肤',

        list: [{
            text: '默认皮肤',
            href: 'theme/default.php',
            minHeight: 520
        }, {
            text: '更改颜色',
            href: 'theme/colors.php',
            minHeight: 520
        }, {
            text: '扩展皮肤',
            href: 'theme/extend.php',
            minHeight: 520
        }, {
            text: '栅格背景皮肤',
            href: 'theme/grid.php',
            minHeight: 520
        }, {
            text: '深色背景',
            href: 'theme/black.php',
            minHeight: 520
        }]
    }, {
        text: '动态图表',

        list: [{
                text: '折线图',
                href: 'dynamic/line.php',
                minHeight: 520
            }, {
                text: '柱状图',
                href: 'dynamic/column.php',
                minHeight: 520
            }, {
                text: '多个折线',
                href: 'dynamic/multiple-line.php',
                minHeight: 520
            }

        ]
    }, {
        text: 'stock图表',

        list: [{
                text: '基本图表',
                href: 'stock/default.php',
                minHeight: 520
            }, {
                text: '异步数据源',
                href: 'stock/async.php',
                minHeight: 520
            }, {
                text: '指定初始范围',
                href: 'stock/range.php',
                minHeight: 520
            }, {
                text: '存在断点的折线图',
                href: 'stock/break.php',
                minHeight: 520
            }, {
                text: '区域图',
                href: 'stock/area.php',
                minHeight: 520
            }
            /*,
        {
            text : '柱状图' ,
            href : 'stock/column.php',
            minHeight : 520
        }*/
            , {
                text: '多条折线',
                href: 'stock/multiple.php',
                minHeight: 520
            }, {
                text: '使用flag',
                href: 'stock/flag.php',
                minHeight: 520
            }, {
                text: '超大数据',
                href: 'stock/large.php',
                minHeight: 520
            }, {
                text: '动态更新',
                href: 'stock/dynamic.php',
                minHeight: 520
            }
        ]
    }];
    var html = '';
    for (var i = 0; i < menus.length; i++) {
        var node = menus[i],
            list = node.list;
        if (list && list.length) {
            html +=
                '<li class="treeview">' +
                '<a href="#">' +
                '<i class="fa fa-bar-chart-o"></i>' +
                node.text +
                '<i class="fa fa-angle-left pull-right"></i>' +
                '</a>' +
                '<ul class="treeview-menu">';
            for (var j = 0; j < list.length; j++) {
                html +=
                    '<li data-minHeight="' + (list[j].minHeight || 0) + '" data-maxHeight="' + (list[j].maxHeight || 0) + '" data-noSrc="' + (list[j].noSrc || 0) + '">' +
                    '<a href="chart/' + list[j].href + '">' +
                    '<i class="fa fa-angle-double-right"></i>' + list[j].text +
                    '</a>' +
                    '</li>';
            }
            html += '</ul></li>';
        } else {
            html +=
                '<li data-minHeight="' + (node.minHeight || 0) + '" data-maxHeight="' + (node.maxHeight || 0) + '" data-noSrc="' + (node.noSrc || 0) + '">' +
                '<a href="chart/' + node.href + '">' +
                '<i class="fa fa-dashboard"></i>' +
                node.text +
                '</a></li>';
        }
    }
    return html;
}