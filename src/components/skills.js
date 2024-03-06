export default function Skills(props){
    const getSkillIconUrl = (skill) => {
        const skillIconUrls = {
            'Linux': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
            'Git': 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
            'Python': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
            'React': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
            'Java': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
            'Selenium': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg',
            'HTML5': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
            'CSS3': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
            'JavaScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
            'TypeScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
            'PHP': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
            'Jquery': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg',
            'Bootstrap': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
            'MySQL': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
            'PostgreSQL': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
            'Docker': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
            'Jenkins': 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg',
            'Postman': 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
            'Jira': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg',
            'Confluence': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/confluence/confluence-original.svg',
            'Django': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg',
            'Laravel': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg',
            'Bitbucket': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg',
            'NextJs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
            'NestJs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg',
            'NodeJs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
            'Yarn': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg',
            'TailwindCSS': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
            'Spark': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apachespark/apachespark-original.svg',
            'Pandas': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg',
            'Remix' : require('../images/remix.png')
        };
        return skillIconUrls[skill] || ''; 
    }

    return(
        <div className='project-skills'>
            {Array.from(props.skills).map((skill) => (
                <span key={skill}>
                    <img title={`${skill}`} src={getSkillIconUrl(skill)} width='30' height='30'></img>
                    &nbsp;&nbsp;
                </span>
            ))}
        </div>
    )
}