// src/components/AddContactPersonModal.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import { X } from 'lucide-react';
import { FormInput } from './FormControls'; // Reuse your FormInput

// --- Props for the Modal ---
interface AddContactPersonModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  clientName: string; // To display which client we are adding to
  clientId: number; // Or string, depending on your actual ID type
}

// --- Style for the Modal ---
// You can customize this heavily with Tailwind or CSS
const customStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '0', // We'll add padding inside
    maxWidth: '500px', // Adjust width as needed
    width: '90%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dimmed background
    zIndex: 1000, // Ensure it's on top
  },
};

// Set the app element for accessibility (usually your root div)
Modal.setAppElement('#root');

const AddContactPersonModal: React.FC<AddContactPersonModalProps> = ({
  isOpen,
  onRequestClose,
  clientName,
  // clientId, // You'll use clientId to save the data
}) => {
  // State for form fields
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding contact person:', {
      // clientId, // Use this when saving
      clientName, // Just for logging here
      name,
      designation,
      mobile,
      email,
    });
    // Add logic here to save the contact person data (e.g., API call)

    // Clear form and close modal
    setName('');
    setDesignation('');
    setMobile('');
    setEmail('');
    onRequestClose();
  };

  // Handle closing without saving
  const handleClose = () => {
    // Clear form before closing
    setName('');
    setDesignation('');
    setMobile('');
    setEmail('');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose} // Use handleClose for overlay clicks, escape key etc.
      style={customStyles}
      contentLabel="Add Contact Person Modal"
    >
      {/* Modal Header */}
      <div className="flex justify-between items-center p-4 bg-red-600 text-white rounded-t-lg">
        <h2 className="text-lg font-semibold">
          Add Contact Person for {clientName}
        </h2>
        <button
          onClick={handleClose}
          className="p-1 rounded-full hover:bg-red-700"
        >
          <X size={20} />
        </button>
      </div>

      {/* Modal Body (Form) */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <FormInput
          label="Name"
          id="contactName"
          placeholder="Contact Person"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormInput
          label="Designation"
          id="contactDesignation"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <FormInput
          label="Mobile"
          id="contactMobile"
          placeholder="Mobile"
          type="tel" // Use tel type for mobile numbers
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <FormInput
          label="Email"
          id="contactEmail"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Modal Footer (Actions) */}
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm"
          >
            Close
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            Add
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddContactPersonModal;