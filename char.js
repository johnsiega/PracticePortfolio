// Character data - You can easily modify this to customize your character
        const characterData = {
            name: "Cedie",
            title: "Web Developer & Digital Adventurer",
            level: 25,
            avatar: "https://scontent.fmnl38-1.fna.fbcdn.net/v/t39.30808-6/470199667_122133638066426696_2852281367879242369_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHwxsUwTctrQnB09wm4MvdMPf6SnCRsSnE9_pKcJGxKcTohfDz0r6Xj3UU8QWAUNjOUnR9Aun0NQOzQlIa_qMsq&_nc_ohc=qW1mja3Hds4Q7kNvwEV1Zw7&_nc_oc=Adlw3jj04JS40_P47NffkodtAVyuLWjceaJJMw7Ud4-HAQxdemV4cku8S23vzhMrVY8&_nc_zt=23&_nc_ht=scontent.fmnl38-1.fna&_nc_gid=p1SL-4MOyiFv_fc_ky0QKQ&oh=00_AfUwIwA2gtvO1kVenE7IHCaE3P1IE1PhcX2LwUnPdFqfgQ&oe=68ADD45C",
            stats: {
                coding: 85,
                design: 78,
                problemSolving: 92,
                teamwork: 88,
                learning: 95,
                adaptability: 90
            },
            skills: [
                "JavaScript", "HTML5", "CSS3", "React", "Node.js", 
                "Python", "Git", "Responsive Design", "Problem Solving", 
                "Team Leadership", "Project Management", "UI/UX Design"
            ],
            bio: "A passionate web developer on a quest to create amazing digital experiences. Started the journey in the mystical lands of HTML and CSS, then ventured into the JavaScript kingdoms. Currently exploring the realms of modern frameworks and backend technologies. Known for turning coffee into code and debugging with the patience of a sage.",
            achievements: [
                {
                    icon: "🚀",
                    name: "First Website Launch",
                    description: "Successfully deployed first website"
                },
                {
                    icon: "💡",
                    name: "Problem Solver",
                    description: "Solved 100+ coding challenges"
                },
                {
                    icon: "🎓",
                    name: "Continuous Learner",
                    description: "Completed multiple online courses"
                },
                {
                    icon: "🤝",
                    name: "Team Player",
                    description: "Collaborated on 10+ projects"
                },
                {
                    icon: "🏆",
                    name: "Code Master",
                    description: "Mastered multiple programming languages"
                },
                {
                    icon: "🌟",
                    name: "Innovation Award",
                    description: "Created innovative solutions"
                }
            ]
        };

        // Function to populate skills
        function populateSkills() {
            const skillsContainer = document.getElementById('skills-container');
            skillsContainer.innerHTML = '';
            
            characterData.skills.forEach(skill => {
                const skillElement = document.createElement('div');
                skillElement.className = 'skill-item';
                skillElement.textContent = skill;
                skillsContainer.appendChild(skillElement);
            });
        }

        // Function to populate achievements
        function populateAchievements() {
            const achievementsContainer = document.getElementById('achievements-container');
            achievementsContainer.innerHTML = '';
            
            characterData.achievements.forEach(achievement => {
                const achievementElement = document.createElement('div');
                achievementElement.className = 'achievement-item';
                achievementElement.innerHTML = `
                    <span class="achievement-icon">${achievement.icon}</span>
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-desc">${achievement.description}</div>
                `;
                achievementsContainer.appendChild(achievementElement);
            });
        }

        // Function to update character info
        function updateCharacterInfo() {
            // Update basic info
            document.getElementById('character-name').textContent = characterData.name;
            document.getElementById('character-title').textContent = characterData.title;
            document.getElementById('character-level').textContent = `Level ${characterData.level}`;
            document.getElementById('character-avatar').src = characterData.avatar;
            document.getElementById('character-bio').textContent = characterData.bio;

            // Update stats
            document.getElementById('coding-stat').textContent = `${characterData.stats.coding}/100`;
            document.getElementById('design-stat').textContent = `${characterData.stats.design}/100`;
            document.getElementById('problem-stat').textContent = `${characterData.stats.problemSolving}/100`;
            document.getElementById('teamwork-stat').textContent = `${characterData.stats.teamwork}/100`;
            document.getElementById('learning-stat').textContent = `${characterData.stats.learning}/100`;
            document.getElementById('adaptability-stat').textContent = `${characterData.stats.adaptability}/100`;
        }

        // Initialize page when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            updateCharacterInfo();
            populateSkills();
            populateAchievements();
            
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
        HOW TO CUSTOMIZE YOUR CHARACTER:
        
        1. To change your character info, modify the 'characterData' object above
        2. Update the 'name', 'title', 'level' to match your preferences
        3. Change the 'avatar' URL to your own photo
        4. Adjust the 'stats' values (0-100) to reflect your skill levels
        5. Modify the 'skills' array to include your actual skills
        6. Update the 'bio' to tell your story
        7. Customize 'achievements' with your real accomplishments
        
        The page will automatically update when you refresh!*/