import React, { Component } from 'react';
import { ArtistBio, Discography, Welcome }  from '../../components';

class Fan extends Component {
    render() {
        return (
            <main>
                <ArtistBio />
                <Discography />
                <Welcome />
            </main>
        )
    }
}

export default Fan;