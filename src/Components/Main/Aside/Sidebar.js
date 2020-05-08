import React, { Component } from 'react'

export default class Sidebar extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="aside">
                <aside>{this.props.name}</aside>
            </div>
        )
    }
}
