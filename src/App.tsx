import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CopperCollection from "./pages/CopperCollection";
import BrassEssentials from "./pages/BrassEssentials";
import GiftSets from "./pages/GiftSets";
import OurHeritage from "./pages/OurHeritage";
import NotFound from "./pages/NotFound";
import SteelEssentials from "./pages/SteelEssentials";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/copper-collection" element={<CopperCollection />} />
          <Route path="/brass-essentials" element={<BrassEssentials />} />
          <Route path="/steel-essentials" element={<SteelEssentials />} />
          <Route path="/gift-sets" element={<GiftSets />} />
          <Route path="/our-heritage" element={<OurHeritage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
