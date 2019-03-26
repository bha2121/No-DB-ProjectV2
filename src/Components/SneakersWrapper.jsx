import React, { Component } from 'react'
import axios from 'axios'


import Shoe from './Shoe'

const shoePic = require('../pics/sneakernike-512.png')

class SneakersWrapper extends Component{
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
        .catch(err => console.log('Component DID NOT mount', err))
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
                <header>
                        <img src={shoePic} alt=""/>
                        <h1>Sneaker List</h1>

                        <div className="hamburger">
                            <i className="fas fa-bars fa-2x"></i>
                        </div>
                    
                </header>
                <main>
                    <Shoe
                        sneakers={sneakers}
                        createSneaker = {this.createSneaker}
                        updateSneaker = {this.updateSneaker}
                        deleteSneaker = {this.deleteSneaker}
                        />
                </main>
                
            </div>



        )
    }
}


export default SneakersWrapper