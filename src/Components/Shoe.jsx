import React, { Component } from 'react'

import FormShoes from './FormShoes'
import GainLoss from './GainLoss'


class Shoe extends Component {
    constructor() {
        super()

        this.state = {
            brand: '',
            model: '',
            colorway: '',
            size: '',
            retailPrice: '',
            resalePrice: '',
        }
    }


    handleChange = (e) => {
        console.log(e.target.value)

        let {name, value} = e.target

        this.setState({
            [name]: value
        })

    }

    handleClick = () => {
        let shoe = this.state
        this.props.createSneaker(shoe)
        this.setState({
            brand: '',
            model: '',
            colorway: '',
            size: '',
            retailPrice: '',
            resalePrice: '',
        })
    }




    render() {
        console.log(11111111, this.props.sneakers)
        
        let {brand, model, colorway, size, retailPrice, resalePrice} = this.state

        return (
            <div>
                <div className="inputContainer">
                    <div className="firstInputRow">

                        <input onChange={this.handleChange}
                            name="brand"
                            placeholder="Brand"
                            type="text"
                            autoComplete="off"
                            value={brand}
                        />
                        <input onChange={this.handleChange}
                            name="model"
                            placeholder="Model"
                            type="text"
                            autoComplete="off"
                            value={model}
                        />
                        <input onChange={this.handleChange}
                            name="colorway"
                            placeholder="Colorway"
                            type="text"
                            autoComplete="off"
                            value={colorway}
                        />
                    </div>

                    <div className="secondInputRow">

                        <input name="size"
                            placeholder="Size"
                            value={size}
                            onChange={this.handleChange}
                            type="number"
                            min="1"
                            step=".5"
                        />
                        <input name="retailPrice"
                            placeholder="$ Retail"
                            value={retailPrice}
                            onChange={this.handleChange}
                            type="number"
                            min="0"
                            step="10"
                        />
                        <input name="resalePrice"
                            placeholder="$ Resale "
                            value={resalePrice}
                            onChange={this.handleChange}
                            type="number"
                            min="0"
                            step="10"
                        />
                    </div>

                    <button onClick={this.handleClick}>
                        <i className="fas fa-plus fa-2x"></i>
                        <i className="fas fa-shoe-prints fa-2x"></i>
                    </button>

                </div>

                <GainLoss sneakers={this.props.sneakers} />

                <div className="category">
                    <div className="items">

                        <p>Item ▼</p>

                        <div className="itemsRight">
                            <p>Resale</p>
                            <p>Edit/<span>Delete</span></p>
                        </div>

                    </div>
                </div>

                {this.props.sneakers.map((item) => {
                    return <FormShoes
                        key={item.id}
                        updateSneaker={this.props.updateSneaker}
                        deleteSneaker={this.props.deleteSneaker}
                        item={item}
                    />
                })}
            </div>
        )
    }

}

export default Shoe