class WordFile {
    constructor(blob) {
      this.blob = blob;
    }
  
    getBlob() {
      return this.blob;
    }
}
  
class WordFileToPdfAdapter {
    constructor(wordFile) {
      this.wordFile = wordFile;
    }
  
    getBlob() {
      const wordBlob = this.wordFile.getBlob();
      const pdfBlob = new Blob(["PDF ", wordBlob], {type: "application/pdf"});
      return pdfBlob;
    }
}
  
const myWordBlob = new Blob(["Some Word data"], {type: "application/msword"});
const myWordFile = new WordFile(myWordBlob);
const myWordFileToPdfAdapter = new WordFileToPdfAdapter(myWordFile);
console.log(myWordFileToPdfAdapter.getBlob());