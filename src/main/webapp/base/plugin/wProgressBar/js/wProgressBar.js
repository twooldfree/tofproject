/**
 * Created by wen on 2016/7/3.
 * jquery.wProgressBar
 * 进度条
 */
;(function($, window,document,undefined ) {

    var defaults = {
            processnum:0,//进度 默认百分之0
            width:"",//进度条的宽度
            height:"",//进度条的高度
            isAutoRefresh:false,//是否自动刷新，默认否
            rate:5,//进度条刷新的频率(秒) 默认10秒一次
            url:"",//实时刷新进度的url
            ajaxparam:{},//ajax请求参数
            isFullStop:false,//100进度是否停止刷新
            color:["#30A4F7","#FFCE2D","#E83A1E"]//进度条颜色 小于0.5第一个颜色 0.5~0.8 第二个颜色 0.8~1第三个颜色 如果只传递一个颜色 进度条都是一个颜色
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

                    var $processBar = $("<div></div>").css({
                        "width":opts.width+2,
                        "height":opts.height+2
                    }).addClass("wProgressBar");

                    var color = opts.color[0];
                    if(opts.color.length>=3){
                        if(opts.processnum<0.5){
                            color = opts.color[0];
                        }else if(opts.processnum>=0.5&&opts.processnum<0.8){
                            color = opts.color[1];
                        }else{
                            color = opts.color[2];
                        }
                    }


                    var $leftbar = $("<div></div>").css({
                        "height":opts.height,
                        "width":opts.width*opts.processnum,
                        "background-color":color,
                        "line-height":opts.height+"px"
                    }).addClass("wLeftProgressBar");

                    var $rightbar = $("<div></div>").css({
                        "height":opts.height,
                        "width":(opts.width-opts.width*opts.processnum),
                        "line-height":opts.height+"px"
                    }).addClass("wRightProgressBar");

                    if(opts.processnum>0.5){
                        $leftbar.html((opts.processnum*100).toFixed(2)+"%");
                        $rightbar.empty();
                    }else{
                        $rightbar.html((opts.processnum*100).toFixed(2)+"%");
                        $leftbar.empty();
                    }

                    $processBar.append($leftbar).append($rightbar);
                    $this.append($processBar);

                    if(opts.isAutoRefresh){//开启了自动刷新
                        var timmer = setInterval(function(){
                            $.post(
                                opts.url,
                                opts.ajaxparam,
                                function(num){
                                    opts.processnum = parseFloat(num);
                                    methods._reDraw.call($this);
                                }
                            )
                        },opts.rate*1000);

                        if(opts.isFullStop){
                            if(opts.processnum==1){
                                clearInterval(timmer);
                            }
                        }
                    }
                });
            },

            _reDraw:function(){//重绘进度
                var opts = methods.options.call($(this)),$this = $(this);

                var color = opts.color[0];
                if(opts.color.length>=3){
                    if(opts.processnum<0.5){
                        color = opts.color[0];
                    }else if(opts.processnum>=0.5&&opts.processnum<0.8){
                        color = opts.color[1];
                    }else{
                        color = opts.color[2];
                    }
                }

                $(".wLeftProgressBar",$this).css({
                    "width":opts.width*opts.processnum,
                    "background-color":color
                });

                $(".wRightProgressBar",$this).css({
                    "width":opts.width*(1-opts.processnum)
                });

                if(opts.processnum>0.5){
                    $(".wLeftProgressBar",$this).html((opts.processnum*100).toFixed(2)+"%");
                    $(".wRightProgressBar",$this).empty();
                }else{
                    $(".wRightProgressBar",$this).html((opts.processnum*100).toFixed(2)+"%");
                    $(".wLeftProgressBar",$this).empty();
                }

            },

            getValue:function(){
                var opts = methods.options.call($(this)),$this = $(this);
                return opts.processnum;
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


