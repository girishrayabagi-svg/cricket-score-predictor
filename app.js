// Cricket Score Prediction Application
class CricketPredictor {
    constructor() {
        this.data = this.initializeData();
        this.form = document.getElementById('prediction-form');
        this.resultsPanel = document.getElementById('prediction-results');
        this.resultsPlaceholder = document.getElementById('results-placeholder');
        
        this.initializeElements();
        this.bindEvents();
        this.populateDropdowns();
        this.updateSliderValues();
    }

    initializeData() {
        return {
            players: [
                {
                    id: 1,
                    name: "Virat Kohli",
                    matches: 274,
                    average: 58.07,
                    strikeRate: 93.17,
                    centuries: 46,
                    format: "ODI",
                    strongVenues: ["Eden Gardens", "M Chinnaswamy Stadium"],
                    weakVenues: ["Lords", "SCG"]
                },
                {
                    id: 2,
                    name: "Will Jacks",
                    matches: 37,
                    average: 26.08,
                    strikeRate: 161.02,
                    centuries: 1,
                    format: "T20",
                    strongVenues: ["The Oval"],
                    weakVenues: ["Birmingham", "Old Trafford"]
                },
                {
                    id: 3,
                    name: "Jos Buttler",
                    matches: 161,
                    average: 40.78,
                    strikeRate: 118.58,
                    centuries: 11,
                    format: "ODI",
                    strongVenues: ["The Oval", "Old Trafford"],
                    weakVenues: ["Wankhede Stadium", "Eden Gardens"]
                },
                {
                    id: 4,
                    name: "David Warner",
                    matches: 128,
                    average: 44.59,
                    strikeRate: 95.43,
                    centuries: 18,
                    format: "ODI",
                    strongVenues: ["SCG", "MCG"],
                    weakVenues: ["Lords", "The Oval"]
                },
                {
                    id: 5,
                    name: "Laura Wolvaardt",
                    matches: 31,
                    average: 40.56,
                    strikeRate: 122.76,
                    centuries: 0,
                    format: "T100",
                    strongVenues: ["Manchester", "Southampton"],
                    weakVenues: ["Nottingham"]
                },
                {
                    id: 6,
                    name: "Meg Lanning",
                    matches: 14,
                    average:26.42,
                    strikeRate: 141.22,
                    centuries: 0,
                    format: "T100",
                    strongVenues: ["Lord's", "The Oval"],
                    weakVenues: ["Wankhede Stadium", "SCG"]
                },
                {
                    id: 7,
                    name: "James Vince",
                    matches: 40,
                    average: 31.51,
                    strikeRate: 138.85,
                    centuries: 0,
                    format: "T20",
                    strongVenues: ["Southampton", "Eden Gardens"],
                    weakVenues: ["Southampton", "Birmingham"]
                },
                 {
                    id: 8,
                    name: "Bryony Smith",
                    matches: 34,
                    average: 19.55,
                    strikeRate: 131.16,
                    centuries: 0,
                    format: "T20",
                    strongVenues: ["Birmingham", "Eden Gardens"],
                    weakVenues: ["Nottingham", "Birmingham"]
                },
                 {
                    id: 9,
                    name: "Beth Mooney",
                    matches: 19,
                    average: 33.60,
                    strikeRate: 135.48,
                    centuries: 0,
                    format: "T20",
                    strongVenues: ["The Oval", "Eden Gardens"],
                    weakVenues: ["Manchester", "Birmingham"]
                },
                {
                    id: 10,
                    name: "Kane Williamson",
                    matches: 151,
                    average: 47.48,
                    strikeRate: 81.71,
                    centuries: 13,
                    format: "ODI",
                    strongVenues: ["Eden Park", "Hagley Oval"],
                    weakVenues: ["Wankhede Stadium", "SCG"]
                }
            ],
            venues: [
                {
                    id: 1,
                    name: "The Rose Bowl Southampton",
                    city: "Southampton",
                    country: "England",
                    averageScore: 121.5,
                    venueFactor: 1.08,
                    battingFriendly: false,
                    boundarySize: "Medium",
                    pitchType: "bowling-friendly"
                },
                {
                    id: 2,
                    name: "The Lords",
                    city: "London",
                    country: "England",
                    averageScore: 245,
                    venueFactor: 0.95,
                    battingFriendly: false,
                    boundarySize: "Medium",
                    pitchType: "Bowler-friendly"
                },
                    {
                    id: 3,
                    name: "Trent Bridge",
                    city: "Nottingham",
                    country: "England",
                    averageScore: 108,
                    venueFactor: 0.95,
                    battingFriendly: true,
                    boundarySize: "Medium",
                    pitchType: "Bowler-friendly"
                },
               
            ],
            teams: [
                {
                    id: 1,
                    name: " Oval Invincibles Women",
                    bowlingStrength: 8.1,
                    paceAttack: 7.6,
                    spinAttack: 8.5
                },
                {
                    id: 2,
                    name: "Southern Brave Women",
                    bowlingStrength: 7.3,
                    paceAttack: 7.3,
                    spinAttack: 7.0
                },
                 {
                    id: 3,
                    name: "Trent Rockets Women",
                    bowlingStrength: 6.5,
                    paceAttack: 7.0,
                    spinAttack: 6.1
                },
                 {
                    id: 4,
                    name: "Manchester Originals Women",
                    bowlingStrength: 12.6,
                    paceAttack: 15.0,
                    spinAttack: 10.0
                },
                {
                    id: 5,
                    name: "Southern Brave",
                    bowlingStrength: 8.1,
                    paceAttack: 8.5,
                    spinAttack: 7.2
                },
                {
                    id: 6,
                    name: "Oval Invincibles",
                    bowlingStrength: 8.3,
                    paceAttack: 8.8,
                    spinAttack: 8.0
                },
                {
                    id: 7,
                    name: "New Zealand",
                    bowlingStrength: 7.9,
                    paceAttack: 8.3,
                    spinAttack: 6.8
                },
                {
                    id: 8,
                    name: "South Africa",
                    bowlingStrength: 8.0,
                    paceAttack: 8.7,
                    spinAttack: 6.9
                }
            ]
        };
    }

    initializeElements() {
        this.elements = {
            playerSelect: document.getElementById('player-select'),
            venueSelect: document.getElementById('venue-select'),
            oppositionSelect: document.getElementById('opposition-select'),
            formatSelect: document.getElementById('format-select'),
            battingPosition: document.getElementById('batting-position'),
            temperature: document.getElementById('temperature'),
            humidity: document.getElementById('humidity'),
            windSpeed: document.getElementById('wind-speed'),
            recentForm: document.getElementById('recent-form'),
            sleepQuality: document.getElementById('sleep-quality'),
            daysSinceMatch: document.getElementById('days-since-match'),
            socialSentiment: document.getElementById('social-sentiment'),
            playerStats: document.getElementById('player-stats'),
            predictBtn: document.querySelector('.predict-btn'),
            resetBtn: document.querySelector('.reset-btn'),
            exportBtn: document.getElementById('export-btn'),
            newPredictionBtn: document.getElementById('new-prediction-btn')
        };
    }

    bindEvents() {
        this.form.addEventListener('submit', this.handlePrediction.bind(this));
        this.elements.resetBtn.addEventListener('click', this.resetForm.bind(this));
        this.elements.exportBtn.addEventListener('click', this.exportPrediction.bind(this));
        this.elements.newPredictionBtn.addEventListener('click', this.newPrediction.bind(this));
        
        this.elements.playerSelect.addEventListener('change', this.updatePlayerStats.bind(this));
        
        // Slider value updates
        const sliders = [
            { element: this.elements.battingPosition, display: 'position-value' },
            { element: this.elements.temperature, display: 'temp-value' },
            { element: this.elements.humidity, display: 'humidity-value' },
            { element: this.elements.windSpeed, display: 'wind-value' },
            { element: this.elements.recentForm, display: 'form-value' },
            { element: this.elements.sleepQuality, display: 'sleep-value' },
            { element: this.elements.daysSinceMatch, display: 'days-value' },
            { element: this.elements.socialSentiment, display: 'sentiment-value' }
        ];

        sliders.forEach(slider => {
            slider.element.addEventListener('input', (e) => {
                document.getElementById(slider.display).textContent = e.target.value;
            });
        });
    }

    populateDropdowns() {
        // Populate players
        this.data.players.forEach(player => {
            const option = document.createElement('option');
            option.value = player.id;
            option.textContent = player.name;
            this.elements.playerSelect.appendChild(option);
        });

        // Populate venues
        this.data.venues.forEach(venue => {
            const option = document.createElement('option');
            option.value = venue.id;
            option.textContent = `${venue.name}, ${venue.city}`;
            this.elements.venueSelect.appendChild(option);
        });

        // Populate opposition teams
        this.data.teams.forEach(team => {
            const option = document.createElement('option');
            option.value = team.id;
            option.textContent = team.name;
            this.elements.oppositionSelect.appendChild(option);
        });
    }

    updateSliderValues() {
        document.getElementById('position-value').textContent = this.elements.battingPosition.value;
        document.getElementById('temp-value').textContent = this.elements.temperature.value;
        document.getElementById('humidity-value').textContent = this.elements.humidity.value;
        document.getElementById('wind-value').textContent = this.elements.windSpeed.value;
        document.getElementById('form-value').textContent = this.elements.recentForm.value;
        document.getElementById('sleep-value').textContent = this.elements.sleepQuality.value;
        document.getElementById('days-value').textContent = this.elements.daysSinceMatch.value;
        document.getElementById('sentiment-value').textContent = this.elements.socialSentiment.value;
    }

    updatePlayerStats() {
        const playerId = parseInt(this.elements.playerSelect.value);
        const player = this.data.players.find(p => p.id === playerId);
        
        if (player) {
            document.getElementById('player-matches').textContent = player.matches;
            document.getElementById('player-average').textContent = player.average.toFixed(2);
            document.getElementById('player-sr').textContent = player.strikeRate.toFixed(2);
            this.elements.playerStats.classList.remove('hidden');
        } else {
            this.elements.playerStats.classList.add('hidden');
        }
    }

    async handlePrediction(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            return;
        }

        this.showLoading(true);
        
        try {
            // Simulate prediction calculation delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const prediction = this.calculatePrediction();
            this.displayResults(prediction);
        } catch (error) {
            console.error('Prediction error:', error);
        } finally {
            this.showLoading(false);
        }
    }

    validateForm() {
        const requiredFields = ['player-select', 'venue-select', 'opposition-select', 'format-select'];
        let isValid = true;

        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field.value) {
                field.style.borderColor = '#ff5459';
                isValid = false;
            } else {
                field.style.borderColor = '';
            }
        });

        if (!isValid) {
            alert('Please fill in all required fields (Player, Venue, Opposition, Format)');
        }

        return isValid;
    }

    calculatePrediction() {
        const formData = this.getFormData();
        const player = this.data.players.find(p => p.id === parseInt(formData.player));
        const venue = this.data.venues.find(v => v.id === parseInt(formData.venue));
        const opposition = this.data.teams.find(t => t.id === parseInt(formData.opposition));

        // Start with player's average as baseline
        let baseScore = player.average;
        let factors = [];

        // Apply form multiplier
        const formMultiplier = formData.recentForm / 5;
        const formImpact = Math.round((formMultiplier - 1) * baseScore);
        baseScore *= formMultiplier;
        factors.push({
            name: 'Player Form Impact',
            impact: formImpact,
            type: formImpact >= 0 ? 'positive' : 'negative'
        });

        // Venue factor
        const venueImpact = Math.round(baseScore * (venue.venueFactor - 1));
        baseScore *= venue.venueFactor;
        factors.push({
            name: 'Venue Factor',
            impact: venueImpact,
            type: venueImpact >= 0 ? 'positive' : 'negative'
        });

        // Weather adjustments
        let weatherMultiplier = 1;
        const temp = formData.temperature;
        if (temp < 20 || temp > 35) {
            weatherMultiplier *= 0.95;
        } else if (temp >= 23 && temp <= 27) {
            weatherMultiplier *= 1.02;
        }

        const humidity = formData.humidity;
        if (humidity > 75) weatherMultiplier *= 0.98;
        else if (humidity < 45) weatherMultiplier *= 1.01;

        if (formData.dew === 'yes' && formData.format === 'T20') {
            weatherMultiplier *= 1.1;
        }

        const windSpeed = formData.windSpeed;
        if (windSpeed > 15) weatherMultiplier *= 0.96;

        const weatherImpact = Math.round(baseScore * (weatherMultiplier - 1));
        baseScore *= weatherMultiplier;
        factors.push({
            name: 'Weather Conditions',
            impact: weatherImpact,
            type: weatherImpact >= 0 ? 'positive' : 'negative'
        });

        // Opposition strength
        const oppositionFactor = 1 - ((opposition.bowlingStrength - 7) * 0.02);
        const oppositionImpact = Math.round(baseScore * (oppositionFactor - 1));
        baseScore *= oppositionFactor;
        factors.push({
            name: 'Opposition Strength',
            impact: oppositionImpact,
            type: oppositionImpact >= 0 ? 'positive' : 'negative'
        });

        // Format adjustments
        const formatAdjustments = {
            'T20': { multiplier: 0.6, bonus: 1.3 },
            'ODI': { multiplier: 1.0, bonus: 1.0 },
            'Test': { multiplier: 1.4, bonus: 0.7 }
        };
        const formatAdj = formatAdjustments[formData.format];
        baseScore = baseScore * formatAdj.multiplier;

        // Psychological factors
        let psychMultiplier = 1;
        const moodValues = { excellent: 1.05, good: 1.0, average: 0.98, poor: 0.93 };
        psychMultiplier *= moodValues[formData.mood];

        if (formData.pressure === 'high') psychMultiplier *= 0.95;
        
        const sentimentImpact = formData.socialSentiment * 0.005;
        psychMultiplier *= (1 + sentimentImpact);

        const psychImpact = Math.round(baseScore * (psychMultiplier - 1));
        baseScore *= psychMultiplier;
        factors.push({
            name: 'Psychological State',
            impact: psychImpact,
            type: psychImpact >= 0 ? 'positive' : 'negative'
        });

        // Physical condition
        let physicalMultiplier = 1;
        
        // Sleep quality
        if (formData.sleepQuality >= 8) physicalMultiplier *= 1.02;
        else if (formData.sleepQuality <= 5) physicalMultiplier *= 0.96;

        // Days since last match
        const daysSince = formData.daysSinceMatch;
        if (daysSince >= 7 && daysSince <= 14) physicalMultiplier *= 1.01;
        else if (daysSince > 21) physicalMultiplier *= 0.97;

        // Injury concerns
        if (formData.injury === 'minor') physicalMultiplier *= 0.95;
        else if (formData.injury === 'significant') physicalMultiplier *= 0.85;

        const physicalImpact = Math.round(baseScore * (physicalMultiplier - 1));
        baseScore *= physicalMultiplier;
        factors.push({
            name: 'Physical Condition',
            impact: physicalImpact,
            type: physicalImpact >= 0 ? 'positive' : 'negative'
        });

        // Batting position adjustment
        const position = formData.battingPosition;
        let positionMultiplier = 1;
        if (position <= 3) positionMultiplier = 1.05;
        else if (position >= 7) positionMultiplier = 0.9;

        baseScore *= positionMultiplier;

        // Add realistic randomness (±15%)
        const randomFactor = 0.85 + (Math.random() * 0.3);
        baseScore *= randomFactor;

        // Ensure reasonable bounds
        const predictedScore = Math.max(5, Math.round(baseScore));
        const confidenceRange = {
            lower: Math.max(0, Math.round(predictedScore * 0.7)),
            upper: Math.round(predictedScore * 1.4)
        };

        // Calculate probability distribution
        const probabilities = this.calculateProbabilities(predictedScore);

        return {
            predictedScore,
            confidenceRange,
            factors,
            probabilities,
            analysis: this.generateAnalysis(player, venue, formData, factors)
        };
    }

    calculateProbabilities(predictedScore) {
        const probabilities = {
            '0-20': 0,
            '21-40': 0,
            '41-60': 0,
            '60+': 0
        };

        if (predictedScore <= 20) {
            probabilities['0-20'] = 60;
            probabilities['21-40'] = 30;
            probabilities['41-60'] = 8;
            probabilities['60+'] = 2;
        } else if (predictedScore <= 40) {
            probabilities['0-20'] = 20;
            probabilities['21-40'] = 50;
            probabilities['41-60'] = 25;
            probabilities['60+'] = 5;
        } else if (predictedScore <= 60) {
            probabilities['0-20'] = 10;
            probabilities['21-40'] = 30;
            probabilities['41-60'] = 45;
            probabilities['60+'] = 15;
        } else {
            probabilities['0-20'] = 5;
            probabilities['21-40'] = 20;
            probabilities['41-60'] = 35;
            probabilities['60+'] = 40;
        }

        return probabilities;
    }

    generateAnalysis(player, venue, formData, factors) {
        let analysis = `Based on ${player.name}'s career average of ${player.average.toFixed(1)} runs, `;
        
        if (venue.battingFriendly) {
            analysis += `the batting-friendly conditions at ${venue.name} should favor scoring. `;
        } else {
            analysis += `the challenging conditions at ${venue.name} may restrict scoring. `;
        }

        const strongFactors = factors.filter(f => Math.abs(f.impact) > 3);
        if (strongFactors.length > 0) {
            analysis += `Key influencing factors include `;
            strongFactors.forEach((factor, index) => {
                if (index > 0 && index === strongFactors.length - 1) {
                    analysis += ' and ';
                } else if (index > 0) {
                    analysis += ', ';
                }
                analysis += `${factor.name.toLowerCase()} (${factor.impact >= 0 ? '+' : ''}${factor.impact} runs)`;
            });
            analysis += '. ';
        }

        if (formData.recentForm >= 8) {
            analysis += `Excellent recent form suggests ${player.name} is in prime batting condition. `;
        } else if (formData.recentForm <= 4) {
            analysis += `Recent poor form may impact performance negatively. `;
        }

        return analysis;
    }

    getFormData() {
        return {
            player: this.elements.playerSelect.value,
            venue: this.elements.venueSelect.value,
            opposition: this.elements.oppositionSelect.value,
            format: this.elements.formatSelect.value,
            battingPosition: parseInt(this.elements.battingPosition.value),
            weather: document.getElementById('weather-select').value,
            temperature: parseInt(this.elements.temperature.value),
            humidity: parseInt(this.elements.humidity.value),
            dew: document.querySelector('input[name="dew"]:checked').value,
            windSpeed: parseInt(this.elements.windSpeed.value),
            recentForm: parseInt(this.elements.recentForm.value),
            sleepQuality: parseInt(this.elements.sleepQuality.value),
            injury: document.querySelector('input[name="injury"]:checked').value,
            daysSinceMatch: parseInt(this.elements.daysSinceMatch.value),
            mood: document.getElementById('mood-select').value,
            pressure: document.querySelector('input[name="pressure"]:checked').value,
            socialSentiment: parseInt(this.elements.socialSentiment.value)
        };
    }

    displayResults(prediction) {
        console.log('Displaying results:', prediction);
        
        // Hide placeholder and show results
        this.resultsPlaceholder.classList.add('hidden');
        this.resultsPanel.classList.remove('hidden');

        // Update predicted score
        document.getElementById('predicted-runs').textContent = prediction.predictedScore;
        document.getElementById('confidence-range').textContent = 
            `${prediction.confidenceRange.lower}-${prediction.confidenceRange.upper} runs`;

        // Update probability bars with animation delay
        const probBars = document.querySelectorAll('.prob-bar');
        const ranges = ['0-20', '21-40', '41-60', '60+'];
        
        ranges.forEach((range, index) => {
            const bar = probBars[index];
            const fill = bar.querySelector('.prob-fill');
            const percent = bar.querySelector('.prob-percent');
            
            const probability = prediction.probabilities[range];
            
            // Animate the bars
            setTimeout(() => {
                fill.style.width = `${probability}%`;
                percent.textContent = `${probability}%`;
            }, index * 100);
        });

        // Update factors list
        const factorsList = document.getElementById('factors-list');
        factorsList.innerHTML = '';
        prediction.factors.forEach((factor, index) => {
            const factorDiv = document.createElement('div');
            factorDiv.className = 'factor-item';
            factorDiv.innerHTML = `
                <span class="factor-name">${factor.name}</span>
                <span class="factor-impact ${factor.type}">
                    ${factor.impact >= 0 ? '+' : ''}${factor.impact} runs
                </span>
            `;
            // Add with slight delay for animation effect
            setTimeout(() => {
                factorsList.appendChild(factorDiv);
            }, index * 50);
        });

        // Update analysis
        document.getElementById('analysis-text').textContent = prediction.analysis;

        // Scroll to results with smooth animation
        setTimeout(() => {
            this.resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
    }

    showLoading(show) {
        const btn = this.elements.predictBtn;
        const btnText = btn.querySelector('.btn-text');
        const btnLoading = btn.querySelector('.btn-loading');
        
        if (show) {
            btn.classList.add('loading');
            btn.disabled = true;
            btnText.classList.add('hidden');
            btnLoading.classList.remove('hidden');
        } else {
            btn.classList.remove('loading');
            btn.disabled = false;
            btnText.classList.remove('hidden');
            btnLoading.classList.add('hidden');
        }
    }

    resetForm() {
        this.form.reset();
        this.elements.playerStats.classList.add('hidden');
        this.resultsPanel.classList.add('hidden');
        this.resultsPlaceholder.classList.remove('hidden');
        this.updateSliderValues();
        
        // Reset any validation styles
        const requiredFields = ['player-select', 'venue-select', 'opposition-select', 'format-select'];
        requiredFields.forEach(fieldId => {
            document.getElementById(fieldId).style.borderColor = '';
        });
    }

    newPrediction() {
        this.resultsPanel.classList.add('hidden');
        this.resultsPlaceholder.classList.remove('hidden');
        document.querySelector('.input-panel').scrollIntoView({ behavior: 'smooth' });
    }

    exportPrediction() {
        const playerElement = this.elements.playerSelect;
        const venueElement = this.elements.venueSelect;
        
        if (!playerElement.value || !venueElement.value) {
            alert('No prediction data to export');
            return;
        }
        
        const player = this.data.players.find(p => p.id === parseInt(playerElement.value));
        const venue = this.data.venues.find(v => v.id === parseInt(venueElement.value));
        const predictedScore = document.getElementById('predicted-runs').textContent;
        const confidenceRange = document.getElementById('confidence-range').textContent;
        
        const exportData = `Cricket Score Prediction Summary
========================================

Player: ${player.name}
Venue: ${venue.name}
Predicted Score: ${predictedScore} runs
Confidence Range: ${confidenceRange}

Generated on: ${new Date().toLocaleString()}
Powered by Cricket Score Predictor`;

        const blob = new Blob([exportData], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${player.name.replace(' ', '_')}_prediction.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CricketPredictor();
});
