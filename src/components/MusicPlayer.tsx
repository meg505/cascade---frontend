import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import albumPlaceholder from "@/assets/album-placeholder.jpg";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([30]);
  const [volume, setVolume] = useState([70]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card glass border-t border-border backdrop-blur-xl z-50">
      <div className="flex items-center justify-between p-4">
        {/* Current Track Info */}
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <div className="w-14 h-14 rounded-lg overflow-hidden shadow-card">
            <img 
              src={albumPlaceholder} 
              alt="Current track" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-foreground truncate">Midnight Dreams</h4>
            <p className="text-sm text-muted-foreground truncate">The Parallax Band</p>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2 flex-1 max-w-md">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Shuffle className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <SkipBack className="w-5 h-5" />
            </Button>
            <Button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-gradient-primary hover:bg-primary-glow text-primary-foreground hover-glow animate-pulse-glow"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <SkipForward className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Repeat className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-muted-foreground">1:23</span>
            <Slider
              value={progress}
              onValueChange={setProgress}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground">3:45</span>
          </div>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center gap-2 min-w-0 flex-1 justify-end">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Volume2 className="w-4 h-4" />
          </Button>
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;