---
sidebar_position: 1
---

# Getting Started

Devgen is an AI assistant designed to enhance your daily workflow with GitHub.
<img src="/img/devgen_first_look.png" alt="devgen" />

:::warning

Devgen is currently in **beta version**. We welcome your feedback - please report any bugs you encounter to help us improve Devgen
* **[Report Bug](https://github.com/getdevgen/devgen/issues/new?assignees=imotai&labels=bug&projects=&template=bug_report.md&title=bug%3A)**
* **[Request Feature](https://github.com/getdevgen/devgen/issues/new?assignees=imotai&labels=enhancement&projects=&template=feature_request.md&title=feat%3A+)**
* **[Share Your Ideas](https://github.com/getdevgen/devgen/discussions)**

:::

## Requirements

Before using Devgen, ensure you meet the following requirements:
1. You must have a [GitHub](https://github.com/) account.
2. You must have either:a) Permission to access [GitHub Models](https://github.com/marketplace/models), or b) Credits for [OpenRouter](https://openrouter.ai/)

:::tip

* The [Github Models](https://github.com/marketplace/models) is free currently

:::

## Installation

* Install the stable version from Chrome Web Store
* Download from [Github](https://github.com/getdevgen/devgen/releases) and install it using developer mode

## Setup

1. Open one of your GitHub repositories in Chrome.
2. Click the Devgen icon to open the sidebar panel.
3. Log in with your GitHub account.
4. Connect to your preferred model provider: GitHub Models or OpenRouter

You can connect the multi Model Provider in the Settings

### Connect to Github Models

Currently Github dose not allow oauth2 token to access the Model API . So you must [create](https://github.com/settings/personal-access-tokens/new) a Github PAT for Github Model if connecting to Github Models. 



:::warning

For security
* Do not grant any permission to the Github PAT
* You are the owner of your PAT. Devgen can not use the PAT again if you delete the PAT from Github

When does the Devgen use your Github PAT?
1. check the token when you save it to devgen for the first time
2. use the token when you chat to your Assistant

:::

### Connect to OpenRouter




## Try It Out

Once Devgen is set up:
1. Navigate to any GitHub repository.
2. Open the Devgen sidebar.
3. Setup the index of the Github repository for the first time
4. Ask questions about the current repository to explore its capabilities.
