---
title: Chat With Commit
---

Use the **Devgen** to ask questions about specific commits in a GitHub repository. This feature lets you chat directly with Devgen about recent changes, commit history, or specific updates in the code.

1. Open the GitHub repository in Chrome.
2. Navigate to the **Commits** page of the repository.
3. Right-click on a commit and select **Add to Chat** to include the commit in your Devgen side panel chat.
4. In the Devgen side panel, type your question about the selected commit to get more information.

<img src="/gif/chat_with_commit.gif" alt="devgen" />
:::tip
If there’s no index set up for the repository, you’ll need to create one first so Devgen can analyze commit details and history.
:::


### Best Practices

- **Be Specific**: Clearly specify what you want to know. For example, instead of "What is this?", ask, “What changes were made in this commit to `Invoice.js`?”
- **Add Context**: Mention specific files or functions within the commit for more detailed answers.
- **Ask About Multiple Commits**: Add multiple commits to the chat to ask about a sequence of changes.
- **Update Index for Recent Commits**: For active repositories, update the index regularly to reflect recent commits and keep the chat accurate.


### Use Cases

Here are some ways to use the **Chat with Commit** feature effectively:

1. **Understand Code Changes**: Ask Devgen for a summary of changes made in a specific commit, like “What was modified in this commit for the `login` function?”

2. **Troubleshoot Recent Issues**: If you’re tracking down a bug introduced recently, add relevant commits to the chat and ask, “Could any of these changes affect the `userAuth` module?”

3. **Review Feature Updates**: For feature-related commits, ask for a high-level summary of changes, such as “How was the dashboard updated in this commit?”

4. **Track Dependencies in Commits**: If a commit involves multiple files, Devgen can help trace dependencies, like "How do changes in `config.js` connect with updates in `apiUtils.js`?"

5. **Document Changes**: Use Devgen to help document what was done in specific commits, making it easier to understand recent work. For example, “What’s the purpose of changes made to `main.css` in this commit?”

