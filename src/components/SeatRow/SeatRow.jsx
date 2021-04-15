import React, { Component } from 'react'

export default class SeatRow extends Component {

    renderSeat = () => {
        return this.props.seatRow.rowData.map((seat, index) => {
            let chosenSeatCss = '';
            let disabled = false;
            if (seat.isBooked) {
                chosenSeatCss = 'chosenSeat';
                disabled = true;
            }
            return <button onClick={() => {

            }} disabled={disabled} className={`seat ${chosenSeatCss}`} key={index}>
                {seat.seatNumber}
            </button>

        })
    }

    renderRowNumber = () => {
        return this.props.seatRow.rowData.map((seat, index) => {
            return <button className="rowNumber">
                {seat.seatNumber}
            </button>
        })
    }

    renderSeatRow = () => {
        if (this.props.rowIndex === 0) {
            return <div className="ml-4">
                {this.props.seatRow.rowName}
                {this.renderRowNumber()}
            </div>
        } else {
            return <div>
                {this.props.seatRow.rowName}
                {this.renderSeat()}
            </div>
        }

    }

    render() {
        return (
            <div className="text-light text-left ml-5 mt-1" style={{ fontSize: 30 }}>
                {this.renderSeatRow()}
            </div>
        )
    }
}
