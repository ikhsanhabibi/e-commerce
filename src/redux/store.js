import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
} else {
  console.log("prod");
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
