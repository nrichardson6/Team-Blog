import React from "react";
import { Header} from "semantic-ui-react";


class LaynePost extends React.Component {
  state = {editing: false};
  
  render() {
    const {title,body} = this.props;
    // const {editing} = this.state;
    return (
      <>

        <Header as="h3">{title }</Header>
        <p>{body} </p>
      
    </>
        
    )
  }
}

export default LaynePost;