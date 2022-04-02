import React, { createContext, useContext, useReducer } from 'react';
import { setPlayListData } from '../FireBase/playListData';

const PlayListContext = createContext();

function reducerfn(previousState, { type, payload }) {
  switch (type) {
    case 'ADD_TO_PLAYLIST':
      const playListName = payload.name;
      const id = payload.id;
      const previousStateCopy = { ...previousState };
      if (!previousStateCopy[playListName]) {
        previousStateCopy[playListName] = [id];
      } else {
        previousStateCopy[playListName].push(id);
      }
      setPlayListData(playListName, previousStateCopy[playListName]);
      return previousStateCopy;
    case 'REMOVE_FROM_PLAYLIST':
      const copyOfPreviousState = { ...previousState };
      const indexOfTheId = copyOfPreviousState[payload.name].findIndex(
        (element) => element === payload.id
      );
      copyOfPreviousState[payload.name].splice(indexOfTheId, 1);
      setPlayListData(payload.name, copyOfPreviousState[payload.name]);
      return copyOfPreviousState;

    default:
      return { ...previousState };
  }
}
function PlayListContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerfn, {});

  return (
    <PlayListContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayListContext.Provider>
  );
}

function usePlayListContext() {
  const { state, dispatch } = useContext(PlayListContext);
  return { state, dispatch };
}

export { usePlayListContext, PlayListContextProvider };
