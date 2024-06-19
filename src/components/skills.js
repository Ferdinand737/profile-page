export default function Skills(props) {
    const getSkillIconUrl = (skill) => {
        const skillIconUrls = {
            // NodeJs technologies
            'NodeJs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
            'Remix': require('../images/remix.png'),
            'NextJs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
            'NestJs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg',
            'Yarn': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg',
            'TailwindCSS': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
            'TypeScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
            'JavaScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
            'React': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
            
            // Python technologies
            'Python': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
            'Django': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg',
            'Spark': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apachespark/apachespark-original.svg',
            'Pandas': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg',
            
            // Other Languages
            'Java': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
            
            // Web Dev
            'Bootstrap': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
            'Jquery': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg',
            'HTML5': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
            'CSS3': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
            
            // PHP technologies
            'PHP': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
            'Laravel': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg',
            
            // Database technologies
            'MySQL': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
            'PostgreSQL': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
            
            // Other technologies
            'Linux': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
            'Git': 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
            'Selenium': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg',
            'Docker': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
            'Jenkins': 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg',
            'Postman': 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
            'Jira': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg',
            'Confluence': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/confluence/confluence-original.svg',
            'Bitbucket': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg',
        };
        return skillIconUrls[skill] || ''; 
    }

    // Ensure the list maintains consistent order
    const orderedSkills = [
        // NodeJs technologies
        'NodeJs', 'NextJs', 'NestJs', 'Yarn', 'TailwindCSS', 'TypeScript', 'JavaScript', 'React', 'Remix',
        
        // Python technologies
        'Python', 'Django', 'Spark', 'Pandas',
        
        // Other Languages
        'Java',
        
        // Web Dev
        'Bootstrap', 'Jquery', 'HTML5', 'CSS3',
        
        // PHP technologies
        'PHP', 'Laravel',
        
        // Database technologies
        'MySQL', 'PostgreSQL',
        
        // Other technologies
        'Linux', 'Git', 'Selenium', 'Docker', 'Jenkins', 'Postman', 'Jira', 'Confluence', 'Bitbucket'
    ];

    return(
        <div className='project-skills'>
            {orderedSkills.map((skill) => (
                props.skills.includes(skill) && (
                    <span key={skill}>
                        <img title={`${skill}`} src={getSkillIconUrl(skill)} width='30' height='30'></img>
                        &nbsp;&nbsp;
                    </span>
                )
            ))}
        </div>
    )
}