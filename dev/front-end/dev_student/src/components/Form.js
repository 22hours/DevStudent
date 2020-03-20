import React from 'react'
import './Form.css'

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}></input>
            <div className="create-button" onClick={onCreate}>
                Add
            </div>
        </div>
    );
};

export default Form;