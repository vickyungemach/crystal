/* eslint-disable */
import { useState } from 'react'
import Button from '../elements/Button';
import Modal from '../elements/Modal'

const ModalSection = () => {
   const [modal, setModal] = useState(false);

    return (
        <section id="modal">
            <Button onClick={() => setModal(true)}> Launch modal outside Modal Component </Button>
            <br />

            <Modal title="Controlled Modal" modal={modal} setModal={setModal} >
                <p className='my-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro blanditiis quidem ipsa ut vero, tempora possimus inventore omnis quam?
                </p>
            </Modal>

            <Modal title="Automatic Modal">
                <p className='my-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro blanditiis quidem ipsa ut vero, tempora possimus inventore omnis quam?
                </p>
            </Modal>
        </section>

    )
}

export default ModalSection;






