import { Header } from "@/components/Header";
import { NoteCard } from "@/components/NoteCard";
import { Sidebar } from "@/components/Sidebar";
import { BookOpen } from "lucide-react";

const donem1Notes = [
  {
    title: "Hücre Biyolojisine Giriş",
    description: "Hücrenin temel yapısı, organellerin fonksiyonları ve hücresel süreçlerin detaylı incelenmesi.",
    category: "Biyoloji",
    readTime: "15 dk",
    difficulty: "Beginner" as const,
    tags: ["Hücre", "Organeller", "Temel Kavramlar"]
  },
  {
    title: "İnsan Anatomisinin Temelleri",
    description: "İnsan vücudunun temel anatomik yapıları, organ sistemleri ve bunların işlevleri.",
    category: "Anatomi",
    readTime: "20 dk",
    difficulty: "Beginner" as const,
    tags: ["Anatomi", "Organ Sistemleri", "Temel"]
  },
  {
    title: "Medikal Terminoloji",
    description: "Tıp dilinde kullanılan temel terimlerin kökleri, ön ekleri ve son ekleri.",
    category: "Terminoloji",
    readTime: "12 dk",
    difficulty: "Beginner" as const,
    tags: ["Terminoloji", "Dil", "Temel"]
  }
];

export default function Donem1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="flex-1">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Dönem 1 - Temel Tıp Bilimleri
                </h1>
              </div>
              <p className="text-foreground-muted text-lg">
                Tıp eğitiminizin temelini oluşturan hücre biyolojisi, anatomi ve temel kavramlar.
              </p>
            </div>

            {/* Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {donem1Notes.map((note, index) => (
                <NoteCard key={index} {...note} />
              ))}
            </div>
          </div>
          
          <aside className="w-80 hidden lg:block">
            <Sidebar />
          </aside>
        </div>
      </main>
    </div>
  );
}