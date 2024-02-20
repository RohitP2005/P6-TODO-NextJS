"use client";
import React, { FormEventHandler, useState } from 'react';
import { addTask } from '@/api';

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (isOpen: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
    const [newTask, setNewTask] = useState<string>('');
    const handleSubmitTask: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Add a new task to the server
        await addTask({
            id: 3, // You may need to handle generating unique IDs
            data: newTask // Get the value of newTask from the component's state
        });

        console.log(newTask); // Log the new task text to the console
        setNewTask(""); // Clear the newTask state, presumably to reset the form input

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
