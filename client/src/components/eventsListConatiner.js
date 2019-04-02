import React from 'react'
import {loadAds} from '../actions/advertisements'
import {connect} from 'react-redux'
import AdvertisementList from './advertisementList'
class AdvertisementListContainer extends React.Component{
    componentDidMount() {
        this.props.loadAds()
      }
      render(){
return <AdvertisementList advertisements = {this.props.advertisements}/>
}
}
const mapStateToProps = state => ({
  advertisements: state.advertisements
  
})

export default connect(mapStateToProps, {loadAds})(AdvertisementListContainer)