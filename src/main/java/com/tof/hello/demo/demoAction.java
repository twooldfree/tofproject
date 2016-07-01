package com.tof.hello.demo;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by wen on 2016/7/1.
 */
@Controller
@RequestMapping("/demo/demoAction")
public class demoAction {
    @RequestMapping("/test.do")
    public ModelAndView test(){
        System.out.println("aaaaaaaaaaa");
        ModelAndView mnv = new ModelAndView("/demo/demo.jsp");
        return mnv;
    }
}
