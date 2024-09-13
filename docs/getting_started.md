---
sidebar_position: 1
---

# Getting Started

Devgen is an AI assistant designed to enhance your daily workflow with GitHub.
<img src="/img/devgen_first_look.png" alt="devgen" />

:::warning

Devgen is currently in **beta version**. We welcome your feedback - please report any bugs you encounter to help us improve Devgen

:::

## Requirements

Before using Devgen, ensure you meet the following requirements:
1. You must have a [GitHub](https://github.com/) account.
2. You must have either:a) Permission to access [GitHub Models](https://github.com/marketplace/models), or b) Credits for [OpenRouter](https://openrouter.ai/)

## Installation

* Install the stable version from [Chrome Web Store](https://chromewebstore.google.com/detail/devgen-your-github-ai-ass/iglkjhingcdlfanjlokiodgfcllmcfoc?authuser=0&hl=en)
* Download from [Github](https://github.com/getdevgen/devgen/releases) and install it using developer mode

## Setup

1. Open one of your GitHub repositories in Chrome.
2. Click the Devgen icon to open the sidebar panel.
3. Log in with your GitHub account.
4. Connect to your preferred model provider: GitHub Models or OpenRouter

You can connect the multi Model Provider in the Settings

### Connect to OpenRouter

Connect to OpenRouter quickly and securely with just one click, granting Devgen a token with limited credits. OpenRouter supports [OAuth PKCE](https://openrouter.ai/docs/oauth) for enhanced security. As a recommended provider for Devgen, OpenRouter offers seamless integration and reliable service.

### Connect to Github Models

GitHub currently doesn't support OAuth2 tokens for accessing the Model API. To connect to GitHub Models, you need to [create](https://github.com/settings/personal-access-tokens/new) a GitHub Personal Access Token (PAT).
Security considerations:

Do not grant any permissions to the GitHub PAT
You retain full control of your PAT. If you delete the PAT from GitHub, Devgen can no longer use it

When Devgen uses your GitHub PAT:
1. To verify the token when you first save it to Devgen
2. To authenticate requests when you chat with your Assistant

Important notes:
Create a token with minimal or no permissions for enhanced security
You can revoke access at any time by deleting the PAT from your GitHub account

## Try It Out

Once Devgen is set up:
1. Navigate to any GitHub repository.
2. Open the Devgen sidebar.
3. Setup the index of the Github repository for the first time
4. Ask questions about the current repository to explore its capabilities.


