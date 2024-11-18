import { examples } from "@/lib/examples";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ExamplesGalleryProps {
  onSelect: (code: string) => void;
}

export const ExamplesGallery = ({ onSelect }: ExamplesGalleryProps) => {
  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-2 p-2">
        {examples.map((example) => (
          <Button
            key={example.id}
            variant="ghost"
            className="justify-start font-normal hover:bg-accent"
            onClick={() => onSelect(example.code)}
          >
            {example.name}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
};