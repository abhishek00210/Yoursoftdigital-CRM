// src/components/AddClient.tsx
import { Plus, Trash2 } from 'lucide-react';
import { FormInput, FormSelect, FormSection } from './FormControls';

interface AddClientProps {
  onCancel: () => void;
}

export default function AddClient({ onCancel }: AddClientProps) {
  // Handle form submission logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to create client goes here
    console.log('Client Created');
    onCancel(); // Go back to list after creation
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      {/* Breadcrumbs */}
      <div className="mb-4 text-sm text-gray-500">
        <span>Dashboard</span> / <span>Client List</span> /{' '}
        <span className="text-red-600 font-medium">Add Client</span>
      </div>

      {/* Form Sections */}
      <form onSubmit={handleSubmit}>
        <FormSection title="Client Information">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="md:col-span-1">
              <FormSelect label="Type" id="type" required>
                <option>Select Type</option>
                <option>Client</option>
                <option>Vendor</option>
              </FormSelect>
            </div>
            <div className="md:col-span-2">
              <FormInput
                label="Client Name"
                id="clientName"
                placeholder="Name"
                required
              />
            </div>
            <div className="md:col-span-1">
              <FormInput
                label="Phone"
                id="phone"
                placeholder="Phone"
                required
              />
            </div>
            <div className="md:col-span-1">
              <FormInput label="Website" id="website" placeholder="Website" />
            </div>
            <div className="md:col-span-1">
              <FormInput label="GST No." id="gst" placeholder="GST No." />
            </div>
            <div className="md:col-span-1">
              <FormInput
                label="State No."
                id="stateNo"
                placeholder="State No."
              />
            </div>
          </div>
        </FormSection>

        <FormSection
          title="Contact Person Information"
          action={
            <>
              <button
                type="button"
                className="p-1.5 bg-green-500 text-white rounded hover:bg-green-600"
              >
                <Plus size={18} />
              </button>
              <button
                type="button"
                className="p-1.5 bg-gray-700 text-white rounded hover:bg-gray-800"
              >
                <Trash2 size={18} />
              </button>
            </>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <FormInput label="Contact Person" id="contactPerson" />
            <FormInput label="Designation" id="designation" />
            <FormInput label="Contact No." id="contactNo" />
            <FormInput label="DOB" id="dob" type="date" />
            <FormInput label="Anniversary" id="anniversary" type="date" />
            <FormInput label="Email" id="email" type="email" />
          </div>
        </FormSection>

        <FormSection title="Billing Address Information">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <FormSelect label="Country" id="country" required>
              <option>India</option>
            </FormSelect>
            <FormSelect label="State/Province" id="state" required>
              <option>Select State</option>
            </FormSelect>
            <FormSelect label="City" id="city" required>
              <option>Select City</option>
            </FormSelect>
            <FormInput label="Postal Code" id="postalCode" placeholder="Zip" />
            <FormInput label="Street" id="street" placeholder="Street" />
          </div>
        </FormSection>

        <FormSection title="Additional Information">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <FormSelect label="Customer Priority" id="priority">
              <option>Select Client Priority</option>
            </FormSelect>
            <FormSelect label="Industry" id="industry" required>
              <option>Select Industry</option>
            </FormSelect>
            <FormSelect label="Sub Industry" id="subIndustry" required>
              <option>Select Sub Industry</option>
            </FormSelect>
            <FormSelect label="Client Source" id="source">
              <option>Select Client Source</option>
            </FormSelect>
            <FormInput label="Skype" id="skype" placeholder="http://" />
            <FormInput label="Twitter" id="twitter" placeholder="http://" />
            <FormInput label="Facebook" id="facebook" placeholder="http://" />
            <FormInput label="LinkedIn" id="linkedin" placeholder="http://" />
          </div>
        </FormSection>

        {/* Form Actions */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            type="reset"
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}