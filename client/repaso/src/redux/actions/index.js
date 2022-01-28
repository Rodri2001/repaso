import axios from 'axios'

export const getAllDigimons = ()=>{
  return (dispatch)=>{
    axios.get("http://localhost:3001/digimon/findAll")
    .then(({data}) =>{
     return dispatch({
        type:"GET_ALL_DIGIMONS",
        payload: data
      })
    }).catch((e)=>{
      console.log(e)
    })
  }
}