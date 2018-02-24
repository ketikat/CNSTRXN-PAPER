import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeInput, changeMovement} from '../store'

function read_Element(ParentNode, OrigData){
  const ContainerElements = ["svg"]
  const RelevantStyles = {"polygon":["fill","opacity"]}


    const Children = ParentNode.childNodes
    const OrigChildDat = OrigData.childNodes

    for (let idx = 0; idx < Children.length; idx++){
        const Child = Children[idx]

        const TagName = Child.tagName
        if (ContainerElements.indexOf(TagName) != -1){
            read_Element(Child, OrigChildDat[idx])
        } else if (TagName in RelevantStyles){
            const StyleDef = window.getComputedStyle(OrigChildDat[idx])

            let StyleString = ""
            for (let st = 0; st < RelevantStyles[TagName].length; st++){
                StyleString += RelevantStyles[TagName][st] + ":" + StyleDef.getPropertyValue(RelevantStyles[TagName][st]) + "; "
            }

            Child.setAttribute("style",StyleString)
        }
    }
}


function ExportStyledSVG(props){
    const SVGElem = props.SVGElem
    const oDOM = SVGElem.cloneNode(true)
    read_Element(oDOM, SVGElem)

    const data = new XMLSerializer().serializeToString(oDOM)
    const svg = new Blob([data], { type: "image/svg+xml;charset=utf-8" })
    const url = URL.createObjectURL(svg)

  return (
     <a href={url} >click to download your SVG</a>
  )
}



class WordsForm extends Component {

  constructor(props) {
    super(props)
    this.state =  {
        inputValue: '',
        showLink: false

    }
    this.clickHandler = this.clickHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.clickExport = this.clickExport.bind(this)
  }


  clickHandler(evt) {
    evt.preventDefault()
    this.props.changeMovement(true)

    setTimeout( ()=>{
          this.props.changeMovement(false)
        }, 2010)
   }

   clickExport(evt) {
    evt.preventDefault()
    this.setState({showLink:true})
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
            <button type="submit"> animate </button>
            <button onClick={this.clickExport}> export </button>
            {
              this.state.showLink
              ?
              (this.props.exportData && <ExportStyledSVG SVGElem={this.props.exportData} /> )
              :
              null
            }

          </span>
        </form>
      </div>
    )
  }
}

function mapState(state) {
  return {
      exportData: state.exportData
  }
}

const mapDispatch = {changeInput, changeMovement}

export default connect(mapState, mapDispatch)(WordsForm)

