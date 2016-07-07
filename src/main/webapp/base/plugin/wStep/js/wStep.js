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

                        var $yline = $("<div/>").addClass("yLine").css({
                            //"background-color":opts.circleColor,
                            "height":$titlediv.height()-100
                        });
                        $titlediv.append($yline);//加入竖线
                        $titlediv.append($endfontdiv);//结束字样







                        //var $content = $("<div><ul><li></li><li></li></ul></div>");
                        //$i.addClass("stepNode");
                        //$("li:first",$content).append($i);
                        //if(opts.isShowStepInfo){//如果显示步骤描述
                        //    var $stepInfodiv = $("<div>"+stepdatas[i].stepInfo+"</div>");
                        //    $stepInfodiv.addClass("stepInfo").css({
                        //        "margin-right":100-opts.radius
                        //    });
                        //    $("li:last",$content).append($stepInfodiv);
                        //}else{//如果不显示，鼠标悬停提示
                        //    $i.attr("title",stepdatas[i].stepInfo);
                        //}


                        //
                        //$this.addClass("stepCss");
                        //$this.append($content);
                    }

                    ////画线
                    //var startX,y,endX;
                    //var $first = $(".stepNode:first",$this);
                    //var $last = $(".stepNode:last",$this);
                    //
                    //
                    //
                    //var $canvas = $("<canvas></canvas>").width($last.position().left-$first.position().left).height($this.height())
                    //    .addClass("myCanvas")
                    //    .css({
                    //        top:$first.position().top+$first.height()/2,
                    //        left:$first.position().left+$first.width()/2
                    //
                    //    });
                    //var myCanvas = $canvas.get(0);
                    //var context = myCanvas.getContext("2d");
                    //context.strokeStyle = "rgba(0,0,0,0.5)"
                    //context.fillStyle = "black"//设置填充颜色
                    //context.moveTo(0, 0);//将画笔移到x0,y0处
                    //context.lineTo($last.position().left-$first.position().left, 0);//从x0,y0到x1,y1画一条线
                    //context.fill();//填充
                    //context.stroke();//画线
                    //context.beginPath() //清空子路径
                    //context.closePath() //闭合路径

                    //$this.before($canvas);

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
