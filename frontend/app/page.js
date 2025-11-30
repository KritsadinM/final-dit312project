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
        const res = await fetch(`${apiHost}/movies`);

        console.log("API_HOST =", apiHost);
        
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
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-purple-200 text-lg font-medium">Loading movies...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-8 max-w-md backdrop-blur-sm">
          <h2 className="text-red-400 text-xl font-bold mb-2">Error</h2>
          <p className="text-red-200">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Movies
          </h1>
          <p className="text-xl text-purple-200/80 font-light">
            หนังที่สุดในใจ
          </p>
          <div className="mt-6 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"></div>
        </header>

        {!rows || rows.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-purple-500/10 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <p className="text-purple-300 text-lg">No movies found.</p>
            </div>
          </div>
        ) : (
          <section 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" 
            aria-live="polite"
          >
            {rows.map((movie, index) => (
              <article
                key={movie.id}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                tabIndex={0}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {movie.coverimage && (
                  <div className="relative overflow-hidden aspect-[16/9] bg-slate-900">
                    <img
                      src={movie.coverimage}
                      alt={movie.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {movie.name}
                  </h3>
                  
                  {movie.detail && (
                    <p className="text-slate-300 mb-4 leading-relaxed line-clamp-3">
                      {movie.detail}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-mono text-xs">
                        {movie.latitude}, {movie.longitude}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}