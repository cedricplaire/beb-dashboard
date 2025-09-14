'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks({open}: {open: boolean}) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-800 p-3 text-sm font-medium hover:bg-sky-400 hover:text-blue-800 md:flex-none md:p-2 md:px-3',
              {
                'bg-sky-200 text-blue-800': pathname === link.href,
                'md:justify-center': open === false,
                'md:justify-start': open === true,
              },
            )}
            // className={`${open ? 'md:justify-start' : 'md:justify-center'} flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-800 p-3 text-sm font-medium hover:bg-sky-400 hover:text-blue-800 md:flex-none md:p-2 md:px-2`}
          >
            <LinkIcon className="w-6" />
            <p className={`${open ? 'block' : 'hidden'}`}>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
