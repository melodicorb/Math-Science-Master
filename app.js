const tools = [
    { id: 1, name: "Smart Math Solver", icon: "📐", color: "from-pink-500 to-purple-500", desc: "Solve complex mathematical equations" },
    { id: 2, name: "BMI Calculator", icon: "⚖️", color: "from-green-500 to-teal-500", desc: "Calculate Body Mass Index" },
    { id: 3, name: "Age Finder", icon: "🎂", color: "from-blue-500 to-indigo-500", desc: "Calculate age from birthdate" },
    { id: 4, name: "Distance Calculator", icon: "📏", color: "from-yellow-500 to-orange-500", desc: "Measure distance between points" },
    { id: 5, name: "GPA & Percentage Calculator", icon: "🎓", color: "from-red-500 to-pink-500", desc: "Convert grades to GPA" },
    { id: 6, name: "Fraction to Decimal", icon: "🔢", color: "from-purple-500 to-indigo-500", desc: "Convert fractions to decimals" },
    { id: 7, name: "Binary to Decimal", icon: "💻", color: "from-gray-500 to-blue-500", desc: "Convert binary to decimal" },
    { id: 8, name: "Roman Numeral Converter", icon: "🏛️", color: "from-green-400 to-blue-500", desc: "Convert to/from Roman numerals" },
    { id: 9, name: "Number Translator", icon: "🔠", color: "from-yellow-400 to-red-500", desc: "Translate numbers between languages" },
    { id: 10, name: "Day Finder", icon: "📆", color: "from-pink-400 to-purple-500", desc: "Find day of the week from date" },
    { id: 11, name: "Unit Converter", icon: "🛠️", color: "from-blue-400 to-green-500", desc: "Convert between different units" },
    { id: 12, name: "Temperature Converter", icon: "🌡️", color: "from-red-400 to-yellow-500", desc: "Convert between temperature units" },
    { id: 13, name: "Height Converter", icon: "📏", color: "from-teal-400 to-blue-500", desc: "Convert between height units" },
    { id: 14, name: "Weight Converter", icon: "⚖️", color: "from-purple-400 to-pink-500", desc: "Convert between weight units" },
    { id: 15, name: "Speed Converter", icon: "🚀", color: "from-green-500 to-yellow-500", desc: "Convert between speed units" },
    { id: 16, name: "HEX to RGB", icon: "🎨", color: "from-blue-500 to-purple-500", desc: "Convert HEX colors to RGB" },
    { id: 17, name: "RGB to HSL", icon: "🖌️", color: "from-red-500 to-blue-500", desc: "Convert RGB colors to HSL" },
    { id: 18, name: "Tithi & Calendar", icon: "📅", color: "from-yellow-500 to-green-500", desc: "View Tithi and calendar" },
    { id: 19, name: "Color Name Detector", icon: "🌈", color: "from-indigo-500 to-purple-500", desc: "Detect color names from codes" },
    { id: 20, name: "Lunar Age Calculator", icon: "🌕", color: "from-blue-500 to-gray-500", desc: "Calculate lunar age" }
];

function createToolCard(tool) {
    return `
        <div class="tool-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer" 
             onclick="openTool(${tool.id})">
            <div class="text-4xl mb-4 animate-bounce-slow">${tool.icon}</div>
            <h2 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${tool.color} mb-2">
                ${tool.name}
            </h2>
            <p class="text-gray-600 dark:text-gray-300 text-sm">${tool.desc}</p>
        </div>
    `;
}

function openTool(id) {
    const tool = tools.find(t => t.id === id);
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'tool-modal';
    modal.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold">${tool.icon} ${tool.name}</h3>
            <button class="close-modal text-gray-500 hover:text-gray-700">✕</button>
        </div>
        <div id="tool-content" class="min-h-[200px]"></div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add('active'), 10);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 300);
    };

    loadToolContent(tool.id);
}

function loadToolContent(toolId) {
    const content = document.getElementById('tool-content');
    content.innerHTML = '<div class="loading mx-auto"></div>';

    switch(toolId) {
        case 1: renderMathSolver(content); break;
        case 2: renderBMICalculator(content); break;
        case 3: renderAgeFinder(content); break;
        case 4: renderDistanceCalculator(content); break;
        case 5: renderGPACalculator(content); break;
        case 6: renderFractionCalculator(content); break;
        case 7: renderBinaryConverter(content); break;
        case 8: renderRomanConverter(content); break;
        case 9: renderNumberTranslator(content); break;
        case 10: renderDayFinder(content); break;
        case 11: renderUnitConverter(content); break;
        case 12: renderTemperatureConverter(content); break;
        case 13: renderHeightConverter(content); break;
        case 14: renderWeightConverter(content); break;
        case 15: renderSpeedConverter(content); break;
        case 16: renderHexRgbConverter(content); break;
        case 17: renderRgbHslConverter(content); break;
        case 18: renderTithiCalendar(content); break;
        case 19: renderColorDetector(content); break;
        case 20: renderLunarCalculator(content); break;
        default: content.innerHTML = '<p class="text-center">Tool coming soon!</p>';
    }
}

function renderMathSolver(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <div class="flex gap-2">
                <input type="text" id="math-expression" placeholder="Example: 2 * (3 + 4)" 
                       class="flex-1 p-2 border rounded dark:bg-gray-700">
                <button onclick="insertMathSymbol('√')" class="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded">√</button>
                <button onclick="insertMathSymbol('^')" class="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded">^</button>
                <button onclick="insertMathSymbol('π')" class="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded">π</button>
            </div>
            <div class="flex gap-2 overflow-x-auto py-2">
                <button onclick="insertFunction('sin')" class="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded whitespace-nowrap">sin(x)</button>
                <button onclick="insertFunction('cos')" class="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded whitespace-nowrap">cos(x)</button>
                <button onclick="insertFunction('tan')" class="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded whitespace-nowrap">tan(x)</button>
                <button onclick="insertFunction('log')" class="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded whitespace-nowrap">log(x)</button>
                <button onclick="insertFunction('ln')" class="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded whitespace-nowrap">ln(x)</button>
            </div>
            <div class="flex gap-2">
                <button onclick="solveMathExpression()" 
                        class="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Solve</button>
                <button onclick="clearHistory()"
                        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Clear</button>
            </div>
            <div id="math-result" class="mt-4 text-lg"></div>
            <div class="mt-4">
                <h4 class="font-bold mb-2">History:</h4>
                <div id="math-history" class="space-y-2 max-h-40 overflow-y-auto"></div>
            </div>
        </div>
    `;
}

function insertMathSymbol(symbol) {
    const input = document.getElementById('math-expression');
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const value = input.value;
    input.value = value.substring(0, start) + symbol + value.substring(end);
    input.focus();
    input.setSelectionRange(start + 1, start + 1);
}

function insertFunction(func) {
    const input = document.getElementById('math-expression');
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const value = input.value;
    const selection = value.substring(start, end);
    const insertion = selection ? `${func}(${selection})` : `${func}()`;
    input.value = value.substring(0, start) + insertion + value.substring(end);
    input.focus();
}

function solveMathExpression() {
    try {
        const expr = document.getElementById('math-expression').value
            .replace(/π/g, 'Math.PI')
            .replace(/sqrt|√/g, 'Math.sqrt')
            .replace(/\^/g, '**')
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/log\(/g, 'Math.log10(')
            .replace(/ln\(/g, 'Math.log(');

        const result = Function('"use strict";return (' + expr + ')')();
        const formattedResult = formatNumber(result);
        showResult('math-result', `Result: ${formattedResult}`);
        addToHistory(expr, formattedResult);
    } catch (error) {
        showError('math-result', 'Invalid expression');
    }
}

function formatNumber(num) {
    if (Math.abs(num) < 0.0001 || Math.abs(num) > 9999999) {
        return num.toExponential(4);
    }
    return Number.isInteger(num) ? num : num.toFixed(4);
}

function addToHistory(expression, result) {
    const history = document.getElementById('math-history');
    const entry = document.createElement('div');
    entry.className = 'p-2 bg-gray-100 dark:bg-gray-800 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700';
    entry.innerHTML = `${expression} = ${result}`;
    entry.onclick = () => {
        document.getElementById('math-expression').value = expression;
    };
    history.insertBefore(entry, history.firstChild);
}

function clearHistory() {
    document.getElementById('math-history').innerHTML = '';
    document.getElementById('math-expression').value = '';
    document.getElementById('math-result').textContent = '';
}

function renderBMICalculator(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm mb-1">Weight</label>
                    <div class="flex gap-2">
                        <input type="number" id="weight" placeholder="Weight" 
                               class="flex-1 p-2 border rounded dark:bg-gray-700">
                        <select id="weight-unit" class="p-2 border rounded dark:bg-gray-700">
                            <option value="kg">kg</option>
                            <option value="lb">lb</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="block text-sm mb-1">Height</label>
                    <div class="flex gap-2">
                        <input type="number" id="height" placeholder="Height" 
                               class="flex-1 p-2 border rounded dark:bg-gray-700">
                        <select id="height-unit" class="p-2 border rounded dark:bg-gray-700">
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                            <option value="ft">ft</option>
                            <option value="in">in</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm mb-1">Age</label>
                    <input type="number" id="age" placeholder="Age" 
                           class="w-full p-2 border rounded dark:bg-gray-700">
                </div>
                <div>
                    <label class="block text-sm mb-1">Gender</label>
                    <select id="gender" class="w-full p-2 border rounded dark:bg-gray-700">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>
            <button onclick="calculateBMI()" 
                    class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Calculate BMI</button>
            <div id="bmi-result" class="mt-4"></div>
            <div id="bmi-category" class="mt-2"></div>
            <div id="health-advice" class="mt-4 p-4 rounded bg-gray-100 dark:bg-gray-800 text-sm"></div>
            <div class="mt-4">
                <div class="h-6 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <div id="bmi-indicator" class="h-full w-1 bg-blue-500 transition-all duration-500"></div>
                </div>
                <div class="flex justify-between text-xs mt-1">
                    <span>Underweight</span>
                    <span>Normal</span>
                    <span>Overweight</span>
                    <span>Obese</span>
                </div>
            </div>
        </div>
    `;
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const weightUnit = document.getElementById('weight-unit').value;
    const heightUnit = document.getElementById('height-unit').value;
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;

    if (!weight || !height || !age) {
        showError('bmi-result', 'Please fill in all fields');
        return;
    }

    // Convert weight to kg
    let weightKg = weight;
    if (weightUnit === 'lb') {
        weightKg = weight * 0.453592;
    }

    // Convert height to meters
    let heightM = height;
    if (heightUnit === 'cm') {
        heightM = height / 100;
    } else if (heightUnit === 'ft') {
        heightM = height * 0.3048;
    } else if (heightUnit === 'in') {
        heightM = height * 0.0254;
    }

    const bmi = weightKg / (heightM * heightM);
    const category = getBMICategory(bmi);
    const advice = getHealthAdvice(bmi, age, gender);
    
    showResult('bmi-result', `BMI: ${bmi.toFixed(1)}`);
    
    const categoryElement = document.getElementById('bmi-category');
    categoryElement.textContent = `Category: ${category}`;
    categoryElement.className = getBMICategoryColor(category);
    
    document.getElementById('health-advice').innerHTML = advice;
    
    // Update BMI indicator
    const indicator = document.getElementById('bmi-indicator');
    const position = ((bmi - 10) / 30) * 100; // Scale BMI from 10-40 to 0-100%
    indicator.style.marginLeft = `${Math.min(Math.max(position, 0), 100)}%`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 24.9) return 'Normal weight';
    if (bmi < 29.9) return 'Overweight';
    return 'Obese';
}

function getBMICategoryColor(category) {
    const colors = {
        'Underweight': 'mt-4 text-lg text-yellow-600 dark:text-yellow-400',
        'Normal weight': 'mt-4 text-lg text-green-600 dark:text-green-400',
        'Overweight': 'mt-4 text-lg text-orange-600 dark:text-orange-400',
        'Obese': 'mt-4 text-lg text-red-600 dark:text-red-400'
    };
    return colors[category];
}

function getHealthAdvice(bmi, age, gender) {
    let advice = '<strong>Health Recommendations:</strong><br>';
    
    if (bmi < 18.5) {
        advice += `
            • Consider increasing your caloric intake<br>
            • Focus on nutrient-rich foods<br>
            • Consider strength training exercises<br>
            • Consult a nutritionist for a personalized diet plan
        `;
    } else if (bmi < 24.9) {
        advice += `
            • Maintain your current healthy lifestyle<br>
            • Regular exercise (150 minutes/week)<br>
            • Balanced diet with plenty of vegetables<br>
            • Regular health check-ups
        `;
    } else if (bmi < 29.9) {
        advice += `
            • Moderate calorie reduction<br>
            • Increase physical activity<br>
            • Focus on whole foods<br>
            • Regular monitoring of weight
        `;
    } else {
        advice += `
            • Consult healthcare provider<br>
            • Structured weight loss program<br>
            • Regular physical activity<br>
            • Consider professional nutrition guidance
        `;
    }

    if (age > 60) {
        advice += '<br><br><strong>Senior Health Note:</strong><br>• Consult doctor before starting new exercise routine';
    }

    return advice;
}

function renderAgeFinder(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm mb-1">Birth Date</label>
                    <input type="date" id="birthdate" 
                           class="w-full p-2 border rounded dark:bg-gray-700">
                </div>
                <div>
                    <label class="block text-sm mb-1">Compare To (optional)</label>
                    <input type="date" id="compare-date" 
                           class="w-full p-2 border rounded dark:bg-gray-700"
                           value="${new Date().toISOString().split('T')[0]}">
                </div>
            </div>
            <button onclick="calculateDetailedAge()" 
                    class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Calculate Age</button>
            <div id="age-result" class="mt-4 text-lg"></div>
            <div id="age-details" class="mt-4 space-y-2"></div>
            <div id="upcoming-birthday" class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded"></div>
            <div id="age-facts" class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded text-sm"></div>
        </div>
    `;
}

function calculateDetailedAge() {
    const birthDate = new Date(document.getElementById('birthdate').value);
    const compareDate = new Date(document.getElementById('compare-date').value);
    
    if (!birthDate || birthDate > compareDate) {
        showError('age-result', 'Please enter a valid birth date');
        return;
    }

    const ageDetails = getAgeDetails(birthDate, compareDate);
    showResult('age-result', `Age: ${ageDetails.years} years`);
    
    // Show detailed breakdown
    const detailsDiv = document.getElementById('age-details');
    detailsDiv.innerHTML = `
        <div class="grid grid-cols-2 gap-4">
            <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded">
                <div class="text-sm text-gray-600 dark:text-gray-400">In Months</div>
                <div class="text-lg">${ageDetails.totalMonths} months</div>
            </div>
            <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded">
                <div class="text-sm text-gray-600 dark:text-gray-400">In Weeks</div>
                <div class="text-lg">${ageDetails.totalWeeks} weeks</div>
            </div>
            <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded">
                <div class="text-sm text-gray-600 dark:text-gray-400">In Days</div>
                <div class="text-lg">${ageDetails.totalDays} days</div>
            </div>
            <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded">
                <div class="text-sm text-gray-600 dark:text-gray-400">In Hours</div>
                <div class="text-lg">${ageDetails.totalHours} hours</div>
            </div>
        </div>
        <div class="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded">
            <div class="text-sm text-gray-600 dark:text-gray-400">Precise Age</div>
            <div>${ageDetails.years} years, ${ageDetails.months} months, ${ageDetails.days} days</div>
        </div>
    `;

    // Show next birthday info
    const nextBirthday = getNextBirthday(birthDate, compareDate);
    document.getElementById('upcoming-birthday').innerHTML = `
        <div class="text-sm font-bold mb-2">Next Birthday</div>
        <div>In ${nextBirthday.daysUntil} days</div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
            (${nextBirthday.date.toDateString()})
        </div>
    `;

    // Show interesting age facts
    const facts = getAgeFacts(ageDetails);
    document.getElementById('age-facts').innerHTML = `
        <div class="text-sm font-bold mb-2">Fun Facts</div>
        ${facts.map(fact => `<div class="mb-1">• ${fact}</div>`).join('')}
    `;
}

function getAgeDetails(birthDate, compareDate) {
    const diffTime = compareDate - birthDate;
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalMonths = Math.floor(totalDays / 30.44);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const days = Math.floor(totalDays % 30.44);
    
    return {
        years,
        months,
        days,
        totalDays,
        totalMonths,
        totalWeeks: Math.floor(totalDays / 7),
        totalHours: Math.floor(diffTime / (1000 * 60 * 60))
    };
}

function getNextBirthday(birthDate, compareDate) {
    const nextBirthday = new Date(compareDate.getFullYear(), 
                                 birthDate.getMonth(),
                                 birthDate.getDate());
    
    if (nextBirthday < compareDate) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    
    const daysUntil = Math.ceil((nextBirthday - compareDate) / (1000 * 60 * 60 * 24));
    
    return {
        date: nextBirthday,
        daysUntil
    };
}

function getAgeFacts(ageDetails) {
    const facts = [
        `You've experienced approximately ${Math.floor(ageDetails.totalDays * 0.33)} sleep cycles`,
        `Your heart has beaten about ${Math.floor(ageDetails.totalDays * 24 * 60 * 70)} times`,
        `You've taken around ${Math.floor(ageDetails.totalDays * 24 * 60 * 12)} breaths`,
        `You've lived through ${Math.floor(ageDetails.years * 52)} weekends`
    ];
    
    if (ageDetails.years >= 18) {
        facts.push("You're old enough to vote in most countries");
    }
    
    return facts;
}

function renderDistanceCalculator(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <input type="number" id="x1" placeholder="X1" class="p-2 border rounded dark:bg-gray-700">
                <input type="number" id="y1" placeholder="Y1" class="p-2 border rounded dark:bg-gray-700">
                <input type="number" id="x2" placeholder="X2" class="p-2 border rounded dark:bg-gray-700">
                <input type="number" id="y2" placeholder="Y2" class="p-2 border rounded dark:bg-gray-700">
            </div>
            <button onclick="calculateDistance()" 
                    class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Calculate Distance</button>
            <div id="distance-result" class="mt-4 text-lg"></div>
        </div>
    `;
}

function renderGPACalculator(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <div id="grades-container">
                <div class="grade-input flex gap-2 mb-2">
                    <input type="number" placeholder="Grade" class="w-1/2 p-2 border rounded dark:bg-gray-700">
                    <input type="number" placeholder="Credits" class="w-1/2 p-2 border rounded dark:bg-gray-700">
                </div>
            </div>
            <button onclick="addGradeInput()" class="text-blue-500">+ Add Grade</button>
            <button onclick="calculateGPA()" 
                    class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Calculate GPA</button>
            <div id="gpa-result" class="mt-4 text-lg"></div>
        </div>
    `;
}

function renderFractionCalculator(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <div class="flex gap-2 items-center">
                <input type="number" id="numerator" placeholder="Numerator" class="w-1/2 p-2 border rounded dark:bg-gray-700">
                <div class="text-2xl">/</div>
                <input type="number" id="denominator" placeholder="Denominator" class="w-1/2 p-2 border rounded dark:bg-gray-700">
            </div>
            <button onclick="convertFraction()" class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Convert</button>
            <div id="fraction-result" class="mt-4 text-lg"></div>
        </div>
    `;
}

function convertFraction() {
    const num = parseFloat(document.getElementById('numerator').value);
    const den = parseFloat(document.getElementById('denominator').value);
    if (den === 0) {
        showError('fraction-result', 'Cannot divide by zero');
        return;
    }
    const decimal = num / den;
    showResult('fraction-result', `Decimal: ${decimal}`);
}

function renderBinaryConverter(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <input type="text" id="binary" placeholder="Enter binary number" pattern="[0-1]*"
                   class="w-full p-2 border rounded dark:bg-gray-700">
            <button onclick="convertBinary()" class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Convert</button>
            <div id="binary-result" class="mt-4 text-lg"></div>
        </div>
    `;
}

function renderRomanConverter(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <div class="flex gap-4">
                <div class="w-1/2">
                    <input type="number" id="decimal-input" placeholder="Decimal number" class="w-full p-2 border rounded dark:bg-gray-700">
                    <button onclick="decimalToRoman()" class="w-full mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">To Roman</button>
                </div>
                <div class="w-1/2">
                    <input type="text" id="roman-input" placeholder="Roman numeral" class="w-full p-2 border rounded dark:bg-gray-700">
                    <button onclick="romanToDecimal()" class="w-full mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">To Decimal</button>
                </div>
            </div>
            <div id="roman-result" class="mt-4 text-lg"></div>
        </div>
    `;
}

function renderNumberTranslator(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <input type="number" id="number-input" placeholder="Enter number" class="w-full p-2 border rounded dark:bg-gray-700">
            <select id="lang-select" class="w-full p-2 border rounded dark:bg-gray-700">
                <option value="bn">Bangla</option>
                <option value="en">English</option>
                <option value="roman">Roman</option>
            </select>
            <button onclick="translateNumber()" class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Translate</button>
            <div id="translation-result" class="mt-4 text-lg"></div>
        </div>
    `;
}

function renderDayFinder(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <input type="date" id="date-input" class="w-full p-2 border rounded dark:bg-gray-700">
            <button onclick="findDay()" class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Find Day</button>
            <div id="day-result" class="mt-4 text-lg"></div>
        </div>
    `;
}

function renderUnitConverter(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <select id="unit-type" class="w-full p-2 border rounded dark:bg-gray-700">
                <option value="length">Length</option>
                <option value="area">Area</option>
                <option value="volume">Volume</option>
            </select>
            <div class="grid grid-cols-2 gap-4">
                <input type="number" id="unit-input" class="p-2 border rounded dark:bg-gray-700">
                <select id="from-unit" class="p-2 border rounded dark:bg-gray-700"></select>
                <input type="number" id="unit-output" class="p-2 border rounded dark:bg-gray-700" readonly>
                <select id="to-unit" class="p-2 border rounded dark:bg-gray-700"></select>
            </div>
            <button onclick="convertUnit()" class="w-full bg-blue-500 text-white px-4 py-2 rounded">Convert</button>
        </div>
    `;
    initUnitConverter();
}

function renderTemperatureConverter(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label>Celsius</label>
                    <input type="number" id="celsius" class="w-full p-2 border rounded dark:bg-gray-700" 
                           oninput="convertFromCelsius(this.value)">
                </div>
                <div>
                    <label>Fahrenheit</label>
                    <input type="number" id="fahrenheit" class="w-full p-2 border rounded dark:bg-gray-700"
                           oninput="convertFromFahrenheit(this.value)">
                </div>
                <div>
                    <label>Kelvin</label>
                    <input type="number" id="kelvin" class="w-full p-2 border rounded dark:bg-gray-700"
                           oninput="convertFromKelvin(this.value)">
                </div>
            </div>
        </div>
    `;
}

function renderHeightConverter(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <input type="number" id="feet" placeholder="Feet" class="p-2 border rounded dark:bg-gray-700"
                       oninput="convertHeight('feet', this.value)">
                <input type="number" id="meters" placeholder="Meters" class="p-2 border rounded dark:bg-gray-700"
                       oninput="convertHeight('meters', this.value)">
                <input type="number" id="inches" placeholder="Inches" class="p-2 border rounded dark:bg-gray-700"
                       oninput="convertHeight('inches', this.value)">
                <input type="number" id="cm" placeholder="Centimeters" class="p-2 border rounded dark:bg-gray-700"
                       oninput="convertHeight('cm', this.value)">
            </div>
        </div>
    `;
}

function renderWeightConverter(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <input type="number" id="kg" placeholder="Kilograms" class="p-2 border rounded dark:bg-gray-700"
                       oninput="convertWeight('kg', this.value)">
                <input type="number" id="lb" placeholder="Pounds" class="p-2 border rounded dark:bg-gray-700"
                       oninput="convertWeight('lb', this.value)">
                <input type="number" id="oz" placeholder="Ounces" class="p-2 border rounded dark:bg-gray-700"
                       oninput="convertWeight('oz', this.value)">
                <input type="number" id="g" placeholder="Grams" class="p-2 border rounded dark:bg-gray-700"
                       oninput="convertWeight('g', this.value)">
            </div>
        </div>
    `;
}

function renderSpeedConverter(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <input type="number" id="kph" placeholder="km/h" class="p-2 border rounded dark:bg-gray-700"
                       oninput="convertSpeed('kph', this.value)">
                <input type="number" id="mph" placeholder="miles/h" class="p-2 border rounded dark:bg-gray-700"
                       oninput="convertSpeed('mph', this.value)">
                <input type="number" id="mps" placeholder="meters/s" class="p-2 border rounded dark:bg-gray-700"
                       oninput="convertSpeed('mps', this.value)">
                <input type="number" id="knot" placeholder="knots" class="p-2 border rounded dark:bg-gray-700"
                       oninput="convertSpeed('knot', this.value)">
            </div>
        </div>
    `;
}

function renderHexRgbConverter(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <input type="text" id="hex-input" placeholder="#FFFFFF" 
                   class="w-full p-2 border rounded dark:bg-gray-700">
            <div id="color-preview" class="h-12 rounded border"></div>
            <button onclick="convertHexToRgb()" 
                    class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Convert</button>
            <div id="rgb-result" class="mt-4 text-lg"></div>
        </div>
    `;
}

function renderRgbHslConverter(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <div class="grid grid-cols-3 gap-2">
                <input type="number" id="rgb-r" placeholder="R (0-255)" min="0" max="255" 
                       class="p-2 border rounded dark:bg-gray-700">
                <input type="number" id="rgb-g" placeholder="G (0-255)" min="0" max="255"
                       class="p-2 border rounded dark:bg-gray-700">
                <input type="number" id="rgb-b" placeholder="B (0-255)" min="0" max="255"
                       class="p-2 border rounded dark:bg-gray-700">
            </div>
            <div id="rgb-preview" class="h-12 rounded border"></div>
            <button onclick="convertRgbToHsl()"
                    class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Convert</button>
            <div id="hsl-result" class="mt-4 text-lg"></div>
        </div>
    `;
}

function renderColorDetector(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm mb-1">Color Picker</label>
                    <input type="color" id="color-picker" class="w-full h-12 cursor-pointer">
                </div>
                <div>
                    <label class="block text-sm mb-1">Manual Input</label>
                    <input type="text" id="color-input" placeholder="#FFFFFF or rgb(255,255,255)" 
                           class="w-full p-2 border rounded dark:bg-gray-700">
                </div>
            </div>
            <button onclick="detectColor()" 
                    class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Detect Color
            </button>
            <div class="flex gap-4 items-center">
                <div id="color-preview" class="w-24 h-24 rounded border"></div>
                <div id="color-info" class="flex-1 space-y-2">
                    <div class="grid grid-cols-2 gap-2 text-sm">
                        <div>Name: <span id="color-name" class="font-medium"></span></div>
                        <div>HEX: <span id="hex-value" class="font-mono"></span></div>
                        <div>RGB: <span id="rgb-value" class="font-mono"></span></div>
                        <div>HSL: <span id="hsl-value" class="font-mono"></span></div>
                    </div>
                </div>
            </div>
            <div id="color-scheme" class="mt-4">
                <h3 class="text-sm font-bold mb-2">Color Scheme</h3>
                <div id="scheme-colors" class="grid grid-cols-5 gap-2"></div>
            </div>
            <div id="color-history" class="mt-4">
                <h3 class="text-sm font-bold mb-2">Recently Used Colors</h3>
                <div id="history-colors" class="flex flex-wrap gap-2"></div>
            </div>
            <div class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                <h3 class="text-sm font-bold mb-2">Color Properties</h3>
                <div id="color-properties" class="text-sm space-y-1"></div>
            </div>
        </div>
    `;

    initColorDetector();
}

function detectColor() {
    const colorInput = document.getElementById('color-input').value.trim();
    const colorPicker = document.getElementById('color-picker');
    
    try {
        let color;
        if (colorInput.startsWith('#')) {
            // Handle hex color
            if (!/^#[0-9A-Fa-f]{6}$/i.test(colorInput)) {
                throw new Error('Invalid hex color format');
            }
            color = colorInput.toUpperCase();
        } else if (colorInput.startsWith('rgb')) {
            // Handle RGB color
            const rgb = colorInput.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
            if (!rgb || rgb.slice(1).some(v => v < 0 || v > 255)) {
                throw new Error('Invalid RGB color format');
            }
            color = rgbToHex(parseInt(rgb[1]), parseInt(rgb[2]), parseInt(rgb[3]));
        } else {
            // Try to parse as hex without #
            if (/^[0-9A-Fa-f]{6}$/i.test(colorInput)) {
                color = '#' + colorInput.toUpperCase();
            } else {
                throw new Error('Invalid color format');
            }
        }
        
        colorPicker.value = color;
        colorInput.value = color;
        updateColorInfo(color);
        addToColorHistory(color);
        
        // Show success message
        showToast('Color detected successfully!', 'success');
    } catch (error) {
        showToast(error.message, 'error');
    }
}

function updateColorScheme(color) {
    const scheme = generateColorScheme(color);
    const container = document.getElementById('scheme-colors');
    
    container.innerHTML = scheme.map(c => `
        <div class="h-12 rounded cursor-pointer" 
             style="background-color: ${c}"
             onclick="copyToClipboard('${c}')"
             title="${c}"></div>
    `).join('');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => showToast(`Copied ${text} to clipboard`))
        .catch(err => showToast('Failed to copy to clipboard'));
}

function calculateComplementary(hex) {
    const rgb = hexToRgb(hex);
    return rgbToHex(
        255 - rgb.r,
        255 - rgb.g,
        255 - rgb.b
    );
}

function showToast(message, type = 'error') {
    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    toast.className = `fixed bottom-4 right-4 ${bgColor} text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function loadColorHistory() {
    const history = JSON.parse(localStorage.getItem('colorHistory') || '[]');
    const container = document.getElementById('history-colors');
    
    container.innerHTML = history.map(color => `
        <div class="w-8 h-8 rounded cursor-pointer" 
             style="background-color: ${color}"
             onclick="loadHistoryColor('${color}')"
             title="${color}">
        </div>
    `).join('');
}

function addToColorHistory(color) {
    const history = JSON.parse(localStorage.getItem('colorHistory') || '[]');
    if (!history.includes(color)) {
        history.unshift(color);
        if (history.length > 20) history.pop();
        localStorage.setItem('colorHistory', JSON.stringify(history));
        loadColorHistory();
    }
}

function loadHistoryColor(color) {
    document.getElementById('color-input').value = color;
    document.getElementById('color-picker').value = color;
    updateColorInfo(color);
}

function renderLunarCalculator(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <input type="date" id="lunar-date" class="w-full p-2 border rounded dark:bg-gray-700">
            <button onclick="calculateLunarAge()"
                    class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Calculate</button>
            <div id="lunar-result" class="mt-4 text-lg"></div>
        </div>
    `;
}

function renderTithiCalendar(container) {
    container.innerHTML = `
        <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm mb-1">Select Date</label>
                    <input type="date" id="tithi-date" 
                           class="w-full p-2 border rounded dark:bg-gray-700"
                           value="${new Date().toISOString().split('T')[0]}">
                </div>
                <div>
                    <label class="block text-sm mb-1">Location</label>
                    <select id="location" class="w-full p-2 border rounded dark:bg-gray-700">
                        <option value="india">India (IST)</option>
                        <option value="nepal">Nepal</option>
                        <option value="sri-lanka">Sri Lanka</option>
                    </select>
                </div>
            </div>
            <button onclick="calculateTithi()" 
                    class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Calculate Tithi
            </button>
            <div class="grid grid-cols-2 gap-4 mt-4">
                <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                    <div id="tithi-info"></div>
                </div>
                <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded">
                    <div id="lunar-phase" class="text-center"></div>
                </div>
            </div>
            <div id="auspicious-times" class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                <h3 class="font-bold mb-2">Auspicious Times</h3>
                <div id="muhurtas" class="space-y-2"></div>
            </div>
            <div id="festivals" class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                <h3 class="font-bold mb-2">Festivals & Events</h3>
                <div id="festival-list"></div>
            </div>
            <div id="panchang" class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded space-y-2">
                <h3 class="font-bold mb-2">Panchang Details</h3>
                <div id="panchang-details"></div>
            </div>
        </div>
    `;

    // Initialize with current date
    calculateTithi();
}

function calculateTithi() {
    const date = new Date(document.getElementById('tithi-date').value);
    const location = document.getElementById('location').value;
    
    // Calculate lunar day (tithi)
    const lunarAge = calculateLunarDay(date);
    const tithiNumber = Math.ceil(lunarAge);
    const tithiDetails = getTithiDetails(tithiNumber);
    
    // Update Tithi Information
    document.getElementById('tithi-info').innerHTML = `
        <h3 class="font-bold mb-2">Tithi Details</h3>
        <div class="space-y-1">
            <div>Tithi: ${tithiDetails.name}</div>
            <div>Paksha: ${tithiDetails.paksha}</div>
            <div>Lunar Day: ${tithiNumber}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">${tithiDetails.description}</div>
        </div>
    `;

    // Update Lunar Phase Visualization
    const phaseEmoji = getLunarPhaseEmoji(lunarAge);
    document.getElementById('lunar-phase').innerHTML = `
        <div class="text-6xl mb-2">${phaseEmoji}</div>
        <div>${getLunarPhaseName(lunarAge)}</div>
    `;

    // Calculate and display muhurtas (auspicious times)
    const muhurtas = calculateMuhurtas(date, location);
    document.getElementById('muhurtas').innerHTML = muhurtas.map(m => `
        <div class="flex justify-between items-center">
            <span>${m.name}</span>
            <span class="text-sm text-gray-600 dark:text-gray-400">${m.time}</span>
        </div>
    `).join('');

    // Display festivals
    const festivals = getFestivals(date, location);
    document.getElementById('festival-list').innerHTML = festivals.length > 0 ?
        festivals.map(f => `<div class="mb-1">• ${f}</div>`).join('') :
        '<div class="text-gray-600 dark:text-gray-400">No festivals today</div>';

    // Display Panchang details
    const panchang = calculatePanchang(date, location);
    document.getElementById('panchang-details').innerHTML = `
        <div class="grid grid-cols-2 gap-2">
            <div>Nakshatra: ${panchang.nakshatra}</div>
            <div>Yoga: ${panchang.yoga}</div>
            <div>Karana: ${panchang.karana}</div>
            <div>Rashi: ${panchang.rashi}</div>
            <div>Sunrise: ${panchang.sunrise}</div>
            <div>Sunset: ${panchang.sunset}</div>
        </div>
    `;
}

function calculateLunarDay(date) {
    const lunarCycle = 29.53059;
    const refNewMoon = new Date('2000-01-06').getTime();
    const elapsed = date.getTime() - refNewMoon;
    const days = elapsed / (24 * 3600 * 1000);
    return (days % lunarCycle) + 1;
}

function getTithiDetails(tithiNumber) {
    const tithis = [
        { name: "Pratipada", paksha: "Shukla", description: "Good for starting new ventures" },
        { name: "Dwitiya", paksha: "Shukla", description: "Favorable for financial matters" },
        { name: "Tritiya", paksha: "Shukla", description: "Good for creativity and arts" },
        { name: "Chaturthi", paksha: "Shukla", description: "Dedicated to Ganesha, good for education" },
        { name: "Panchami", paksha: "Shukla", description: "Favorable for knowledge acquisition" },
        { name: "Shashti", paksha: "Shukla", description: "Good for victory and success" },
        { name: "Saptami", paksha: "Shukla", description: "Auspicious for travel" },
        { name: "Ashtami", paksha: "Shukla", description: "Good for spiritual practices" },
        { name: "Navami", paksha: "Shukla", description: "Favorable for worship and rituals" },
        { name: "Dashami", paksha: "Shukla", description: "Good for accomplishing tasks" },
        { name: "Ekadashi", paksha: "Shukla", description: "Auspicious for fasting and meditation" },
        { name: "Dwadashi", paksha: "Shukla", description: "Good for charitable activities" },
        { name: "Trayodashi", paksha: "Shukla", description: "Favorable for prosperity" },
        { name: "Chaturdashi", paksha: "Shukla", description: "Good for spiritual growth" },
        { name: "Purnima", paksha: "Shukla", description: "Full moon day, highly auspicious" },
        { name: "Pratipada", paksha: "Krishna", description: "Good for planning" },
        { name: "Dwitiya", paksha: "Krishna", description: "Favorable for household work" },
        { name: "Tritiya", paksha: "Krishna", description: "Good for maintenance work" },
        { name: "Chaturthi", paksha: "Krishna", description: "Favorable for overcoming obstacles" },
        { name: "Panchami", paksha: "Krishna", description: "Good for learning" },
        { name: "Shashti", paksha: "Krishna", description: "Favorable for health matters" },
        { name: "Saptami", paksha: "Krishna", description: "Good for journey" },
        { name: "Ashtami", paksha: "Krishna", description: "Favorable for fasting" },
        { name: "Navami", paksha: "Krishna", description: "Good for spiritual practices" },
        { name: "Dashami", paksha: "Krishna", description: "Favorable for completing tasks" },
        { name: "Ekadashi", paksha: "Krishna", description: "Auspicious for fasting" },
        { name: "Dwadashi", paksha: "Krishna", description: "Good for charity" },
        { name: "Trayodashi", paksha: "Krishna", description: "Favorable for worship" },
        { name: "Chaturdashi", paksha: "Krishna", description: "Good for meditation" },
        { name: "Amavasya", paksha: "Krishna", description: "New moon day, good for new beginnings" }
    ];
    
    return tithis[(tithiNumber - 1) % 30] || tithis[0];
}

function getLunarPhaseEmoji(lunarAge) {
    const phases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
    const index = Math.floor((lunarAge / 29.53) * 8) % 8;
    return phases[index];
}

function getLunarPhaseName(lunarAge) {
    const phases = ["New Moon", "Waxing Crescent", "First Quarter", 
                   "Waxing Gibbous", "Full Moon", "Waning Gibbous",
                   "Last Quarter", "Waning Crescent"];
    const index = Math.floor((lunarAge / 29.53) * 8) % 8;
    return phases[index];
}

function calculateMuhurtas(date, location) {
    const sunrise = calculateSunrise(date, location);
    const sunset = calculateSunset(date, location);
    const dayLength = sunset - sunrise;
    const muhurtaLength = dayLength / 15; // Day has 15 muhurtas

    return [
        {
            name: "Brahma Muhurta",
            time: formatTime(sunrise - 96 * 60 * 1000), // 96 minutes before sunrise
            description: "Most auspicious time for spiritual practices"
        },
        {
            name: "Abhijit Muhurta",
            time: formatTime(sunrise + 7 * muhurtaLength),
            description: "Victory muhurta, good for important work"
        },
        {
            name: "Godhuli",
            time: formatTime(sunset - 24 * 60 * 1000),
            description: "Auspicious evening time"
        },
        {
            name: "Vijaya Muhurta",
            time: formatTime(sunrise + 5 * muhurtaLength),
            description: "Success muhurta"
        },
        {
            name: "Amrit Kaal",
            time: formatTime(sunrise + 2 * muhurtaLength),
            description: "Beneficial for all activities"
        }
    ];
}

function calculateSunrise(date, location) {
    // Simplified calculation - in production use astronomical library
    const baseTime = new Date(date);
    baseTime.setHours(6);
    baseTime.setMinutes(0);
    return baseTime.getTime();
}

function calculateSunset(date, location) {
    // Simplified calculation - in production use astronomical library
    const baseTime = new Date(date);
    baseTime.setHours(18);
    baseTime.setMinutes(0);
    return baseTime.getTime();
}

function formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}

function getFestivals(date, location) {
    const festivals = {
        // Month-Day format
        "0-1": ["New Year"],
        "1-15": ["Makar Sankranti"],
        "2-14": ["Maha Shivaratri"],
        // Add more festivals
    };
    
    const monthDay = `${date.getMonth()}-${date.getDate()}`;
    return festivals[monthDay] || [];
}

function calculatePanchang(date, location) {
    // Get nakshatra based on moon's position
    const nakshatras = [
        "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
        "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
        "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
        "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishtha", "Shatabhisha",
        "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
    ];

    const yogas = [
        "Vishkumbha", "Priti", "Ayushman", "Saubhagya", "Shobhana",
        "Atiganda", "Sukarma", "Dhriti", "Shula", "Ganda",
        "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra",
        "Siddhi", "Vyatipata", "Variyan", "Parigha", "Shiva",
        "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma",
        "Indra", "Vaidhriti"
    ];

    const karanas = [
        "Bava", "Balava", "Kaulava", "Taitila", "Garija",
        "Vanija", "Vishti", "Shakuni", "Chatushpada", "Naga"
    ];

    const rashi = [
        "Mesha", "Vrishabha", "Mithuna", "Karka", "Simha", "Kanya",
        "Tula", "Vrishchika", "Dhanu", "Makara", "Kumbha", "Meena"
    ];

    // Calculate moon's position and get corresponding values
    const moonPos = calculateMoonPosition(date);
    const nakshatraIndex = Math.floor((moonPos.longitude % 360) / 13.333333);
    const yogaIndex = Math.floor((moonPos.longitude + calculateSunPosition(date).longitude) % 360 / 13.333333);
    const karanaIndex = Math.floor(calculateTithiNumber(date) * 2) % 10;
    const rashiIndex = Math.floor(moonPos.longitude / 30);

    return {
        nakshatra: nakshatras[nakshatraIndex],
        yoga: yogas[yogaIndex],
        karana: karanas[karanaIndex],
        rashi: rashi[rashiIndex],
        sunrise: formatTime(calculateSunrise(date, location)),
        sunset: formatTime(calculateSunset(date, location))
    };
}

function calculateMoonPosition(date) {
    // Simplified calculation - in production use astronomical library
    const epochDays = (date.getTime() - new Date('2000-01-01').getTime()) / (24 * 60 * 60 * 1000);
    const longitude = (epochDays * 13.176358) % 360;
    return { longitude };
}

function calculateSunPosition(date) {
    // Simplified calculation - in production use astronomical library
    const epochDays = (date.getTime() - new Date('2000-01-01').getTime()) / (24 * 60 * 60 * 1000);
    const longitude = (epochDays * 0.985647) % 360;
    return { longitude };
}

// Calculator Functions
function solveMathExpression() {
    try {
        const expr = document.getElementById('math-expression').value
            .replace(/π/g, 'Math.PI')
            .replace(/sqrt|√/g, 'Math.sqrt')
            .replace(/\^/g, '**')
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/log\(/g, 'Math.log10(')
            .replace(/ln\(/g, 'Math.log(');

        const result = Function('"use strict";return (' + expr + ')')();
        const formattedResult = formatNumber(result);
        showResult('math-result', `Result: ${formattedResult}`);
        addToHistory(expr, formattedResult);
    } catch (error) {
        showError('math-result', 'Invalid expression');
    }
}

function formatNumber(num) {
    if (Math.abs(num) < 0.0001 || Math.abs(num) > 9999999) {
        return num.toExponential(4);
    }
    return Number.isInteger(num) ? num : num.toFixed(4);
}

function addToHistory(expression, result) {
    const history = document.getElementById('math-history');
    const entry = document.createElement('div');
    entry.className = 'p-2 bg-gray-100 dark:bg-gray-800 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700';
    entry.innerHTML = `${expression} = ${result}`;
    entry.onclick = () => {
        document.getElementById('math-expression').value = expression;
    };
    history.insertBefore(entry, history.firstChild);
}

function clearHistory() {
    document.getElementById('math-history').innerHTML = '';
    document.getElementById('math-expression').value = '';
    document.getElementById('math-result').textContent = '';
}

function calculateAge() {
    const birthDate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    showResult('age-result', `Age: ${age} years`);
}

function calculateDistance() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
    
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    showResult('distance-result', `Distance: ${distance.toFixed(2)} units`);
}

function calculateGPA() {
    const inputs = document.querySelectorAll('.grade-input');
    let totalPoints = 0;
    let totalCredits = 0;
    
    inputs.forEach(input => {
        const grade = parseFloat(input.children[0].value);
        const credits = parseFloat(input.children[1].value);
        if (!isNaN(grade) && !isNaN(credits)) {
            totalPoints += grade * credits;
            totalCredits += credits;
        }
    });
    
    const gpa = totalPoints / totalCredits;
    showResult('gpa-result', `GPA: ${gpa.toFixed(2)}`);
}

function convertFraction() {
    const num = parseFloat(document.getElementById('numerator').value);
    const den = parseFloat(document.getElementById('denominator').value);
    if (den === 0) {
        showError('fraction-result', 'Cannot divide by zero');
        return;
    }
    const decimal = num / den;
    showResult('fraction-result', `Decimal: ${decimal}`);
}

function convertBinary() {
    const binary = document.getElementById('binary').value;
    if (!/^[01]+$/.test(binary)) {
        showError('binary-result', 'Invalid binary number');
        return;
    }
    const decimal = parseInt(binary, 2);
    showResult('binary-result', `Decimal: ${decimal}`);
}

function decimalToRoman() {
    const decimal = parseInt(document.getElementById('decimal-input').value);
    if (isNaN(decimal) || decimal <= 0) {
        showError('roman-result', 'Invalid decimal number');
        return;
    }
    const roman = convertToRoman(decimal);
    showResult('roman-result', `Roman: ${roman}`);
}

function romanToDecimal() {
    const roman = document.getElementById('roman-input').value.toUpperCase();
    if (!/^[IVXLCDM]+$/.test(roman)) {
        showError('roman-result', 'Invalid Roman numeral');
        return;
    }
    const decimal = convertToDecimal(roman);
    showResult('roman-result', `Decimal: ${decimal}`);
}

function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];
    let result = '';
    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
}

function convertToDecimal(roman) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = romanNumerals[roman[i]];
        const next = romanNumerals[roman[i + 1]];
        if (next && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    return result;
}

function translateNumber() {
    const number = parseInt(document.getElementById('number-input').value);
    const lang = document.getElementById('lang-select').value;
    if (isNaN(number)) {
        showError('translation-result', 'Invalid number');
        return;
    }
    const translation = translateToLang(number, lang);
    showResult('translation-result', `Translation: ${translation}`);
}

function translateToLang(number, lang) {
    const translations = {
        'bn': ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'],
        'en': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        'roman': ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
    };
    const digits = number.toString().split('');
    return digits.map(digit => translations[lang][parseInt(digit)]).join('');
}

function findDay() {
    const date = new Date(document.getElementById('date-input').value);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[date.getDay()];
    showResult('day-result', `Day: ${day}`);
}

function initUnitConverter() {
    const unitType = document.getElementById('unit-type');
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');
    
    unitType.addEventListener('change', () => {
        const units = getUnits(unitType.value);
        fromUnit.innerHTML = units.map(unit => `<option value="${unit}">${unit}</option>`).join('');
        toUnit.innerHTML = units.map(unit => `<option value="${unit}">${unit}</option>`).join('');
    });
    
    unitType.dispatchEvent(new Event('change'));
}

function getUnits(type) {
    const units = {
        'length': ['meters', 'kilometers', 'feet', 'miles'],
        'area': ['square meters', 'square kilometers', 'acres', 'hectares'],
        'volume': ['liters', 'milliliters', 'cubic meters', 'gallons']
    };
    return units[type];
}

function convertUnit() {
    const unitType = document.getElementById('unit-type').value;
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    const input = parseFloat(document.getElementById('unit-input').value);
    if (isNaN(input)) {
        showError('unit-output', 'Invalid input');
        return;
    }
    const output = convert(input, fromUnit, toUnit, unitType);
    document.getElementById('unit-output').value = output;
}

function convert(input, fromUnit, toUnit, type) {
    const conversionRates = {
        'length': {
            'meters': 1,
            'kilometers': 0.001,
            'feet': 3.28084,
            'miles': 0.000621371
        },
        'area': {
            'square meters': 1,
            'square kilometers': 0.000001,
            'acres': 0.000247105,
            'hectares': 0.0001
        },
        'volume': {
            'liters': 1,
            'milliliters': 1000,
            'cubic meters': 0.001,
            'gallons': 0.264172
        }
    };
    const rate = conversionRates[type][toUnit] / conversionRates[type][fromUnit];
    return input * rate;
}

function convertFromCelsius(value) {
    const celsius = parseFloat(value);
    if (isNaN(celsius)) return;
    document.getElementById('fahrenheit').value = (celsius * 9/5 + 32).toFixed(2);
    document.getElementById('kelvin').value = (celsius + 273.15).toFixed(2);
}

function convertFromFahrenheit(value) {
    const fahrenheit = parseFloat(value);
    if (isNaN(fahrenheit)) return;
    document.getElementById('celsius').value = ((fahrenheit - 32) * 5/9).toFixed(2);
    document.getElementById('kelvin').value = ((fahrenheit - 32) * 5/9 + 273.15).toFixed(2);
}

function convertFromKelvin(value) {
    const kelvin = parseFloat(value);
    if (isNaN(kelvin)) return;
    document.getElementById('celsius').value = (kelvin - 273.15).toFixed(2);
    document.getElementById('fahrenheit').value = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
}

function convertHeight(unit, value) {
    const height = parseFloat(value);
    if (isNaN(height)) return;
    const conversions = {
        'feet': { 'meters': height * 0.3048, 'inches': height * 12, 'cm': height * 30.48 },
        'meters': { 'feet': height / 0.3048, 'inches': height / 0.0254, 'cm': height * 100 },
        'inches': { 'feet': height / 12, 'meters': height * 0.0254, 'cm': height * 2.54 },
        'cm': { 'feet': height / 30.48, 'meters': height / 100, 'inches': height / 2.54 }
    };
    for (const [key, val] of Object.entries(conversions[unit])) {
        document.getElementById(key).value = val.toFixed(2);
    }
}

function convertWeight(unit, value) {
    const weight = parseFloat(value);
    if (isNaN(weight)) return;
    const conversions = {
        'kg': { 'lb': weight * 2.20462, 'oz': weight * 35.274, 'g': weight * 1000 },
        'lb': { 'kg': weight / 2.20462, 'oz': weight * 16, 'g': weight * 453.592 },
        'oz': { 'kg': weight / 35.274, 'lb': weight / 16, 'g': weight * 28.3495 },
        'g': { 'kg': weight / 1000, 'lb': weight / 453.592, 'oz': weight / 28.3495 }
    };
    for (const [key, val] of Object.entries(conversions[unit])) {
        document.getElementById(key).value = val.toFixed(2);
    }
}

function convertSpeed(unit, value) {
    const speed = parseFloat(value);
    if (isNaN(speed)) return;
    const conversions = {
        'kph': { 'mph': speed * 0.621371, 'mps': speed / 3.6, 'knot': speed / 1.852 },
        'mph': { 'kph': speed / 0.621371, 'mps': speed / 2.237, 'knot': speed / 1.151 },
        'mps': { 'kph': speed * 3.6, 'mph': speed * 2.237, 'knot': speed * 1.944 },
        'knot': { 'kph': speed * 1.852, 'mph': speed * 1.151, 'mps': speed / 1.944 }
    };
    for (const [key, val] of Object.entries(conversions[unit])) {
        document.getElementById(key).value = val.toFixed(2);
    }
}

function convertHexToRgb() {
    const hex = document.getElementById('hex-input').value.replace('#', '');
    const preview = document.getElementById('color-preview');
    
    try {
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        
        if (isNaN(r) || isNaN(g) || isNaN(b)) {
            throw new Error('Invalid HEX color');
        }
        
        preview.style.backgroundColor = `#${hex}`;
        showResult('rgb-result', `RGB: rgb(${r}, ${g}, ${b})`);
    } catch (error) {
        showError('rgb-result', 'Invalid HEX color');
    }
}

function convertRgbToHsl() {
    const r = parseInt(document.getElementById('rgb-r').value) / 255;
    const g = parseInt(document.getElementById('rgb-g').value) / 255;
    const b = parseInt(document.getElementById('rgb-b').value) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    const preview = document.getElementById('rgb-preview');
    preview.style.backgroundColor = `rgb(${r * 255}, ${g * 255}, ${b * 255})`;
    showResult('hsl-result', `HSL: hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`);
}

function calculateLunarAge() {
    const date = new Date(document.getElementById('lunar-date').value);
    const lunarCycle = 29.53; // Length of lunar month in days
    const refNewMoon = new Date('2000-01-06'); // Reference new moon
    
    const daysSinceRef = Math.floor((date - refNewMoon) / (24 * 60 * 60 * 1000));
    const lunarAge = (daysSinceRef % lunarCycle).toFixed(1);
    
    showResult('lunar-result', `Lunar Age: ${lunarAge} days`);
}

function showResult(elementId, text) {
    const element = document.getElementById(elementId);
    element.className = 'mt-4 text-lg text-green-600 dark:text-green-400';
    element.textContent = text;
}

function showError(elementId, text) {
    const element = document.getElementById(elementId);
    element.className = 'mt-4 text-lg text-red-600 dark:text-red-400';
    element.textContent = text;
}

function initializeApp() {
    // Render tools
    const toolsContainer = document.querySelector('main .grid');
    toolsContainer.innerHTML = tools.map(tool => createToolCard(tool)).join('');

    // Theme toggling
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    });

    // Update footer year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', initializeApp);

function generateColorScheme(color) {
    const hsl = rgbToHsl(hexToRgb(color).r, hexToRgb(color).g, hexToRgb(color).b);
    
    // Generate 5 colors: analogous, complementary, and triadic
    return [
        color,
        hslToHex(((hsl.h + 0.083) % 1), hsl.s, hsl.l), // 30 degrees
        hslToHex(((hsl.h - 0.083) % 1), hsl.s, hsl.l), // -30 degrees
        hslToHex(((hsl.h + 0.5) % 1), hsl.s, hsl.l),   // Complementary
        hslToHex(((hsl.h + 0.333) % 1), hsl.s, hsl.l)  // Triadic
    ];
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('').toUpperCase();
}

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return { h, s, l };
}

function hslToRgb(h, s, l) {
    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

function hslToHex(h, s, l) {
    const rgb = hslToRgb(h, s, l);
    return rgbToHex(rgb.r, rgb.g, rgb.b);
}

// Update the initColorDetector function
function initColorDetector() {
    const colorPicker = document.getElementById('color-picker');
    const colorInput = document.getElementById('color-input');
    
    loadColorHistory();

    // Set initial color
    const initialColor = '#3B82F6';
    colorPicker.value = initialColor;
    colorInput.value = initialColor;
    updateColorInfo(initialColor);

    colorPicker.addEventListener('input', (e) => {
        const color = e.target.value;
        colorInput.value = color;
        updateColorInfo(color);
    });
}

// Fix the detectColor function
function detectColor() {
    const colorInput = document.getElementById('color-input').value.trim();
    const colorPicker = document.getElementById('color-picker');
    
    try {
        let color;
        if (colorInput.startsWith('#')) {
            // Handle hex color
            if (!/^#[0-9A-Fa-f]{6}$/i.test(colorInput)) {
                throw new Error('Invalid hex color format');
            }
            color = colorInput.toUpperCase();
        } else if (colorInput.startsWith('rgb')) {
            // Handle RGB color
            const rgb = colorInput.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
            if (!rgb || rgb.slice(1).some(v => v < 0 || v > 255)) {
                throw new Error('Invalid RGB color format');
            }
            color = rgbToHex(parseInt(rgb[1]), parseInt(rgb[2]), parseInt(rgb[3]));
        } else {
            // Try to parse as hex without #
            if (/^[0-9A-Fa-f]{6}$/i.test(colorInput)) {
                color = '#' + colorInput.toUpperCase();
            } else {
                throw new Error('Invalid color format');
            }
        }
        
        colorPicker.value = color;
        colorInput.value = color;
        updateColorInfo(color);
        addToColorHistory(color);
        
        // Show success message
        showToast('Color detected successfully!', 'success');
    } catch (error) {
        showToast(error.message, 'error');
    }
}