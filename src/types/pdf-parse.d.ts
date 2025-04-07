
declare module 'pdf-parse' {
  interface PDFParseResult {
    text: string;
    numpages: number;
    numrender: number;
    info: {
      PDFFormatVersion: string;
      IsAcroFormPresent: boolean;
      IsXFAPresent: boolean;
      [key: string]: any;
    };
    metadata: {
      [key: string]: any;
    };
    version: string;
  }

  function PDFParse(dataBuffer: Buffer | Uint8Array, options?: any): Promise<PDFParseResult>;
  
  export default PDFParse;
}
