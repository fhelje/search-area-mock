import React, { Component } from "react";
import styled from "styled-components";

import SearchArea from "./searchArea/SearchArea";

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  background-color: beige;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Search = styled.div`
  width: 1200px;
  background-color: white;
`;

const filters = [
  {
    label: "Cm",
    value: "Frank Heljebrandt",
  },
  {
    label: "Date",
    value: "2018-05-01 -> Today",
  },
  {
    label: "Job Id",
    value: "2018-05-01 -> Today",
  },
  {
    label: "Client",
    value: "Rn Client Betasales regression 150902",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [...filters],
    };
  }

  reset = () => {
    const f = [...filters];
    this.setState({ filters: f });
  };

  removeFilter = label => {
    console.log(label);
    const filters = this.state.filters.filter(x => {
      return x.label != label;
    });
    this.setState({ filters: filters });
  };

  clearAllFilters = () => {
    this.setState({ filters: [] });
  };

  render() {
    return (
      <Container>
        <Main>
          <h1>Search area</h1>
          <Search>
            <SearchArea
              filters={this.state.filters}
              click={label => this.removeFilter(label)}
              clear={() => this.clearAllFilters()}
            />
          </Search>
          <h4 onClick={() => this.reset()}>Reset</h4>
        </Main>
      </Container>
    );
  }
}

export default App;
