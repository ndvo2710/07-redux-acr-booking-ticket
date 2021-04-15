import React, { Component } from 'react'
import BookingInfo from '../BookingInfo/BookingInfo'
import './BookingTicket.css';
import seatArray from '../../data/seatData.json';
import SeatRow from '../SeatRow/SeatRow';

export default class BookingTicket extends Component {

    renderSeatRow = () => {
        return seatArray.map((seatRow, index) => {
            return <div key={index}>
                <SeatRow seatRow={seatRow} rowIndex={index} />
            </div>
        })
    }

    render() {
        return (
            <div
                className="bookingMovie"
                style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    backgroundImage: "url(./img/bgmovie.jpg)",
                    backgroundSize: "100%"
                }}
            >
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center">
                                <div className="display-4 text-warning">BOOKING MOVIE TICKET</div>
                                <div className="mt-3 text-light" style={{ fontSize: '25px' }}>Screen</div>
                                <div className="mt-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div className="screen"></div>
                                    {this.renderSeatRow()}
                                </div>
                            </div>
                            <div className="col-4">
                                <div style={{ fontSize: '35px' }} className="text-light">CHOOSE YOUR SEAT</div>
                                <BookingInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
