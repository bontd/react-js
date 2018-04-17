import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input

  return (
      <div>
          <form
              onSubmit={e => {
                  e.preventDefault()
                  if (!input.value.trim()) {
                      return
                  }
                  dispatch(addTodo(input.value))
                  input.value = ''
              }}
          >
              <div className="input-group">
                  <input className="form-control" ref={node => input = node} placeholder="What needs to be done?"/>
                  {/*<div className="input-group-prepend">*/}
                      {/*<button type="submit" className="input-group-text">Add Todo</button>*/}
                  {/*</div>*/}
              </div>
          </form>
      </div>
  )
}

export default connect()(AddTodo)