import React from 'react'
import { updateFilter } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {
  // const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    // input-field value is in variable event.target.value
    console.log(event.target.value)
    dispatch(updateFilter(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter