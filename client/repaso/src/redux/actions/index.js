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

export const filterDigimon = (payload) => {
  return (dispatch)=> dispatch({
    type: 'FILTER_DIGIMON',
    payload,
  })
}


//                            ASC o DESC
// export const orderDigimon = (payload) => {
//   return (dispatch)=>{
//     axios.get(`http://localhost:3001/digimon/order/${payload}` )
//   }

// }