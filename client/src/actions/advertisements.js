import request from 'superagent'
export const ADVERTISEMENT_FETCHED = 'ADVERTISEMENT_FETCHED'
// export const ADVERTISEMENT_CREATE_SUCCESS = 'ADVERTISEMENT_CREATE_SUCCESS'
// export const ADVERTISEMENT_FETCHED = 'ADVERTISEMENT_FETCHED'
// export const ADVERTISEMENT_DELETE_SUCCESS = 'ADVERTISEMENT_DELETE_SUCCESS'
// export const ADVERTISEMENT_UPDATE_SUCCESS = 'EADVERTISEMENT_UPDATE_SUCCESS'
const baseUrl = 'http://localhost:4000'


const advertisementsFetched = advertisements => ({
    type: ADVERTISEMENT_FETCHED,
    advertisements
  })
  
export const loadAds = () => (dispatch, getState) => {
    console.log(`${baseUrl}/advertisements`)
    if (getState().advertisements) return
  
    request(`${baseUrl}/advertisements`)
      .then(response => {
        dispatch((advertisementsFetched(response.body.advertisements)))      })
      .catch(console.error)
  }
 