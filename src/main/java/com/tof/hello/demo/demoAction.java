package com.tof.hello.demo;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

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
}
