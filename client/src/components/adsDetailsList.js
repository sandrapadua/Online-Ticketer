import React from 'react'
// import EventForm from './EventForm'
export default function AdsDetails(props){
//   const { event } = props
const ads = props.ads
// const onDelete = props.onDelete
// const onEdit = props.onEdit
// const onChange = props.onChange
// const onSubmit = props.onSubmit
// const formValues = props.formValues
// const editMode = props.editMode
// console.log('ON EDIT VALUE ',editMode)
//     if(event === null) return <h1>Loading</h1>
//     if (editMode){
//         return(
//             <EventForm onChange = {onChange}
//             onSubmit = {onSubmit}
//             values = {formValues}
//             />)
//     }
//     else{
   return(
       <div className ='ads-details'>
       
       <h1>{ads.title}</h1>
       <p>{ads.description}</p>
       <p>{ads.picture}</p>
       <p>{ads.email}</p>
       <p>{ads.phoneNumber}</p>





       {/* { <button  onClick ={onDelete}>DELETE</button> */}
     </div> 
   )
// }
}