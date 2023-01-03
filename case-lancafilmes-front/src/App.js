import { Router } from "react-router-dom";
import { GlobalStyle, Page } from "./Styled";

function App() {
  return (
    <div>
        Funciona?
      <GlobalStyle />
      <Page>
        <Router />
      </Page>
    </div>
  );
}

export default App;
