class Terminal {
    constructor(outputElement, contentElement, screenElement) {
        this.outputElement = outputElement;
        this.contentElement = contentElement;
        this.screenElement = screenElement;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getRandomDelay() {
        return Math.floor(Math.random() * 30) + 10;
    }

    async typeWriter(text, isBoot = false) {
        for (let i = 0; i < text.length; i++) {
            this.outputElement.textContent += text.charAt(i);
            this.contentElement.scrollTop = this.contentElement.scrollHeight;
            await this.sleep(isBoot ? 30 : this.getRandomDelay());
        }
    }

    async displayBootSequence() {
        for (let line of ContentData.bootText) {
            this.outputElement.textContent += line + "\n";
            await this.sleep(200);
        }
    }

    showUI() {
        this.screenElement.classList.add('on');
    }
}