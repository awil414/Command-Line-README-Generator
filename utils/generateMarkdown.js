// Function that returns a license badge based on which license is passed 
function renderLicenseBadge(license) { 
  switch (license) {
    case 'MIT': return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    case 'APACHE 2.0': return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    case 'BSD 3': return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
    case 'Mozilla': return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
    default: return ``;
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n "https://choosealicense.com/licenses/" \n`
    )
  }
  return ""
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
      
  This project is licensed under the ${license} license.`
    )
  }
  return ""
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [License](#License)
${renderLicenseLink(data.license)}

## Installation
To install necessary dependencies, run the following command:

\n
${data.installation}
\n

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Credits
${data.credits}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, contact me at ${data.email}. 
You can find more of my work at [${data.username}](https://github.com/${data.username}/).`;
}

module.exports = generateMarkdown;