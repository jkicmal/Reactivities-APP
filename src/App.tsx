import "semantic-ui-css/semantic.min.css";

import React, {Component} from "react";
import axios from "axios";

import {Container, Header, Icon, List} from "semantic-ui-react";

class App extends Component {
  state = {
    values: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:5000/api/values");
      const values = response.data;
      this.setState({values});
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Container className="App">
        <Header>
          <Icon name="users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <Container>
          <List>
            {this.state.values.map(({id, name}) => (
              <List.Item key={id}>{name}</List.Item>
            ))}
          </List>
        </Container>
      </Container>
    );
  }
}

export default App;
