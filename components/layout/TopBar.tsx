// 'use client';

// import { UserButton } from '@clerk/nextjs';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState, useEffect, useRef } from 'react';
// import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/navigation';
// import { MouseEvent } from 'react';
// import { Menu } from 'lucide-react';

// import { navLinks } from '@/lib/constants';

// const TopBar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const pathname = usePathname();
//   const router = useRouter();

//   const handleClickOutside = (event: MouseEvent) => {
//     if (
//       dropdownRef.current &&
//       !dropdownRef.current.contains(event.target as Node)
//     ) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     const handleMouseDown = (event: MouseEvent) => handleClickOutside(event);
//     document.addEventListener('mousedown', handleMouseDown);
//     return () => {
//       document.removeEventListener('mousedown', handleMouseDown);
//     };
//   }, []);

//   return (
//     <div
//       className="sticky top-0 z-20 w-full flex justify-between
//      items-center px-8 py-4 bg-blue-2 shadow-xl lg:hidden"
//     >
//       <Image src="/icon.png" alt="logo" width={150} height={70} />

//       <div className="flex gap-8 max-md:hidden">
//         {navLinks.map((link) => (
//           <Link
//             href={link.url}
//             key={link.label}
//             className={`flex gap-4 text-body-medium ${
//               pathname === link.url ? 'text-blue-1' : 'text-grey-1'
//             }`}
//           >
//             <p>{link.label}</p>
//           </Link>
//         ))}
//       </div>

//       <div ref={dropdownRef} className="relative flex gap-4 items-center">
//         <Menu
//           className="cursor-pointer md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         />
//         {isOpen && (
//           <div
//             className="absolute top-10 right-6 flex flex-col gap-8 p-5
//            bg-white shadow-xl rounded-lg"
//           >
//             {navLinks.map((link) => (
//               <Link
//                 href={link.url}
//                 key={link.label}
//                 className={`flex gap-4 text-body-medium ${
//                   link.url === pathname ? 'text-purple-1' : 'text-grey-1'
//                 }`}
//               >
//                 {link.icon} <p>{link.label}</p>
//               </Link>
//             ))}
//           </div>
//         )}
//         <UserButton />
//       </div>
//     </div>
//   );
// };

// export default TopBar;

'use client';

import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';

import { navLinks } from '@/lib/constants';

const TopBar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => handleClickOutside(event);
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false); // Close dropdown on pathname change
  }, [pathname]);

  return (
    <div
      className="sticky top-0 z-20 w-full flex justify-between
     items-center px-8 py-4 h-14 bg-blue-2 shadow-xl lg:hidden"
    >
      <Image src="/icon.png" alt="logo" width={150} height={70} />

      <div className="flex gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium hover:text-orange-1 ${
              pathname === link.url ? 'text-orange-1' : 'text-grey-1'
            }`}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div ref={dropdownRef} className="relative flex gap-4 items-center">
        <Menu
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div
            className="absolute top-10 right-6 flex flex-col gap-8 p-5
           bg-white shadow-xl rounded-lg"
          >
            {navLinks.map((link) => (
              <Link
                href={link.url}
                key={link.label}
                className={`flex gap-4 text-body-medium ${
                  link.url === pathname ? 'text-orange-1' : 'text-grey-1'
                }`}
              >
                {link.icon} <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
        <UserButton />
      </div>
    </div>
  );
};

export default TopBar;
