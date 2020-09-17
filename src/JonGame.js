import React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

const Game = ({id, title, desc}) => {
    return (
        <Segment>
            <Header as="h3">{title}</Header>
            <p>{desc}</p>
        </Segment>
    );
};

export default Game;