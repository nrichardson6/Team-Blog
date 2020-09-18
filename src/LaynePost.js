import React from "react";
import { Header, Button} from "semantic-ui-react";


class LaynePost extends React.Component {
  state = {editing: false};
  
  render() {
    const {title,body, removePost, id} = this.props;
    // const {editing} = this.state;
    return (
      <>

        <Header as="h3">{title }</Header>
        <p>{body} </p>
        <Button onClick={() => removePost(id)}>Delete</Button>
    </>
        
    )
  }
}

export default LaynePost;