import { Editor as MonacoEditor } from "@monaco-editor/react";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const Editor = ({ value, onChange }: EditorProps) => {
  return (
    <div className="h-full w-full rounded-lg border border-editor-border bg-editor-bg overflow-hidden animate-fade-in">
      <MonacoEditor
        height="100%"
        defaultLanguage="markdown"
        value={value}
        onChange={(value) => onChange(value || "")}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "off",
          scrollBeyondLastLine: false,
          wordWrap: "on",
          padding: { top: 16, bottom: 16 },
        }}
        theme="light"
      />
    </div>
  );
};