---
title: Chat With Pull Request
---

With the **Devgen** Chrome extension, you can chat about specific pull requests directly in the GitHub repository. This feature is useful for understanding changes, discussing code updates, and getting insights on pull request details.

### How to Chat with a Pull Request

1. Open the GitHub repository in Chrome.
2. Navigate to the pull request you want to discuss.
3. Right-click on the pull request and select **Add to Chat** to add it to the Devgen context.
4. In the Devgen side panel, type your question or comments about the pull request to get relevant information and assistance.


<img src="/gif/chat_with_pull_request.gif" alt="devgen" />
:::tip
If the pull request is too large and exceeds the maximum token limit, choose the most important patches by selecting only key files or sections. This will help Devgen provide a more focused analysis on the critical changes.
:::


### Tips for Chatting with Pull Requests

- **Be Specific**: Ask detailed questions about the pull request. Instead of "What does this PR do?", ask "What specific changes does this PR make to `apiUtils.js`?"
- **Add Context**: If you have questions about particular files or lines within the pull request, mention them to get targeted responses.
- **Break Down Questions**: For complex pull requests, ask about one file or function at a time.
- **Refresh Context**: If the pull request is updated with new commits, re-add it to Devgen to include the latest changes.


### Use Cases

Here are some common ways to use Devgen’s pull request chat feature:

1. **Review Code Changes**: Get a summary or explanation of the changes in a pull request, such as "What are the key changes in `userAuth.js`?"

2. **Discuss Potential Issues**: If you're concerned about code quality or potential bugs, ask Devgen for an analysis, e.g., "Are there any potential issues with the new validation logic?"

3. **Understand Dependencies**: For complex pull requests, Devgen can help you understand dependencies introduced by the changes. Ask, "How does this PR affect `dataService.js`?"

4. **Suggest Refactoring**: If the pull request introduces large or complex changes, ask Devgen for refactoring suggestions to make the code more maintainable.

5. **Help with Documentation**: If the pull request introduces new features, Devgen can help identify what parts may need documentation updates or summaries.

