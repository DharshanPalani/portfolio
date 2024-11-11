function RecentWorks() {
    return (
        <div className="col-span-4 row-span-4 bg-blue-100/70 rounded-2xl p-4 hover:shadow-lg transition-all animate-pop-up">
            <div className="mb-3">
                <h3 className="flex items-center font-semibold text-gray-800">
                <span className="bg-pink-600 w-2 h-2 mr-2 rounded-full"></span> Recent Work
                </h3>
            </div>
            <div className="space-y-3">
                {[
                { title: 'E-commerce website', desc: 'A simple front-end e-commerce site', tech: ['React', 'Node.js', 'Figma'], link: 'https://e-front-dharshan.vercel.app/' },
                { title: 'React terminal', desc: 'A web-based Linux terminal with basic functionality', tech: ['React', 'Node.js'], link: 'https://react-simple-terminal-ui.vercel.app/' }
                ].map((work) => (
                <a href={work.link} key={work.title} target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-col gap-2 bg-pink-100/70 rounded-lg p-3 hover:bg-pink-200/70 transition-all">
                    <div>
                        <h4 className="text-sm font-medium text-gray-800">{work.title}</h4>
                        <p className="text-xs text-gray-700">{work.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {work.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-blue-100/80 rounded-full text-xs text-gray-600">{t}</span>
                        ))}
                    </div>
                    </div>
                    <br></br>
                </a>
                ))}
            </div>
        </div>
    )
}


export default RecentWorks