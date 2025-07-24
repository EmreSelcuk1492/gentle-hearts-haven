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
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-healing-violet/10">
      <div className="flex items-center mb-4">
        <img src={logoSrc} alt={logoAlt} className="h-16 w-16 mr-4 object-contain" />
        <div className="flex-1">
          <Button 
            variant="link" 
            className="p-0 h-auto text-foreground hover:text-healing-blue font-bold text-lg"
            onClick={() => window.open(websiteUrl, "_blank", "noopener,noreferrer")}
          >
            {title} <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <p className="text-foreground/80 leading-relaxed">{description}</p>
    </div>
  );
};