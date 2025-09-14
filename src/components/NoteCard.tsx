import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock, BookOpen, ArrowRight, Brain, FlaskConical } from "lucide-react";

interface NoteCardProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  href?: string;
}

const difficultyColors = {
  Beginner: "bg-medical-success/10 text-medical-success border-medical-success/20",
  Intermediate: "bg-medical-warning/10 text-medical-warning border-medical-warning/20",
  Advanced: "bg-destructive/10 text-destructive border-destructive/20",
};

const categoryIcons = {
  "Nörobiyoloji": <Brain size={16} />,
  "Biyokimya": <FlaskConical size={16} />,
  "Fizyoloji": <BookOpen size={16} />,
  "Anatomi": <BookOpen size={16} />,
};

export function NoteCard({ 
  title, 
  description, 
  category, 
  readTime, 
  difficulty, 
  tags, 
  href = "#" 
}: NoteCardProps) {
  const categoryIcon = categoryIcons[category as keyof typeof categoryIcons] || <BookOpen size={16} />;

  return (
    <Card className="medical-card group cursor-pointer">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2 text-primary">
            {categoryIcon}
            <span className="text-sm font-medium">{category}</span>
          </div>
          <Badge 
            variant="outline" 
            className={`text-xs ${difficultyColors[difficulty]}`}
          >
            {difficulty}
          </Badge>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-foreground-muted leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="tag"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center space-x-1 text-foreground-subtle text-sm">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="link-animated text-primary hover:text-primary-light p-0 h-auto font-medium"
          >
            Devamını Oku
            <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
}