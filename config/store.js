// React
import { AsyncStorage, Platform } from 'react-native';

// Redux
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import { persistStore, autoRehydrate } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';

// Services
import { reducer as dataReducer } from '../data/reducer';
import { reducer as servicesReducer } from '../services/reducer';
import * as persistActions from '../services/persist/actions';

// Config
import appConfig from './config/app';

// Constants
const appReducer = combineReducers({ services: servicesReducer, data: dataReducer });
const enhancer = compose(applyMiddleware(thunk), devTools({
  // realtime: true,
  name: Platform.OS,
  hostname: appConfig.hostname,
  port: appConfig.port,
}));
const store = createStore(appReducer, enhancer, autoRehydrate());
const sessionFilter = createFilter('services', ['session'], ['session']);

export const persist = persistStore(store, {
  storage: AsyncStorage,
  blacklist: ['data'],
  transforms: [sessionFilter],
}, () => store.dispatch(persistActions.update({ isHydrated: true })));

export default store;
