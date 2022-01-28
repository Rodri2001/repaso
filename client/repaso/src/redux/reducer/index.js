
const initalState = {
  digimons:[]
}

export default function rootReducer (state = initalState, action){

  switch(action.type){

    case "GET_ALL_DIGIMONS":
      return{
        ...state,
        digimons: action.payload
      }
    default: return state
  }

}