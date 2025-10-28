// src/components/ClientList.tsx
import React, { useState, useEffect } from 'react'; // Added React import
import {
  Plus,
  FileSpreadsheet,
  FileText,
  Search,
  ArrowUpDown,
  Eye,
  ChevronDown,
} from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import AddContactPersonModal from './AddContactPersonModal'; // Import the new modal

// --- Client Interface (No Changes) ---
interface Client {
  sno: number;
  type: 'Client' | 'Vendor';
  name: string;
  industry: string;
  subIndustry: string;
}

// --- Mock Data (No Changes) ---
const allClientData: Client[] = [
  // ... your existing client data ...
  {
    sno: 1,
    type: 'Client',
    name: 'DEVBHOOMI AUXILLARY SERVICES PRIVATE LIMITED',
    industry: 'Other',
    subIndustry: 'other',
  },
  {
    sno: 2,
    type: 'Vendor',
    name: 'Ansh Construction',
    industry: 'Other',
    subIndustry: 'other',
  },
  {
    sno: 3,
    type: 'Vendor',
    name: 'Guneesh',
    industry: 'Other',
    subIndustry: 'other',
  },
  {
    sno: 4,
    type: 'Client',
    name: 'M/s ACCENTOR ENTERPRISES',
    industry: 'Other',
    subIndustry: 'other',
  },
  {
    sno: 5,
    type: 'Vendor',
    name: 'Photo Care',
    industry: 'Retail',
    subIndustry: 'Electronics',
  },
  {
    sno: 6,
    type: 'Vendor',
    name: 'Ranvarsha',
    industry: 'Other',
    subIndustry: 'other',
  },
  {
    sno: 7,
    type: 'Client',
    name: 'Abhishek Traders',
    industry: 'Other',
    subIndustry: 'other',
  },
  {
    sno: 8,
    type: 'Client',
    name: 'Naveen Agencies',
    industry: 'Other',
    subIndustry: 'other',
  },
];

// --- Table Header Component (No Changes) ---
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
      {children !== 'Action' && (
        <ArrowUpDown size={14} className="text-gray-400" />
      )}
    </div>
  </th>
);

interface ClientListProps {
  onAddClient: () => void;
}

export default function ClientList({ onAddClient }: ClientListProps) {
  const [filterType, setFilterType] = useState<'all' | 'Client' | 'Vendor'>(
    'all'
  );
  const [displayedData, setDisplayedData] = useState<Client[]>(allClientData);

  // --- State for the Modal ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClientName, setSelectedClientName] = useState('');
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null); // Use number or string based on your data

  useEffect(() => {
    if (filterType === 'all') {
      setDisplayedData(allClientData);
    } else {
      setDisplayedData(allClientData.filter((item) => item.type === filterType));
    }
  }, [filterType]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value as 'all' | 'Client' | 'Vendor');
  };

  const handleExportExcel = () => {
    // ... (keep your existing excel export logic)
    const headers = [
      'S.No.',
      'Type',
      'Name',
      'Industry Name',
      'Sub Industry Name',
    ];
    const dataToExport = displayedData.map((client) => [
      client.sno,
      client.type,
      client.name,
      client.industry,
      client.subIndustry,
    ]);
    const ws = XLSX.utils.aoa_to_sheet([headers, ...dataToExport]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'ClientList');
    XLSX.writeFile(wb, 'ClientList.xlsx');
  };

  const handleExportPdf = () => {
    // ... (keep your existing PDF export logic - make sure it's the corrected version)
    const doc = new jsPDF();
    const autoTable = (doc as any).autoTable;
    const tableHeaders = [
      'S.No.',
      'Type',
      'Name',
      'Industry Name',
      'Sub Industry Name',
    ];
    const tableData = displayedData.map((client) => [
      client.sno,
      client.type,
      client.name,
      client.industry,
      client.subIndustry,
    ]);
    doc.text('Client List', 14, 15);
    autoTable({
      startY: 20,
      head: [tableHeaders],
      body: tableData,
      theme: 'grid',
      styles: { fontSize: 8 },
      headStyles: { fillColor: [220, 20, 60] },
    });
    doc.save('ClientList.pdf');
  };

  // --- Function to open the modal ---
  const handleOpenModal = (client: Client) => {
    setSelectedClientId(client.sno); // Use sno as ID for mock data
    setSelectedClientName(client.name);
    setIsModalOpen(true);
  };

  // --- Function to close the modal ---
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClientId(null);
    setSelectedClientName('');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      {/* Breadcrumbs and Actions (No changes needed in this section except button handlers) */}
      <div className="mb-4 text-sm text-gray-500">
        <span>Dashboard</span> /{' '}
        <span className="text-red-600 font-medium">Client List</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={onAddClient}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
          >
            <Plus size={18} />
            Add Client
          </button>
          <select
            value={filterType}
            onChange={handleFilterChange}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          >
            <option value="all">--Select--</option>
            <option value="Client">Client</option>
            <option value="Vendor">Vendor</option>
          </select>
          <button
            onClick={handleExportExcel}
            className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            <FileSpreadsheet size={16} />
            Excel
          </button>
          <button
            onClick={handleExportPdf}
            className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            <FileText size={16} />
            PDF
          </button>
        </div>
        <div className="relative">
          <label htmlFor="search" className="sr-only">Search</label>
          <input
            id="search"
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <TableHeader className="w-16">S.No.</TableHeader>
              <TableHeader>Type</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Industry Name</TableHeader>
              <TableHeader>Sub Industry Name</TableHeader>
              <TableHeader className="w-48">Action</TableHeader>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayedData.map((client) => (
              <tr key={client.sno} className="hover:bg-gray-50">
                {/* ... other table cells ... */}
                <td className="p-3 text-sm text-gray-700 border-r border-gray-200">{client.sno}</td>
                <td className="p-3 text-sm text-gray-700 font-bold border-r border-gray-200">{client.type}</td>
                <td className="p-3 text-sm font-medium text-gray-900 border-r border-gray-200">{client.name}</td>
                <td className="p-3 text-sm text-gray-700 border-r border-gray-200">{client.industry}</td>
                <td className="p-3 text-sm text-gray-700 border-r border-gray-200">{client.subIndustry}</td>

                {/* --- Updated Action Cell --- */}
                <td className="p-3 text-sm">
                  <div className="flex items-center gap-2">
                    {/* --- Orange Plus button now opens modal --- */}
                    <button
                      onClick={() => handleOpenModal(client)} // Call handler with client data
                      className="p-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors"
                      aria-label="Add Contact Person"
                    >
                      <Plus size={16} />
                    </button>
                    {/* Green Eye Button (no change) */}
                    <button
                      className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                      aria-label="View"
                    >
                      <Eye size={16} />
                    </button>
                    {/* Blue Action Dropdown (no change) */}
                    <button className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Action
                      <ChevronDown size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {displayedData.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center p-4 text-gray-500">
                  No clients found matching the filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* --- Render the Modal --- */}
      {/* Render the modal conditionally based on isModalOpen */}
      {/* Pass necessary props */}
      <AddContactPersonModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        clientName={selectedClientName}
        clientId={selectedClientId!} // Use ! because we know it's not null when modal is open
      />
    </div>
  );
}