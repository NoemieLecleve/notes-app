import React from 'react';
import ReactModal from 'react-modal'

import {createNote} from '../service/Api'


class EditModal extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      description: '',
      isOpen: false
    };
  }

  handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleOpenModal = () => {
        this.setState({isOpen: true})
  }

  handleCloseModal = () => {
    this.setState({isOpen: false})
}

 handleSubmit = (event) => {
     event.preventDefault()
     createNote(this.state)
    .then(() => console.log('La note a été ajoutée'))
}



  render() {
      const {title, description, isOpen} = this.state
    return (
        <div>
            <button onClick={this.handleOpenModal}>Open MODAL</button>
            <ReactModal isOpen={isOpen}>

            <form onSubmit={this.handleSubmit}>
                <label>Titre :</label>
                <input name = 'title' onChange={this.handleChange} value={title}/>
                <label>Description :</label>
                <input name ='description' onChange={this.handleChange} value={description}/>
                <button type='submit'>Ajouter</button>
            </form>
            <button onClick={this.handleCloseModal}>Close MODAL</button>
            
        </ReactModal>
        </div>
    )
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default EditModal;
