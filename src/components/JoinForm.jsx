import { useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function JoinForm() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    age: "",
    preferred_ministry: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", text: "Submitting..." });
    try {
      const res = await fetch(`${API_BASE}/api/interests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          age: form.age ? Number(form.age) : null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Something went wrong");
      setStatus({ type: "success", text: data.message || "Thanks!" });
      setForm({ full_name: "", email: "", phone: "", age: "", preferred_ministry: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", text: err.message });
    }
  };

  return (
    <section id="join" className="py-16 sm:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Say hello 👋</h2>
        <p className="text-gray-700 text-center mt-2">We'd love to help you get connected.</p>
        <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="full_name" value={form.full_name} onChange={update} placeholder="Full name" required className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input name="email" type="email" value={form.email} onChange={update} placeholder="Email" required className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <input name="phone" value={form.phone} onChange={update} placeholder="Phone (optional)" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input name="age" value={form.age} onChange={update} placeholder="Age (optional)" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input name="preferred_ministry" value={form.preferred_ministry} onChange={update} placeholder="Preferred ministry (optional)" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <textarea name="message" value={form.message} onChange={update} placeholder="Tell us about yourself (optional)" rows={4} className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <button disabled={status.type === "loading"} className="inline-flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-3 rounded-md shadow disabled:opacity-60">
            {status.type === "loading" ? "Sending..." : "Send my info"}
          </button>
          {status.type !== "idle" && (
            <p className={
              status.type === "success" ? "text-green-600" : status.type === "error" ? "text-red-600" : "text-gray-600"
            }>
              {status.text}
            </p>
          )}
          <p className="text-xs text-gray-500">We respect your privacy. We'll reach out only about getting connected to Cluster 1 YFC.</p>
        </form>
      </div>
    </section>
  );
}
