---
slug: reading-large-codebases-made-easy
title: "Devgen : Reading Large Codebases Made Easy"
authors: imotai
tags: [github, assistant]
---


<img src="/img/devgen_overview.png" alt="devgen" />

Introducing our latest product:

**Devgen: A Codebase Research Assistant**

The core goal of Devgen is to make **reading code simple**.

### **Easy to Use**

Unlike most code search assistants, such as Cody or Devv, which require users to interact via standalone sites, Devgen operates through the Chrome side panel. This approach allows you to browse the code while simultaneously querying Devgen.

To get started, simply open the GitHub repository you want to analyze in your browser, and Devgen will be ready to assist. Since Devgen saves the repository's index, there’s no need to clone it locally, saving you significant startup time in codebase exploration.

### **Comprehensive Indexing**

Devgen indexes not only the code but also issues, pull requests, and releases. For each query, it searches through these components, ranks them, and provides the most relevant result to the model.

Why add data like issues, pull requests, and releases?

In a well-maintained code repository, these sections often contain valuable insights and context about the project.

### **How Devgen Selects Optimal Results**

Devgen optimizes result selection in two main ways:

1. Using hybrid search, which stores code blocks, issues, pull requests, and releases in both full-text and vector databases. By recalling data from both sources simultaneously, Devgen can jointly rank and present the best results.
2. Segmenting code and adding additional context to each segment, leveraging the Devgen-Splitter for enhanced analysis.

### **Boosting Code Research Efficiency**

Devgen is designed to improve research efficiency through:

1. Providing highly accurate references, aided by the segmentation and context-enrichment techniques mentioned above, ensuring AI-generated answers are as verifiable as possible.
2. Offering follow-up and further reading recommendations with each response, guiding users to narrow down their research scope and dive into details more effectively.