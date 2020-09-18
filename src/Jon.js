// (really, its Jon. )

import React from "react";
import {Button, Header, Icon, Segment } from "semantic-ui-react";
import GameForm from "./JonGameForm";
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
    //Add Games
    addGame = (game) => {
    const newGame = {...game, id: Math.random() + ""};
    this.setState({
        games: [...this.state.games, newGame],  
    }
    )
    console.log('games :>> ', this.state.games);
    }

    //Edit Functions here
    editGame= (updatedGame) => {
        const newGames = this.state.games.map((game) => {
            if (game.id === updatedGame.id) {
                return updatedGame;
            }
            return game;
        })

        this.setState({
            games: newGames
        })
    }


    //Delete Functions here
    deleteGame = (gId) => { //Note: See JonGameForm for the button variable thats being passed here
    console.log('gId :>> ', gId);

    //Here we will leave it in array that doesnt match the ID, otherwise, buh-bye!
    const filterGames = this.state.games.filter((g) => g.id !== gId);

    //Passing back the filtered array to the state
    this.setState({
        games: filterGames
    })


    }
    //Render the list
    renderGames() {
        return this.state.games.map((g) => (
            <Game
                key={g.id}
                {...g}

                //DONT FORGET THIS!!! without this, form will not work because its not defined... till now
                editHandler={this.editGame}
                deleteGame={this.deleteGame}

                //Need to ask teacher about this part. 

                />
        ))
    }


    //Render the main page of Jon's section
    render() {
        return (
            // <img src="https://thumbs.gfycat.com/IckyPlayfulAlaskanhusky-max-1mb.gif" />
            <div>
            <Header as="h2">Jon's Game List (Happy 35th Anniversity Mario!)</Header>
            <GameForm addHandler={this.addGame} />
            {this.renderGames()}
            </div>
        );
        
    }
}

export default JonGames;