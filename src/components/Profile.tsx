function Profile() {
    return (
        <div className="col-span-4 row-span-2 bg-blue-100/70 rounded-2xl p-4 flex flex-col justify-center hover:shadow-lg transition-all animate-pop-up">
            <div className="flex items-center gap-4">
            <img 
                src="https://avatars.githubusercontent.com/u/121114000?v=4" 
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-pink-200"
            />
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Dharshan Palani</h1>
                <h2 className="text-sm text-blue-700">Full Stack Developer</h2>
            </div>
            </div>
        </div>
    )
}

export default Profile