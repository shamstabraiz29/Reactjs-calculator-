import React, { Component } from 'react'

export default class Result extends Component {
    render() {
            const {result} = this.props;
        return (
            <div>
                <p className="result">{result}</p>
            </div>
        )
    }
}
