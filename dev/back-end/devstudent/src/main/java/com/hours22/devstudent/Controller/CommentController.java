package com.hours22.devstudent.Controller;

import com.hours22.devstudent.Command.Create.CreateComment;
import com.hours22.devstudent.Command.Delete.DeleteComment;
import com.hours22.devstudent.Entity.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/main/comment/*")
public class CommentController{

    @Autowired
    private CreateComment createComment;
    @Autowired
    private DeleteComment deleteComment;

    @Async(value = "createComment")
    @RequestMapping(value="/create",method = RequestMethod.POST)
    public Comment createComment(@RequestBody Map<String, String> map) {
        String question_id = map.get("question_id");
        String answer_id = map.get("answer_id");
        String author = map.get("author");
        String content = map.get("content");
        return createComment.createComment(question_id, answer_id, author, content);
    }

    @RequestMapping(value="/delete",method = RequestMethod.POST)
    public Comment deleteComment(@RequestBody Map<String, String> map) {
        String question_id = map.get("question_id");
        String answer_id = map.get("answer_id");
        String comment_id = map.get("comment_id");
        return deleteComment.deleteComment(question_id, answer_id, comment_id);
    }
}
