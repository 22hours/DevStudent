import React from 'react';

const About = ({match}) => {
    return (
        <div>
            {match.params.username}의 소개입니다 방가요.
        </div>
    )
}

export default About;