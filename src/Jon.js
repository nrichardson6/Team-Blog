// (really, its Jon. )

import React from "react";
import {Button, Header, Icon, Segment } from "semantic-ui-react";
// import GameForm from "./JonGameForm";
import Game from "./JonGame"

class JonGames extends React.Component {
    state = {
        games: [
            {id: 1, title: "Super Mario Bros", desc: "Mario for 8-bit Nintendo"},
            {id: 2, title: "Super Mario World", desc: "Mario for Super Nintendo"},
            {id: 3, title: "Super Mario 64", desc: "Mario for Nintendo 64"},
            {id: 4, title: "Super Mario Odsessy", desc: "Mario for Nintendo Switch"},
            {id: 5, title: "Super Mario Sunshine", desc: "Mario for Nintendo Gamecube"},
            {id: 6, title: "Super Mario Galaxy", desc: "Best Mario ever. Mario for Wii"},
        ]
    }


    renderGames() {
        return this.state.games.map((g) => (
            <Game
                key={g.id}
                {...g}
                />
        ))
    }

    render() {
        return (
            // <img src="https://thumbs.gfycat.com/IckyPlayfulAlaskanhusky-max-1mb.gif" />
            <div>
            <Header as="h2">Jon's Game List</Header>
            {this.renderGames()}
            </div>
        );
        
    }
}

export default JonGames;