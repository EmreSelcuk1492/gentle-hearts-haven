import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

interface InstitutionCardProps {
  logoSrc: string;
  logoAlt: string;
  title: string;
  description: string;
  websiteUrl: string;
}

export const InstitutionCard = ({ 
  logoSrc, 
  logoAlt, 
  title, 
  description, 
  websiteUrl 
}: InstitutionCardProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-healing-violet/10 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 gap-4">
        <img src={logoSrc} alt={logoAlt} className="h-12 w-12 sm:h-16 sm:w-16 object-contain flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <Button 
            variant="link" 
            className="p-0 h-auto text-foreground hover:text-healing-blue font-bold text-base sm:text-lg text-left leading-tight break-words whitespace-normal"
            onClick={() => window.open(websiteUrl, "_blank", "noopener,noreferrer")}
          >
            <span className="break-words">{title}</span> <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 inline" />
          </Button>
        </div>
      </div>
      <p className="text-foreground/80 leading-relaxed text-sm sm:text-base flex-grow">{description}</p>
    </div>
  );
};