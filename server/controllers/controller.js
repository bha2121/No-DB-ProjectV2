let sneakies = [{
    brand: 'Nike',
    model: 'Airmax 90',
    colorway: 'Infrared',
    size: 8.5,
    retailPrice: 120,
    resalePrice: 220,
    id: 0
}]
let sneakerIndex = 1

module.exports = {

    getSneakers: (req, res) => {
        res.status(200).send(sneakies)
    },
    
    addSneakers: (req, res) => {
        let sneaker = req.body;
        sneaker.id = sneakerIndex++;
        sneakies.push(sneaker);
        res.send(sneakies);
    },

    editSneakers: (req, res) => {
        console.log(req.params)
        let foundSneaker = sneakies.find(sneaker => sneaker.id === req.body.id); 
        console.log(foundSneaker)
        
	    for (let key in req.body){
            foundSneaker[key] =req.body[key]
        }
        
        console.log(foundSneaker)
	    res.status(200).send(sneakies);
    },

    deleteSneakers: (req, res) => {
        let { id } = req.params

        let index = sneakies.findIndex(sneaker => Number(sneaker.id) === Number(id))
        sneakies.splice(index, 1)
        res.send(sneakies)
    }


}