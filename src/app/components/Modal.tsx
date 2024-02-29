import React, { FormEventHandler, useState } from 'react';

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (isOpen: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
    const [newTask, setNewTask] = useState<string>('');

    const handleSubmitTask: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            // Send a POST request to the server
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ task: newTask }) // Convert the newTask value to JSON format and send it in the request body
            });

            if (!response.ok) {
                throw new Error('Failed to add task');
            }

            // Clear the newTask state after successful submission
            setNewTask('');
            
            // Close the modal
            setModalOpen(false);
        } catch (error) {
            console.error('Error adding task:', error);
            // Handle error, show error message to the user, etc.
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`}>
                <div className="modal-box">
                    <form onSubmit={handleSubmitTask}>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setModalOpen(false)}>✕</button>
                        <h3 className="font-bold text-lg">Add Your New Task Here</h3>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={newTask} onChange={e => setNewTask(e.target.value)} />
                        <button type='submit' className='btn'>Submit</button>
                    </form>
                    <p className="py-4">Click on ✕ button to close</p>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;
