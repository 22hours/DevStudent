import React, {Component} from 'react';
import ContentListHeader from './ContentListHeader'
import ContentList from './ContentList'
class ContentListTemplate extends Component{
    render(){
        const {contents,handleContentPage} = this.props;
        return (
            <div className="container">
            <div>
                <ContentListHeader></ContentListHeader>
            </div>
            <div>
                <ContentList items = {contents} handleContentPage={handleContentPage}></ContentList>
            </div>
            </div>
        );
    };
}
export default ContentListTemplate;