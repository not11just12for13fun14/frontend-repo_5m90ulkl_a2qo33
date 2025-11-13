import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function PastEvents() {
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    async function load() {
      setStatus("loading");
      try {
        const res = await fetch(`${API_BASE}/api/events`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || "Failed to load events");
        if (!alive) return;
        setEvents(Array.isArray(data) ? data : []);
        setStatus("done");
      } catch (e) {
        setError(e.message);
        setStatus("error");
      }
    }
    load();
    return () => { alive = false; };
  }, []);

  const fallback = [
    {
      id: "e1",
      title: "Campus Outreach Day",
      date: "2024-04-12",
      location: "Local High School",
      description: "Prayed with students, shared testimonies, and invited them to youth night.",
      photos: [
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop",
      ],
    },
    {
      id: "e2",
      title: "Youth Camp",
      date: "2024-07-20",
      location: "Riverside Retreat",
      description: "Three days of worship, word, and wild games!",
      video: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
    },
    {
      id: "e3",
      title: "Community Service Weekend",
      date: "2024-10-05",
      location: "City Center",
      description: "Packed food kits and served families in need.",
      photos: [
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop",
      ],
    },
  ];

  const list = status === "done" && events.length > 0 ? events : fallback;

  return (
    <section id="past-events" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Past events</h2>
        <p className="text-gray-700 text-center mt-2">Here are a few things our youth have been part of recently.</p>

        {status === "error" && (
          <p className="text-center text-red-600 mt-4">{error}</p>
        )}

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {list.map((e) => (
            <article key={e.id} className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              {e.video ? (
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    src={e.video.includes("youtube") || e.video.includes("youtu.be") ?
                      (function(){
                        try{
                          const u=new URL(e.video);
                          if(u.hostname.includes("youtu.be")) return `https://www.youtube.com/embed/${u.pathname.replace("/","")}`;
                          const id=u.searchParams.get("v");
                          return id?`https://www.youtube.com/embed/${id}`:e.video;
                        }catch{return e.video}
                      })()
                    : e.video}
                    title={e.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : e.photos && e.photos.length > 0 ? (
                <img src={e.photos[0]} alt={e.title} className="w-full h-48 object-cover" />
              ) : null}
              <div className="p-5">
                <div className="text-sm text-gray-600">{e.date}{e.location ? ` • ${e.location}` : ""}</div>
                <h3 className="font-semibold text-gray-900 mt-1">{e.title}</h3>
                {e.description && <p className="text-sm text-gray-700 mt-2">{e.description}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
