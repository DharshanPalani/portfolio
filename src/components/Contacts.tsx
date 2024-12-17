import React from 'react';

interface ContactsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Contacts({ className, ...props }: ContactsProps) {
    return (
        <div
            className={`col-span-3 row-span-2 bg-blue-100/70 rounded-2xl p-4 hover:shadow-lg transition-all animate-pop-up ${
                className || ''
            }`}
            {...props} // spread any additional props
        >
            <div className="mb-2">
                <h3 className="flex items-center font-semibold text-gray-800">
                    <span className="bg-pink-600 w-2 h-2 mr-2 rounded-full"></span> Connect
                </h3>
            </div>
            <div className="space-y-2">
                <a
                    href="https://github.com/DharshanPalani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700"
                >
                    <span className="bg-gray-800 w-2 h-2 mr-2 rounded-full"></span> github.com/DharshanPalani
                </a>
                <a
                    href="https://www.linkedin.com/in/dharshan-palani-b33653332/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700"
                >
                    <span className="bg-blue-600 w-2 h-2 mr-2 rounded-full"></span> in/dharshan-palani
                </a>
                <a
                    href="mailto:dharshan.contact@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-700"
                >
                    <span className="bg-red-600 w-2 h-2 mr-2 rounded-full"></span> dharshan.contact@gmail.com
                </a>
            </div>
        </div>
    );
}

export default Contacts;
