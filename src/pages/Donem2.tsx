import { Header } from "@/components/Header";
import { NoteCard } from "@/components/NoteCard";
import { Sidebar } from "@/components/Sidebar";
import { Brain } from "lucide-react";

const donem2Notes = [
  {
    title: "Fizyoloji Temelleri",
    description: "Organ sistemlerinin işleyişi, homeostaz ve vücut fonksiyonlarının düzenlenmesi.",
    category: "Fizyoloji",
    readTime: "25 dk",
    difficulty: "Intermediate" as const,
    tags: ["Fizyoloji", "Homeostaz", "Organ Sistemleri"]
  },
  {
    title: "Biyokimya ve Metabolizma",
    description: "Protein, karbonhidrat ve lipid metabolizması, enzim kinetiği ve biyokimyasal yolaklar.",
    category: "Biyokimya",
    readTime: "30 dk",
    difficulty: "Intermediate" as const,
    tags: ["Metabolizma", "Enzimler", "Biyokimya"]
  },
  {
    title: "Genetik ve Moleküler Biyoloji",
    description: "DNA replikasyonu, transkripsiyon, translasyon ve gen ekspresyonu.",
    category: "Genetik",
    readTime: "22 dk",
    difficulty: "Advanced" as const,
    tags: ["DNA", "RNA", "Gen Ekspresyonu"]
  }
];

export default function Donem2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="flex-1">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-8 h-8 text-primary" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Dönem 2 - İleri Temel Bilimler
                </h1>
              </div>
              <p className="text-foreground-muted text-lg">
                Fizyoloji, biyokimya ve genetik konularında derinlemesine bilgi edinin.
              </p>
            </div>

            {/* Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {donem2Notes.map((note, index) => (
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