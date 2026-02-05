document.addEventListener('DOMContentLoaded', () => {
    const app = new RobCoTerminal();
    app.initialize();
});

class RobCoTerminal {
    constructor() {
        this.outputDiv = document.getElementById('text-output');
        this.screenDiv = document.getElementById('screen');
        this.contentDiv = document.getElementById('terminal-text');
        this.terminal = new Terminal(this.outputDiv, this.contentDiv, this.screenDiv);
    }

    async initialize() {
        await this.terminal.sleep(2500);
        this.terminal.showUI();
        
        await this.terminal.displayBootSequence();
        await this.terminal.sleep(500);
        
        await this.terminal.typeWriter(ContentData.mainText);
    }
}