class WordDocument {
    constructor(padding, fontSize, fontFamily) {
        this.padding = padding
        this.fontSize = fontSize
        this.fontFamily = fontFamily
    }

    clone() {
        return new WordDocument(this.padding, this.fontSize, this.fontFamily)
    }
}

const designPatternsReportWordSettings = new WordDocument(50, 12, 'Roboto')
const engineeringThesisWordSettings = designPatternsReportWordSettings.clone()
