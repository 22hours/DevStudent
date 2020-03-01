package com.moonbanggoo.springwebservice.controller;

import com.moonbanggoo.springwebservice.Entity.Item;
import com.moonbanggoo.springwebservice.Entity.findPostModel;
import com.moonbanggoo.springwebservice.Entity.posts;
import com.moonbanggoo.springwebservice.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionMessage;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.ArrayList;
import java.util.List;
@Controller
public class findPostModelController {
    @GetMapping("/posts")
    public String getPosts(@ModelAttribute("fpm") findPostModel fpm, @ModelAttribute("fp") posts fp)

    {
        System.out.println(fpm.getField());
        System.out.println(fpm.getQuery());
        String field = fpm.getField();
        String query = fpm.getQuery();
        String page = fpm.getPage();
        if(field==null || field.equals("")){
            field = "title";
            fpm.setField(field);
        }
        if(page==null || page.equals("")){
            page = "1";
            fpm.setPage(page);
        }
        if(query==null || query.equals("")){
            query = "";
            fpm.setQuery(query);
        }
        ItemService is = new ItemService();
        List<Item> foundPost;
        foundPost = is.getItems(query,field,Integer.parseInt(page));
        fp.setIt(foundPost);
        return "findPost";
    }
}
