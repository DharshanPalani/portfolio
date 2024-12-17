import React, { Suspense } from 'react';

// Lazy Load Components for Performance
const Profile = React.lazy(() => import('./components/Profile'));
const Abouts = React.lazy(() => import('./components/About'));
const Contacts = React.lazy(() => import('./components/Contacts'));
const Skills = React.lazy(() => import('./components/Skills'));
const RecentWorks = React.lazy(() => import('./components/RecentWorks'));
const Interest = React.lazy(() => import('./components/Interest'));
const BlogPost = React.lazy(() => import('./components/BlogPost'));
const PlaceHolder = React.lazy(() => import('./components/PlaceHolder'));

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 p-4">
      <div className="h-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-3">

        <Suspense fallback={<div className="text-center col-span-12">Loading...</div>}>
          {/* Profile Component */}
          <Profile className="col-span-12 md:col-span-6 lg:col-span-4" />

          {/* Abouts Component */}
          <Abouts className="col-span-12 md:col-span-6 lg:col-span-4" />

          {/* Contacts Component */}
          <Contacts className="col-span-12 md:col-span-6 lg:col-span-4" />

          {/* Skills Component */}
          <Skills className="col-span-12 md:col-span-6 lg:col-span-4" />

          {/* Recent Works Component */}
          <RecentWorks className="col-span-12 md:col-span-6 lg:col-span-4" />

          {/* Interest Component */}
          <Interest className="col-span-12 md:col-span-6 lg:col-span-4" />

          {/* Blog Post Component */}
          <BlogPost className="col-span-12 md:col-span-6 lg:col-span-4" />

          {/* Placeholder Component */}
          <PlaceHolder className="col-span-12 md:col-span-6 lg:col-span-4" />
        </Suspense>

      </div>
    </div>
  );
}

export default App;
