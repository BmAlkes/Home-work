import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="footer">
                <footer>{this.props.name}
                <img src="./Logo bruno.png"></img>
                </footer>
                
            </div>
        )
    }
}
