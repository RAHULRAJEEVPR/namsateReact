import React from 'react'
import { useParams } from 'react-router-dom'

const RestrauntMenu = () => {
const {id,}=useParams()
console.log("id:",id);
    return (
    <div>
      menu
    </div>
  )
}

export default RestrauntMenu
