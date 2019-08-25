import React, { FC } from 'react';
import { HomePage } from './src/pages/home-page/home-page';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { ExitSearchPage } from './src/pages/exit-search-page/exit-search-page';

const App: FC = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/exit-search-page" component={ExitSearchPage}></Route>
        <Route component={HomePage}></Route>
      </Switch>
    </NativeRouter>
  );
};

export default App;
