// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//const License = true;

function renderLicenseBadge(license) {
  switch (new License().renderLicenseBadge()) {
    case 0:
      license = "MIT";
      break;
    case 1:
      license = "APACHE 2.0";
      break;
    case 2:
      license = "BSD 3";
      break;
    case 3:
      license = "GPL 3.0";
      break;
    case 4:
      license = "Mozilla";
      break;
    case 5:
      license = "None";
      break;
    case 6:
      license = "";
  }
  return
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n "https://choosealicense.com/licenses/" \n`
    )
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
      
  This project is licensed under the ${license} license.`
    )
  }
  return ""
}

// TODO: Create a function to generate markdown for README
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

\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, constact me at ${data.email}. 
You can find more of my work at [${data.github}](https://github.com/${data.github}/).`;
}

module.exports = generateMarkdown;