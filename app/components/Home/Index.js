/**
 * Created by khaip on 12/15/2015.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render() {
        return(
            <div>
                This is Homepage 123
                <Link to={`/user`}>Go to User's page</Link>
            </div>
        )
    }
}

export default Home;