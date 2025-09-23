import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import MusicPlayer from "@/components/MusicPlayer";
import SearchBar, { Song } from "@/components/searchbar";
import { useState } from "react";

const Index = () => {
  const [results, setResults] = useState<Song[]>([]);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex-1 ml-64">
        <TopBar />

        <main className="pt-20 pb-24 min-h-screen px-6">
          <HeroSection />

          {/* Search Bar */}
          <div className="my-8">
            <SearchBar onResults={setResults} />
          </div>

          {/* Display Search Results */}
          {results.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Search Results</h2>
              <ul className="space-y-2">
                {results.map((song, index) => (
                  <li key={index} className="p-2 bg-white rounded shadow">
                    {song.name} by {song.artist}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <FeaturedSection />
        </main>
      </div>

      <MusicPlayer />
    </div>
  );
};

export default Index;
