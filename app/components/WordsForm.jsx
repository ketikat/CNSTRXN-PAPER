import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeInput } from '../store'


class WordsForm extends Component {

  constructor(props) {
    super(props)
    this.state =  {
        explode: false,
        exportData: '',
        inputValue: ''
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }


  clickHandler(evt) {
    evt.preventDefault()
    this.setState({explode: !this.state.explode})
   }

  changeHandler(evt) {
    this.setState({inputValue: evt.target.value})
    this.props.changeInput(evt.target.value)
   }

render() {
 return (
      <div className="WordsFormContainer">
        <form name="spell-word-form" onSubmit={this.clickHandler}>
          <span>
             <label> enter word to spell </label>
             <input
                className="form-control"
                name="inputValue"
                value={this.state.inputValue}
                placeholder="type something..."
                onChange={this.changeHandler}
            />
            <button type="submit"> explode! </button>
          </span>
        </form>
      </div>
    )
  }
}

const mapDispatch = {changeInput}

export default connect(null, mapDispatch)(WordsForm)
