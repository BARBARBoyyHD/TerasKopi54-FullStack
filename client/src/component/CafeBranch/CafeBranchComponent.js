import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCafeBranch } from "../../redux";

const CafeBranchComponent = () => {
    const dispatch = useDispatch()
    const {loading,data,error} = useSelector((state)=> state.getCafeBranch)

    useEffect(()=>{
        dispatch(getCafeBranch())
    },[dispatch])

  return (
    <div>
      
    </div>
  )
}

export default CafeBranchComponent
