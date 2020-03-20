import React, {Component} from 'react';
import { Table } from 'reactstrap';
import './ContentHeaderListItem.css'

class ContentListHeader extends Component{
    render(){
        return (
            <Table>
        <tr col className="content-header-list-item">
            <td className="content-header-list-item-number">Views</td>
            <td className="content-header-list-item-title">Title</td>
            <td className="content-header-list-item-author">Author</td>
        </tr>
        </Table>
        );
    };
}
export default ContentListHeader;