import React from 'react';
import { Header, } from "semantic-ui-react";
import LaynePost from "./LaynePost";


class LayneBlog extends React.Component {

  state = {
    blogPost: [
      {id: 1, title: "Short shorts", body: "Who wears short shorts?"},
      {id: 1, title: "Huge gains", body: "The secrets to getting RIPPPED"},
    ]
  };

renderBlogPost = () =>{
  const {blogPost} = this.state;
  return blogPost.map(post => <LaynePost key={post.id}{...post}/>)
};

  render () {
    return (
      <div>
        <Header>Layne's Blog</Header>
        {this.renderBlogPost()}

      </div>
    )
  }



}
export default LayneBlog;