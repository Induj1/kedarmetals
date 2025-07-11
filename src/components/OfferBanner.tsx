
import { Button } from "@/components/ui/button";
import { Gift, Clock, X, Trophy, Star } from "lucide-react";
import { useState, useEffect } from "react";

// Game component
const UtensilGame = ({ onClose, onWin }: { onClose: () => void; onWin: () => void }) => {
  const [cards, setCards] = useState<string[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const utensils = ['🥄', '🍴', '🥣', '🍽️', '🥢', '🔪', '🥄', '🍴', '🥣', '🍽️', '🥢', '🔪'];

  useEffect(() => {
    // Shuffle cards
    const shuffled = [...utensils].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  const handleCardClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlipped;
      
      if (cards[first] === cards[second]) {
        setMatched([...matched, first, second]);
        if (matched.length + 2 === cards.length) {
          setGameWon(true);
          setTimeout(() => {
            onWin();
          }, 1500);
        }
      }
      
      setTimeout(() => {
        setFlipped([]);
      }, 1000);
    }
  };

  const isFlipped = (index: number) => flipped.includes(index) || matched.includes(index);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-maroon">🎮 Utensil Memory Game</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {gameWon ? (
          <div className="text-center py-8">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-600 mb-2">🎉 Congratulations!</h3>
            <p className="text-lg text-gray-600 mb-4">You won a 10% discount coupon!</p>
            <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-lg">
              <p className="font-bold text-xl">COUPON: KEDAR10</p>
              <p className="text-sm">Valid for 30 days</p>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-4">
              <p className="text-gray-600">Match the utensils to win!</p>
              <p className="text-sm text-gray-500">Moves: {moves}</p>
            </div>
            
            <div className="grid grid-cols-4 gap-2 mb-6">
              {cards.map((card, index) => (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-16 h-16 rounded-lg border-2 transition-all duration-300 ${
                    isFlipped(index)
                      ? 'bg-brass text-white border-brass'
                      : 'bg-gray-200 border-gray-300 hover:border-brass'
                  }`}
                >
                  {isFlipped(index) ? (
                    <span className="text-2xl">{card}</span>
                  ) : (
                    <span className="text-2xl">❓</span>
                  )}
                </button>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Find all matching pairs to get your discount!
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const OfferBanner = () => {
  const [showGame, setShowGame] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);

  const handleWin = () => {
    setShowGame(false);
    setShowCoupon(true);
    // Hide coupon after 5 seconds
    setTimeout(() => setShowCoupon(false), 5000);
  };

  return (
    <>
      <div className="relative bg-gradient-to-r from-maroon via-primary to-maroon text-ivory py-6 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brass/30 to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 text-center lg:text-left">
            {/* Left section */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-brass/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Gift className="w-6 h-6 text-brass" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif">🎉 Festival Special!</h3>
                <p className="text-ivory/80 text-sm">Limited Time Offer</p>
              </div>
            </div>

            {/* Center section */}
            <div className="flex-1 lg:text-center">
              <p className="text-lg md:text-xl font-medium mb-2">
                Get <span className="text-3xl font-bold text-brass">₹100 OFF</span> on your first online order
              </p>
              <p className="text-ivory/90 text-sm">+ Free Gift Wrapping on orders above ₹999</p>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-brass/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock className="w-5 h-5 text-brass" />
                <span className="text-sm font-semibold">Ends Soon!</span>
              </div>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-brass text-brass hover:bg-brass hover:text-maroon font-bold px-8 py-3 shadow-xl bg-ivory/90 backdrop-blur-sm"
                onClick={() => setShowGame(true)}
              >
                🎁 Claim Now
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-2 right-20 text-brass/30 text-6xl">✦</div>
          <div className="absolute bottom-2 left-16 text-brass/20 text-4xl">❋</div>
          <div className="absolute top-4 left-1/3 text-brass/25 text-3xl">✧</div>
        </div>
      </div>

      {/* Game Modal */}
      {showGame && (
        <UtensilGame 
          onClose={() => setShowGame(false)} 
          onWin={handleWin}
        />
      )}

      {/* Coupon Notification */}
      {showCoupon && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-2xl z-50 animate-bounce">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5" />
            <div>
              <p className="font-bold">🎉 Coupon Won!</p>
              <p className="text-sm">Use code: KEDAR10 for 10% off</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OfferBanner;
