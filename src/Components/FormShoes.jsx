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
        <input type="text" name="brand" value={this.state.brand} onChange={this.handleChange}/>
        <input type="text" name="model" value={this.state.model} onChange={this.handleChange}/>
        <input type="text" name="colorway" value={this.state.colorway} onChange={this.handleChange}/>
        <input type="number" name="size" value={this.state.size} onChange={this.handleChange}/>
        <input type="number" name="retailPrice" value={this.state.retailPrice} onChange={this.handleChange}/>
        <input type="number" name="resalePrice" value={this.state.resalePrice} onChange={this.handleChange}/>
        <button onClick={this.handleUpdateClick}>update shoe</button>
      </div>
    ) : (
        <div className="listOfShoesED">
            <p>{`${this.props.item.brand}
            ${this.props.item.model}
            ${this.props.item.colorway}
             sz. ${this.props.item.size}
            $${this.props.item.retailPrice}
            $${this.props.item.resalePrice}`}</p>
            <button onClick={this.handleEditClick}>edit</button>
            <button onClick={this.handleDeleteClick}>delete shoe</button>
            
    </div>
    )
  }
}






export default FormShoes