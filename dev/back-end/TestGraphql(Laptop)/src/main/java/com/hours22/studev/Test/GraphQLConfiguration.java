package com.hours22.studev.Test;

import graphql.GraphQL;
import graphql.schema.GraphQLSchema;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

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
        return newParser()
                .file("laptop.graphqls")
                .resolvers(query,mutation)
                .build()
                .makeExecutableSchema();
    }
}
