import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd}) {
    const modal = useRef();

    const title = useRef();
    const descrpition = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = descrpition.current.value;
        const enteredDueDate = dueDate.current.value;

        //TODO validation ...
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            //show the error modal

            modal.current.open();
            return;
        }



        onAdd({
            title : enteredTitle,
            descrpition : enteredDescription,
            dueDate : enteredDueDate,
        });

    }

    return (
        <>
        <Modal ref={modal} buttonCaption="Okay" >
            <h2>Invalid Imput</h2>
            <p>Ooops ... looks like you forgot to enter a value.</p>
            <p>please make sure you  provide a valid value for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">
                        Cancel
                    </button>
                </li>
                <li>
                    <button
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={descrpition} label="Descrpition" isTextArea />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
        </>
    );
}
