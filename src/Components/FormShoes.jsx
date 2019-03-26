import React, { Component } from 'react'

class FormShoes extends Component {
  constructor(props) {
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
    let {brand, model, colorway, size, retailPrice, resalePrice, edit} = this.state
    
    return edit ? (
      <div className="listOfShoesU">
        <div className="leftUpdate">

          <div className="leftUpdateTop">

            <input name="brand"
              value={brand}
              onChange={this.handleChange}
              type="text"
              autoComplete="off"
            />
            <input name="model"
              value={model}
              onChange={this.handleChange}
              type="text"
              autoComplete="off"
            />
            <input name="colorway"
              value={colorway}
              onChange={this.handleChange}
              type="text"
              autoComplete="off"
            />
          </div>

          <input className="sizeUpdate"
            name="size"
            value={size}
            onChange={this.handleChange}
            type="number"
            min="1"
            step=".5"
          />
          <input className="retailUpdate"
            name="retailPrice"
            value={retailPrice}
            onChange={this.handleChange}
            type="number"
            min="0"
            step="10"
          />
        </div>

        <div className="rightUpdate">
          <input name="resalePrice"
            value={resalePrice}
            onChange={this.handleChange}
            type="number"
            min="0"
            step="10"
          />
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