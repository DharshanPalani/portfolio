import React from 'react';

interface PlaceHolderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function PlaceHolder({ className, ...props }: PlaceHolderProps) {
    return (
        <div
            className={`col-span-4 row-span-2 bg-blue-100/70 rounded-2xl p-4 flex flex-col justify-center hover:shadow-lg transition-all animate-pop-up ${
                className || ''
            }`}
            {...props}
        >
            <div className="flex items-center gap-4">
                {/* Content goes here */}
            </div>
        </div>
    );
}

export default PlaceHolder;
