import React, { useRef } from "react";

interface FileUploadProps {
  label?: string;
  onFileChange: (files: FileList | null) => void;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  id?: string;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label = "Upload File",
  onFileChange,
  accept,
  multiple = false,
  disabled = false,
  id,
  className = "",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileNames, setFileNames] = React.useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFileNames(files ? Array.from(files).map(f => f.name) : []);
    onFileChange(files);
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={id || "file-upload-input"} className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}
      <div className="flex items-center gap-2">
        <input
          ref={inputRef}
          id={id || "file-upload-input"}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
      {fileNames.length > 0 && (
        <ul className="mt-2 text-xs text-gray-600 dark:text-gray-300">
          {fileNames.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUpload;
