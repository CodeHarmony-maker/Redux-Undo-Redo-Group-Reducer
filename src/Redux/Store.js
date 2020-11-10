import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import logger from 'redux-logger'
import thunk from "redux-thunk";

import rootReducer from "./Reducers";

const middlewares = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
// };

// const pReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(pReducer, composeWithDevTools(applyMiddleware(...middlewares)));
// export const persistor = persistStore(store);


export default store;
