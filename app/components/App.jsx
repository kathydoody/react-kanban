import React from 'react';
import uuid from 'node-uuid';
import Notes from './Notes';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      notes: [
        { id: uuid.v4(),
          task: 'Buy Bruins tickets'
        },
        { id: uuid.v4(),
          task: 'Make dinner reservations'
        },
        { id: uuid.v4(),
          task: 'Update resume'
        }
      ]
    }
  }
  render() {
  const notes = this.state.notes;
    return (
      <div>
      <button onClick={this.addNote}>+ Note</button>
        <Notes notes={notes} />
      </div>
    );
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4,
        task: 'Next task'
      }])
    });
  };
}
