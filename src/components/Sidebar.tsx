import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Contact,
  FolderKanban,
  FileText,
  Banknote,
  Briefcase,
  CreditCard,
  Files,
  Settings,
  Circle,
  User,
} from 'lucide-react';
import SidebarMenuItem, { MenuItem } from './SidebarMenuItem';

// Define the menu structure based on your HTML
const menuItems: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/Home/Dashboard' },
  {
    id: 'client',
    label: 'Client',
    icon: Contact,
    children: [
      { id: 'clientList', label: 'Client List', icon: Circle, href: '/Client/ClientList' },
      { id: 'clientContactList', label: 'Client Contact List', icon: Circle, href: '/Client/ClientContactList' },
    ],
  },
  {
    id: 'project',
    label: 'Project',
    icon: FolderKanban,
    children: [
      { id: 'projectList', label: 'Project', icon: Circle, href: '/Project/ProjectList' },
      { id: 'lineItemList', label: 'Line Item', icon: Circle, href: '/Project/LineItemList' },
    ],
  },
  {
    id: 'invoice',
    label: 'Invoice(I/P/E)',
    icon: FileText,
    children: [
      { id: 'invoiceList', label: 'Invoice', icon: Circle, href: '/Invoice/InvoiceList' },
      { id: 'convertInvoice', label: 'Convert Invoice', icon: Circle, href: '/Invoice/ConvertInvoice' },
      { id: 'cancelInvoice', label: 'Cancelled Invoice', icon: Circle, href: '/Invoice/CancelInvoice' },
    ],
  },
  {
    id: 'amount',
    label: 'Amount',
    icon: Banknote,
    children: [
      { id: 'amountReceived', label: 'Amount Received', icon: Circle, href: '/Amount/AmountReceived' },
      { id: 'adjustmentList', label: 'Adjustment List', icon: Circle, href: '/Amount/AdjustmentList' },
      { id: 'creditNoteList', label: 'Credit Note List', icon: Circle, href: '/Amount/CreditNoteList' },
    ],
  },
  {
    id: 'vendor',
    label: 'Vendor',
    icon: Briefcase,
    children: [
      { id: 'vendorInvoice', label: 'Vendor Invoice', icon: Circle, href: '/Vendor/VendorInvoice' },
      { id: 'vendorPayment', label: 'Vendor Payment', icon: Circle, href: '/Vendor/VendorPayment' },
      { id: 'vendorAdjustmentList', label: 'Vendor Adjustment List', icon: Circle, href: '/Vendor/VendorAdjustmentList' },
    ],
  },
  { id: 'expense', label: 'Expense', icon: CreditCard, href: '/Expenses/ExpenseList' },
  { id: 'gstSubmission', label: 'GST Submission', icon: Files, href: '/Report/GstReport' },
  {
    id: 'report',
    label: 'Report',
    icon: FileText,
    children: [
      { id: 'ledgerReport', label: 'Ledger Report', icon: Circle, href: '/Report/LineItemLedgerReport' },
      { id: 'businessReport', label: 'Business Report', icon: Circle, href: '/Report/BusinessReport' },
      { id: 'gstReport', label: 'GST Report', icon: Circle, href: '/Report/SubmittedGstReport' },
      { id: 'paymentReport', label: 'Payment Report', icon: Circle, href: '/Report/PaymentReport' },
      { id: 'chequeBounceReport', label: 'ChequeBounce Report', icon: Circle, href: '/Report/ChequeBounceReport' },
      { id: 'outstandingReport', label: 'Outstanding Report', icon: Circle, href: '/Report/OutstandingReport' },
      { id: 'vendorPaymentReport', label: 'Vendor Payment Report', icon: Circle, href: '/Report/VendorPaymentReport' },
      { id: 'tdsReport', label: 'TDS Report', icon: Circle, href: '/Report/TDSReport' },
      { id: 'expenseReport', label: 'Expense Report', icon: Circle, href: '/Report/ExpenseReport' },
    ],
  },
  {
    id: 'setup',
    label: 'SetUp',
    icon: Settings,
    children: [
      { id: 'company', label: 'Company', icon: Circle, href: '/SetUp/Company' },
      { id: 'branch', label: 'Branch', icon: Circle, href: '/SetUp/Branch' },
      { id: 'department', label: 'Department', icon: Circle, href: '/SetUp/Department' },
      { id: 'role', label: 'Role', icon: Circle, href: '/SetUp/Role' },
      { id: 'user', label: 'User', icon: Circle, href: '/SetUp/UserList' },
      { id: 'assignAuthority', label: 'Assign Authority', icon: Circle, href: '/SetUp/AssignAuthority' },
      { id: 'bankMaster', label: 'Bank Master', icon: Circle, href: '/SetUp/BankMaster' },
      { id: 'financialYear', label: 'Financial Year', icon: Circle, href: '/SetUp/FinancialYear' },
      { id: 'publicationHouse', label: 'Publication House', icon: Circle, href: '/SetUp/PublicationHouse' },
      { id: 'publication', label: 'Publication', icon: Circle, href: '/SetUp/Publication' },
      { id: 'edition', label: 'Edition', icon: Circle, href: '/SetUp/Edition' },
      { id: 'page', label: 'Page', icon: Circle, href: '/SetUp/Page' },
      { id: 'size', label: 'Size', icon: Circle, href: '/SetUp/Size' },
      { id: 'recordType', label: 'Record Type', icon: Circle, href: '/SetUp/RecordType' },
      { id: 'projectType', label: 'Project Type', icon: Circle, href: '/SetUp/ProjectType' },
      { id: 'indoorOrOutdoor', label: 'Indoor Or Outdoor', icon: Circle, href: '/SetUp/IndoorOrOutdoor' },
      { id: 'platform', label: 'PlatForm', icon: Circle, href: '/SetUp/PlatForm' },
      { id: 'industry', label: 'Industry', icon: Circle, href: '/SetUp/Industry' },
      { id: 'subIndustry', label: 'Sub Industry', icon: Circle, href: '/SetUp/SubIndustry' },
      { id: 'expensesType', label: 'Expenses Type', icon: Circle, href: '/SetUp/ExpensesType' },
      { id: 'expensesCategory', label: 'Expenses Category', icon: Circle, href: '/SetUp/ExpensesCategory' },
      { id: 'gstMaster', label: 'GST Master', icon: Circle, href: '/SetUp/GSTMaster' },
      { id: 'termsCondition', label: 'Terms & Condition', icon: Circle, href: '/SetUp/TermsCondition' },
    ],
  },
];

interface SidebarProps {
  activeId: string;
  setActiveId: (id: string) => void;
}

export default function Sidebar({ activeId, setActiveId }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-white border-r border-gray-200 h-screen flex flex-col transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <h1 className="text-xl font-bold text-red-600 whitespace-nowrap">
            CRM System
          </h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          {collapsed ? (
            <ChevronRight size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </button>
      </div>

      {/* User Panel */}
      <div
        className={`flex items-center gap-3 p-4 border-b border-gray-200 ${
          collapsed ? 'justify-center' : ''
        }`}
      >
        <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0">
          <User size={24} className="text-gray-600 m-2" />
          {/* <img src="/Content/Img/Logo/default_user_logo.png" className="rounded-full" alt="User Image" /> */}
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <p className="font-semibold text-gray-800 text-sm truncate">
              SAdmin
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs text-gray-500">Online</span>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar Menu */}
      <nav className="flex-1 p-2 overflow-y-auto">
        {menuItems.map((item) => (
          <SidebarMenuItem
            key={item.id}
            item={item}
            activeId={activeId}
            setActiveId={setActiveId}
            collapsed={collapsed}
          />
        ))}
      </nav>
    </aside>
  );
}