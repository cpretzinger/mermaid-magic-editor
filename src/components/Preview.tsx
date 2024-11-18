import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface PreviewProps {
  code: string;
}

mermaid.initialize({
  startOnLoad: true,
  theme: "neutral",
  securityLevel: "loose",
  fontFamily: "system-ui, sans-serif",
});

export const Preview = ({ code }: PreviewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderDiagram = async () => {
      if (containerRef.current) {
        try {
          containerRef.current.innerHTML = "";
          const { svg } = await mermaid.render("preview", code);
          containerRef.current.innerHTML = svg;
        } catch (error) {
          console.error("Failed to render diagram:", error);
        }
      }
    };

    renderDiagram();
  }, [code]);

  return (
    <div className="h-full w-full flex items-center justify-center p-4 bg-white rounded-lg border border-editor-border animate-fade-in">
      <div ref={containerRef} className="max-w-full overflow-auto" />
    </div>
  );
};