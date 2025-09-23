import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Heart, MoreHorizontal } from "lucide-react";
import albumPlaceholder from "@/assets/album-placeholder.jpg";

const FeaturedSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredAlbums = [
    { id: 1, title: "Midnight Vibes", artist: "Luna Park", plays: "2.1M" },
    { id: 2, title: "Electric Dreams", artist: "Neon Waves", plays: "1.8M" },
    { id: 3, title: "Jazz Fusion", artist: "The Collective", plays: "950K" },
    { id: 4, title: "Synthwave Nights", artist: "Retro Future", plays: "1.3M" },
    { id: 5, title: "Ambient Spaces", artist: "Echo Chamber", plays: "780K" },
    { id: 6, title: "Rock Anthems", artist: "Thunder Road", plays: "2.5M" },
  ];

  const recentlyPlayed = [
    { id: 1, title: "Cosmic Journey", artist: "Star Gazer", duration: "3:42" },
    { id: 2, title: "Digital Love", artist: "Cyber Dreams", duration: "4:15" },
    { id: 3, title: "Ocean Waves", artist: "Nature's Call", duration: "5:23" },
    { id: 4, title: "City Lights", artist: "Urban Pulse", duration: "3:58" },
    { id: 5, title: "Forest Path", artist: "Earth Tones", duration: "4:32" },
  ];

  return (
    <div className="px-8 py-16 space-y-16">
      {/* Featured Albums */}
      <section 
        className="transform transition-transform duration-700"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <h2 className="text-4xl font-bold mb-8 gradient-text">Featured Albums</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {featuredAlbums.map((album) => (
            <div
              key={album.id}
              className="group music-card p-4 rounded-xl glass hover-glow cursor-pointer"
            >
              <div className="relative mb-4">
                <img
                  src={albumPlaceholder}
                  alt={album.title}
                  className="w-full aspect-square object-cover rounded-lg shadow-card"
                />
                <Button
                  className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover-glow"
                >
                  <Play className="w-5 h-5 ml-1" />
                </Button>
              </div>
              <h3 className="font-semibold text-foreground mb-1 truncate">{album.title}</h3>
              <p className="text-sm text-muted-foreground truncate">{album.artist}</p>
              <p className="text-xs text-muted-foreground mt-1">{album.plays} plays</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Played */}
      <section 
        className="transform transition-transform duration-700"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        <h2 className="text-4xl font-bold mb-8 gradient-text">Recently Played</h2>
        <div className="space-y-2">
          {recentlyPlayed.map((track, index) => (
            <div
              key={track.id}
              className="group flex items-center gap-4 p-4 rounded-lg hover:bg-hover transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-8 h-8 text-muted-foreground group-hover:text-foreground">
                <span className="group-hover:hidden">{index + 1}</span>
                <Play className="w-4 h-4 hidden group-hover:block" />
              </div>
              <img
                src={albumPlaceholder}
                alt={track.title}
                className="w-12 h-12 rounded-lg shadow-card"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground truncate">{track.title}</h4>
                <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4" />
                </Button>
                <span className="text-sm text-muted-foreground w-12 text-right">{track.duration}</span>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discover Section */}
      <section 
        className="transform transition-transform duration-700"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        <h2 className="text-4xl font-bold mb-8 gradient-text">Discover New Music</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8 hover-glow cursor-pointer music-card">
            <h3 className="text-2xl font-bold mb-4 text-secondary">Trending Now</h3>
            <p className="text-muted-foreground mb-6">
              Discover what's hot in the music world right now
            </p>
            <Button className="bg-gradient-secondary hover:bg-secondary-glow text-secondary-foreground">
              Explore Trending
            </Button>
          </div>
          <div className="glass rounded-2xl p-8 hover-glow cursor-pointer music-card">
            <h3 className="text-2xl font-bold mb-4 text-tertiary">Made For You</h3>
            <p className="text-muted-foreground mb-6">
              Personalized playlists based on your listening habits
            </p>
            <Button className="bg-tertiary hover:bg-tertiary/90 text-tertiary-foreground">
              View Recommendations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedSection;