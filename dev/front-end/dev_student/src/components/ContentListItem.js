import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ContentListItem.css";
class ContentListItem extends Component {
    render() {
        const { views, number, title, author } = this.props;
        return (
            <NavLink to={"/posts/" + number}>
                <tr col className="content-list-item">
                    <td className="content-list-item-number">{views}</td>
                    <td className="content-list-item-title">{title}</td>
                    <td className="content-list-item-author">{author}</td>
                </tr>
            </NavLink>
        );
    }
}

export default ContentListItem;
