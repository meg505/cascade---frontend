import { useState } from "react";
import SearchBar, { Song } from "@/components/searchbar";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [results, setResults] = useState<Song[]>([]);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-64">
        <TopBar />
        <main className="pt-20 pb-24 min-h-screen">
          <HeroSection />
          <SearchBar onResults={setResults} />
          
          {/* Display search results */}
          <div className="mt-6">
            {results.length === 0 ? (
              <p>No results yet</p>
            ) : (
              <ul>
                {results.map((song, idx) => (
                  <li key={idx} className="mb-4">
                    <img src={song.image} alt={song.name} className="w-16 h-16 inline-block mr-4" />
                    <div className="inline-block align-middle">
                      <p className="font-bold">{song.name}</p>
                      <p>{song.artist} - {song.album}</p>
                      {song.preview && <audio controls src={song.preview}></audio>}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <FeaturedSection />
        </main>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Index;
