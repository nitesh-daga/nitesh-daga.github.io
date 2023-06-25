#!/usr/bin/env node
const chalk = require('chalk');
function logWithDelay(text, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, delay);
  });
}

async function displayResume() {

  await logWithDelay(chalk.bold.blue('Resume'), 500);

  await logWithDelay(chalk.green('Name: Nitesh Daga'), 300);
  await logWithDelay(chalk.green('Email: niteshdaga000@gmail.com'), 300);
  await logWithDelay(chalk.green('Phone: +91 7696489451'), 300);
  await logWithDelay(chalk.bold.blue('Professional Summary'), 500);
  await logWithDelay(chalk.red('Frontend Specialist with over 8 years of hands-on experience developing high-performance Web-based applications using Angular, AngularJS, and other frameworks.'), 300);
  await logWithDelay(chalk.red('- Proficient in designing and developing applications utilizing JavaScript, TypeScript, HTML/HTML5, CSS, Less, SCSS, Bootstrap, Materialize, and Tailwind CSS.'), 300);
  await logWithDelay(chalk.red('- Skilled in WebRTC and other video technologies such as Twilio and Opentok.'), 300);
  await logWithDelay(chalk.red('- Skilled in Video Streaming formats HLS & MPEG-DASH, Video Player development for OTT including the implementation of DRM using Widevine, Fairplay, and Play Ready, in players like VIDEOjs, SHAKA player, DASH, and Jwplayer.'), 300);
  await logWithDelay(chalk.red('- Proficient in utilizing Build tools such as Gulp, Grunt, Webpack, Docker, CI/CD tools like Jenkins, Web Servers like Nginx, and Code Analysis tools like Sonarqube.'), 300);
  await logWithDelay(chalk.red('- Experience in CDN Management, Distribution, Caching & Policy Methodology, DNS management, Content Management Systems, Log Processing & Analytics Kibana, Infrastructure Planning, and Scaled Deployment.'), 300);
  await logWithDelay(chalk.red('- Extensive experience in creating, publishing, and managing custom packages on npm, Github, and Verdaccio.'), 300);
  await logWithDelay(chalk.red('- Proven track record in developing, maintaining, and publishing decentralized, templatized Progressive Web Apps. Proficient in distributing these apps on various Edges as Debian packages, ensuring offline functionality and compatibility with isolated networks.'), 300);
  await logWithDelay(chalk.red('- Well-versed in working with various AWS services, including S3, Lambda, DynamoDB, CloudFront, and Elastic Beanstalk, enabling robust and scalable web applications.'), 300);
  await logWithDelay(chalk.red('- Familiar with backend technologies like C#, Node, Django, and databases like MongoDB and MySQL.'), 300);
  await logWithDelay(chalk.red('- Experienced in utilizing project management tools like JIRA and Trello for effective coordination and streamlined project workflows.'), 300);
  await logWithDelay(chalk.red('- Possess a strong understanding of accessibility, performance optimization, web analytics, and SEO techniques.'), 300);
  await logWithDelay(chalk.red('- Proactively stay updated with the latest web trends, enabling informed technology decisions and staying ahead of industry developments.'), 300);

  await logWithDelay(chalk.bold.blue('Technical Skills'), 500);
  await logWithDelay(chalk.cyan('- Angular'), 300);
  await logWithDelay(chalk.cyan('- HTML5'), 300);
  await logWithDelay(chalk.cyan('- JavaScript'), 300);
  await logWithDelay(chalk.cyan('- TypeScript'), 300);
  await logWithDelay(chalk.cyan('- SCSS'), 300);
  await logWithDelay(chalk.cyan('- Bootstrap'), 300);
  await logWithDelay(chalk.cyan('- Material'), 300);
  await logWithDelay(chalk.cyan('- Tailwind CSS'), 300);
  await logWithDelay(chalk.cyan('- Node'), 300);
  await logWithDelay(chalk.cyan('- C#'), 300);
  await logWithDelay(chalk.cyan('- MongoDB'), 300);
  await logWithDelay(chalk.cyan('- MySQL'), 300);

  await logWithDelay(chalk.bold.blue('Work Experience'), 500);
  await logWithDelay(chalk.bold.yellow('Sugarbox'), 300);
  await logWithDelay(chalk.green('- Lead Engineer'), 300);
  await logWithDelay(chalk.green('- December 2020 - Present'), 300);
  await logWithDelay(chalk.green('- Leading development of Sugarbox\'s Templatized, Decentralized Progressive Web App (sugarboxapp.com/airflix.co.in)'), 300);
  await logWithDelay(chalk.green('- Reporting & Analytics Integration like WebEngage, In-house data stream, Gtm, Facebook pixel, etc. Robust error handling and reporting. Drm Playback Implementation using Widevine and Fairplay, Payments Integrations, Partner Integrations, Themes, etc.'), 300);
  await logWithDelay(chalk.green('- Also involved in setting up a pipeline for its distribution and deployment to various decentralized edge nodes leveraging DPKG, deb packages, nginx virtual hosts, dnsmasq etc.'), 300);

  await logWithDelay(chalk.bold.yellow('Talocity'), 300);
  await logWithDelay(chalk.green('- Sr. Frontend Developer'), 300);
  await logWithDelay(chalk.green('- November 2019 - December 2020'), 300);
  await logWithDelay(chalk.green('- Developed touchless hiring solutions using video interviews and assessments.'), 300);
  await logWithDelay(chalk.green('- Collaborated with cross-functional teams to ensure seamless integration of the product.'), 300);
  await logWithDelay(chalk.green('- Implemented cognitive personality reports to enhance the hiring process.'), 300);
  await logWithDelay(chalk.green('- Was also involved in Development and Coding, Technical Strategy, Project Planning and Execution, Architecture and Design, Code Reviews and Quality Assurance, Collaboration and Communication, Performance Optimization, Team Development, Documentation, Troubleshooting and Bug Fixing, and Continuous Improvement'), 300);

  await logWithDelay(chalk.bold.yellow('ALTBalaji'), 300);
  await logWithDelay(chalk.green('- Sr. Web Developer'), 300);
  await logWithDelay(chalk.green('- September 2018 - November 2019'), 300);
  await logWithDelay(chalk.green('- Contributed to the development of a subscription-based video-on-demand (SVOD) service.'), 300);
  await logWithDelay(chalk.green('- Ensured compatibility across multiple interfaces, including desktops, laptops, tablets, and smartphones.'), 300);
  await logWithDelay(chalk.green('- Implemented responsive designs and optimized the user experience.'), 300);

  await logWithDelay(chalk.bold.yellow('CheckApp'), 300);
  await logWithDelay(chalk.green('- Web Developer'), 300);
  await logWithDelay(chalk.green('- June 2017 - September 2018'), 300);
  await logWithDelay(chalk.green('- Developed a cloud-based, cross-platform Healthcare ICT (Information, Communication & Technology) application.'), 300);
  await logWithDelay(chalk.green('- Implemented various features and functionalities based on client requirements.'), 300);
  await logWithDelay(chalk.green('- Worked on UI/UX improvements for enhanced user experience.'), 300);

  await logWithDelay(chalk.bold.yellow('Mahindra Logistics'), 300);
  await logWithDelay(chalk.green('- Sr. Executive IT'), 300);
  await logWithDelay(chalk.green('- September 2016 - June 2017'), 300);
  await logWithDelay(chalk.green('- Contributed to the development of logistics solutions as a third-party logistics (3PL) provider.'), 300);
  await logWithDelay(chalk.green('- Implemented frontend functionalities and integration with backend systems.'), 300);
  await logWithDelay(chalk.green('- Worked on optimizing performance and user experience.'), 300);

  await logWithDelay(chalk.bold.yellow('Cognizant'), 300);
  await logWithDelay(chalk.green('- Programmer Analyst'), 300);
  await logWithDelay(chalk.green('- June 2015 - September 2016'), 300);
  await logWithDelay(chalk.green('- Developed and maintained web applications for clients in the banking and finance industry.'), 300);
  await logWithDelay(chalk.green('- Collaborated with cross-functional teams to ensure timely project delivery.'), 300);
  await logWithDelay(chalk.green('- Conducted code reviews and implemented best practices for code quality and performance.'), 300);

  await logWithDelay(chalk.bold.blue('Education'), 500);
  await logWithDelay(chalk.yellow('- Bachelor of Technology (B.Tech), Computer Science and Engineering'), 300);
  await logWithDelay(chalk.blue('- Lovely Professional University'), 300);
  await logWithDelay(chalk.green('- Graduated in 2015'), 300);
  await logWithDelay(chalk.yellow('- HSC from MBSS school, Bikaner in 2010 with 84%'), 300);
  await logWithDelay(chalk.yellow('- SSC from RSV school, Bikaner in 2008 with 91%'), 300);
}

async function run() {
  try {
    await displayResume();
  } catch (error) {
    console.error('Error:', error);
  }
}

run();
