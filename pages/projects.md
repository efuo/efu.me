---
title: Projects - Efu
display: Projects
description: List of projects that I am proud of
plum: true
wrapperClass: 'text-center'
projects:
    Current Focus:
      - name: 'hexo-theme-solitude'
        link: 'https://github.com/valor-x/hexo-theme-solitude'
        desc: 'An elegant Hexo theme.'
        icon: 'i-simple-icons-hexo saturate-0'
      - name: 'Img2color'
        link: 'https://github.com/valor-x/img2color'
        icon: 'i-simple-icons-figshare saturate-0'
      - name: 'Post-Summary-AI'
        link: 'https://github.com/efuo/post-summary-ai'
        icon: 'i-simple-icons-chatbot aturate-0'
---

<!-- @layout-full-width -->

<ListProjects :projects="frontmatter.projects" />
