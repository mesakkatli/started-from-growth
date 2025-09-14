import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NoteCard } from "@/components/NoteCard";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Filter, SortDesc } from "lucide-react";

const featuredNotes = [
  {
    title: "Davranışın Nörobiyolojik Temelleri",
    description: "İnsan davranışlarının beynin işleyişi ve sinir sistemi üzerinden nasıl şekillendiğini inceler. Ruh sağlığı ve psikiyatrik hastalıkların biyolojik temellerine ışık tutar.",
    category: "Nörobiyoloji",
    readTime: "15 dk",
    difficulty: "Intermediate" as const,
    tags: ["Nörobilim", "Davranış", "Psikiyatri", "Beyin"]
  },
  {
    title: "Biyokimyanın Temel Taşları: Lipitler ve Karbonhidratlar",
    description: "Bu kaynaklar, hücre biyolojisi, insan fizyolojisi ve tıp alanındaki çeşitli konuları kapsamaktadır. Özellikle hücre zarı taşıma mekanizmaları, aktif ve pasif taşıma, difüzyon ve osmoz gibi temel süreçler detaylıca açıklanmıştır.",
    category: "Biyokimya",
    readTime: "12 dk",
    difficulty: "Beginner" as const,
    tags: ["Lipitler", "Karbonhidratlar", "Hücre", "Metabolizma"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Öne Çıkan Notlar</h2>
                <p className="text-foreground-muted">En popüler ve güncel ders notlarına göz atın</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm" className="hover:bg-primary/10">
                  <Filter size={16} className="mr-2" />
                  Filtrele
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-primary/10">
                  <SortDesc size={16} className="mr-2" />
                  Sırala
                </Button>
              </div>
            </div>

            {/* Featured Badge */}
            <div className="flex items-center space-x-2">
              <Badge className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
                <BookOpen size={12} className="mr-1" />
                Öne Çıkan İçerik
              </Badge>
              <span className="text-sm text-foreground-muted">En çok okunan notlar</span>
            </div>

            {/* Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredNotes.map((note, index) => (
                <NoteCard key={index} {...note} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center pt-8">
              <Button 
                size="lg"
                className="btn-medical min-w-48"
              >
                Daha Fazla Not Görüntüle
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-elevated border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground-muted">
            © 2024 TIP Notları. Tüm Hakları Saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
