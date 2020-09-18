import React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import GameForm from "./JonGameForm";

// const Game = ({id, title, desc}) => {
//     return (
//         <Segment>
//             <Header as="h3">{title}</Header>
//             <p>{desc}</p>
//         </Segment>
//     );
// };

class Game extends React.Component {
    
    //Creating state of editing defaulting to false (that is for "in-line edit")
    state = {
        editing:false
    }

    // State when trigger
    toggleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }


render() {
    const { id, title, desc, editHandler, deleteGame } = this.props;
    const { editing } = this.state
    return (
        <Segment>
            {editing ? (
            // If the user toggle the edit, it will change to show form within a game for edit
            <GameForm
            id={id}
            title={title}
            desc={desc}
            editHandler={editHandler}
            toggleEditforExistingGame={this.toggleEdit}
            />
            ) : (
            // Else we are displaying it (non-edit)
            <div>
            <Header as="h3">{title}</Header>
            <p>{desc}</p>
            </div>
            
            )}
            {/* buttons goes here */}
            <div>
                <Button onClick={this.toggleEdit} color="blue">
                    <Icon name="pencil" />
                </Button>
                <Button onClick={() => deleteGame(id)} color="red">
                    <Icon name="trash" />
                </Button>
            </div>
        </Segment>

    )
}
}



export default Game;