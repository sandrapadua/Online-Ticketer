import React from 'react'
import {connect} from 'react-redux'
import AdsDetailList from './adsDetailsList'
import {loadAds} from '../actions/advertisements'

class AdsDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadAds(Number(this.props.match.params.id))
}

  render() {
    return  <div>
    {!this.props.ads && 'Loading'}
    {this.props.ads && <AdsDetailList ads={this.props.ads} />}
  </div>
  }
}

const mapStateToProps = state => ({
  ads: state.ads
})

export default connect(mapStateToProps,
     {loadAds})
     (AdsDetailsContainer)