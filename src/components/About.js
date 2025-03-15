import './About.css';

function About() {

    const getAge = (new Date().getMonth() - new Date(2003,3,14).getMonth() < 1) ? ((new Date().getFullYear() - new Date(2003,3,14).getFullYear()) - 1) : new Date().getFullYear() - new Date(2003,3,14).getFullYear();
    
    

    return (
        <div className="mb-5 w-100 text-center">
            <div id="contentDiv" className="d-flex flex-wrap w-100 justify-content-center my-4">
                <div id="personalBio" className="bg-secondary m-3 w-40 text-center">
                    <h1 className='pt-4'>A Bit About Me</h1>
                    <p className='p-3'>
                        I am {getAge} years old. I was born and raised in Toronto, living their my whole life before moving to Halifax in September of 2021 to start university. I am currently pursuing a Bachelor's of Applied Computer Science with a minor in History. During my studies I have unlocked a passion for problem solving and teaching. I love the challenge of a programming assignment and seeing it unfold infront of me as I tackle sub-task after sub-task. I have also really enjoyed my time teaching, both formally as a TA and informally helping my friends.<br/>In my spare time I enjoy rock climbing, swimming, hockey, basketball, playing board games and video games, watching movies and spending time with my friends. Most recently I have been play of Civilization 6, a turn based strategy game.
                    </p>
                </div>

                <div id="careerGoals" className="bg-success m-3 w-40 text-center">
                    <h1 className='pt-4'>What is the Goal?</h1>
                    <p className='p-3'>
                        In terms of my goals going forward, I plan to graduate in the spring of 2026. Having completed the co-op program, my origional graduation date (Spring 2025) has been pushed back by one year. Following my gradutation I plan to take a year off to go travel and explore what the world outside of school has to offer before continuing my eduction. After this year, I plan to apply to teachers college with the goal of pursuing teaching as a career. After finishing my teaching education, my plan is to try to find work as a highschool teacher. Through my computer science and history education, I hope to instruct both history and computer science classes and pass my passion for these two fields onto my students.
                    </p>
                </div>

                <div id="technicalSkills" className="bg-danger m-3 w-40 text-center">
                    <h1 className='pt-4'>Technical Skills</h1>
                    <ul className='text-start px-2'> Programming Languages & Tools:
                        <li>Java</li>
                        <li>Python</li>
                        <li>C#</li>
                        <li>.NET MAUI</li>
                        <li>ASP.NET Core</li>
                        <li>Javascript</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>SQL</li>
                        <li>PHP</li>
                        <li>Git</li>
                    </ul>
                    <ul className='text-start p-2'> Soft Skills:
                        <li>Problem Solving</li>
                        <li>Leadership & Teamwork</li>
                        <li>Communication</li>
                    </ul>
                </div>
                
                <div id="jobExperience" className="bg-secondary m-3 w-40 text-center">
                    <h1 className='pt-4'>Work Experience</h1>
                    <ul className='text-start px-2'>

                        <ul>.NET Developer
                            <li>Maritime Travel</li>
                            <li>Sept - Dec 2024</li>
                        </ul>
                        <ul>IT Assistant
                            <li>IMP Aerospace</li>
                            <li>Jan - April 2024</li>
                        </ul>
                        <ul>Teaching Assistant
                            <li>Dalhousie University</li>
                            <li>Sept 2023 - Jan 2024</li>
                        </ul>
                        <ul>Junior Developer
                            <li>Quickfacts Inc.</li>
                            <li>May - Sept 2023</li>
                        </ul>
                        <ul>Sales Associate 
                            <li>Atmosphere</li>
                            <li>May 2022 - Present</li>
                        </ul>
                        <ul>Ski Instructor
                            <li>Apline Ski Club</li>
                            <li>Dec 2018 - March 2020</li>
                        </ul>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;