import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BookOpen, Brain, FlaskConical, Heart } from "lucide-react";

interface PopularCourse {
  name: string;
  count: number;
  trend: "up" | "stable" | "down";
  icon: React.ReactNode;
}

const popularCourses: PopularCourse[] = [
  { name: "Fizyoloji", count: 156, trend: "up", icon: <Heart size={16} /> },
  { name: "Anatomi", count: 134, trend: "up", icon: <BookOpen size={16} /> },
  { name: "Histoloji ve Embriyoloji", count: 89, trend: "stable", icon: <Brain size={16} /> },
  { name: "Biyofizik", count: 67, trend: "up", icon: <FlaskConical size={16} /> },
];

const quickStats = [
  { label: "Toplam Not", value: "500+", color: "text-primary" },
  { label: "Aktif Öğrenci", value: "2.1K", color: "text-medical-accent" },
  { label: "Bu Hafta", value: "+45", color: "text-medical-success" },
];

export function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <Card className="p-6 bg-gradient-to-br from-surface to-surface-elevated border-border/50">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <TrendingUp size={20} className="mr-2 text-primary" />
          İstatistikler
        </h3>
        <div className="space-y-3">
          {quickStats.map((stat, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-foreground-muted text-sm">{stat.label}</span>
              <span className={`font-semibold ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Popular Courses */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Popüler Dersler</h3>
        <div className="space-y-3">
          {popularCourses.map((course, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-elevated transition-colors duration-200 cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <div className="text-primary group-hover:text-primary-light transition-colors duration-200">
                  {course.icon}
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                    {course.name}
                  </p>
                  <p className="text-xs text-foreground-muted">{course.count} not</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {course.trend === "up" && (
                  <Badge variant="outline" className="bg-medical-success/10 text-medical-success border-medical-success/20">
                    <TrendingUp size={10} className="mr-1" />
                    Popüler
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Study Progress */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-4">Çalışma İlerlemen</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-foreground-muted">Bu Hafta</span>
              <span className="text-sm font-medium text-primary">12/15 ders</span>
            </div>
            <div className="w-full bg-border/50 rounded-full h-2">
              <div className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full w-4/5 transition-all duration-500"></div>
            </div>
          </div>
          <div className="text-center pt-2">
            <p className="text-xs text-foreground-muted">
              Harika gidiyorsun! 💪
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}