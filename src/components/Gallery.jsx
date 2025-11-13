import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

function isVideo(url) {
  const u = String(url).toLowerCase();
  return u.includes("youtube.com") || u.includes("youtu.be") || u.includes("vimeo.com");
}

function VideoEmbed({ url, title }) {
  let embedUrl = url;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      embedUrl = `https://www.youtube.com/embed/${u.pathname.replace("/", "")}`;
    } else if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) embedUrl = `https://www.youtube.com/embed/${id}`;
    } else if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      if (id) embedUrl = `https://player.vimeo.com/video/${id}`;
    }
  } catch {}
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-gray-200 bg-black">
      <iframe
        src={embedUrl}
        title={title || "Video"}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    async function load() {
      setStatus("loading");
      try {
        const res = await fetch(`${API_BASE}/api/media`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || "Failed to load media");
        if (!alive) return;
        setItems(Array.isArray(data) ? data : []);
        setStatus("done");
      } catch (e) {
        setError(e.message);
        setStatus("error");
      }
    }
    load();
    return () => { alive = false; };
  }, []);

  // Fallback demo content if none yet
  const fallback = [
    { id: "f1", kind: "photo", url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600&auto=format&fit=crop", caption: "Worship night smiles" },
    { id: "f2", kind: "photo", url: "https://images.unsplash.com/photo-1529336953121-4e04f6e1a4bb?q=80&w=1600&auto=format&fit=crop", caption: "Serving the community" },
    { id: "f3", kind: "video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", caption: "Youth camp highlights" },
    { id: "f4", kind: "photo", url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop", caption: "Small group hangouts" },
  ];

  const content = status === "done" && items.length > 0 ? items : fallback;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Joyful moments</h2>
        <p className="text-gray-700 text-center mt-2">Photos and videos from worship, camps, and serving together.</p>
        {status === "error" && (
          <p className="text-center text-red-600 mt-4">{error}</p>
        )}
        <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {content.map((m) => (
            <figure key={m.id || m.url} className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
              {m.kind === "video" || isVideo(m.url) ? (
                <VideoEmbed url={m.url} title={m.caption} />
              ) : (
                <img src={m.url} alt={m.caption || "Joyful moment"} className="w-full h-56 object-cover"/>
              )}
              {m.caption && (
                <figcaption className="px-4 py-3 text-sm text-gray-700">{m.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
