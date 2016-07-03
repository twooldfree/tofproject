/**
 * Created by wen on 2016/7/3.
 * jquery.wProgressBar
 * ������
 */
(function($, window,document,undefined ) {

    var defaults = {
            processnum:0.5,//���� Ĭ�ϰٷ�֮0
            color:"blue",//��������ɫ
            width:"",//�������Ŀ��
            height:"",//�������ĸ߶�
            isAutoRefresh:false,//�Ƿ��Զ�ˢ�£�Ĭ�Ϸ�
            rate:10,//������ˢ�µ�Ƶ��(��) Ĭ��10��һ��
            url:""//ʵʱˢ�½��ȵ�url
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
                    var processnum = opts.processnum*100+"%";//�����ʼ������
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


