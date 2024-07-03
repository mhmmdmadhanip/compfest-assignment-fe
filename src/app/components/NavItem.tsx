'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  const router = useRouter();
 
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a 
    href={href} 
    onClick={handleClick}
    className={`text-lg relative nav-item before:content-[""] before:absolute
    before:bottom-[-2px] before:w-full before:h-[2px] before:bg-[#080808] before:scale-x-0 before:origin-bottom-right 
    before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-bottom-left`}
    >
    {children}
    </a>
  );
};

export default NavItem;