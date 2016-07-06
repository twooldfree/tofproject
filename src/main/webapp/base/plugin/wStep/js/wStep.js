/**
 * Created by lenovo on 2016/7/6.
 */
;(function($, window,document,undefined ) {

    var defaults = {
            radius:30,
            stepNum:"",//步骤编号
            url:"",//点击步骤对应的url
            isCur:false,//是否是当前步骤
            isShowStepInfo:true,//是否显示步骤描述 默认不显示
            stepInfo:"",//步骤描述
            fontColor:"black",//文字颜色
            circleColor:"blue"//圆圈颜色
        },
        keys = {
            optionsKey: "jquery.wStep.options"
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

                    var $step = $("<div>"+opts.stepNum+"</div>").css({
                        "width": opts.radius*2,
                        "height": opts.radius*2,
                        "border-radius": opts.radius,
                        "text-align":"center",
                        "line-height":opts.radius*2+"px"
                    });

                    if(opts.isCur){
                        $step.css({
                            "color":"white",
                            "background-color": opts.circleColor
                        });
                    }else{
                        $step.css({
                            "color":opts.fontColor,
                            "border": "2px "+opts.circleColor+" solid"
                        });
                    }

                    $this.append($step);

                });
            }

        };

    $.fn.wStep = function() {
        var arg0 = arguments[0];
        if (methods[arg0]) {
            return methods[arg0].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof arg0 === "object" || !arg0) {
            return methods._init.apply(this, arguments);
        } else {
            $.error("Method " +  arg0 + " does not exist on jquery.wStep");
            return this;
        }
    };

})(jQuery, window,document );
