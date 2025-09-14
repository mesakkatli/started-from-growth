import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Users, Star } from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";

const stats = [
  { icon: <BookOpen size={20} />, value: "500+", label: "Ders Notu" },
  { icon: <Users size={20} />, value: "2K+", label: "Öğrenci" },
  { icon: <Star size={20} />, value: "4.9", label: "Değerlendirme" },
  { icon: <TrendingUp size={20} />, value: "95%", label: "Başarı Oranı" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-medical-secondary">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Medical Education" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-medical-secondary/80" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            🎓 Türkiye'nin En Kapsamlı Tıp Notları Platformu
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Tıp Eğitiminizi
            <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Daha Etkili Hale Getirin
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Kapsamlı ders notları, interaktif flashcard'lar ve uzman görüşleriyle 
            tıp fakültesi yolculuğunuzda yanınızdayız.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-blue-50 shadow-strong hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Notlara Göz At
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Ücretsiz Dene
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-2 text-blue-100">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-background">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}