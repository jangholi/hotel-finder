import React from 'react';
import Map from 'components/map/Map';
import DefaultLayout from '../src/layouts/default-layout'

class App extends React.Component {
    render() {
        return (
            <div>
                <DefaultLayout>
                    <Map />
                </DefaultLayout>
            </div>
        );
    }
}

export default App;