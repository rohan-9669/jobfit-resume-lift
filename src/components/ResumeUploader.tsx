
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Upload, FileText, Check, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

// These types are for TypeScript support
type PDFParseType = typeof import('pdf-parse').default;
type MammothType = typeof import('mammoth');

interface ResumeUploaderProps {
  className?: string;
}

const ResumeUploader = ({ className }: ResumeUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const validateFile = (file: File): boolean => {
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a PDF or DOCX file');
      return false;
    }
    
    // 10MB max file size
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      return false;
    }
    
    setError(null);
    return true;
  };
  
  const extractTextFromFile = async (file: File): Promise<string> => {
    setIsProcessing(true);
    try {
      if (file.type === 'application/pdf') {
        // Dynamically import pdf-parse only when needed
        const pdfParse = (await import('pdf-parse')).default as unknown as PDFParseType;
        const arrayBuffer = await file.arrayBuffer();
        const pdfData = new Uint8Array(arrayBuffer);
        const result = await pdfParse(pdfData);
        return result.text;
      } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        // Dynamically import mammoth only when needed
        const mammoth = (await import('mammoth')) as unknown as MammothType;
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        return result.value;
      }
      return '';
    } catch (error) {
      console.error('Error extracting text:', error);
      toast({
        title: "Error processing file",
        description: "There was an issue extracting text from your file.",
        variant: "destructive",
      });
      return '';
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        setFile(droppedFile);
        const text = await extractTextFromFile(droppedFile);
        setExtractedText(text);
        console.log('Extracted text:', text.substring(0, 100) + '...');
      }
    }
  };
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
        const text = await extractTextFromFile(selectedFile);
        setExtractedText(text);
        console.log('Extracted text:', text.substring(0, 100) + '...');
      }
    }
  };
  
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleSubmit = () => {
    if (file) {
      // Store the extracted text in localStorage or state management
      if (extractedText) {
        localStorage.setItem('resumeText', extractedText);
      }
      // Navigate to analysis page
      navigate('/analysis');
    }
  };
  
  return (
    <div className={cn("w-full animate-fade-in", className)}>
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-6 transition-all duration-300 ease-in-out text-center",
          isDragging 
            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
            : "border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800/50",
          file ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : ""
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.docx"
          className="hidden"
        />
        
        <div className="flex flex-col items-center justify-center py-4">
          {file ? (
            <>
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                {file.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                {(file.size / 1024).toFixed(2)} KB
              </p>
              {isProcessing ? (
                <p className="text-sm text-blue-500 animate-pulse">Processing file...</p>
              ) : (
                <Button 
                  onClick={handleSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {extractedText ? 'Continue' : 'Processing...'}
                </Button>
              )}
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                {error ? (
                  <AlertCircle className="w-8 h-8 text-red-500" />
                ) : (
                  <Upload className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                )}
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
                Upload your resume
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Drag and drop your file here, or click to browse
              </p>
              
              {error && (
                <p className="text-sm text-red-500 mb-3">
                  {error}
                </p>
              )}
              
              <div className="flex space-x-2">
                <Button 
                  onClick={handleButtonClick}
                  variant="outline" 
                  className="border-gray-300 dark:border-gray-700"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Browse Files
                </Button>
                <Button 
                  variant="outline"
                  className="border-gray-300 dark:border-gray-700"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Sample Resume
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
        Supported formats: PDF, DOCX (Max size: 10MB)
      </div>
    </div>
  );
};

export default ResumeUploader;
