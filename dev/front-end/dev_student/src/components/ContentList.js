import React,{Component} from 'react'
import ContentListItem from './ContentListItem'
import { Table } from 'reactstrap';
class ContentList extends Component{
    render(){
        const {items,handleContentPage} = this.props;
        const contents = items.map(
                ({views,number,title,author}) => (
                    <ContentListItem
                        number={number}
                        views={views}
                        title={title}
                        author={author}
                        handleContentPage={handleContentPage}
                    ></ContentListItem>
                )
        );

        return(
        <Table>{contents}</Table>
        );
    };
}

export default ContentList;