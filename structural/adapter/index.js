class WordFile {
    constructor(blob) {
        this.blob = blob;
    }
  
    getBlob() {
        return this.blob;
    }
}
  
class PdfFile {
    constructor(blob) {
        this.blob = blob;
    }
  
    getBlob() {
        return this.blob;
    }
}
  
class WordToPdfAdapter {
    constructor(wordFile) {
        this.wordFile = wordFile;
    }
  
    getBlob() {
        const wordBlob = this.wordFile.getBlob();
        const pdfBlob = new Blob(["PDF ", wordBlob], { type: "application/pdf" });
        return new PdfFile(pdfBlob);
    }
}
  
const wordBlob = new Blob(["Hello, World!"], { type: "application/msword" });
const wordFile = new WordFile(wordBlob);
const pdfFile = new WordToPdfAdapter(wordFile).getBlob();