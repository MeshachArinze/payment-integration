import React from 'react'
import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../../context'
import sublinks from '../../Data'


const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar bg-navyBlue'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes className='text-lightOrange' size={20} />
        </button>
        <div className='sidebar-links'>
          {Object.assign(sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <div className="sidebar-sublinks text-lightOrange">
                  {links.map((link, index) => {
                    const { url, label } = link;
                    return (
                      <a className="text-lightOrange text-md" key={index} href={url}>
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          }))}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
