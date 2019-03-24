import React, {Component} from 'react'

import FormShoes from './FormShoes'


class Shoes extends Component{
    constructor(){
        super()

        this.state = {
            brand: '',
            model: '',
            colorway: '',
            size: 0,
            retailPrice: 0,
            resalePrice: 0,
        }
    }


    handleChange= (e)=>{
        console.log(e.target.value)

        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    handleClick= () => {
        let shoe = this.state
        
        this.props.createSneaker(shoe)
    }




    render(){
        console.log(11111111,this.props.sneakers)

        return(
            <div>
                <div className="inputContainer">
                    <div className="firstInputRow">
                        
                        <input onChange={this.handleChange}
                                name="brand" 
                                placeholder="Brand" 
                                type="text"
                                autoComplete="off"
                           
                                />
                        <input onChange={this.handleChange}
                                name="model"
                                placeholder="Model" 
                                type="text"
                                autoComplete="off"
                                />

                        <input onChange={this.handleChange}
                                name="colorway"
                                placeholder="Colorway" 
                                type="text" 
                                autoComplete="off"
                                />
                    </div>
                    
                    <div className="secondInputRow">

                        <input onChange={this.handleChange}
                            name="size" 
                            placeholder="Size" 
                            type="number" 
                            min="1"
                            step=".5"

                            />
                        <input onChange={this.handleChange} 
                            name="retailPrice" 
                            placeholder="$ Retail" 
                            type="number" 
                            min="0"
                            step="10"
                            />
                        <input onChange={this.handleChange} 
                            name="resalePrice" 
                            placeholder="$ Resale " 
                            type="number" 
                            min="0"
                            step="10"
                            />
                    </div>
                    <button onClick={this.handleClick}><i className="fas fa-plus fa-2x"></i> <i className="fas fa-shoe-prints fa-2x"></i></button>
                </div>
                {this.props.sneakers.map((item)=> {
                    return <FormShoes
                                key={item.id}
                                updateSneaker = {this.props.updateSneaker}
                                deleteSneaker = {this.props.deleteSneaker}
                                item={item}
                    />
                })}
            </div>    
        )
    }

}

export default Shoes