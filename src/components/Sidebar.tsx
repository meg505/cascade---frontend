import { Home, Search, Library, Plus, Heart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const navigationItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Search, label: "Search" },
    { icon: Library, label: "Your Library" }
  ];

  const libraryItems = [
    { icon: Plus, label: "Create Playlist" },
    { icon: Heart, label: "Liked Songs" },
    { icon: Download, label: "Downloaded" }
  ];

  const playlists = [
    "Chill Vibes",
    "Workout Mix",
    "Jazz Collection",
    "Electronic Dreams",
    "Indie Rock",
    "Classical Focus"
  ];

  return (
    <div className="w-64 bg-card glass border-r border-border h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold gradient-text">Parallax Music</h1>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "default" : "ghost"}
            className={cn(
              "w-full justify-start gap-3 text-left hover:bg-hover transition-all duration-300",
              item.active && "bg-gradient-primary text-primary-foreground hover-glow"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* Library Section */}
      <div className="px-4 py-2">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">LIBRARY</h3>
        <div className="space-y-1">
          {libraryItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-3 text-sm hover:bg-hover transition-all duration-300"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Playlists */}
      <div className="px-4 py-2 flex-1 overflow-y-auto">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">PLAYLISTS</h3>
        <div className="space-y-1">
          {playlists.map((playlist) => (
            <Button
              key={playlist}
              variant="ghost"
              className="w-full justify-start text-sm text-muted-foreground hover:text-foreground hover:bg-hover transition-all duration-300"
            >
              {playlist}
            </Button>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-border">
        <Button className="w-full bg-gradient-secondary hover:bg-secondary-glow text-secondary-foreground">
          Upgrade to Premium
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;