import React, { FC } from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { RootRouter } from './root-router';
import { store } from './src/store';
import { Provider } from 'react-redux';

const App: FC = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Route path="/" component={RootRouter} />
      </NativeRouter>
    </Provider>
  );
};

export default App;
