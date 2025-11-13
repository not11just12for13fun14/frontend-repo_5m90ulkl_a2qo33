export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Who we are</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Cluster 1 Youth for Christ is a movement of young people anchored on Jesus and His mission. 
            We gather weekly to worship, study the Word, build friendships, and serve our city through outreach and creative initiatives.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Whether you're exploring faith or looking to grow deeper, you'll find mentors, friends, and opportunities to lead.
          </p>
        </div>
        <ul className="grid gap-4">
          {[
            { t: "Christ-centered", d: "Everything starts with Jesus—His love shapes our lives." },
            { t: "Community", d: "No one walks alone. We do life together." },
            { t: "Calling", d: "Discover your gifts and make an impact." },
          ].map((f) => (
            <li key={f.t} className="p-5 rounded-lg border border-gray-200 bg-gray-50">
              <div className="font-semibold text-gray-900">{f.t}</div>
              <div className="text-gray-700 text-sm mt-1">{f.d}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Ministries() {
  const data = [
    { title: "Worship Team", text: "Use your voice or instrument to lead people into God’s presence." },
    { title: "Creative Arts", text: "Design, photo, video, and social—tell stories that inspire." },
    { title: "Outreach", text: "Serve schools and communities through missions and mercy." },
    { title: "Small Groups", text: "Grow deeper in circles that feel like family." },
  ];
  return (
    <section id="ministries" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Find your place</h2>
        <p className="text-gray-700 text-center mt-2">There’s a team where your gifts can shine.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((c) => (
            <div key={c.title} className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
              <div className="font-semibold text-gray-900">{c.title}</div>
              <div className="text-gray-700 text-sm mt-2 leading-relaxed">{c.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Events() {
  const items = [
    { title: "Friday Youth Night", date: "Every Fri, 6:30 PM", place: "Cluster 1 Center" },
    { title: "Campus Hangouts", date: "Monthly", place: "Various schools" },
    { title: "Youth Camp", date: "This Summer", place: "Retreat site" },
  ];
  return (
    <section id="events" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">What’s happening</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {items.map((e) => (
            <div key={e.title} className="rounded-xl border border-gray-200 p-5">
              <div className="text-sm text-gray-600">{e.date} • {e.place}</div>
              <div className="font-semibold text-gray-900 mt-1">{e.title}</div>
              <a href="#join" className="inline-block mt-3 text-indigo-600 font-medium">I'm in →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stories() {
  const quotes = [
    {
      name: "Mia",
      text: "I found friends who became family, and Jesus became real to me.",
    },
    {
      name: "Ken",
      text: "Serving on the outreach team helped me discover my calling.",
    },
    {
      name: "Jules",
      text: "Small group nights are the highlight of my week!",
    },
  ];
  return (
    <section id="stories" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Stories of change</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
              <blockquote className="text-gray-800 leading-relaxed">“{q.text}”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">— {q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
