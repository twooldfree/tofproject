/**
 * Created by wen on 2016/7/3.
 * jquery.wProgressBar
 * 进度条
 */
(function($, window,document,undefined ) {

    var defaults = {
            processnum:0.5,//进度 默认百分之0
            color:"blue",//进度条颜色
            width:"",//进度条的宽度
            height:"",//进度条的高度
            isAutoRefresh:false,//是否自动刷新，默认否
            rate:10,//进度条刷新的频率(秒) 默认10秒一次
            url:""//实时刷新进度的url
        },
        keys = {
            optionsKey: "jquery.wProgressBar.options"
        },
        methods = {
            options: function(opts) {
                if (arguments.length == 0 || $.type(opts) != "object") {
                    return this.data(keys.optionsKey);
                }
                this.data(keys.optionsKey, opts);
                return opts;
            },

            /**
             * 插件初始化
             */
            _init: function(options) {
                return this.each(function() {
                    var opts = $.extend(true,{}, defaults, options),$this = $(this);
                    methods.options.call($this, opts);
                    var processnum = opts.processnum*100+"%";//计算初始化进度
                    var $processBar = $("<div></div>").css({
                        "width":opts.width+2,
                        "height":opts.height+2
                    }).addClass("wProgressBar");
                    var $leftbar = $("<div></div>").css({
                        "height":opts.height,
                        "width":opts.width*opts.processnum,
                        "background-color":opts.color,
                        "line-height":opts.height+"px"
                }).html(processnum).addClass("wLeftProgressBar");

                    var $rightbar = $("<div></div>").css({
                        "height":opts.height,
                        "width":(opts.width-opts.width*opts.processnum)
                    }).addClass("wRightProgressBar");
                    $processBar.append($leftbar).append($rightbar);
                    $this.append($processBar);
                });
            },

            _pre:function(){
                var opts = methods.options.call($(this));

            }

        };

    $.fn.wProgressBar = function() {
        var arg0 = arguments[0];
        if (methods[arg0]) {
            return methods[arg0].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof arg0 === "object" || !arg0) {
            return methods._init.apply(this, arguments);
        } else {
            $.error("Method " +  arg0 + " does not exist on jquery.wProgressBar.");
            return this;
        }
    };

})(jQuery, window,document );


