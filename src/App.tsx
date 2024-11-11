import Profile from './components/Profile';
import Abouts from './components/About';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import RecentWorks from './components/RecentWorks';
import Interest from './components/Interest';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-pink-50 p-4">
      <div className="h-full max-w-7xl mx-auto grid grid-cols-12 grid-rows-6 gap-3">

        <Profile/>

        <Abouts/>

        <Contacts/>

        <Skills/>

        <RecentWorks/>

        <Interest/>

        <BlogPost/>

      </div>
    </div>
  );
}

export default App;
