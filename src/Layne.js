import React from 'react';
import { Header } from "semantic-ui-react";
import LaynePost from "./LaynePost";
import PostForm from "./LaynePostForm";


class LayneBlog extends React.Component {

  state = {
    blogPost: [
      {id: 1, title: "Short shorts", body: "Who wears short shorts?"},
      {id: 2, title: "Huge gains", body: "The secrets to getting RIPPPED"},
    ]
  };

renderBlogPost = () =>{
  const {blogPost} = this.state;
  return blogPost.map((post) => (<LaynePost 
    key={post.id}{...post}
    removePost={this.removePost}
    />))
};

removePost = (removeId) => {
  const removedPost = this.state.blogPost.filter((p) => p.id !== removeId);
  this.setState({
    blogPost: removedPost,
  })

}

addNewPost = (formPost) => {
  const newPost = {...formPost, id:Math.random() };
  this.setState({
    blogPost: [...this.state.blogPost, newPost],
  }); 
};

  render () {
    return (
      <div>
        <Header>Layne's Blog</Header>
        {this.renderBlogPost()}
        <br/><br/>
        <PostForm addNewPost={this.addNewPost}/>
      </div>
    )
  }



}
export default LayneBlog;