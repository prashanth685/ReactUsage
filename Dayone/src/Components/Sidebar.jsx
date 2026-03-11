import React, { useState } from "react";
import { GoSidebarCollapse } from "react-icons/go";
import "../index.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`min-h-95 mt-3 ml-2 bg-gray-100 transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <button
        onClick={toggleCollapse}
        className="p-2 m-2 bg-blue-500 text-white rounded"
      >
        <GoSidebarCollapse />
      </button>

      {!collapsed && (
        <div className="p-4">
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
          <p>Menu Item 3</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
