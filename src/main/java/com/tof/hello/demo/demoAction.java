package com.tof.hello.demo;


import com.tof.hello.Hello;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;


/**
 * Created by wen on 2016/7/1.
 */
@Controller
//@RequestMapping("/demo/demoAction")
public class demoAction {


    @RequestMapping("/demo.do")
    public ModelAndView test(){
        ModelAndView mnv = new ModelAndView("/demo/demo.jsp");
        System.out.println("3");
        return mnv;
    }

    @RequestMapping("/reDraw.do")

    public @ResponseBody Object reDraw(HttpServletRequest request){
        return Math.random()+"";
    }
}
