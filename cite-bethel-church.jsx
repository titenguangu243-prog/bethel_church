import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Video, Music, LogOut, Menu, X, Edit2, Trash2, Plus } from 'lucide-react';

export default function CiteBethelChurch() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Admin Data Management
  const [news, setNews] = useState([
    { id: 1, title: 'Bienvenue à Cité Bethel', content: 'Rejoignez-nous chaque dimanche pour une expérience spirituelle transformatrice', date: '2026-06-15', image: 'https://via.placeholder.com/400x250?text=Culte+Dimanche' },
    { id: 2, title: 'Séminaire Spirituel', content: 'Participer à notre séminaire mensuel sur les principes bibliques', date: '2026-06-10', image: 'https://via.placeholder.com/400x250?text=Seminaire' }
  ]);
  
  const [videos, setVideos] = useState([
    { id: 1, title: 'Prédication du Pasteur Moïse - Dimanche dernier', youtubeId: 'dQw4w9WgXcQ', date: '2026-06-14' },
    { id: 2, title: 'Musique de louange - Cité Bethel', youtubeId: 'dQw4w9WgXcQ', date: '2026-06-10' }
  ]);
  
  const [liveStreams, setLiveStreams] = useState([
    { id: 1, title: 'Culte du dimanche 7h30', isLive: false, schedule: 'Chaque dimanche 7h30', streamUrl: 'https://youtube.com/embed/live_stream' },
    { id: 2, title: 'Culte du dimanche 11h30', isLive: false, schedule: 'Chaque dimanche 11h30', streamUrl: 'https://youtube.com/embed/live_stream' },
    { id: 3, title: 'Culte du dimanche 16h', isLive: false, schedule: 'Chaque dimanche 16h', streamUrl: 'https://youtube.com/embed/live_stream' }
  ]);
  
  const [newArticle, setNewArticle] = useState({ title: '', content: '', image: '' });
  const [newVideo, setNewVideo] = useState({ title: '', youtubeId: '' });
  const [editingItem, setEditingItem] = useState(null);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === 'admin123') {
      setIsAdmin(true);
      setAdminPassword('');
    } else {
      alert('Mot de passe incorrect');
    }
  };

  const handleAddNews = () => {
    if (newArticle.title && newArticle.content) {
      setNews([...news, {
        id: Math.max(...news.map(n => n.id), 0) + 1,
        title: newArticle.title,
        content: newArticle.content,
        date: new Date().toISOString().split('T')[0],
        image: newArticle.image || 'https://via.placeholder.com/400x250?text=Actualité'
      }]);
      setNewArticle({ title: '', content: '', image: '' });
    }
  };

  const handleAddVideo = () => {
    if (newVideo.title && newVideo.youtubeId) {
      setVideos([...videos, {
        id: Math.max(...videos.map(v => v.id), 0) + 1,
        title: newVideo.title,
        youtubeId: newVideo.youtubeId,
        date: new Date().toISOString().split('T')[0]
      }]);
      setNewVideo({ title: '', youtubeId: '' });
    }
  };

  const handleDeleteNews = (id) => {
    setNews(news.filter(n => n.id !== id));
  };

  const handleDeleteVideo = (id) => {
    setVideos(videos.filter(v => v.id !== id));
  };

  // ===== HOME PAGE =====
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center text-white px-4 pt-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl">
          <div className="mb-8 text-6xl md:text-7xl font-bold drop-shadow-lg">✝️</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">CITÉ BETHEL</h1>
          <p className="text-2xl md:text-3xl mb-8 drop-shadow-lg font-light">« C'est ici la maison de Dieu »</p>
          <p className="text-xl mb-12 drop-shadow-lg max-w-2xl mx-auto">Église Assemblée Centrale du Pasteur Moïse Mbiye - Kinshasa, RDC</p>
          <button 
            onClick={() => setCurrentPage('cultes')}
            className="bg-gold-500 hover:bg-gold-600 text-blue-900 font-bold py-3 px-8 rounded-lg text-lg transition transform hover:scale-105"
          >
            Rejoindre un culte
          </button>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Notre Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-purple-600">
              <Music className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Adoration & Louange</h3>
              <p className="text-gray-700">Transformer les cœurs par la puissance de l'adoration et la communion spirituelle authentique.</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg border-l-4 border-blue-600">
              <Heart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Discipulat & Enseignement</h3>
              <p className="text-gray-700">Former des générations de disciples impactant positivement leur environnement selon les principes bibliques.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pasteur Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Le Pasteur Moïse Mbiye</h2>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/20">
            <p className="text-lg mb-6">Représentant légal de la Communauté Cité Bethel depuis 2021, le Pasteur Moïse Mbiye est un musicien chrétien renommé et prédicateur inspirant.</p>
            <p className="text-lg mb-6">Sous sa direction spirituelle, Cité Bethel compte 1190 assemblées à travers la RDC et le monde, touchant des millions de âmes.</p>
            <p className="text-lg italic">« L'église Cité Bethel représente ma vie » - Pasteur Moïse Mbiye</p>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Actualités</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {news.slice(0, 2).map(article => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-purple-600 font-semibold mb-2">{article.date}</p>
                  <h3 className="text-2xl font-bold mb-3 text-blue-900">{article.title}</h3>
                  <p className="text-gray-700">{article.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Rejoignez-nous!</h2>
          <p className="text-xl mb-8">Trois services chaque dimanche: 7h30 | 11h30 | 16h00</p>
          <button 
            onClick={() => setCurrentPage('cultes')}
            className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
          >
            Voir les horaires en direct
          </button>
        </div>
      </div>
    </div>
  );

  // ===== CULTES PAGE =====
  const CultesPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 pt-24">
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <h1 className="text-5xl font-bold text-white mb-12">Cultes en Direct</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {liveStreams.map(stream => (
            <div key={stream.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-3 h-3 rounded-full ${stream.isLive ? 'bg-red-500 animate-pulse' : 'bg-gray-400'}`}></div>
                  <span className="text-white font-semibold">{stream.isLive ? 'EN DIRECT' : 'À venir'}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{stream.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4"><Calendar className="inline mr-2 w-5 h-5" /> {stream.schedule}</p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition">
                  Regarder en direct
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Videos Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-white mb-8">Vidéos Récentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.slice(0, 4).map(video => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="250"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  frameBorder="0"
                  allowFullScreen
                  title={video.title}
                  className="w-full"
                ></iframe>
                <div className="p-4">
                  <p className="text-purple-600 text-sm mb-2">{video.date}</p>
                  <h3 className="font-bold text-blue-900">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // ===== ADMIN PAGE =====
  const AdminPage = () => (
    <div className="min-h-screen bg-gray-100 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900">Panneau Admin</h1>
          <button 
            onClick={() => setIsAdmin(false)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
          >
            <LogOut className="w-5 h-5" /> Déconnexion
          </button>
        </div>

        {/* News Management */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Gérer les Actualités</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8 border-2 border-blue-200">
            <h3 className="font-bold text-lg mb-4">Ajouter une nouvelle actualité</h3>
            <input
              type="text"
              placeholder="Titre"
              value={newArticle.title}
              onChange={(e) => setNewArticle({...newArticle, title: e.target.value})}
              className="w-full mb-3 p-3 border rounded"
            />
            <textarea
              placeholder="Contenu"
              value={newArticle.content}
              onChange={(e) => setNewArticle({...newArticle, content: e.target.value})}
              className="w-full mb-3 p-3 border rounded h-24"
            />
            <input
              type="text"
              placeholder="URL de l'image (optionnel)"
              value={newArticle.image}
              onChange={(e) => setNewArticle({...newArticle, image: e.target.value})}
              className="w-full mb-3 p-3 border rounded"
            />
            <button 
              onClick={handleAddNews}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition"
            >
              <Plus className="w-5 h-5" /> Ajouter
            </button>
          </div>

          <div className="space-y-4">
            {news.map(article => (
              <div key={article.id} className="flex justify-between items-start bg-gray-50 p-4 rounded border">
                <div className="flex-1">
                  <h4 className="font-bold text-blue-900">{article.title}</h4>
                  <p className="text-sm text-gray-600">{article.content.substring(0, 100)}...</p>
                  <p className="text-xs text-gray-500 mt-2">{article.date}</p>
                </div>
                <button 
                  onClick={() => handleDeleteNews(article.id)}
                  className="ml-4 text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Videos Management */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Gérer les Vidéos</h2>
          
          <div className="bg-purple-50 p-6 rounded-lg mb-8 border-2 border-purple-200">
            <h3 className="font-bold text-lg mb-4">Ajouter une vidéo YouTube</h3>
            <input
              type="text"
              placeholder="Titre de la vidéo"
              value={newVideo.title}
              onChange={(e) => setNewVideo({...newVideo, title: e.target.value})}
              className="w-full mb-3 p-3 border rounded"
            />
            <input
              type="text"
              placeholder="ID YouTube (exemple: dQw4w9WgXcQ)"
              value={newVideo.youtubeId}
              onChange={(e) => setNewVideo({...newVideo, youtubeId: e.target.value})}
              className="w-full mb-3 p-3 border rounded"
            />
            <button 
              onClick={handleAddVideo}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition"
            >
              <Plus className="w-5 h-5" /> Ajouter une vidéo
            </button>
          </div>

          <div className="space-y-4">
            {videos.map(video => (
              <div key={video.id} className="flex justify-between items-center bg-gray-50 p-4 rounded border">
                <div>
                  <h4 className="font-bold text-blue-900">{video.title}</h4>
                  <p className="text-sm text-gray-600">{video.date}</p>
                </div>
                <button 
                  onClick={() => handleDeleteVideo(video.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // ===== LOGIN PAGE =====
  const LoginPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 flex items-center justify-center pt-24">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">Accès Admin</h1>
        <form onSubmit={handleAdminLogin}>
          <input
            type="password"
            placeholder="Mot de passe"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            className="w-full mb-6 p-4 border-2 border-blue-200 rounded focus:outline-none focus:border-blue-600"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition"
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-900 to-purple-900 text-white shadow-2xl z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center gap-2">
            <div className="text-3xl">✝️</div> CITÉ BETHEL
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`font-semibold transition ${currentPage === 'home' ? 'text-yellow-300' : 'hover:text-yellow-300'}`}
            >
              Accueil
            </button>
            <button 
              onClick={() => setCurrentPage('cultes')}
              className={`font-semibold transition ${currentPage === 'cultes' ? 'text-yellow-300' : 'hover:text-yellow-300'}`}
            >
              Cultes en Direct
            </button>
            <button 
              onClick={() => setCurrentPage('login')}
              className={`font-semibold transition ${currentPage === 'login' ? 'text-yellow-300' : 'hover:text-yellow-300'}`}
            >
              Admin
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-800 p-4 space-y-2">
            <button 
              onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
              className="block w-full text-left p-2 hover:bg-blue-700 rounded"
            >
              Accueil
            </button>
            <button 
              onClick={() => { setCurrentPage('cultes'); setMobileMenuOpen(false); }}
              className="block w-full text-left p-2 hover:bg-blue-700 rounded"
            >
              Cultes en Direct
            </button>
            <button 
              onClick={() => { setCurrentPage('login'); setMobileMenuOpen(false); }}
              className="block w-full text-left p-2 hover:bg-blue-700 rounded"
            >
              Admin
            </button>
          </div>
        )}
      </nav>

      {/* Page Content */}
      {!isAdmin && currentPage === 'home' && <HomePage />}
      {!isAdmin && currentPage === 'cultes' && <CultesPage />}
      {!isAdmin && currentPage === 'login' && <LoginPage />}
      {isAdmin && <AdminPage />}
    </div>
  );
}
