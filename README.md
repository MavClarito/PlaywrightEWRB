# Playwright - UI(Browser)

<br>

## Purpose

This README serves as a reference guide for the Automation Framework developed for Eastwest Browser based UI Testing. The framework is designed and implemented in accordance with the company's automation standards, architectural guidelines, and industry best practices to ensure consistency, maintainability, scalability, and efficient test execution.

This document focuses on the setup, usage, and maintenance of the API automation framework. A separate document will be maintained to provide comprehensive documentation covering the overall framework architecture, standards, and governance.

**Confidentiality Notice**

This document contains confidential and proprietary information of EastWest Banking Corporation and is intended solely for authorized personnel within the organization. Any unauthorized sharing, distribution, reproduction, disclosure, or use of this document, in whole or in part, is strictly prohibited. All recipients are expected to handle this document with the highest level of confidentiality and in accordance with the bank's information security policies.

<br>

## Document Information

- **Company Name:** EastWest Banking Corporation
- **Department/Unit:** ITG - Shared Testing Services
- **Document / Artifact / Framework Author:** Matabang, Abraham Alexis (STS - Test Manager)
- **Approved By:** Sy, Clayton (ITG - STS Head)

<br>

## Setup

The following sections outline the required setup and configuration for:

- Playwright installation and configuration
- Version control integration and repository management
- CI/CD pipeline enablement and execution
- Framework prerequisites and dependencies

Please ensure that all prerequisites are completed before proceeding with framework execution and onboarding activities.


######################################################################################################
Installation
#######################################################################################################
    Installation for Playwright
1	Install VSCode
2	Install node.js
3	Install .net 8(or higher)
4	Install git
5	Create a folder under your c:/user/
6	Drag or open this folder in VSCode
7	Open terminal CLI in VSCode. Navigate to Terminal>New Terminal
8	In the terminal(CLI window) input npm init playwright@latest, accept all default configurations
9	In the same CLI window, Run npm i --save-dev @types/node
10	"If issues encountered on installing playwright browser(firefox, webkit,chrome), run this on the CLI $env:NODE_OPTIONS=""--use-system-ca""
then
npx playwright install chromium firefox webkit"
11	In the same CLI window, npm install dotenv
12	npm install -D allure-playwright allure-commandline monocart-report
#######################################################################################################
    Install the ff: VS Extensions
1	GitHub Actions
2	Playwright test for VS Code
3	Spreadsheet Viewer
4	Postman
######################################################################################################

######################################################################################################
Version Control
#######################################################################################################
    Pushing changes
1	git status
2	git add .
3	git remote add <name of remote> <url>
4	git commit -M "Description of change".  if first time use, "Initial Commit"
5	git branch -M main, if creating a new branch
6	git push <name of remote> <branch>
#######################################################################################################
    Pulling repository updates
    Before pushing your changes, it's a good practice to pull the latest updates from the remote repository to avoid conflicts.
1	"Make sure you're on the branch you want to update (for example, main or develop).
git branch"
2	git fetch azure
3	git pull azure <branch>
#######################################################################################################
    make/apply your changes
1	git add .
2	git commit -m "feat: reporting updates"
3	git push azure HEAD
4	git push origin HEAD
######################################################################################################
    merge changes to MAIN branch from other branches
1   git fetch azure main
2   git merge azure/(azure branch)
3   resolve conflicts - for eg. azure-pipelines-1.yml needs to be merged
    a.) keep your version
    git checkout --ours azure-pipelines-1.yml
    b.) keep others
    git checkout --theirs azure-pipelines-1.yml
    c.) combine both versions manually
    open and edit both the file
4   git add file name(eg. azure-pipelines-1.yml)
5   git commit -m "Merge branch (name of branch) into main. Updates on the azure-pipelines-1.yml"
6   git push azure main
######################################################################################################

######################################################################################################
Pipeline
######################################################################################################
    Upload Repository First
    ADO
1	Go to Azure DevOps
2	Select your project.
3	Go to Repos → Files.
4	Click Initialize or New Repository. A <url> will be generated for the project
5	"Open Terminal in Your Local Project
cd /path/to/your/project"
6	"Initialize Git if not already initialized:
git init
git add .
git initial -m ""Initial Commit"""
7	"Add Azure as Remote name. Means this is where the project is located
git remote add azure <url>"
8	git branch -M main
9	git push -u azure main
######################################################################################################
Creation of Agent (Where to run your pipeline)
1	Create an Agent pool in ADO. Navigate to Organization Settings
2	Under Pipeline, select Agent Pool
3	Select or create an Agent Pool
4	If newly created, navigate to Agent tab, then click new
5	download and save on local machine/server to be used for pipeline. Either your local or VM Machine
6	extract the downloaded zip agent file in the c:/AzureAgent. Create this folder if not available yet
7	"open cmd
cd c:/AzureAgent"
8	"config the agent.
config.cmd"
9	enter server url: https://dev.azure.com/EWBCORP
10	enter authentication type(PAT). Just press enter since PAT is default
11	enter personal access token: (To generate, configure this in your ADO profile under User settings>Personal access token)
12	enter agent pool: STS-Self Hosted
13	"enter agent name <press enter for yourhostname> ---- should be renamed as STS-SelfHostedVM-<IP>
eg. STS-SelfHostedVM-172.28.13.113"
14	enter work folder (press enter for _work)>
15	enter run agent as a service? (Y/N) (press enter for N)>
16	enter configure autologon and run agent on startup? (Y/N) (press enter for N)>
######################################################################################################
    Run Agent Pool
1	"Navigate to the location of the Agent pool
cd c:/AzureAgent"
2	run.cmd
######################################################################################################

#####################THIS IS HIGHLY CONFIDENTIAL AND PROPERTY OF EASTWEST BANK########################