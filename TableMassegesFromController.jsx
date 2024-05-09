import React, { Component } from 'react';

class MessageTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        // В реальном проекте здесь должен быть код для загрузки сообщений с сервера
        // Например, fetch запрос к вашему API
        // Пока что просто генерируем случайные сообщения для примера
        const messages = [];
        for (let i = 1; i <= 50; i++) {
            messages.push({ id: i, date: new Date().toLocaleString(), text: `Сообщение ${i}` });
        }
        this.setState({ messages });
    }

    render() {
        return (
            <div>
                <h1>Таблица сообщений</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Сообщение</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.messages.map(message => (
                        <tr key={message.id}>
                            <td>{message.date}</td>
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
