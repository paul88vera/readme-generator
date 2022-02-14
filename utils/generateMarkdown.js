// TODO: Create a function that returns a license badge based on which license is passed in
const licenseOBJ = {
  renderLicenseBadge: function (license) {
    let container = "";

    if (license === "Boost") {
      container =
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (license === "MIT") {
      container =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "APACHE") {
      container = 
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "BSD-3") {
      container =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (license === "BSD-2") {
      container =
      "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    } else if (license === "Mozilla") {
     container =
     "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else {
      container = "";
    }
    return container;
  },

  // TODO: Create a function to generate markdown for README
  generateMarkdown: function(data) {
   licenseContainer = this.renderLicenseBadge(data.license);
    return `
  # ${data.projectName}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  License under ${licenseContainer} license

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
----
  ## Questions
  If you have questions, you can contact me below!
  
  GitHub Username: ${data.github}

  GitHub Profile: [Github.com/${data.github}](https://github.com/${data.github}/)

  Email Address: ${data.email}
 `;
  },
};
module.exports = licenseOBJ;
