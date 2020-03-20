import React,{Component} from 'react'
import './TodoItem.css'

class TodoItem extends Component{
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.checked != nextProps.checked)return true;
        return false;
    }
    render(){
    const {text,checked,id,onToggle,onRemove} = this.props;
    console.log(id + "'s TodoItem Rendered!!");

    return (
        <div className="todo-item" onClick={() => onToggle(id)}>
            <div className="remove" onClick = {(e) => {e.stopPropagation(); onRemove(id)}}>
                >&times;
            </div>
            <div className={`todo-text ${ checked ? ' checked' : '' }`}>
                <div>
                    {text}
                </div>
            </div>
            {
                checked && (<div className="check-mark"></div>)
            }
        </div>
    );
    }
}

export default TodoItem;