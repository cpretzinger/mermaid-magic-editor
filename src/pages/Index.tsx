import { useState } from "react";
import { Editor } from "@/components/Editor";
import { Preview } from "@/components/Preview";
import { ExamplesGallery } from "@/components/ExamplesGallery";
import { examples } from "@/lib/examples";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Index = () => {
  const [code, setCode] = useState(examples[0].code);

  const copyAsSVG = async () => {
    try {
      const svg = document.querySelector("#preview")?.innerHTML;
      if (svg) {
        await navigator.clipboard.writeText(svg);
        toast.success("Copied SVG to clipboard");
      }
    } catch (error) {
      toast.error("Failed to copy SVG");
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <header className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Mermaid Editor</h1>
            <p className="text-muted-foreground mt-1">Create beautiful diagrams with code</p>
          </div>
          <Button onClick={copyAsSVG}>Copy as SVG</Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr_1fr] gap-6 h-[calc(100vh-12rem)]">
        <aside className="hidden lg:block border rounded-lg bg-card">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Examples</h2>
          </div>
          <ExamplesGallery onSelect={setCode} />
        </aside>

        <div className="h-full">
          <Editor value={code} onChange={setCode} />
        </div>

        <div className="h-full">
          <Preview code={code} />
        </div>
      </main>
    </div>
  );
};

export default Index;