import React from 'react';
import './Card.css';
import Modal from '../modal/Modal'

interface Props {
    hotel: {
        id: string,
        title: string,
        distance: number,
        vicinity: string,
        active: boolean
    };
    toggleModal: (event: React.MouseEvent<HTMLButtonElement>) => void
};

function Card(Props: Props) {

    return (
        <div className='hotel_cards-item' key={Props.hotel.id}>
            <div className='hotel_card-content'>
                <div className='hotel_card-details'>
                    <div className='hotel_card-details--photo'>
                        <img src='https://via.placeholder.com/200x300' alt='Hotel'></img>
                    </div>
                    <div className='hotel_card-details--info'>
                        <h3 className='info_title'> {Props.hotel.title} </h3>
                        <p className='info_distance'>{(Props.hotel.distance/1000).toFixed(1)} km from the city center</p>
                        <p className='info_price'>${Math.floor(Math.random() * 90 + 10)}</p>
                        <p className='info_desc'>{Props.hotel.vicinity}</p>
                    </div>
                </div>
                <div className='hotel_card-control'>
                    <button className='card_button' onClick={Props.toggleModal}>Book</button>
                </div>
            </div>
        </div>
    );
}

export default Card;