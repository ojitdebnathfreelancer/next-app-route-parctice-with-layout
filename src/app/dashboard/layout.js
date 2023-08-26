import Sidebar from "@/components/shared/Sidebar";
import React from "react";

export const metadata = {
  title: "Dashboard",
  description: "This is my dashboard",
};

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-[25%]">
          <Sidebar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
