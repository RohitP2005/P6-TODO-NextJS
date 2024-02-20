"use client";
import { CiCirclePlus } from "react-icons/ci";
import Modal from "./Modal";
import { useState } from "react";

export default function InputField() {
  const [modalOpen,setModalOpen] = useState<boolean>(false);
  return (
    <>
    <div>
        <button className="btn btn-primary w-full" onClick={()=> setModalOpen(true)}>Add new Task<CiCirclePlus className="ml-2" size={18} /></button>
    </div>
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </>
  )
}
