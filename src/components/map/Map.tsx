import React from 'react';
import './Map.css';
import GoogleMap from 'google-map-react';
import Marker from '../marker/Marker';
import Lane from '../lane/Lane';
import deepClone from 'lodash.clonedeep';
import {getMarkerData} from '../../apis/map'

interface State {
    hotels: Array<Hotel>,
    center: Center,
    bounds: Bounds,
    isMarkerClicked: string,
    prevMarkerId: string
}
interface Hotel {
    distance: number,
    title: string,
    icon: string,
    vicinity: string,
    type: string,
    href: string,
    id: string,
    position: Array<number>,
    active: boolean
}
interface Position {
    coords: Coords
}
interface Coords {
    latitude: number,
    longitude: number
}
interface Center {
    lat: number,
    lng: number
}
interface Bounds {
    top: string,
    right: string,
    bottom: string,
    left: string
}

class Map extends React.Component <any, State, Position> {
    constructor(props: any){
        super(props);
        this.state = {
            center: {
                lat: 52.520008,
                lng: 13.404954
            },
            bounds: {
                top:'',
                right:'',
                bottom: '',
                left: ''
            },
            hotels: [],
            isMarkerClicked: '',
            prevMarkerId: ''
        };
    }
    componentDidMount() {
        navigator
            .geolocation
            .getCurrentPosition(function(this: any, position: Position) {
                    this.setState({center: {lat: position.coords.latitude, lng: position.coords.longitude}})
            }.bind(this));
    }

    handleApiLoaded = (map: any, maps: any) => {

        this.setMapBounds(map);

        map.addListener('bounds_changed', function(this: any) {
            if (!this.state.isMarkerClicked) this.setMapBounds(map);
        }.bind(this));

        map.addListener('zoom_changed', function(this: any) {
            if (!this.state.isMarkerClicked) this.setMapBounds(map);
        }.bind(this));
    }

    setMapBounds = (map: any) => {

        const top = map.getBounds().getNorthEast().lat();
        const right = map.getBounds().getNorthEast().lng();
        const bottom = map.getBounds().getSouthWest().lat();
        const left = map.getBounds().getSouthWest().lng();

        var params = {
            apiKey: 'yJM5qjqhQ1HUFvfPa7ya8ft1eSt5OTDzwjd8dsw04ck',
            in: `${left},${bottom},${right},${top}`,
            cat: 'hotel'
        }
        getMarkerData(params)
            .then((res) => {
                const hotels:Array<Hotel> = deepClone(res.data?.results?.items);

                hotels
                    .sort((prev, next) => prev.distance > next.distance ? 1 : -1)
                    .forEach((hotel, index) => {
                        (this.state.isMarkerClicked.length === 0 && index === 0) || (this.state.isMarkerClicked.length > 0 && this.state.isMarkerClicked === hotel.id) ? hotel.active = true : hotel.active = false
                    });

                this.setState({hotels: hotels});
            })
    }

    handleMarkerClick = (id:string) => {
        let isMarkerClicked = '';

        if (!(this.state.prevMarkerId === id && this.state.isMarkerClicked.length > 0)) isMarkerClicked = id;

        const newState = deepClone(this.state);

        let hotels:Array<Hotel> = newState.hotels;

        hotels.forEach((hotel) => hotel.id === id ? hotel.active = true : hotel.active = false);

        this.setState({hotels: newState.hotels, prevMarkerId: id, isMarkerClicked: isMarkerClicked});
    }

    render() {
        return (
            <div className='map-holder'>
                <div className='map'>
                    <GoogleMap
                        bootstrapURLKeys={{ key: 'AIzaSyCzNiw-oILSDrSZK8-O3tyya9mMqeDH0AE' }}
                        center={{ lat: this.state.center.lat, lng: this.state.center.lng }}
                        zoom={14}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
                        options={{
                            disableDefaultUI: true
                        }}
                    >
                        {this.state.hotels.map((hotel) => (
                            <Marker
                                key={hotel.id}
                                text={hotel.title}
                                lat={hotel.position[0]}
                                lng={hotel.position[1]}
                                cb={this.handleMarkerClick}
                                id={hotel.id}
                                active={hotel.active}
                                isMarkerClicked={this.state.isMarkerClicked}
                            />
                        ))}
                    </GoogleMap>
                </div>
                <Lane hotels={this.state.hotels} />
            </div>
        );
    }
}

export default Map;