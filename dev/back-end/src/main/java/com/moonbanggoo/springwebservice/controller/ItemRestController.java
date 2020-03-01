package com.moonbanggoo.springwebservice.controller;

import com.moonbanggoo.springwebservice.Entity.Item;
import com.moonbanggoo.springwebservice.service.ItemService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemRestController {
    private ItemService is;
    @GetMapping("/item/{id}")
    public Item getItem(@PathVariable("id") String name){
        is = new ItemService();
        Item it;
        it = is.getItem(name);
        System.out.print(it.toString());
        return it;
    }
    @GetMapping("/item")
    public Item getIt(@RequestParam("id") String name){
        is = new ItemService();
        Item it = is.getItem(name);
        return it;
    }
}
