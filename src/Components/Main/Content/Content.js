import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="content">
                <main>{this.props.name}</main>
            </div>
        )
    }
}
