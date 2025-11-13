import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl bg-gradient-to-br from-indigo-200 via-pink-200 to-sky-200" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Welcome to Cluster 1 YFC</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Grow in faith, find family, and make a difference
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            We are a Christ-centered youth community that loves God, serves others, and has fun doing it. Whether you're new or looking for a place to belong, there's a spot for you here.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#join" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-md shadow">
              I'm Interested <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-5 py-3 rounded-md shadow border border-gray-200">
              Learn more
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-tr from-indigo-500 via-pink-500 to-sky-500 p-1 shadow-lg">
            <div className="h-full w-full rounded-2xl bg-white/90 grid grid-cols-2 gap-2 p-2">
              {["Worship", "Service", "Small Groups", "Camps", "Sports", "Music"].map((t) => (
                <div key={t} className="rounded-lg bg-gray-50 border border-gray-100 p-4 flex items-center justify-center text-sm font-semibold text-gray-700">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
