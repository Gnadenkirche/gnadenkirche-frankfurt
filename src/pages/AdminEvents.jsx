// src/pages/AdminEvents.jsx
import React, { useEffect, useState } from "react";

const STORAGE_KEY = "erb_events";

function loadEventsAdmin() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function AdminEvents() {
  const [events, setEvents] = useState(() => loadEventsAdmin());
  const [form, setForm] = useState({
    date: "",
    title: "",
    description: "",
    location: "",
    image: "",
  });

  useEffect(() => {
    // Keep local copy in sync if needed
    setEvents(loadEventsAdmin());
  }, []);

  const saveEvents = (newEvents) => {
    setEvents(newEvents);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newEvents));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.title) return;

    const newEvent = { ...form };
    const updated = [...events, newEvent];
    saveEvents(updated);

    setForm({
      date: "",
      title: "",
      description: "",
      location: "",
      image: "",
    });
  };

  const handleDelete = (index) => {
    const updated = events.filter((_, i) => i !== index);
    saveEvents(updated);
  };

  return (
    <div className="page page-admin-events">
      <section className="page-inner">
        <h2>Admin – Events</h2>
        <p className="section-intro">
          Add or remove events. These are stored in your browser&apos;s localStorage and
          will appear on the Upcoming Events page.
        </p>

        <form className="admin-events-form" onSubmit={handleSubmit}>
          <div className="admin-field">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="admin-field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="admin-field">
            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div className="admin-field">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
            />
          </div>

          <div className="admin-field">
            <label>Image (optional)</label>
            <input
              type="text"
              name="image"
              placeholder="/events/my-image.jpg or https://..."
              value={form.image}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Event
          </button>
        </form>

        <div className="admin-events-list">
          <h3>Current Events ({events.length})</h3>
          {events.length === 0 && <p>No custom events stored yet.</p>}

          {events.map((ev, index) => (
            <div key={index} className="admin-event-row">
              <div>
                <strong>{ev.title}</strong> – {ev.date} ({ev.location || "no location"})
              </div>
              <button
                type="button"
                className="btn btn-outline btn-small"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AdminEvents;

