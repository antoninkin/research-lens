import { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
    onFileSelect: (file: File) => Promise<void>;
    isLoading?: boolean;
    acceptedTypes?: string[];
}

const FileUpload = ({
    onFileSelect,
    isLoading = false,
    acceptedTypes = ['.csv', '.json'],
}: FileUploadProps) => {
    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            e.stopPropagation();

            const files = Array.from(e.dataTransfer.files);
            if (files.length > 0) {
                onFileSelect(files[0]);
            }
        },
        [onFileSelect]
    );

    const handleFileInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files;
            if (files && files.length > 0) {
                onFileSelect(files[0]);
            }
        },
        [onFileSelect]
    );

    return (
        <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="w-full max-w-xl mx-auto"
        >
            <label
                className={`
          flex flex-col items-center justify-center w-full h-64
          border-2 border-dashed rounded-lg
          cursor-pointer
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}
          transition-colors duration-200
          border-gray-300 dark:border-gray-600
        `}
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-12 h-12 mb-4 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        {acceptedTypes.join(', ')} files supported
                    </p>
                </div>
                <input
                    type="file"
                    className="hidden"
                    accept={acceptedTypes.join(',')}
                    onChange={handleFileInput}
                    disabled={isLoading}
                />
            </label>
        </div>
    );
};

export default FileUpload;