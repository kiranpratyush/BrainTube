import React, { createContext, useReducer, useContext } from 'react';

const WatchLaterContext = createContext(null);

function reducerfn(previousState, { type, payload }) {
  switch (type) {
    case 'ADD_TO_WATCH_LATER':
      console.log("I am running")
      return [...previousState, payload.id];
    case 'REMOVE_FROM_WATCH_LATER':
      const newState = [...previousState];
      const index = newState.findIndex((element) => element === payload.id);
      console.log(index, payload.id, newState[index]);
      newState.splice(index, 1);
      return newState;
    default:
      return [...previousState];
  }
}

function WatchLaterContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerfn, []);
  return (
    <WatchLaterContext.Provider value={[state, dispatch]}>
      {children}
    </WatchLaterContext.Provider>
  );
}

function useWatchLaterContext() {
  const [state, dispatch] = useContext(WatchLaterContext);
  return [state, dispatch];
}

export {WatchLaterContextProvider,useWatchLaterContext };
