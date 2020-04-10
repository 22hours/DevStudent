import React from 'react';

const Search = ({location}) => {
    return (
        <div>
            {new URLSearchParams(location.search).get('keyword')} Search
        </div>
    );
};

export default Search;