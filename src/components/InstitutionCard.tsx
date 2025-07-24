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
    <div>
      <div className="flex items-center mb-2">
        <img src={logoSrc} alt={logoAlt} className="h-8 w-8 mr-2 object-contain" />
        <Button 
          variant="link" 
          className="p-0 h-auto text-foreground hover:text-healing-blue font-semibold"
          onClick={() => window.open(websiteUrl, "_blank", "noopener,noreferrer")}
        >
          {title} <ExternalLink className="ml-1 h-3 w-3" />
        </Button>
      </div>
      <p className="text-sm text-foreground/80">{description}</p>
    </div>
  );
};