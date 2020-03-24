package com.hours22.devstudent.community;

import com.google.common.io.Resources;
import com.hours22.devstudent.community.Command.Mutation;
import com.hours22.devstudent.community.Command.Query;
import graphql.GraphQL;
import graphql.schema.GraphQLSchema;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.net.URL;

import static com.coxautodev.graphql.tools.SchemaParser.newParser;

@Configuration
public class GraphQLConfiguration {
    @Autowired
    private Query query;

    @Autowired
    private Mutation mutation;

    @Bean
    public GraphQL graphQL() {
        return GraphQL.newGraphQL(graphQLSchema())
                .build();
    }

    @Bean
    public GraphQLSchema graphQLSchema() {
        String[] str = new String[]{
                "./GraphQL/Answer.graphqls",
                "./GraphQL/Board.graphqls",
                "./GraphQL/Comment.graphqls"
        };
        GraphQLSchema graphQLSchema1 = newParser()
                .file("./GraphQL/Board.graphqls")
                //.file("./GraphQL/Board.graphqls")
                .resolvers(query,mutation)
                .build()
                .makeExecutableSchema();
        GraphQLSchema graphQLSchema = newParser()
                .files(new String[]{
                        "./GraphQL/Answer.graphqls",
                        "./GraphQL/Board.graphqls",
                        "./GraphQL/Comment.graphqls"
                })
                //.file("./GraphQL/Board.graphqls")
                .resolvers(query,mutation)
                .build()
                .makeExecutableSchema();
        return newParser()
                .files(new String[]{
                        "./GraphQL/Answer.graphqls",
                        "./GraphQL/Board.graphqls",
                        "./GraphQL/Comment.graphqls"
                })
                //.file("./GraphQL/Board.graphqls")
                .resolvers(query,mutation)
                .build()
                .makeExecutableSchema();
    }
}
