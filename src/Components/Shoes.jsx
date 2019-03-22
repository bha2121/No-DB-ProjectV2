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
                                placeholder="brand" 
                                type="text"
                                autoComplete="off"
                                value= {this.state.brand} 
                                />
                        <input onChange={this.handleChange}
                                name="model"
                                placeholder="model" 
                                type="text"
                                autoComplete="off"
                                />

                        <input onChange={this.handleChange}
                                name="colorway"
                                placeholder="colorway" 
                                type="text" 
                                autoComplete="off"
                                />
                    </div>
                    <div className="secondInputRow">
                        <input placeholder="size" type="number" name="size" onChange={this.handleChange} />
                        <input placeholder="$ Retail" type="number" name="retailPrice" onChange={this.handleChange} />
                        <input placeholder="$ Resale " type="number" name="resalePrice" onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleClick}> <i className="fas fa-shoe-prints fa-3x"></i></button>
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