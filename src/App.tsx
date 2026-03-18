import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import QuotePage from "./pages/QuotePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ThankYou from "./pages/ThankYou.tsx";
import Apidata from "./pages/Apidata.tsx";
import AgentLoginPage from "./pages/AgentLoginPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Load leadid.js once (global) so LeadID cookies work on all routes.
    const scriptId = "leadid-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "/leadid.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.parentNode?.removeChild(script);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/agentlogin" element={<AgentLoginPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/apidata" element={<Apidata />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
