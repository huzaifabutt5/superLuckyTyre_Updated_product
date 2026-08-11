"use client";

import "./DeletedProduct.css";

export default function DeleteProduct({ onClose }) {
  return (
    <div className="delete-overlay">

      <div className="delete-modal">

        {/* Header */}
        <div className="delete-modal-header">
          <h2>Delete Record</h2>
        </div>

        {/* Message */}
        <div className="delete-modal-body">
          <p>
            Are you sure you want to delete this record?
            <br />
            You cannot undo this action.
          </p>
        </div>

        {/* Buttons */}
        <div className="delete-modal-buttons">

          <button
            type="button"
            className="delete-cancel-btn"
            onClick={onClose}
          >
            No, thanks!
          </button>

          <button
            type="button"
            className="delete-confirm-btn"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}