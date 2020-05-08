import React, { Component } from 'react'


export default class Header extends React.Component {
constructor(props){
    super(props)
}
    render() {
        return (
            <div className="header">
                <h1>{this.props.name}</h1>
                
            </div>
        )
    }
}
