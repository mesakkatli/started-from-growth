import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, RotateCcw, Check, X } from "lucide-react";
import { useState } from "react";

const flashcards = [
  {
    question: "Hücre zarının temel bileşeni nedir?",
    answer: "Fosfolipid çift tabakası (phospholipid bilayer)",
    category: "Hücre Biyolojisi",
    difficulty: "Beginner" as const
  },
  {
    question: "Kalbin ana pompalama odacıkları hangileridir?",
    answer: "Sol ventrikül ve sağ ventrikül",
    category: "Anatomi",
    difficulty: "Beginner" as const
  },
  {
    question: "ATP'nin tam açılımı nedir?",
    answer: "Adenosine Triphosphate (Adenozin Trifosfat)",
    category: "Biyokimya",
    difficulty: "Intermediate" as const
  }
];

export default function Flashcard() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
    setShowAnswer(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    setShowAnswer(false);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const currentFlashcard = flashcards[currentCard];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Brain className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Flashcard Çalışma
              </h1>
            </div>
            <p className="text-foreground-muted text-lg">
              Interaktif flashcard'larla bilgilerinizi test edin ve pekiştirin.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-foreground-muted">
                {currentCard + 1} / {flashcards.length}
              </span>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {currentFlashcard.difficulty}
              </Badge>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentCard + 1) / flashcards.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Flashcard */}
          <Card className="medical-card mb-6 min-h-[400px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="relative p-8 h-full flex flex-col justify-center">
              {/* Category */}
              <div className="text-center mb-4">
                <Badge variant="outline" className="bg-surface/50 text-primary border-primary/30">
                  {currentFlashcard.category}
                </Badge>
              </div>

              {/* Question/Answer */}
              <div className="text-center flex-1 flex items-center justify-center">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {showAnswer ? "Cevap:" : "Soru:"}
                  </h3>
                  <p className="text-2xl leading-relaxed text-foreground-muted">
                    {showAnswer ? currentFlashcard.answer : currentFlashcard.question}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-center space-x-4 mt-6">
                <Button 
                  variant="outline" 
                  onClick={prevCard}
                  className="flex items-center space-x-2"
                >
                  <RotateCcw size={16} />
                  <span>Önceki</span>
                </Button>
                
                <Button 
                  onClick={toggleAnswer}
                  className="px-8"
                >
                  {showAnswer ? "Soruyu Göster" : "Cevabı Göster"}
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={nextCard}
                  className="flex items-center space-x-2"
                >
                  <span>Sonraki</span>
                  <RotateCcw size={16} className="rotate-180" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          {showAnswer && (
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                onClick={nextCard}
                className="flex items-center space-x-2 text-destructive border-destructive/30 hover:bg-destructive/10"
              >
                <X size={16} />
                <span>Bilmiyorum</span>
              </Button>
              
              <Button 
                variant="outline" 
                onClick={nextCard}
                className="flex items-center space-x-2 text-medical-success border-medical-success/30 hover:bg-medical-success/10"
              >
                <Check size={16} />
                <span>Biliyorum</span>
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}