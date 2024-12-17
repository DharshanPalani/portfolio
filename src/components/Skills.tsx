import React from 'react';

interface SkillsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Skills({ className, ...props }: SkillsProps) {
    return (
        <div
            className={`col-span-4 row-span-2 bg-pink-100/70 rounded-2xl p-4 hover:shadow-lg transition-all animate-pop-up ${
                className || ''
            }`}
            {...props}
        >
            <div className="mb-2">
                <h3 className="flex items-center font-semibold text-gray-800">
                    <span className="bg-blue-700 w-2 h-2 mr-2 rounded-full"></span> Skills
                </h3>
            </div>
            <div className="flex flex-wrap gap-1">
                {['React', 'Javascript', 'Node.js', 'Bootstrap', 'MySQL', 'TailwindCSS'].map((skill) => (
                    <span key={skill} className="px-2 py-0.5 bg-blue-100/80 rounded-full text-xs text-gray-700">{skill}</span>
                ))}
            </div>
        </div>
    );
}

export default Skills;
