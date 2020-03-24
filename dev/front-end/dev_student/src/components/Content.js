import React, { Component, useState } from 'react'
import { gql } from 'apollo-boost';
import { Query , Mutation } from 'react-apollo';
import { Container, Row, Col, Table } from 'reactstrap';


const GET_CONTINENTS = gql`
query{
    continents{
        code
        name
    }
}
`;

const GET_TEST = gql`
query{
    findAllLaptops{
        id
        name
        price
        ram
    }
}
`;

const POST_QUERY = gql`
mutation{
    createLaptop(
        id : 3
        name : "APPLE"
        price : 104912049
        ram : 1293293)
        {
            id
            name
            price
            ram
        }
}
`;

const Content = ({ match }) => {

    const [count, setCount] = useState(0)

    const Increase = () => {
        setCount(count + 1);
    }

    const Decrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            {match.params.postId}번 게시물입니다.
            <h1>{count}</h1>
            <button onClick={Increase}>증가</button>
            <button onClick={Decrease}>감소</button>
            <div className="container">
                <Row>
                    <Col></Col>
                    <Col>
                        <h2>Continents</h2>
                        <Query query={GET_CONTINENTS}>
                            {({ loading, error, data }) => {
                                if (loading) return <p>Loading...</p>;
                                if (error) return <p>Error!</p>;
                                return (
                                    <ul>
                                        {data.continents.map(({ code, name }) => (
                                            <li key={code}>{name}{name} {code}</li>
                                        ))}
                                    </ul>
                                );
                            }}
                        </Query>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <h2>POST QUERY</h2>
                        <Query query={GET_TEST}>
                            {({ loading, error, data }) => {
                                if (loading) return <p>Loading...</p>;
                                if (error) return <p>Error!</p>;
                                return (
                                    <ul>
                                        {data.findAllLaptops.map(({ id, name,price,ram }) => (
                                            <li key={id}>{name}{price}{ram} </li>
                                        ))}
                                    </ul>
                                );
                            }}
                        </Query>
                    </Col>
                    <Col></Col>
                </Row>
               
            </div>
        </div>
    );
}



export default Content;