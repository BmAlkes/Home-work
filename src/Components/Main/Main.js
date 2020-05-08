import React, { Component } from 'react'
import Sidebar from './Aside/Sidebar'
import Content from './Content/Content'

export default class Main extends Component {

    render() {
        return (
            <div className="Main">
                <Sidebar name="sidebar"></Sidebar>
                <Content name="Main"></Content>
            </div>
        )
    }
}
