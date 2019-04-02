import React, {Component} from 'react'
import { Link } from 'react-router-dom'
export default class AdvertisementList extends Component {

   
      
  
    render() {
      
      const {advertisements} =this.props
     
      return (
        <div className="advertisements-list">
         
          { !advertisements && 'Loading...' }
          {
            advertisements &&
            <table >
            <thead>
              <tr>
                <th >Title</th>
                <th >description</th>
              </tr>
            </thead>
            <tbody >
              {advertisements.map(advertisement => (
                <tr key={advertisement.id}>
                  <td >
                    <Link to={`/advertisements/${advertisement.id}`}>{advertisement.title}</Link>
                  </td>
                  <td>  {advertisement.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          }
  
        </div>
      )
    }
  }