import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Editor from './Editor';

function Placeholder({ title }: { title: string }) {
  return <div style={{ padding: 16 }}><h2 className="text-xl font-semibold">{title}</h2><p className="muted">Coming soon</p></div>;
}

export default function AdminDashboard() {
  return (
    <div className="admin-container">
      <aside>
        <h3>Admin</h3>
        <nav>
          <Link to="">Posts</Link>
          <Link to="editor">New Post</Link>
          <Link to="media">Media</Link>
          <Link to="comments">Comments</Link>
          <Link to="domains">Domains</Link>
          <Link to="settings">Settings</Link>
        </nav>
      </aside>
      <section className="admin-main">
        <Routes>
          <Route index element={<Placeholder title="Posts" />} />
          <Route path="editor" element={<Editor />} />
          <Route path="media" element={<Placeholder title="Media" />} />
          <Route path="comments" element={<Placeholder title="Comments" />} />
          <Route path="domains" element={<Placeholder title="Domains" />} />
          <Route path="settings" element={<Placeholder title="Settings" />} />
        </Routes>
      </section>
    </div>
  );
}
