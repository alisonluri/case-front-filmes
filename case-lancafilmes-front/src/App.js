import { Router } from "./router/Router";
import { GlobalStyle, Page } from "./Styled";
import GlobalState from './global/GlobalState'

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Page>
        <Router />
      </Page>
    </GlobalState>
  );
}

export default App;
