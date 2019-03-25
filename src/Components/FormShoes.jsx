import React, {Component} from 'react'

class FormShoes extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: props.item.id,
            brand: props.item.brand,
            model: props.item.model,
            colorway: props.item.colorway,
            size: props.item.size,
            retailPrice: props.item.retailPrice,
            resalePrice: props.item.resalePrice,
            edit: false

    }
}

handleChange = e => {
    let { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleEditClick = () => {
    this.setState({
      edit: true
    })
  }

  handleUpdateClick = () => {
    this.props.updateSneaker(this.state)
    this.setState({
      edit: false
    })
  }

  handleDeleteClick = () => {
    this.props.deleteSneaker(this.state.id)
    this.setState({
      edit: false
    })
  }

  render() {
    return this.state.edit ? (
      <div className="listOfShoesU">
        <div className="leftUpdate">

          <div className="leftUpdateTop">
            
            <input type="text" name="brand" value={this.state.brand} autoComplete="off" onChange={this.handleChange}/>
            <input type="text" name="model" value={this.state.model} autoComplete="off" onChange={this.handleChange}/>
            <input type="text" name="colorway" value={this.state.colorway} autoComplete="off" onChange={this.handleChange}/>
          </div>

            <input className="sizeUpdate" type="number" name="size" value={this.state.size} min="1" step=".5" onChange={this.handleChange}/>
            <input className="retailUpdate" type="number" name="retailPrice" value={this.state.retailPrice} min="0" step="10" onChange={this.handleChange}/>
        </div>

        <div className="rightUpdate">
          <input type="number" name="resalePrice" value={this.state.resalePrice} min="0" step="10" onChange={this.handleChange}/>
          <button onClick={this.handleUpdateClick}><i className="far fa-check-circle fa-3x"></i></button>
        </div>

      </div>
    ) : (
        <div className="listOfShoesED">
          <div className="leftShoeInfo">
            <p>{`${this.props.item.brand} ${this.props.item.model} ${this.props.item.colorway}`}</p>
            <p>{`Size: ${this.props.item.size}`}</p>
            <p>{`Retail: $${this.props.item.retailPrice}`}</p>
          </div>
          <div className="rightShoeInfo">
              <div className="shoePrices">
                <p><i className="fas fa-dollar-sign"></i> {this.props.item.resalePrice}</p>
              </div>
              <div className="shoeButtons">
                <button onClick={this.handleEditClick}><i className="fas fa-edit fa-2x"></i></button>
                <button onClick={this.handleDeleteClick}><i className="far fa-trash-alt fa-2x"></i></button>
              </div>
          </div>
            
    </div>
    )
  }
}






export default FormShoes