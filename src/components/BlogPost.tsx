import { useEffect, useState } from 'react'

type Post = {
    title: string
    created_at: string
}

interface BlogPostProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function BlogPost({ className, ...props }: BlogPostProps) {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://portfolio-backend-production-1789.up.railway.app/post')
                const data = await response.json()
                const formattedPosts = data.map((post: { title: string; created_at: string }) => {
                    const date = new Date(post.created_at)
                    const formattedDate = date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })
                    return { title: post.title, created_at: formattedDate }
                })
                setPosts(formattedPosts)
            } catch (err) {
                console.error('Error fetching data:', err)
            }
        }
        fetchData()
    }, [])

    return (
        <div
            className={`col-span-4 row-span-2 bg-blue-100/70 rounded-2xl p-4 hover:shadow-lg transition-all animate-pop-up ${
                className || ''
            }`}
            {...props} // spread any additional props
        >
            <div className="mb-3">
                <h3 className="flex items-center font-semibold text-gray-800">
                    <span className="bg-pink-600 w-2 h-2 mr-2 rounded-full"></span> Current work / Blog
                </h3>
            </div>
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between bg-pink-100/70 rounded-lg p-2 hover:bg-pink-200/70 transition-all mb-2"
                    >
                        <h4 className="text-xs font-medium text-gray-800">{post.title}</h4>
                        <span className="text-xs text-gray-600">{post.created_at}</span>
                    </div>
                ))
            ) : (
                <div className="flex items-center justify-center p-4">
                    <p className="text-xs text-gray-600">No posts available</p>
                </div>
            )}
        </div>
    )
}

export default BlogPost;
