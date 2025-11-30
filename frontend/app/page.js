"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovies() {
      try {
        const apiHost = process.env.NEXT_PUBLIC_API_HOST;
        console.log("API_HOST =", apiHost);

        const res = await fetch(`${apiHost}/movies`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setRows(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, []);

  if (loading) {
    return (
      <main className="container">
        <div className="skeleton-grid">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="skeleton-card"></div>
            ))}
        </div>

        <style jsx>{`
          .skeleton-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 20px;
            padding: 20px;
          }
          .skeleton-card {
            height: 260px;
            background: linear-gradient(90deg, #eee, #ddd, #eee);
            border-radius: 12px;
            animation: pulse 1.6s infinite ease-in-out;
          }
          @keyframes pulse {
            0% { background-position: 0%; }
            100% { background-position: 200%; }
          }
        `}</style>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container">
        <div className="error-box">⚠ Error: {error}</div>

        <style jsx>{`
          .error-box {
            margin: 40px auto;
            padding: 20px 25px;
            border-radius: 10px;
            background: #ffe5e5;
            border: 1px solid #ffb2b2;
            color: #b10000;
            font-size: 18px;
            width: fit-content;
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="container">
      <header className="header">
        <h1 className="title">🎬 Movies</h1>
        <p className="subtitle">หนังที่สุดในใจ</p>
      </header>

      {!rows || rows.length === 0 ? (
        <div className="empty">No movies found.</div>
      ) : (
        <section className="grid">
          {rows.map((x) => (
            <article key={x.id} className="card">
              {x.coverimage && (
                <div className="media">
                  <img src={x.coverimage} alt={x.name} className="img" />
                </div>
              )}
              <div className="body">
                <h3 className="card-title">{x.name}</h3>
                {x.detail && <p className="detail">{x.detail}</p>}

                <div className="meta">
                  <small>
                    🎯 Lat: <span className="code">{x.latitude}</span> • Lng:
                    <span className="code"> {x.longitude}</span>
                  </small>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .title {
          font-size: 36px;
          font-weight: 700;
          color: #1a1a1a;
        }
        .subtitle {
          margin-top: 5px;
          font-size: 18px;
          color: #555;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 24px;
        }
        .card {
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
          transition: 0.25s ease;
          cursor: pointer;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }
        .media {
          width: 100%;
          height: 160px;
          overflow: hidden;
        }
        .img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          transition: 0.3s;
        }
        .card:hover .img {
          transform: scale(1.05);
        }
        .body {
          padding: 16px;
        }
        .card-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .detail {
          font-size: 14px;
          color: #444;
          height: 48px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .meta {
          margin-top: 10px;
          color: #666;
          font-size: 13px;
        }
        .empty {
          text-align: center;
          margin-top: 40px;
          font-size: 20px;
          color: #777;
        }
      `}</style>
    </main>
  );
}
