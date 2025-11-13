import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About, Ministries, Events, Stories } from "./components/Sections";
import JoinForm from "./components/JoinForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ministries />
        <Events />
        <Stories />
        <JoinForm />
      </main>
      <footer className="py-10 border-t border-black/5 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Cluster 1 Youth for Christ</p>
          <a href="#join" className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700">Get Connected</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
