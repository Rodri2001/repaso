
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
    
    case 'FILTER_DIGIMON':
    let filter = state.digimons.filter(ele => ele.color === action.payload)
    return {
      ...state, 
      digimons: filter
    }

    default: return state
  }

}