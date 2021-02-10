import React from "react";
import './Modal.css'

interface Props {
    show: boolean,
    toggle: () => void;
};

function FormModal(props: Props) {
    return (
        <div className="modal"  hidden={!props.show}>
            <form className="form-modal">
                <label htmlFor="txt" className='full-width'>
                    <b>Name</b>
                </label>
                <input type="text" placeholder="Enter Name" name="txt" required/>

                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input type="email" placeholder="Enter Email" name="email" required/>

                <label htmlFor="tel"><b>Phone</b></label>
                <input type="tel" placeholder="Enter Phone" name="tel" required/>

                <label htmlFor="date"><b>Check-in</b></label>
                <input type="date" placeholder="Enter Phone" name="date" required/>

                <label htmlFor="date"><b>Check-out</b></label>
                <input type="date" placeholder="Enter Phone" name="date" required/>

                <button type="submit" className='btn submit-form-btn'>Submit</button>
                <button type="button" className="btn close-form-btn" onClick={props.toggle}>Close</button>
            </form>
        </div>
    )
}

export default FormModal