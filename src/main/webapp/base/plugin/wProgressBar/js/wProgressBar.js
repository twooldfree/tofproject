/**
 * Created by wen on 2016/7/3.
 * jquery.wProgressBar
 * ������
 */
;(function($, window,document,undefined ) {

    var defaults = {
            processnum:0,//���� Ĭ�ϰٷ�֮0
            width:"",//�������Ŀ��
            height:"",//�������ĸ߶�
            isAutoRefresh:false,//�Ƿ��Զ�ˢ�£�Ĭ�Ϸ�
            rate:5,//������ˢ�µ�Ƶ��(��) Ĭ��10��һ��
            url:"",//ʵʱˢ�½��ȵ�url
            ajaxparam:{},//ajax�������
            isFullStop:false,//100�����Ƿ�ֹͣˢ��
            color:["#30A4F7","#FFCE2D","#E83A1E"]//��������ɫ С��0.5��һ����ɫ 0.5~0.8 �ڶ�����ɫ 0.8~1��������ɫ ���ֻ����һ����ɫ ����������һ����ɫ
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
             * �����ʼ��
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

                    if(opts.isAutoRefresh){//�������Զ�ˢ��
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

            _reDraw:function(){//�ػ����
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


