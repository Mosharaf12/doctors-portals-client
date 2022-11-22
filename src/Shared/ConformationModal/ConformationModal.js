import React from 'react';

const ConformationModal = ({title, message, closeModal,
    successButtonName,
     modalData, successAction}) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label
                         onClick={()=> successAction(modalData)}
                          for="confirmation-modal" 
                          className="btn btn-primary">{successButtonName}</label>
                        <button onClick={closeModal} 
                        className='btn btn-accent'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConformationModal;