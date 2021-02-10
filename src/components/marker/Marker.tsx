import React from 'react';
import './Marker.css';
import activeMarker from '../../img/home_icon-active.svg';
import defaultMarker from '../../img/home_icon-default.svg';

interface Props {
  id: string,
  isMarkerClicked: string,
  active: boolean,
  cb: Function
  text: string,
  lat: number,
  lng: number
};

function Marker(props: Props) {
  return (
      <div onClick={() => props.cb(props.id)}>
        <img className={props.isMarkerClicked.length > 0 && props.active ? 'active' : 'inactive'}
             src={props.active ? activeMarker: defaultMarker}
             alt='Marker'/>
      </div>
  );
}

export default Marker;