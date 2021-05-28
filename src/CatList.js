// write your CatList component here
import React from 'react';

class CatList extends React.Component {
    
    catImages = () => {
        return this.props.catPics.map( cat => <img src={cat.url} />)
    } 
    render() {

        return (
            <div>
                <h1>ALL THE CATS:</h1>
                {this.catImages()}
            </div>
        )
    }
}

export default CatList