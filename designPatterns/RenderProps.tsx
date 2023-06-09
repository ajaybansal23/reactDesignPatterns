import React from "react";

const Modal: React.FC = ({ isOpen, onClose, renderContent }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
      {renderContent()}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Modal Example</h1>
      <Modal
        isOpen={true}
        onClose={() => console.log("Modal Closed")}
        renderContent={() => {
            return (
                <div>
                  <h2>My Modal Content</h2>
                  <p>This content will be displayed in the modal</p>
                </div>
              );
        }}
      />
    </div>
  );
}
