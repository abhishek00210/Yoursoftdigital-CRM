// src/components/ClientContactList.tsx
import { Trash2, Edit3, ArrowUpDown } from 'lucide-react';

// Mock data based on the screenshot
const contactData = [
  {
    sno: 1,
    type: 'Client',
    client: 'Harsh Sharma',
    contactPerson: 'Harsh Sharma',
    designation: 'CEO',
    contactNo: '',
  },
  {
    sno: 2,
    type: 'Client',
    client: 'Harsh Sharma',
    contactPerson: 'Dr. venugopal jhanvar',
    designation: '',
    contactNo: '',
  },
  {
    sno: 3,
    type: 'Vendor',
    client: 'Hostinger',
    contactPerson: 'Rajesh',
    designation: '',
    contactNo: '',
  },
  {
    sno: 4,
    type: 'Vendor',
    client: 'Ashish Ent',
    contactPerson: 'Anurag Mohanti',
    designation: 'Deputy Director',
    contactNo: '',
  },
  {
    sno: 5,
    type: 'Client',
    client: 'Ravi Kumar',
    contactPerson: 'Ravi Kumar',
    designation: 'Residential',
    contactNo: '',
  },
  {
    sno: 6,
    type: 'Client',
    client: 'Ravi Kumar',
    contactPerson: 'Vinod',
    designation: '',
    contactNo: '',
  },
  {
    sno: 7,
    type: 'Client',
    client: 'EcoMall India',
    contactPerson: 'Mr. Vikas Malhotra',
    designation: '',
    contactNo: '',
  },
  {
    sno: 8,
    type: 'Client',
    client: 'She Creation',
    contactPerson: 'Hurria',
    designation: '',
    contactNo: '',
  },
  {
    sno: 9,
    type: 'Client',
    client: 'IAIT',
    contactPerson: 'Deepa',
    designation: 'Admin',
    contactNo: '',
  },
  {
    sno: 10,
    type: 'Client',
    client: 'IAIT',
    contactPerson: 'KK Verma',
    designation: 'Director',
    contactNo: '',
  },
];

// Reusable Table Header component (No changes needed here)
const TableHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <th
    className={`p-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider ${className}`}
  >
    <div className="flex items-center gap-1 cursor-pointer">
      {children}
      {/* Conditionally hide sort icon for Action column */}
      {children !== 'Action' && (
        <ArrowUpDown size={14} className="text-gray-400" />
      )}
    </div>
  </th>
);

export default function ClientContactList() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      {/* Breadcrumbs */}
      <div className="mb-4 text-sm text-gray-500">
        <span>Dashboard</span> /{' '}
        <span className="text-red-600 font-medium">Client Contact List</span>
      </div>

      {/* Header Bar */}
      <div className="bg-red-600 p-3 rounded-t-lg mb-4"> {/* Added mb-4 */}
        <h2 className="text-lg font-semibold text-white">Client Contact List</h2>
      </div>

      {/* Filters - Moved below header bar */}
      <div className="flex items-center gap-2 mb-6"> {/* Added mb-6 */}
        <label
          htmlFor="clientVendor"
          className="text-sm font-medium text-gray-700 whitespace-nowrap"
        >
          Client/Vendor
        </label>
        <select
          id="clientVendor"
          className="px-3 py-2 w-48 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
        >
          <option>--Select--</option>
          <option>Client</option>
          <option>Vendor</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200"> {/* Added border */}
          <thead className="bg-gray-50">
            <tr>
              <TableHeader className="w-16">S.No.</TableHeader>
              <TableHeader>Type</TableHeader>
              <TableHeader>Client</TableHeader>
              <TableHeader>Contact Person</TableHeader>
              <TableHeader>Designation</TableHeader>
              <TableHeader>Contact No</TableHeader>
              <TableHeader className="w-28">Action</TableHeader>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contactData.map((contact) => (
              <tr key={contact.sno} className="hover:bg-gray-50">
                <td className="p-3 text-sm text-gray-700 border-r border-gray-200">{contact.sno}</td> {/* Added border */}
                <td className="p-3 text-sm text-gray-700 font-bold border-r border-gray-200">{contact.type}</td> {/* Added border */}
                <td className="p-3 text-sm font-medium text-gray-900 border-r border-gray-200"> {/* Added border */}
                  {contact.client}
                </td>
                <td className="p-3 text-sm text-gray-700 border-r border-gray-200"> {/* Added border */}
                  {contact.contactPerson}
                </td>
                <td className="p-3 text-sm text-gray-700 border-r border-gray-200"> {/* Added border */}
                  {contact.designation}
                </td>
                <td className="p-3 text-sm text-gray-700 border-r border-gray-200"> {/* Added border */}
                  {contact.contactNo}
                </td>
                <td className="p-3 text-sm">
                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      aria-label="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                    <button
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      aria-label="Edit"
                    >
                      <Edit3 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}