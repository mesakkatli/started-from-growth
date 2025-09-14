import { Header } from "@/components/Header";
import { NoteCard } from "@/components/NoteCard";
import { Sidebar } from "@/components/Sidebar";
import { FlaskConical } from "lucide-react";

const donem3Notes = [
  {
    title: "Patoloji ve Hastalık Mekanizmaları",
    description: "Hastalık süreçleri, hücresel hasar ve iyileşme mekanizmalarının incelenmesi.",
    category: "Patoloji",
    readTime: "28 dk",
    difficulty: "Advanced" as const,
    tags: ["Patoloji", "Hastalık", "Hücresel Hasar"]
  },
  {
    title: "Mikrobiyoloji ve Enfeksiyonlar",
    description: "Bakteriler, virüsler, mantarlar ve parazitlerin neden olduğu enfeksiyonlar.",
    category: "Mikrobiyoloji",
    readTime: "24 dk",
    difficulty: "Intermediate" as const,
    tags: ["Mikrobiyoloji", "Enfeksiyon", "Patojenler"]
  },
  {
    title: "İmmünoloji Temelleri",
    description: "Bağışıklık sistemi, antijen-antikor etkileşimleri ve immün yanıt.",
    category: "İmmünoloji",
    readTime: "26 dk",
    difficulty: "Advanced" as const,
    tags: ["Bağışıklık", "Antijen", "İmmün Sistem"]
  }
];

export default function Donem3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="flex-1">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <FlaskConical className="w-8 h-8 text-primary" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Dönem 3 - Patoloji ve Mikrobiyoloji
                </h1>
              </div>
              <p className="text-foreground-muted text-lg">
                Hastalık süreçleri, mikroorganizmalar ve bağışıklık sistemi hakkında detaylı bilgi.
              </p>
            </div>

            {/* Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {donem3Notes.map((note, index) => (
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