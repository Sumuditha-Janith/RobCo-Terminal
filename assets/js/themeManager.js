class ThemeManager {
    constructor() {
        this.themes = {
            green: {
                name: "CAPITAL WASTELAND",
                primary: "#1aff1a",
                glow: "#004d00",
                glowRgb: "0, 77, 0",
                bgTint: "#0a1f0a",
                weight: 4
            },
            amber: {
                name: "MOJAVE",
                primary: "#ffb642",
                glow: "#8a5a00",
                glowRgb: "138, 90, 0",
                bgTint: "#1a1205",
                weight: 4
            },
            white: {
                name: "INSTITUTE",
                primary: "#e9ffff",
                glow: "#5a7a7a",
                glowRgb: "90, 122, 122",
                bgTint: "#0d1212",
                weight: 1
            },
            blue: {
                name: "FOLLOWERS",
                primary: "#32fbff",
                glow: "#006b6e",
                glowRgb: "0, 107, 110",
                bgTint: "#051a1a",
                weight: 1
            }
        };
        
        this.currentTheme = null;
        this.previousTheme = null;
        
        this.savedTheme = localStorage.getItem('pipboy-theme');
        this.themeToggle = document.getElementById('theme-toggle');
    }
    
    getRandomTheme() {
        const weightedThemes = [];
        
        for (const [key, theme] of Object.entries(this.themes)) {
            for (let i = 0; i < theme.weight; i++) {
                weightedThemes.push(key);
            }
        }
        
        const randomIndex = Math.floor(Math.random() * weightedThemes.length);
        const themeKey = weightedThemes[randomIndex];
        
        return themeKey;
    }
    
    applyTheme(themeKey) {
        const theme = this.themes[themeKey];
        if (!theme) {
            console.error(`Theme ${themeKey} not found`);
            return;
        }
        
        this.previousTheme = this.currentTheme;
        this.currentTheme = themeKey;
        
        document.documentElement.style.setProperty('--pip-primary', theme.primary);
        document.documentElement.style.setProperty('--pip-glow', theme.glow);
        document.documentElement.style.setProperty('--pip-glow-rgb', theme.glowRgb);
        document.documentElement.style.setProperty('--bg-tint', theme.bgTint);
        
        if (this.themeToggle) {
            this.themeToggle.style.borderColor = theme.primary;
            this.themeToggle.style.color = theme.primary;
            this.themeToggle.style.boxShadow = 
                `0 0 10px ${theme.primary}, 0 0 20px ${theme.glow}`;
        }
        
        localStorage.setItem('pipboy-theme', themeKey);
        localStorage.setItem('pipboy-theme-name', theme.name);
        
        this.updateThemeIndicator();
        
        console.log(`Applied theme: ${theme.name}`);
    }
    

    initialize() {
        if (this.savedTheme && this.themes[this.savedTheme]) {
            this.applyTheme(this.savedTheme);
        } else {
            const randomThemeKey = this.getRandomTheme();
            this.applyTheme(randomThemeKey);
        }
        
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.cycleTheme();
            });
            
            document.addEventListener('keydown', (e) => {
                if (e.altKey && e.key === 't') {
                    this.cycleTheme();
                }
            });
        }
    }
    
    updateThemeIndicator() {
        // Remove existing indicator if any
        const existingIndicator = document.querySelector('.theme-indicator');
        if (existingIndicator) {
            existingIndicator.remove();
        }
        
        // const footer = document.querySelector('.footer');
        // if (footer && this.currentTheme) {
        //     const themeName = this.themes[this.currentTheme].name;
        //     const themeIndicator = document.createElement('div');
        //     themeIndicator.className = 'theme-indicator';
        //     themeIndicator.textContent = themeName;
        //     themeIndicator.title = 'Current Theme';
        //     footer.appendChild(themeIndicator);
        // }
    }
    
    cycleTheme() {
        const themeKeys = Object.keys(this.themes);
        const currentIndex = themeKeys.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themeKeys.length;
        this.applyTheme(themeKeys[nextIndex]);
        
        this.themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.themeToggle.style.transform = 'scale(1)';
        }, 150);
    }
    
    getCurrentTheme() {
        return this.themes[this.currentTheme];
    }
}