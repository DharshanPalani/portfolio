import React from 'react';

interface InterestProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Interest({ className, ...props }: InterestProps) {
    return (
        <div
            className={`col-span-4 row-span-2 bg-pink-100/70 rounded-2xl p-4 hover:shadow-lg transition-all animate-pop-up ${
                className || ''
            }`}
            {...props}
        >
            <div className="mb-2">
                <h3 className="flex items-center font-semibold text-gray-800">
                    <span className="bg-blue-700 w-2 h-2 mr-2 rounded-full"></span> Interests
                </h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {[
                    { name: 'Game Dev', image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=300&h=150&fit=crop' },
                    { name: 'Web dev', image: 'https://fiverr-res.cloudinary.com/image/upload/w_880/f_auto,q_auto/v1/attachments/generic_asset/asset/767bc10a0c44b0a67be1a94aea270205-1609336032121/website%20development-min.jpg' },
                    { name: 'Story writing', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d3JpdGluZyUyMGElMjBzdG9yeXxlbnwwfHwwfHx8MA%3D%3D' },
                    { name: 'Manga making', image: 'https://heiseihi.wordpress.com/wp-content/uploads/2017/04/100_8077-600-min.jpg' }
                ].map((interest) => (
                    <div key={interest.name} className="relative h-16 rounded-lg overflow-hidden group">
                        <img src={interest.image} alt={interest.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                            <span className="text-xs font-medium text-white">{interest.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Interest;
