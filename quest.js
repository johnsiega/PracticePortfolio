 // Quest data - You can easily modify these quests or add your own!
        const questsData = [
            {
                id: 1,
                title: "Master the Art of Responsive Design",
                description: "Create a fully responsive website that looks great on all devices. Test it on mobile, tablet, and desktop.",
                difficulty: "medium",
                xpReward: 150,
                otherRewards: ["CSS Master Badge", "Mobile-First Mindset"],
                status: "available",
                progress: 0,
                category: "frontend"
            },
            {
                id: 2,
                title: "Deploy Your First Website",
                description: "Deploy a website to a hosting platform like Netlify, Vercel, or GitHub Pages. Share it with the world!",
                difficulty: "easy",
                xpReward: 100,
                otherRewards: ["Deployment Pro Badge", "Live Site Achievement"],
                status: "available",
                progress: 0,
                category: "deployment"
            },
            {
                id: 3,
                title: "Build a JavaScript Game",
                description: "Create an interactive game using vanilla JavaScript. Could be Tic-tac-toe, Snake, or something original!",
                difficulty: "hard",
                xpReward: 300,
                otherRewards: ["Game Developer Badge", "Logic Master Title"],
                status: "available",
                progress: 0,
                category: "javascript"
            },
            {
                id: 4,
                title: "Learn a New Framework",
                description: "Pick up React, Vue, or Angular. Build a small project to demonstrate your understanding.",
                difficulty: "hard",
                xpReward: 400,
                otherRewards: ["Framework Explorer Badge", "Modern Dev Status"],
                status: "available",
                progress: 0,
                category: "framework"
            },
            {
                id: 5,
                title: "Contribute to Open Source",
                description: "Make your first contribution to an open-source project on GitHub. Document, fix bugs, or add features.",
                difficulty: "medium",
                xpReward: 250,
                otherRewards: ["Open Source Contributor Badge", "Community Helper"],
                status: "available",
                progress: 0,
                category: "collaboration"
            },
            {
                id: 6,
                title: "Master Git and Version Control",
                description: "Learn advanced Git commands, branching strategies, and collaborate on a project using proper version control.",
                difficulty: "medium",
                xpReward: 200,
                otherRewards: ["Git Master Badge", "Version Control Pro"],
                status: "available",
                progress: 0,
                category: "tools"
            },
            {
                id: 7,
                title: "Build a Full-Stack Application",
                description: "Create an app with both frontend and backend. Include user authentication, database operations, and API endpoints.",
                difficulty: "epic",
                xpReward: 500,
                otherRewards: ["Full-Stack Developer Badge", "Complete Solution Master"],
                status: "available",
                progress: 0,
                category: "fullstack"
            },
            {
                id: 8,
                title: "Optimize Website Performance",
                description: "Improve loading times, optimize images, and achieve a perfect Lighthouse score on a website project.",
                difficulty: "hard",
                xpReward: 350,
                otherRewards: ["Performance Guru Badge", "Speed Demon Title"],
                status: "available",
                progress: 0,
                category: "optimization"
            },
            {
                id: 9,
                title: "Create a Design System",
                description: "Build a comprehensive design system with components, colors, typography, and documentation.",
                difficulty: "hard",
                xpReward: 300,
                otherRewards: ["Design System Architect", "UI/UX Pro Badge"],
                status: "available",
                progress: 0,
                category: "design"
            },
            {
                id: 10,
                title: "Write Technical Documentation",
                description: "Create detailed documentation for one of your projects. Include setup instructions, API docs, and examples.",
                difficulty: "easy",
                xpReward: 120,
                otherRewards: ["Documentation Master", "Clear Communicator Badge"],
                status: "available",
                progress: 0,
                category: "documentation"
            }
        ];

        // Load quest data from localStorage or use default
        let quests = JSON.parse(localStorage.getItem('siegaQuests')) || questsData;
        let currentFilter = 'all';

        // Function to save quests to localStorage
        function saveQuests() {
            localStorage.setItem('siegaQuests', JSON.stringify(quests));
        }

        // Function to update quest statistics
        function updateStats() {
            const completed = quests.filter(q => q.status === 'completed').length;
            const inProgress = quests.filter(q => q.status === 'in-progress').length;
            const available = quests.filter(q => q.status === 'available').length;
            const totalXP = quests.filter(q => q.status === 'completed').reduce((sum, q) => sum + q.xpReward, 0);

            document.getElementById('completed-count').textContent = completed;
            document.getElementById('progress-count').textContent = inProgress;
            document.getElementById('available-count').textContent = available;
            document.getElementById('total-xp').textContent = totalXP;
        }

        // Function to create quest card HTML
        function createQuestCard(quest) {
            const progressPercentage = quest.progress || 0;
            
            return `
                <div class="quest-card ${quest.status}" data-quest-id="${quest.id}">
                    <div class="quest-status status-${quest.status}"></div>
                    <div class="quest-header">
                        <div>
                            <h3 class="quest-title">${quest.title}</h3>
                            <span class="quest-difficulty difficulty-${quest.difficulty}">${quest.difficulty}</span>
                        </div>
                    </div>
                    <p class="quest-description">${quest.description}</p>
                    
                    <div class="quest-rewards">
                        <div class="rewards-title">🏆 Rewards:</div>
                        <span class="reward-item">${quest.xpReward} XP</span>
                        ${quest.otherRewards.map(reward => `<span class="reward-item">${reward}</span>`).join('')}
                    </div>
                    
                    ${quest.status === 'in-progress' ? `
                        <div class="quest-progress">
                            <div>Progress: ${progressPercentage}%</div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="quest-actions">
                        ${quest.status === 'available' ? 
                            `<button class="quest-btn btn-start" onclick="startQuest(${quest.id})">Start Quest</button>` :
                        quest.status === 'in-progress' ? 
                            `<button class="quest-btn btn-complete" onclick="completeQuest(${quest.id})">Complete Quest</button>
                             <button class="quest-btn btn-restart" onclick="resetQuest(${quest.id})">Reset</button>` :
                            `<button class="quest-btn btn-completed" disabled>✓ Completed</button>`
                        }
                    </div>
                </div>
            `;
        }

        // Function to render quests
        function renderQuests() {
            const container = document.getElementById('quests-container');
            const filteredQuests = currentFilter === 'all' ? 
                quests : 
                quests.filter(quest => quest.status === currentFilter);
            
            container.innerHTML = filteredQuests.map(quest => createQuestCard(quest)).join('');
            updateStats();
        }

        // Function to start a quest
        function startQuest(questId) {
            const quest = quests.find(q => q.id === questId);
            if (quest) {
                quest.status = 'in-progress';
                quest.progress = 0;
                saveQuests();
                renderQuests();
                
                // Show success message
                alert(`Quest "${quest.title}" started! Good luck on your adventure! 🚀`);
            }
        }

        // Function to complete a quest
        function completeQuest(questId) {
            const quest = quests.find(q => q.id === questId);
            if (quest) {
                quest.status = 'completed';
                quest.progress = 100;
                saveQuests();
                renderQuests();
                
                // Show completion message
                alert(`🎉 Congratulations! Quest "${quest.title}" completed!\nYou earned ${quest.xpReward} XP!`);
            }
        }

        // Function to reset a quest
        function resetQuest(questId) {
            const quest = quests.find(q => q.id === questId);
            if (quest && confirm('Are you sure you want to reset this quest?')) {
                quest.status = 'available';
                quest.progress = 0;
                saveQuests();
                renderQuests();
            }
        }

        // Function to handle filter buttons
        function setupFilters() {
            const filterBtns = document.querySelectorAll('.filter-btn');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    btn.classList.add('active');
                    
                    // Update current filter and render
                    currentFilter = btn.dataset.filter;
                    renderQuests();
                });
            });
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            renderQuests();
            setupFilters();
            
            // Set active nav item
            const currentPage = window.location.pathname.split("/").pop();
            const navItems = document.querySelectorAll('.nav-item');
            
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === currentPage) {
                    item.classList.add('active');
                }
            });
        });

        /* 
        HOW TO CUSTOMIZE YOUR QUESTS:
        
        1. Modify the 'questsData' array above to add your own quests
        2. Each quest should have: id, title, description, difficulty, xpReward, otherRewards, status, progress, category
        3. Difficulty levels: "easy", "medium", "hard", "epic"
        4. Status options: "available", "in-progress", "completed"
        5. The system automatically saves progress to localStorage
        6. You can add more categories and filter options by modifying the code
        
        Feel free to make these quests match your real learning goals and projects!
        */
