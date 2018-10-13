import React from 'react';
import { Container } from 'mdbreact';
import AppScreen from './appScreen';

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends React.Component {
    render() {
        return (
            <Container className="App">
                <AppScreen />
            </Container>
        );
    }
}

export default App;
