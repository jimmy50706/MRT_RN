import React, { FC } from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { RootRouter } from './root-router';

const App: FC = () => {
  return (
    <NativeRouter>
      <Route path="/" component={RootRouter} />
    </NativeRouter>
  );
};

export default App;
