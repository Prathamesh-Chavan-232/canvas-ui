// Blog Template - Serialized CraftJS data
export default {
  ROOT: {
    type: {
      resolvedName: "Frame",
    },
    isCanvas: true,
    props: {
      width: "100%",
      height: "auto",
      background: "#ffffff",
    },
    displayName: "Frame",
    custom: {},
    hidden: false,
    nodes: ["header", "featured-posts", "main-content", "newsletter", "footer"],
    linkedNodes: {},
  },
  header: {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      padding: "20px 0",
      borderBottom: "1px solid #e2e8f0",
      width: "100%",
      backgroundColor: "#ffffff",
    },
    displayName: "Container",
    custom: {
      displayName: "Header",
    },
    hidden: false,
    nodes: ["header-content"],
    linkedNodes: {},
  },
  "header-content": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    displayName: "Container",
    custom: {
      displayName: "Header Content",
    },
    hidden: false,
    nodes: ["logo", "nav-menu"],
    linkedNodes: {},
  },
  logo: {
    type: {
      resolvedName: "Heading",
    },
    isCanvas: false,
    props: {
      text: "BlogFolio",
      level: 2,
      fontSize: "24px",
      fontWeight: "700",
      color: "#0f172a",
    },
    displayName: "Heading",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "nav-menu": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      display: "flex",
      gap: "24px",
    },
    displayName: "Container",
    custom: {
      displayName: "Nav Menu",
    },
    hidden: false,
    nodes: ["nav-item-1", "nav-item-2", "nav-item-3", "nav-item-4"],
    linkedNodes: {},
  },
  "nav-item-1": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Home",
      fontSize: "16px",
      color: "#0f172a",
      fontWeight: "500",
      cursor: "pointer",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "nav-item-2": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Blog",
      fontSize: "16px",
      color: "#0f172a",
      fontWeight: "500",
      cursor: "pointer",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "nav-item-3": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "About",
      fontSize: "16px",
      color: "#0f172a",
      fontWeight: "500",
      cursor: "pointer",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "nav-item-4": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Contact",
      fontSize: "16px",
      color: "#0f172a",
      fontWeight: "500",
      cursor: "pointer",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "featured-posts": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      paddingTop: "60px",
      paddingBottom: "60px",
      width: "100%",
      backgroundColor: "#f8fafc",
    },
    displayName: "Container",
    custom: {
      displayName: "Featured Posts",
    },
    hidden: false,
    nodes: ["featured-container"],
    linkedNodes: {},
  },
  "featured-container": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
    },
    displayName: "Container",
    custom: {
      displayName: "Featured Container",
    },
    hidden: false,
    nodes: ["featured-heading", "featured-grid"],
    linkedNodes: {},
  },
  "featured-heading": {
    type: {
      resolvedName: "Heading",
    },
    isCanvas: false,
    props: {
      text: "Featured Posts",
      level: 2,
      fontSize: "32px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "40px",
    },
    displayName: "Heading",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "featured-grid": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      gap: "32px",
    },
    displayName: "Container",
    custom: {
      displayName: "Featured Grid",
    },
    hidden: false,
    nodes: ["post-1", "post-2", "post-3"],
    linkedNodes: {},
  },
  "post-1": {
    type: {
      resolvedName: "CraftCard",
    },
    isCanvas: true,
    props: {
      title: "How to Improve Your Design Process",
      padding: "0",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    displayName: "CraftCard",
    custom: {},
    hidden: false,
    nodes: ["post-1-content"],
    linkedNodes: {},
  },
  "post-1-content": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      padding: "0",
    },
    displayName: "Container",
    custom: {
      displayName: "Post 1 Content",
    },
    hidden: false,
    nodes: ["post-1-image", "post-1-text"],
    linkedNodes: {},
  },
  "post-1-image": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: false,
    props: {
      width: "100%",
      height: "200px",
      backgroundColor: "#94a3b8",
    },
    displayName: "Container",
    custom: {
      displayName: "Post 1 Image",
    },
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-1-text": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      padding: "20px",
    },
    displayName: "Container",
    custom: {
      displayName: "Post 1 Text",
    },
    hidden: false,
    nodes: ["post-1-category", "post-1-title", "post-1-excerpt", "post-1-meta"],
    linkedNodes: {},
  },
  "post-1-category": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Design",
      fontSize: "14px",
      color: "#3b82f6",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      marginBottom: "8px",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-1-title": {
    type: {
      resolvedName: "Heading",
    },
    isCanvas: false,
    props: {
      text: "How to Improve Your Design Process",
      level: 3,
      fontSize: "20px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "12px",
      lineHeight: "1.4",
    },
    displayName: "Heading",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-1-excerpt": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Discover practical tips and strategies to enhance your design workflow and produce better results in less time.",
      fontSize: "16px",
      color: "#334155",
      lineHeight: "1.6",
      marginBottom: "16px",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-1-meta": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "May 15, 2024 • 5 min read",
      fontSize: "14px",
      color: "#64748b",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-2": {
    type: {
      resolvedName: "CraftCard",
    },
    isCanvas: true,
    props: {
      title: "10 Essential Web Development Tools",
      padding: "0",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    displayName: "CraftCard",
    custom: {},
    hidden: false,
    nodes: ["post-2-content"],
    linkedNodes: {},
  },
  "post-2-content": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      padding: "0",
    },
    displayName: "Container",
    custom: {
      displayName: "Post 2 Content",
    },
    hidden: false,
    nodes: ["post-2-image", "post-2-text"],
    linkedNodes: {},
  },
  "post-2-image": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: false,
    props: {
      width: "100%",
      height: "200px",
      backgroundColor: "#94a3b8",
    },
    displayName: "Container",
    custom: {
      displayName: "Post 2 Image",
    },
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-2-text": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      padding: "20px",
    },
    displayName: "Container",
    custom: {
      displayName: "Post 2 Text",
    },
    hidden: false,
    nodes: ["post-2-category", "post-2-title", "post-2-excerpt", "post-2-meta"],
    linkedNodes: {},
  },
  "post-2-category": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Development",
      fontSize: "14px",
      color: "#3b82f6",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      marginBottom: "8px",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-2-title": {
    type: {
      resolvedName: "Heading",
    },
    isCanvas: false,
    props: {
      text: "10 Essential Web Development Tools",
      level: 3,
      fontSize: "20px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "12px",
      lineHeight: "1.4",
    },
    displayName: "Heading",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-2-excerpt": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Explore the most useful tools that every web developer should have in their toolkit for more efficient coding.",
      fontSize: "16px",
      color: "#334155",
      lineHeight: "1.6",
      marginBottom: "16px",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-2-meta": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "May 10, 2024 • 8 min read",
      fontSize: "14px",
      color: "#64748b",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-3": {
    type: {
      resolvedName: "CraftCard",
    },
    isCanvas: true,
    props: {
      title: "Why SEO Still Matters in 2024",
      padding: "0",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    displayName: "CraftCard",
    custom: {},
    hidden: false,
    nodes: ["post-3-content"],
    linkedNodes: {},
  },
  "post-3-content": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      padding: "0",
    },
    displayName: "Container",
    custom: {
      displayName: "Post 3 Content",
    },
    hidden: false,
    nodes: ["post-3-image", "post-3-text"],
    linkedNodes: {},
  },
  "post-3-image": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: false,
    props: {
      width: "100%",
      height: "200px",
      backgroundColor: "#94a3b8",
    },
    displayName: "Container",
    custom: {
      displayName: "Post 3 Image",
    },
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-3-text": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      padding: "20px",
    },
    displayName: "Container",
    custom: {
      displayName: "Post 3 Text",
    },
    hidden: false,
    nodes: ["post-3-category", "post-3-title", "post-3-excerpt", "post-3-meta"],
    linkedNodes: {},
  },
  "post-3-category": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "SEO",
      fontSize: "14px",
      color: "#3b82f6",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      marginBottom: "8px",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-3-title": {
    type: {
      resolvedName: "Heading",
    },
    isCanvas: false,
    props: {
      text: "Why SEO Still Matters in 2024",
      level: 3,
      fontSize: "20px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "12px",
      lineHeight: "1.4",
    },
    displayName: "Heading",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-3-excerpt": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Learn about the evolving landscape of search engine optimization and why it remains crucial for online success.",
      fontSize: "16px",
      color: "#334155",
      lineHeight: "1.6",
      marginBottom: "16px",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-3-meta": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "May 5, 2024 • 6 min read",
      fontSize: "14px",
      color: "#64748b",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "main-content": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      paddingTop: "60px",
      paddingBottom: "60px",
      width: "100%",
    },
    displayName: "Container",
    custom: {
      displayName: "Main Content",
    },
    hidden: false,
    nodes: ["content-container"],
    linkedNodes: {},
  },
  "content-container": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      display: "grid",
      gridTemplateColumns: "1fr 300px",
      gap: "40px",
    },
    displayName: "Container",
    custom: {
      displayName: "Content Container",
    },
    hidden: false,
    nodes: ["posts-section", "sidebar"],
    linkedNodes: {},
  },
  "posts-section": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {},
    displayName: "Container",
    custom: {
      displayName: "Posts Section",
    },
    hidden: false,
    nodes: ["recent-posts-heading", "posts-list"],
    linkedNodes: {},
  },
  "recent-posts-heading": {
    type: {
      resolvedName: "Heading",
    },
    isCanvas: false,
    props: {
      text: "Recent Posts",
      level: 2,
      fontSize: "28px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "32px",
    },
    displayName: "Heading",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "posts-list": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      display: "flex",
      flexDirection: "column",
      gap: "32px",
    },
    displayName: "Container",
    custom: {
      displayName: "Posts List",
    },
    hidden: false,
    nodes: ["post-item-1", "post-item-2", "pagination"],
    linkedNodes: {},
  },
  "post-item-1": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      display: "flex",
      gap: "24px",
      paddingBottom: "32px",
      borderBottom: "1px solid #e2e8f0",
    },
    displayName: "Container",
    custom: {
      displayName: "Post Item 1",
    },
    hidden: false,
    nodes: ["post-item-1-image", "post-item-1-content"],
    linkedNodes: {},
  },
  "post-item-1-image": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: false,
    props: {
      width: "200px",
      height: "150px",
      backgroundColor: "#94a3b8",
      borderRadius: "8px",
      flexShrink: "0",
    },
    displayName: "Container",
    custom: {
      displayName: "Post Item 1 Image",
    },
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-item-1-content": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {},
    displayName: "Container",
    custom: {
      displayName: "Post Item 1 Content",
    },
    hidden: false,
    nodes: [
      "post-item-1-category",
      "post-item-1-title",
      "post-item-1-excerpt",
      "post-item-1-meta",
    ],
    linkedNodes: {},
  },
  "post-item-1-category": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Technology",
      fontSize: "14px",
      color: "#3b82f6",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      marginBottom: "8px",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-item-1-title": {
    type: {
      resolvedName: "Heading",
    },
    isCanvas: false,
    props: {
      text: "The Future of AI in Web Development",
      level: 3,
      fontSize: "22px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "12px",
      lineHeight: "1.4",
    },
    displayName: "Heading",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-item-1-excerpt": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Explore how artificial intelligence is transforming web development practices and what this means for developers and businesses alike.",
      fontSize: "16px",
      color: "#334155",
      lineHeight: "1.6",
      marginBottom: "16px",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-item-1-meta": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "May 3, 2024 • 10 min read",
      fontSize: "14px",
      color: "#64748b",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-item-2": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      display: "flex",
      gap: "24px",
      paddingBottom: "32px",
      borderBottom: "1px solid #e2e8f0",
    },
    displayName: "Container",
    custom: {
      displayName: "Post Item 2",
    },
    hidden: false,
    nodes: ["post-item-2-image", "post-item-2-content"],
    linkedNodes: {},
  },
  "post-item-2-image": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: false,
    props: {
      width: "200px",
      height: "150px",
      backgroundColor: "#94a3b8",
      borderRadius: "8px",
      flexShrink: "0",
    },
    displayName: "Container",
    custom: {
      displayName: "Post Item 2 Image",
    },
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-item-2-content": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {},
    displayName: "Container",
    custom: {
      displayName: "Post Item 2 Content",
    },
    hidden: false,
    nodes: [
      "post-item-2-category",
      "post-item-2-title",
      "post-item-2-excerpt",
      "post-item-2-meta",
    ],
    linkedNodes: {},
  },
  "post-item-2-category": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Accessibility",
      fontSize: "14px",
      color: "#3b82f6",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      marginBottom: "8px",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-item-2-title": {
    type: {
      resolvedName: "Heading",
    },
    isCanvas: false,
    props: {
      text: "Creating Accessible Websites: A Comprehensive Guide",
      level: 3,
      fontSize: "22px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "12px",
      lineHeight: "1.4",
    },
    displayName: "Heading",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-item-2-excerpt": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Learn how to make your websites more inclusive and accessible for all users, including those with disabilities or impairments.",
      fontSize: "16px",
      color: "#334155",
      lineHeight: "1.6",
      marginBottom: "16px",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "post-item-2-meta": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "May 1, 2024 • 12 min read",
      fontSize: "14px",
      color: "#64748b",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  pagination: {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "16px",
      marginTop: "40px",
    },
    displayName: "Container",
    custom: {
      displayName: "Pagination",
    },
    hidden: false,
    nodes: ["page-prev", "page-1", "page-2", "page-3", "page-next"],
    linkedNodes: {},
  },
  "page-prev": {
    type: {
      resolvedName: "CraftButton",
    },
    isCanvas: false,
    props: {
      text: "Previous",
      variant: "outline",
      size: "sm",
    },
    displayName: "CraftButton",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "page-1": {
    type: {
      resolvedName: "CraftButton",
    },
    isCanvas: false,
    props: {
      text: "1",
      variant: "default",
      size: "sm",
    },
    displayName: "CraftButton",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "page-2": {
    type: {
      resolvedName: "CraftButton",
    },
    isCanvas: false,
    props: {
      text: "2",
      variant: "outline",
      size: "sm",
    },
    displayName: "CraftButton",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "page-3": {
    type: {
      resolvedName: "CraftButton",
    },
    isCanvas: false,
    props: {
      text: "3",
      variant: "outline",
      size: "sm",
    },
    displayName: "CraftButton",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "page-next": {
    type: {
      resolvedName: "CraftButton",
    },
    isCanvas: false,
    props: {
      text: "Next",
      variant: "outline",
      size: "sm",
    },
    displayName: "CraftButton",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  sidebar: {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {},
    displayName: "Container",
    custom: {
      displayName: "Sidebar",
    },
    hidden: false,
    nodes: ["search-box", "categories-card", "popular-posts-card"],
    linkedNodes: {},
  },
  "search-box": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      marginBottom: "32px",
    },
    displayName: "Container",
    custom: {
      displayName: "Search Box",
    },
    hidden: false,
    nodes: ["search-heading", "search-input"],
    linkedNodes: {},
  },
  "search-heading": {
    type: {
      resolvedName: "Heading",
    },
    isCanvas: false,
    props: {
      text: "Search",
      level: 3,
      fontSize: "20px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "16px",
    },
    displayName: "Heading",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "search-input": {
    type: {
      resolvedName: "CraftInput",
    },
    isCanvas: false,
    props: {
      placeholder: "Search articles...",
      width: "100%",
      padding: "12px 16px",
      borderRadius: "8px",
      border: "1px solid #cbd5e1",
    },
    displayName: "CraftInput",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "categories-card": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      padding: "24px",
      border: "1px solid #e2e8f0",
      borderRadius: "12px",
      marginBottom: "32px",
    },
    displayName: "Container",
    custom: {
      displayName: "Categories Card",
    },
    hidden: false,
    nodes: ["categories-heading", "categories-list"],
    linkedNodes: {},
  },
  "categories-heading": {
    type: {
      resolvedName: "Heading",
    },
    isCanvas: false,
    props: {
      text: "Categories",
      level: 3,
      fontSize: "20px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "16px",
    },
    displayName: "Heading",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "categories-list": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    displayName: "Container",
    custom: {
      displayName: "Categories List",
    },
    hidden: false,
    nodes: [
      "category-1",
      "category-2",
      "category-3",
      "category-4",
      "category-5",
    ],
    linkedNodes: {},
  },
  "category-1": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Design (15)",
      fontSize: "16px",
      color: "#334155",
      cursor: "pointer",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "category-2": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Development (23)",
      fontSize: "16px",
      color: "#334155",
      cursor: "pointer",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "category-3": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Technology (18)",
      fontSize: "16px",
      color: "#334155",
      cursor: "pointer",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "category-4": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Accessibility (9)",
      fontSize: "16px",
      color: "#334155",
      cursor: "pointer",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "category-5": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "SEO (12)",
      fontSize: "16px",
      color: "#334155",
      cursor: "pointer",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "popular-posts-card": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      padding: "24px",
      border: "1px solid #e2e8f0",
      borderRadius: "12px",
    },
    displayName: "Container",
    custom: {
      displayName: "Popular Posts Card",
    },
    hidden: false,
    nodes: ["popular-heading", "popular-posts-list"],
    linkedNodes: {},
  },
  "popular-heading": {
    type: {
      resolvedName: "Heading",
    },
    isCanvas: false,
    props: {
      text: "Popular Posts",
      level: 3,
      fontSize: "20px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "16px",
    },
    displayName: "Heading",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "popular-posts-list": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    displayName: "Container",
    custom: {
      displayName: "Popular Posts List",
    },
    hidden: false,
    nodes: ["popular-post-1", "popular-post-2", "popular-post-3"],
    linkedNodes: {},
  },
  "popular-post-1": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      display: "flex",
      gap: "12px",
      paddingBottom: "16px",
      borderBottom: "1px solid #e2e8f0",
    },
    displayName: "Container",
    custom: {
      displayName: "Popular Post 1",
    },
    hidden: false,
    nodes: ["popular-post-1-image", "popular-post-1-info"],
    linkedNodes: {},
  },
  "popular-post-1-image": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: false,
    props: {
      width: "60px",
      height: "60px",
      backgroundColor: "#94a3b8",
      borderRadius: "6px",
      flexShrink: "0",
    },
    displayName: "Container",
    custom: {
      displayName: "Popular Post 1 Image",
    },
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "popular-post-1-info": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {},
    displayName: "Container",
    custom: {
      displayName: "Popular Post 1 Info",
    },
    hidden: false,
    nodes: ["popular-post-1-title", "popular-post-1-meta"],
    linkedNodes: {},
  },
  "popular-post-1-title": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "5 Typography Tips for Better Web Design",
      fontSize: "15px",
      color: "#0f172a",
      fontWeight: "600",
      lineHeight: "1.4",
      marginBottom: "4px",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "popular-post-1-meta": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "April 28, 2024",
      fontSize: "13px",
      color: "#64748b",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "popular-post-2": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      display: "flex",
      gap: "12px",
      paddingBottom: "16px",
      borderBottom: "1px solid #e2e8f0",
    },
    displayName: "Container",
    custom: {
      displayName: "Popular Post 2",
    },
    hidden: false,
    nodes: ["popular-post-2-image", "popular-post-2-info"],
    linkedNodes: {},
  },
  "popular-post-2-image": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: false,
    props: {
      width: "60px",
      height: "60px",
      backgroundColor: "#94a3b8",
      borderRadius: "6px",
      flexShrink: "0",
    },
    displayName: "Container",
    custom: {
      displayName: "Popular Post 2 Image",
    },
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "popular-post-2-info": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {},
    displayName: "Container",
    custom: {
      displayName: "Popular Post 2 Info",
    },
    hidden: false,
    nodes: ["popular-post-2-title", "popular-post-2-meta"],
    linkedNodes: {},
  },
  "popular-post-2-title": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Responsive Design vs. Adaptive Design",
      fontSize: "15px",
      color: "#0f172a",
      fontWeight: "600",
      lineHeight: "1.4",
      marginBottom: "4px",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "popular-post-2-meta": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "April 25, 2024",
      fontSize: "13px",
      color: "#64748b",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "popular-post-3": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      display: "flex",
      gap: "12px",
    },
    displayName: "Container",
    custom: {
      displayName: "Popular Post 3",
    },
    hidden: false,
    nodes: ["popular-post-3-image", "popular-post-3-info"],
    linkedNodes: {},
  },
  "popular-post-3-image": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: false,
    props: {
      width: "60px",
      height: "60px",
      backgroundColor: "#94a3b8",
      borderRadius: "6px",
      flexShrink: "0",
    },
    displayName: "Container",
    custom: {
      displayName: "Popular Post 3 Image",
    },
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "popular-post-3-info": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {},
    displayName: "Container",
    custom: {
      displayName: "Popular Post 3 Info",
    },
    hidden: false,
    nodes: ["popular-post-3-title", "popular-post-3-meta"],
    linkedNodes: {},
  },
  "popular-post-3-title": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "7 JavaScript Frameworks to Learn in 2024",
      fontSize: "15px",
      color: "#0f172a",
      fontWeight: "600",
      lineHeight: "1.4",
      marginBottom: "4px",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "popular-post-3-meta": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "April 20, 2024",
      fontSize: "13px",
      color: "#64748b",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  newsletter: {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      paddingTop: "60px",
      paddingBottom: "60px",
      backgroundColor: "#f8fafc",
      width: "100%",
    },
    displayName: "Container",
    custom: {
      displayName: "Newsletter",
    },
    hidden: false,
    nodes: ["newsletter-container"],
    linkedNodes: {},
  },
  "newsletter-container": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      width: "100%",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "0 20px",
      textAlign: "center",
    },
    displayName: "Container",
    custom: {
      displayName: "Newsletter Container",
    },
    hidden: false,
    nodes: ["newsletter-heading", "newsletter-text", "newsletter-form"],
    linkedNodes: {},
  },
  "newsletter-heading": {
    type: {
      resolvedName: "Heading",
    },
    isCanvas: false,
    props: {
      text: "Subscribe to Our Newsletter",
      level: 2,
      fontSize: "28px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "16px",
    },
    displayName: "Heading",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "newsletter-text": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Get the latest articles, resources, and updates delivered straight to your inbox.",
      fontSize: "16px",
      color: "#334155",
      lineHeight: "1.6",
      marginBottom: "24px",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "newsletter-form": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      display: "flex",
      gap: "12px",
    },
    displayName: "Container",
    custom: {
      displayName: "Newsletter Form",
    },
    hidden: false,
    nodes: ["newsletter-email", "newsletter-button"],
    linkedNodes: {},
  },
  "newsletter-email": {
    type: {
      resolvedName: "CraftInput",
    },
    isCanvas: false,
    props: {
      placeholder: "Your email address",
      flex: "1",
      padding: "12px 16px",
      borderRadius: "8px",
      border: "1px solid #cbd5e1",
    },
    displayName: "CraftInput",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "newsletter-button": {
    type: {
      resolvedName: "CraftButton",
    },
    isCanvas: false,
    props: {
      text: "Subscribe",
      variant: "default",
      size: "default",
      backgroundColor: "#3b82f6",
    },
    displayName: "CraftButton",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  footer: {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      paddingTop: "40px",
      paddingBottom: "40px",
      backgroundColor: "#0f172a",
      width: "100%",
      color: "white",
    },
    displayName: "Container",
    custom: {
      displayName: "Footer",
    },
    hidden: false,
    nodes: ["footer-container"],
    linkedNodes: {},
  },
  "footer-container": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
    },
    displayName: "Container",
    custom: {
      displayName: "Footer Container",
    },
    hidden: false,
    nodes: ["footer-copyright", "footer-links"],
    linkedNodes: {},
  },
  "footer-copyright": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "© 2024 BlogFolio. All rights reserved.",
      fontSize: "14px",
      color: "#cbd5e1",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "footer-links": {
    type: {
      resolvedName: "Container",
    },
    isCanvas: true,
    props: {
      display: "flex",
      gap: "24px",
    },
    displayName: "Container",
    custom: {
      displayName: "Footer Links",
    },
    hidden: false,
    nodes: ["footer-link-1", "footer-link-2", "footer-link-3", "footer-link-4"],
    linkedNodes: {},
  },
  "footer-link-1": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Privacy Policy",
      fontSize: "14px",
      color: "#cbd5e1",
      cursor: "pointer",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "footer-link-2": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Terms of Service",
      fontSize: "14px",
      color: "#cbd5e1",
      cursor: "pointer",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "footer-link-3": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "Contact",
      fontSize: "14px",
      color: "#cbd5e1",
      cursor: "pointer",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
  "footer-link-4": {
    type: {
      resolvedName: "Paragraph",
    },
    isCanvas: false,
    props: {
      text: "RSS",
      fontSize: "14px",
      color: "#cbd5e1",
      cursor: "pointer",
    },
    displayName: "Paragraph",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
  },
};
