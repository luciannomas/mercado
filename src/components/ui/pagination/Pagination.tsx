"use client"
import { generatePagination } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { IoChevronBack, IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props{
    totalPages: number
}

export const Pagination = ({totalPages }:Props) => {

    const pathname= usePathname();
    const searchParams= useSearchParams();

    const pageString= searchParams.get('page') ?? 1;

    const currunetPage= isNaN(+pageString) ? 1 : + pageString;

    if(currunetPage<1 || isNaN(+pageString)){
      redirect(pathname)
    }

  const allPages = generatePagination(currunetPage, totalPages)



    const createPageUrl= (pageNumber: number| string )=>{
        const params= new URLSearchParams(searchParams);
        if(pageNumber==='...'){
            return `${pathname}?${params.toString()}`
        }
        if(+pageNumber<=0){
            return `${pathname}`;
        }
        if(+pageNumber > totalPages){
            return `${pathname}?${params.toString()}`
        }
        params.set(`page`,pageNumber.toLocaleString())
        return `${pathname}?${params.toString()}`

    }

  return (
    <div className="flex  text-center justify-center mt-10 mb-32">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item ">
            <Link
              className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500  focus:shadow-none"
              href={createPageUrl(currunetPage-1)}
            >
              <IoChevronBackOutline/>
            </Link>
          </li>

          {
            allPages.map((page, index)=>(
              <li key={page} className="page-item">
              <Link
                className={
                  clsx(
                    "page-link relative block py-1.5 px-3  border-0  outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                    {
                      'bg-blue-500 shadow-sm text-white hover:text-white':page === currunetPage
                    }
                  )
                }
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
            ))
          }
        
        
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currunetPage+1)}
            >
             <IoChevronForwardOutline/>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
