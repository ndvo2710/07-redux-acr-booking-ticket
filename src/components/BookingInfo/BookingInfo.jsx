import React, { Component } from 'react'

export default class BookingInfo extends Component {
    render() {
        return (
            <div>
                <div className="mt-5">
                    <button className="chosenSeat"> </button> <span className="text-light" style={{ fontSize: '30px' }}>Chosen Seat: </span>
                    <br />
                    <button className="choosingSeat"> </button> <span className="text-light" style={{ fontSize: '30px' }}>Choosing Seat:</span>
                    <br />
                    <button className="seat" style={{ marginLeft: 0 }}> </button> <span className="text-light" style={{ fontSize: '30px' }}>Available Seat:</span>
                </div>

                <div className="mt-5">
                    <table className="table" border="2">
                        <thead>
                            <tr className="text-light" style={{ fontSize: 25 }}>
                                <th>Seat Number</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>seat number</th>
                                <th>price</th>
                                <th></th>
                            </tr><tr>
                                <th>seat number</th>
                                <th>price</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
