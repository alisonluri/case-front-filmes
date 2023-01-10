import { Router } from "./router/Router";
import { GlobalStyle, Page } from "./Styled";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Page>
        <Router />
      </Page>
    </div>
  );
}

export default App;
