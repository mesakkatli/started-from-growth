import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Brain, FlaskConical, Heart, Stethoscope } from "lucide-react";
import medicalLogo from "@/assets/medical-logo.png";

interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
}

const navigationItems: NavItem[] = [
  { id: "donem1", label: "Dönem 1", icon: <BookOpen size={16} /> },
  { id: "donem2", label: "Dönem 2", icon: <Brain size={16} /> },
  { id: "donem3", label: "Dönem 3", icon: <FlaskConical size={16} /> },
  { id: "donem4", label: "Dönem 4", icon: <Heart size={16} /> },
  { id: "donem5", label: "Dönem 5", icon: <Stethoscope size={16} /> },
  { id: "donem6", label: "Dönem 6", icon: <Stethoscope size={16} /> },
  { id: "flashcard", label: "Flashcard", active: true },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={medicalLogo} alt="TIP Notları" className="w-10 h-10" />
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                TIP Notları
              </h1>
              <p className="text-xs text-foreground-muted">Tıp Eğitimi Platformu</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={item.active ? "default" : "ghost"}
                size="sm"
                className={`flex items-center space-x-2 ${
                  item.active 
                    ? "bg-gradient-to-r from-primary to-primary-light text-primary-foreground shadow-soft" 
                    : "hover:bg-primary/10"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Button>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-muted w-4 h-4" />
              <input
                type="text"
                placeholder="Not ara..."
                className="pl-10 pr-4 py-2 w-64 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
              />
            </div>
            <Badge variant="outline" className="hidden sm:flex bg-gradient-to-r from-accent/10 to-primary/10 text-accent border-accent/30">
              Beta
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
}