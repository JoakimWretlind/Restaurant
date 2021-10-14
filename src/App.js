import { Route, Switch } from 'react-router-dom'
import { mainTheme, GlobalStyle } from './globalStyle';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/index';

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
