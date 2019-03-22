import React, { Component } from 'react'
import axios from 'axios'

import Shoes from './Shoes'



class Sneakers extends Component{
    constructor(){
        super()
        
        this.state = {
           sneakers: []
        }
    }

    
    componentDidMount(){
        axios.get('/api/sneakers').then(res =>{
            console.log(res.data)
            this.setState({
                sneakers: res.data
            })
        })
        .catch(err => console.log('We have a problem', err))
    }
    
    
    createSneaker = (sneaker) =>{
        axios.post(`/api/sneakers`, sneaker).then(res => {
            this.setState({
                sneakers: res.data
            })
        }).catch(err => {
            console.log('an error ocurred while adding a shoe:', err)
        })
    }
    
    
    
    updateSneaker = (sneaker) => {
        axios.put(`/api/sneakers/${sneaker.id}`, sneaker).then(res => {
            this.setState({
                sneakers: res.data
            })
        })
        .catch(err => console.log('UPDATE NOT WORKING', err))
    }


    
    deleteSneaker = (id) => {
        axios.delete(`/api/sneakers/${id}`).then(res => {
            this.setState({
                sneakers: res.data
            })
        })
        .catch(err => console.log('DELETE NOT WORKING', err))
    }





    render(){
        let {sneakers} = this.state
        console.log(this.state.sneakers)

        return(
            <div>
                <header>HEADER</header>
                <div>
                    <Shoes
                        sneakers={sneakers}
                        createSneaker = {this.createSneaker}
                        updateSneaker = {this.updateSneaker}
                        deleteSneaker = {this.deleteSneaker}
                        />
                </div>
            </div>



        )
    }
}


export default Sneakers