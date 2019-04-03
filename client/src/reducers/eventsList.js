const reducer = (state = null, action = {}) => {
    switch (action.type) {


        case  'EVENT_FETCHED':
        console.log("at reducer event fetched",action.eventsList)
            return action.eventsList

            default:
            return state
       
    }
}
  
export default reducer