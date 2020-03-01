package com.moonbanggoo.springwebservice.service;

import com.moonbanggoo.springwebservice.Entity.Item;

import java.util.ArrayList;
import java.util.List;

public class ItemService {
    public Item getItem(String id){
        return new Item(id,"hi");
    }
    public ItemService(){

    }
    public List<Item> getItems(String query,String field, int page){
        ArrayList<Item> li = new ArrayList<Item>();
        for(int i=0;i<10;i++){
            Item temp = new Item("Damin","Favian");
            li.add(temp);
        }
        return li;
    }
}
