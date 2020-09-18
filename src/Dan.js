import React from 'react';
import { Header, } from 'semantic-ui-react';
import Team from './Team';
import TeamForm from './TeamForm';

class Dan extends React.Component {
  state = {
    teams: [
      { id: 1, title: 'Cleveland Browns', body: 'Football Team'},
      { id: 2, title: 'Cleveland Indians', body: 'Baseball Team'},
      { id: 3, title: 'Cleveland Cavaliers', body: 'Basketball Team'},
    ]
  };

  addTeam = (team) => {
    const newTeam = { ...team, id: Math.random() + "" };
    this.setState({
      teams: [...this.state.team, newTeam],
    });
  };

  renderTeams() {
    return this.state.teams.map( team => <Team key={team.id} {...team} />)
  };
  
  
  render() {
    return (
      <div>
        <Header as="h1">Blog</Header>
        <TeamForm add={this.addTeam} />
        { this.renderTeams() }
      </div>
    )
  };
};

export default Dan;