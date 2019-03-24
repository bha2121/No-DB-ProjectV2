import React from 'react'

function GainLoss(props){
    let gain = props.sneakers.map(el =>{
       for(let key in el){
           if (key === "retailPrice"){
                for(let key2 in el){
                    if (key2 === 'resalePrice'){
                        return (el[key2] -el[key])*1
                    }
                }
           }
           
       }
       return gain
    })
    
    console.log(gain)
    let gL = gain.reduce((total, num)=> total+num,0)
    
    return gL >= 0 ?(
    <div className="gainLossPositive">
        <div>
            <div className="gainP">
                <i className="fas fa-chart-bar "></i> 
            </div>
            <p>Gain/Loss</p>    
        </div>
        <div className="profitP">
            <p>+</p>
            <i className="fas fa-dollar-sign"></i>
            <p>{gL}</p>
        </div>

    </div>
    ) : (
    <div className="gainLossNegative">
        <div>
            <div className="gainN">
                <i className="fas fa-chart-bar "></i> 
            </div>
            <p>Gain/Loss</p>    
        </div>
        <div className="profitN">
            
            <i className="fas fa-dollar-sign"></i>
            <p>{gL}</p>
        </div>

    </div>
    )
}



export default GainLoss