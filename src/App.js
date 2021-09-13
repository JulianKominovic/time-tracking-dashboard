import styled from "styled-components";
import CardContainer from "./components/CardContainer";
import { DataTypeProvider } from "./context/ContextDataType";
import { BrowserRouter as Router, Route } from "react-router-dom";

const MainBody = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a202c;
  height: 52vh;
  padding: 24vh 14%;

  @media screen and (max-width: 1023px) {
    min-height: 100vh;
    padding: 6vh 4%;
    height: auto;
  }
`;

function App() {
  return (
    <Router>
      <Route path="/">
        <MainBody>
          <DataTypeProvider>
            <CardContainer></CardContainer>
          </DataTypeProvider>
        </MainBody>
      </Route>
    </Router>
  );
}

export default App;
