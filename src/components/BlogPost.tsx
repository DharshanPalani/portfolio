function BlogPost() {
    return (
    <div className="col-span-4 row-span-2 bg-blue-100/70 rounded-2xl p-4 hover:shadow-lg transition-all animate-pop-up">
        <div className="mb-3">
        <h3 className="flex items-center font-semibold text-gray-800">
            <span className="bg-pink-600 w-2 h-2 mr-2 rounded-full"></span> Current work / Blog
        </h3>
        </div>
        <div className="flex items-center justify-between bg-pink-100/70 rounded-lg p-2 hover:bg-pink-200/70 transition-all">
        <h4 className="text-xs font-medium text-gray-800">Working on a portfolio for a photography company</h4>
        <span className="text-xs text-gray-600">Nov 9, 2024</span>
        </div>
    </div>
    )
}


export default BlogPost
