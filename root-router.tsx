import React, { FC, useEffect } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-native';
import { HomePage } from './src/pages/home-page/home-page';
import { ExitSearchPage } from './src/pages/exit-search-page/exit-search-page';
import { BackHandler } from 'react-native';

export const RootRouter: FC<RouteComponentProps> = ({ history, location }) => {
  useEffect(() => {
    const handleBack = () => {
      if (location.pathname !== '/') {
        history.goBack();
        return true;
      }
      return false;
    };
    BackHandler.addEventListener('hardwareBackPress', handleBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBack);
    };
  }, [location.pathname, history]);

  return (
    <Switch>
      <Route path="/home" component={HomePage}></Route>
      <Route path="/exit-search-page" component={ExitSearchPage}></Route>
      <Route component={HomePage}></Route>
    </Switch>
  );
};
