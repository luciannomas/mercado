import Link from 'next/link'
import { IoPersonOutline } from 'react-icons/io5'
import { FiBox } from "react-icons/fi";
import { BsInboxes } from "react-icons/bs";
import {  useUiStore } from "@/store";








export const AdminUserSidebar = () => {

const closeMenu = useUiStore((state) => state.closeSideMenu);
  return (
  <> 
    <Link
          href="/admin/products"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          onClick={closeMenu}
        >
          <FiBox  size={30} />
          <span className="ml-3 text-xl"> Productos </span>
        </Link>
        <Link
          href="/admin/orders"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          onClick={closeMenu}
        >
          <BsInboxes size={30} />
          <span className="ml-3 text-xl"> Ordenes </span>
        </Link>
        <Link
          href="/admin/users"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          onClick={closeMenu}
        >
          <IoPersonOutline size={30} />
          <span className="ml-3 text-xl"> Usuarios </span>
        </Link>
  </>
  )
}

