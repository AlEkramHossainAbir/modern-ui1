import React, { Component } from 'react';
import './Article.css'
class Article extends Component {
    render() {
        return (
            <div>
                
                <h1 className='artcle_h1'>This is Article {this.props.title}</h1>
            </div>
        );
    }
}

export default Article;