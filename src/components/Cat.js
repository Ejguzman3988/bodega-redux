import React, { Component } from 'react'

export class Cat extends Component {
    render() {
        return (
            <div id="cat" 
            style={{
                backgroundImage: this.props.hungry ? 
                'var(--cat-hungry)' : 'var(--cat-fed)'
            }}>
                
            </div>
        )
    }
}

export default Cat
