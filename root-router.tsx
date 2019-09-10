import React, { FC, useEffect } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-native';
import { HomePage } from './src/pages/home-page/home-page';
import { SelectLinePage } from './src/pages/select-line-page/select-line-page';
import { BackHandler } from 'react-native';
import { StationListPage } from './src/pages/station-list-page/station-list-page';
import { SelectDirectionPage } from './src/pages/select-direction-page/select-direction-page';
import { SelectExitPage } from './src/pages/select-exit-page/select-exit-page';

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
      <Route path="/select-line-page" component={SelectLinePage}></Route>
      <Route path="/station-list-page" component={StationListPage}></Route>
      <Route
        path="/select-direction-page"
        component={SelectDirectionPage}
      ></Route>
      <Route path="/select-exit-page" component={SelectExitPage}></Route>
      <Route component={HomePage}></Route>
    </Switch>
  );
};
