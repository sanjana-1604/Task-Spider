import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function UserDialogeBox(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Enter To-Do
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FloatingLabel
                    
                    label="Title"
                    className="mb-3"
                >
                    <Form.Control id='todo_title' size='lg' type="text" placeholder="Title" />
                </FloatingLabel>
                <FloatingLabel label="Description">
                    <Form.Control id='todo_description' className='Hero' type="text" placeholder="Description" />
                </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='dark' onClick={props.onHide}>Close</Button>
                <Button variant='primary' onClick={props.addItem}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}