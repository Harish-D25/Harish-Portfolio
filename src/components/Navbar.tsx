import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileDownIcon, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check for user preference
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    setDarkMode(currentTheme === 'dark');
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  };

  const handleDownloadResume = () => {
    // Open Google Drive file in a new tab
    const fileId = '1ftg5kaij6NiBEgKOYz4GltZkKFzrs3T7';
    const viewUrl = `https://drive.google.com/file/d/${fileId}/view`;
    
    window.open(viewUrl, '_blank');
  };

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">Harish D</a>
        
        <div className="flex items-center gap-4">
          {/* Menu button with dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/20">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <a href="#about" className="flex items-center cursor-pointer w-full">
                  About Me
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#projects" className="flex items-center cursor-pointer w-full">
                  View Projects
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#skills" className="flex items-center cursor-pointer w-full">
                  Skills & Expertise
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#contact" className="flex items-center cursor-pointer w-full">
                  Get in Touch
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <div className="flex items-center gap-2">
            <Switch 
              id="theme-mode"
              checked={darkMode} 
              onCheckedChange={toggleTheme}
              className="transition-all duration-300"
            />
            <Label htmlFor="theme-mode" className="text-sm hidden sm:block">
              {darkMode ? 'Dark' : 'Light'}
            </Label>
          </div>
          
          <Button onClick={handleDownloadResume} variant="default" className="hidden sm:flex gap-2">
            <FileDownIcon className="h-4 w-4" />
            Resume
          </Button>
          
          <div className="sm:hidden">
            <Button onClick={handleDownloadResume} variant="outline" size="icon" className="rounded-full">
              <FileDownIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
