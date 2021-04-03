const api = require("./api");

function generateMarkdown(answers, user) {
  return `
  ![](${user.avatar_url})
  # ${user.name}
  ### [E-mail Me Here!](${user.email})
---
  # ${answers.ProjectTitle}
## Description 
---
${answers.ProjectDescription}


- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 

## Installation

        ${data.installation}

## Usage
${data.usage}

## Licence
${data.licence}

## Contributors
${data.contributing}

## Test
${data.test}

## Repository
- [Project Repo](${data.repo})

## GitHub
![Image of me](${githubInfo.githubImage})
- ${githubInfo.name}

- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>
`;
}

module.exports = generateMarkdown;
