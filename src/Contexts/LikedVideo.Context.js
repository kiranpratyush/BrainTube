import React, { createContext,useReducer ,useContext} from 'react';

const LikedVideosContext = createContext(null);

function reducerfn(previousState, {type,payload}) {
  switch (type) {
    case 'ADD_TO_LIKED_VIDEOS':
      return [...previousState, payload.id];
    case 'REMOVE_FROM_LIKED_VIDEOS':
        const newState = [...previousState]
        const index = newState.findIndex(element=>element===payload.id)
        console.log(index,payload.id,newState[index])
        newState.splice(index,1)
        return newState
    default:
      return [...previousState];
  }
}

function LikedVideosContextProvider({children}) {
  const [state, dispatch] = useReducer(reducerfn, []);
  return(
    <LikedVideosContext.Provider value ={[state,dispatch]}>
        {
            children
        }
    </LikedVideosContext.Provider>
  )

}

function useLikedVideosContext()
{
    const [state,dispatch] = useContext(LikedVideosContext)
    return [state,dispatch]
}

export {LikedVideosContextProvider,useLikedVideosContext}