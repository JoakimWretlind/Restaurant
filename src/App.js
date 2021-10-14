import { Route, Switch } from 'react-router-dom'
import { mainTheme, GlobalStyle } from './globalStyle';
import { ThemeProvider } from 'styled-components';
import { Home, Menu, Bar } from './pages/index';

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/baranddrinks" exact component={Bar} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
