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

class App extends Component {
  render() {
    return (
      <Container>
        <Main>
          <h1>Search area</h1>
          <Search>
            <SearchArea />
          </Search>
        </Main>
      </Container>
    );
  }
}

export default App;
