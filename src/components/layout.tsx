import { ReactNode } from "react";
import Sidebar from "./sidebar";

const Layout = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-72">
        <Sidebar />
      </div>
      <div className="p-2 py-6 flex flex-col">
        <div className="text-2xl capitalize pb-4">{title}</div>
        <div className="flex w-full px-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
