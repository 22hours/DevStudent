package com.moonbanggoo.springwebservice.controller;


import com.moonbanggoo.springwebservice.Entity.Item;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;


@Controller
public class ItemController {
    @GetMapping("/")
    public String hi(@ModelAttribute("formData") Item item){
        System.out.println(item.getId());
        System.out.println(item.getPassword());
        item.setId("Hi");
        return "HelloWorld";
    }
}
