/**
 * Created by lenovo on 2016/7/6.
 */
;(function($, window,document,undefined ) {

    var defaults = {
            radius:30,
            isShowStepInfo:true,//是否显示步骤描述 默认不显示
            fontColor:"black",//文字颜色
            circleColor:"blue",//圆圈颜色
            steps:[]//步骤数据
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

                    $this.addClass("wStep");

                    var stepdatas = opts.steps
                    for(var i in stepdatas){//循环所有步骤
                        var $stepcircle = $("<div>"+stepdatas[i].stepNum+"</div>").addClass("stepCircle").css({
                            "width": opts.radius*2,
                            "height": opts.radius*2,
                            "border-radius": opts.radius,
                            "line-height":opts.radius*2+"px",
                            "border": "2px "+opts.circleColor+" solid"

                        });//定义步骤圆点

                        if(stepdatas[i].isCur){//如果是当前节点
                            $stepcircle.css({
                                "color":"white",
                                "background-color": opts.circleColor
                            });
                        }else{
                            $stepcircle.css({
                                "color":opts.fontColor,
                                "background-color": "white"
                            });
                        }

                        var $row = $("<div/>").addClass("row");//每一行
                        var $titlediv = $("<div/>").addClass("title");//标题部分
                        var $contentdiv = $("<div/>").addClass("content");//内容部分
                        var $endfontdiv = $("<div/>").addClass("endfont").html("end");//结束字样


                        $titlediv.append($stepcircle);//圆加入到title

                        $contentdiv.html(stepdatas[i].stepInfo);
                        $row.append($titlediv).append($contentdiv);
                        $this.append($row);

                        var $yline = $("<div/>").addClass("yLine");
                        $titlediv.append($yline);//加入竖线
                        $titlediv.append($endfontdiv);//结束字样

                    }

                    $(".stepCircle",$this).click(function(){
                        methods._setCurStep.call($this,$(this));
                        return false;
                    });



                    $this.mousewheel(function(event,delta){

                        $(".row",$this).each(function(){

                            if($this.scrollTop()==0){
                                methods._setCurStep.call($this,$(".stepCircle:first",$this));
                                return;
                            }

                            if($this.scrollTop()>$(this).position().top){
                                methods._setCurStep.call($this,$(".stepCircle",$(this)));
                                return;
                            }

                            var scrollTop=$this.scrollTop();
                            var scrollHeight=$(document).height();
                            var windowHeight=$this.height();
                            if(scrollTop+windowHeight==scrollHeight){
                                methods._setCurStep.call($this,$(".stepCircle:last",$this));
                                return;
                            }
                        });

                    })

                });
            },
            _setCurStep:function($step){
                var opts = methods.options.call($(this)),$this = $(this);
                $(".stepCircle" , $this).css({
                    "color":opts.fontColor,
                    "background-color": "white"
                });

                $step.css({
                    "color":"white",
                    "background-color": opts.circleColor
                });

                return $step;
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
