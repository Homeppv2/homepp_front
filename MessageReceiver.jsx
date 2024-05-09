import React, { Component } from 'react';
import WebSocket from 'react-websocket';

class MessageReceiver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    handleData(data) {
        const message = JSON.parse(data);
        this.setState(prevState => ({
            messages: [...prevState.messages, message]
        }));
    }

    render() {
        // Замените 'your_server_url' и 'your_user_id' на реальные значения
        const serverUrl = 'ws://your_server_url';
        const userId = 'your_user_id';
        const url = `${serverUrl}?id=${userId}`;

        return (
            <div>
                <h2>Получение сообщений по WebSocket с использованием ID</h2>
                <WebSocket url={url} onMessage={this.handleData.bind(this)} />
                <ul>
                    {this.state.messages.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default MessageReceiver;
