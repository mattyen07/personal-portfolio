import React, { Component } from 'react';
import NavigationBar from './NavigationBar'
import Homepage from './Homepage'


class Main extends Component {
    render() {
        return (
            <>
                <NavigationBar />
                <Homepage />
            </>
        )
    }
}

export default Main