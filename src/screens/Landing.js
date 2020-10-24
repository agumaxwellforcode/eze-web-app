import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Main  from '../components/Main'

export default class Landing extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                
                <Main />
            </div>
        )
    }
}
