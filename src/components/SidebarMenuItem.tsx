import { useState } from 'react';
import { ChevronDown, Circle, LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href?: string;
  children?: MenuItem[];
}

interface SidebarMenuItemProps {
  item: MenuItem;
  activeId: string;
  setActiveId: (id: string) => void;
  collapsed: boolean;
}

export default function SidebarMenuItem({
  item,
  activeId,
  setActiveId,
  collapsed,
}: SidebarMenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isTree = item.children && item.children.length > 0;
  const isActive =
    activeId === item.id ||
    (isTree && item.children?.some((child) => child.id === activeId));
  
  const handleClick = () => {
    if (isTree) {
      setIsOpen(!isOpen);
    }
    // If it's a top-level item without children, set it active
    if (!isTree) {
      setActiveId(item.id);
    }
  };

  const handleSubItemClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation(); // Prevent the parent from toggling
    setActiveId(id);
    // Add navigation logic here, e.g., router.push(item.href)
  };

  const effectiveIcon = item.icon || Circle;
  const Icon = effectiveIcon;

  if (isTree) {
    return (
      <div className="text-sm">
        <button
          onClick={handleClick}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg mb-1 transition-colors ${
            isActive
              ? 'bg-red-50 text-red-600'
              : 'text-gray-700 hover:bg-gray-50'
          } ${collapsed ? 'justify-center' : ''}`}
        >
          <div className="flex items-center gap-3">
            <Icon size={20} className="flex-shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </div>
          {!collapsed && (
            <ChevronDown
              size={16}
              className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          )}
        </button>
        {!collapsed && isOpen && (
          <ul className="pl-6 border-l border-gray-200 ml-3 my-1 space-y-1">
            {item.children?.map((child) => (
              <li key={child.id}>
                <button
                  onClick={(e) => handleSubItemClick(e, child.id)}
                  className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-md ${
                    activeId === child.id
                      ? 'font-medium text-red-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Circle size={8} className="fill-current" />
                  <span>{child.label}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors text-sm ${
        isActive
          ? 'bg-red-50 text-red-600'
          : 'text-gray-700 hover:bg-gray-50'
      } ${collapsed ? 'justify-center' : ''}`}
    >
      <Icon size={20} className="flex-shrink-0" />
      {!collapsed && <span>{item.label}</span>}
    </button>
  );
}