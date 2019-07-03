import React from 'react';
import './App.css';
import Chatkit from '@pusher/chatkit';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import { tokenURL, instanceLocator } from './config';
import { tsConstructorType } from '@babel/types/lib';


function App() {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }


  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'AwesomeDebs',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenURL
      })

    })

    chatManager.connect()
      .then(currentUser => {
        currentUser.subscribeToRoom({
          roomId: 21521023,
          messageLimit: 20,
          hooks: {
            onNewMessage: messgae => {
              console.log('message.text ', message.text);
              this.setState({
                message: [...this.state.messages, message]
              })
            }
          }
        })

      })
  }

  return (
    <div className="App">
      <RoomList />
      <MessageList />
      <SendMessageForm />
      <NewRoomForm />
    </div>
  );
}

export default App;
