 const reducer = (state = null, action = {}) => {
            switch (action.type) {
                case 'ADVERTISEMENT_FETCHED':
                    return action.advertisements
    
                    default:
                    return state
               
            }
        }
          
        export default reducer