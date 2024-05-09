import React, { Component } from 'react';

class MessageTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        // Здесь вы можете выполнить запрос на сервер для получения сообщений с контроллеров
        // Например, используйте fetch или WebSocket для получения данных
        // Пока что просто создадим 50 случайных сообщений для примера
        const messages = [];
        for (let i = 1; i <= 50; i++) {
            messages.push({ id: i, text: `Сообщение ${i}` });
        }
        this.setState({ messages });
    }

    render() {
        return (
            <div>
                <h2>Таблица сообщений с контроллеров</h2>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Сообщение</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.messages.map(message => (
                        <tr key={message.id}>
                            <td>{message.id}</td>
                            <td>{message.text}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MessageTable;
