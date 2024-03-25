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
  await logWithDelay(chalk.magenta('Engineering manager with ~9 years of experience leading teams, managing complex projects, and designing solutions across frontend, backend, data pipelines, CI/CD, reporting, alerting, monitoring, integrations, and payments.'), 300);
  await logWithDelay(chalk.magenta('- Led frontend development teams, delivering performant web applications using JavaScript, TypeScript, HTML5, CSS, RxJS, NgRx, Redux, and UI frameworks (Bootstrap, Materialize, Tailwind CSS, etc.).'), 300);
  await logWithDelay(chalk.magenta('- Solved complex video streaming challenges (HLS, MPEG-DASH, DRM...) using WebRTC, Twilio, Opentok, and players such as VIDEOjs and SHAKA, improving user experience significantly.'), 300);
  await logWithDelay(chalk.magenta('- Proficient in build tools (Gulp, Grunt, Webpack, Docker), CI/CD (Jenkins), web servers (Nginx), and code analysis(Sonarqube) for enhanced code quality.'), 300);
  await logWithDelay(chalk.magenta('- Experienced in CDN management, content delivery optimization, and infrastructure planning, ensuring scalability and resilience.'), 300);
  await logWithDelay(chalk.magenta('- Extensive experience in creating, publishing, and managing custom packages (npm, deb), facilitating development efficiency and component reusability.'), 300);
  await logWithDelay(chalk.magenta('- Developed, maintained, and published decentralized, white labeled, Progressive Web Apps, including offline functionality and isolated network compatibility.'), 300);
  await logWithDelay(chalk.magenta('- Leveraged AWS services (S3, Lambda, DynamoDB, CloudFront, Elastic Beanstalk) to design scalable and robust web applications.'), 300);
  await logWithDelay(chalk.magenta('- Experience with backend technologies (C#, Node.js, Django) and databases (MongoDB, MySQL)'), 300);
  await logWithDelay(chalk.magenta('- Utilized project management tools (JIRA, Trello) for effective coordination and streamlined workflows.'), 300);
  await logWithDelay(chalk.magenta('- Strong understanding of accessibility, performance optimization, web analytics, and SEO techniques for user-centric development.'), 300);
  await logWithDelay(chalk.magenta('- Expertise in location-based solutions, including mapping, autocomplete, and rendering using OpenStreetMap and Leaflet.'), 300);
  await logWithDelay(chalk.magenta('- Proactive in staying updated with industry trends, continuously improving development practices.'), 300);

  await logWithDelay(chalk.bold.blue('Technical Skills'), 500);
  await logWithDelay(chalk.cyan('- Angular'), 300);
  await logWithDelay(chalk.cyan('- React'), 300);
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
  await logWithDelay(chalk.green('- Engineering Manager'), 300);
  await logWithDelay(chalk.green('- December 2020 - Present'), 300);
  await logWithDelay(chalk.green('- Managing development of SugarBoxs Templatized, Decentralized Progressive Web App (sugarboxapp.com including an in-flight entertainment(IFE) solution across diverse airline partners airflix.co.in)'), 300);
  await logWithDelay(chalk.green('- Overseeing Reporting & Analytics Integration like WebEngage, In-house data stream, Gtm, Facebook pixel, etc. Implementing Robust error handling and reporting across different product suites within SugarBox. Leading Drm Playback Implementation using Widevine and Fairplay, Managing Payments Integrations, Real time flight data tracking using FlightAware, Partner Integrations using shopify and woocommerce, Payment Integrations (Razorpay, Simpl, Amazonpay etc), Themes, etc.'), 300);
  await logWithDelay(chalk.green('- Instrumental in setting up pipelines for distribution and deployment of services to various decentralized edge nodes leveraging DPKG, deb packages, nginx virtual hosts, dnsmasq etc.'), 300);

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
  await logWithDelay(chalk.green('- Graduated in 2015 with 75% (8.4 CGPA)'), 300);
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
