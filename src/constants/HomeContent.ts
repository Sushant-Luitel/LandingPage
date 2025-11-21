export interface BlogPost {
  image: string;
  title: string;
  date: string;
  readingtime: string;
  content: string;
  type: string;
  tags: string[];
  author: string;
  comments?: number;
  authorimg: string;
  url?: string;
}

export const HomeContent: BlogPost[] = [
  {
    image: "fedora.png",
    title: "Far far away, behind the word mountains",
    date: "March 16, 2021",
    readingtime: "3 min read",
    content:
      "Hey there, welcome to your new home on the web! Unlike social networks, this one is all yours. Publish your work on a custom domain, invite your audience to subscribe, send them new content by email newsletter, and offer premium subscriptions to generate sustainable recurring revenue to fund your work.",
    type: "public",
    tags: ["Travel", "Health"],
    author: "Jonathan Doe",
    authorimg: "profile.png",
    
  },

  {
    image: "tree.jpg",
    title: "Customizing your brand and design settings",
    date: "March 16, 2021",
    readingtime: "3 min read",
    content:
      "As discussed in the introduction post, one of the best things about Ghost is just how much you can customize to turn your site into something unique...",
    type: "member",
    tags: ["Technology", "Getting Started"],
    author: "Mary Buzard",
    authorimg: "",
    url: "http://localhost:5173/CustomizingBrand",
  },

  {
    image: "lady holding plants.jpg",
    title: "Writing and managing content in Ghost",
    date: "March 16, 2021",
    readingtime: "5 min read",
    content:
      "Ghost comes with a best-in-class editor which does its very best to get out of the way, and let you focus on your content. Don't let its minimal looks fool you, though, beneath...",
    type: "public",
    tags: ["Music", "Getting Started", "Technology"],
    author: "Jonathan Doe",
    authorimg: "profile.png",
    url: "http://localhost:5173/CustomizingBrand",
  },
  {
    image: "lady leaning on a table.jpg",
    title: "Building your audience with subscriber signups",
    date: "March 16, 2021",
    readingtime: "2 min read",
    content:
      "How Ghost allows you to turn anonymous readers into an audience of active subscribers, so you know what's working and what isn't....",
    type: "public",
    tags: ["Travel", "Health"],
    author: "Jonathan Doe",
    authorimg: "profile.png",
    url: "http://localhost:5173/CustomizingBrand",
  },

  {
    image: "green-latte.jpg",
    title: "Selling premium memberships with recurring revenue",
    date: "March 16, 2021",
    readingtime: "1 min read",
    content:
      "For creators and aspiring entrepreneurs looking to generate a sustainable recurring revenue stream from their creative work, Ghost has built-in payments allowing you to create a subscription commerce business. Connect your Stripe account..",
    type: "paid",
    tags: ["Health", "Getting Started"],
    author: "Jonathan Doe",
    authorimg: "profile.png",
    url: "http://localhost:5173/CustomizingBrand",
  },

  {
    image: "dog.jpg",
    title: "How to grow your business around an audience",
    date: "March 16, 2021",
    readingtime: "2 min read",
    content:
      "As you grow, you'll probably want to start inviting team members and collaborators to your site. Ghost has a number of different user roles for your team...",
    type: "member",
    tags: ["Getting Started"],
    author: "Jonathan Doe",
    authorimg: "profile.png",
    url: "http://localhost:5173/CustomizingBrand",
  },

  {
    image: "studio.jpg",
    title: "Setting up apps and custom integrations",
    date: "March 16, 2021",
    readingtime: "1 min read",
    content:
      "It's possible to extend your Ghost site and connect it with hundreds of the most popular apps and tools using integrations. Whether you need to automatically publish new posts on social media, connect...",
    type: "public",
    tags: ["Getting Started"],
    author: "Jonathan Doe",
    authorimg: "profile.png",
    url: "http://localhost:5173/CustomizingBrand",
  },
  {
    image: "woman-painting.jpg",
    title: "The spectacle before us was indeed sublime",
    date: "April 26, 2019",
    readingtime: "1 min read",
    content:
      "Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with...",
    type: "public",
    tags: ["Health", "Music"],
    author: "Jonathan Doe",
    authorimg: "profile.png",
    url: "http://localhost:5173/CustomizingBrand",
  },

  {
    image: "fistbump.jpg",
    title: "What you need to know about Ghost Editor",
    date: "April 26, 2019",
    readingtime: "2 min read",
    content:
      "The Ghost editor has everything you need to fully optimise your content. This is where you can add tags and authors, feature a post, or turn a post into a page. Access the...",
    type: "public",
    tags: ["Travel"],
    author: "Jonathan Doe",
    authorimg: "profile.png",
    url: "http://localhost:5173/CustomizingBrand",
  },
  {
    image: "A.png",
    title: "Apps and scripts for your Ghost website",
    date: "April 26, 2019",
    readingtime: "1 min read",
    content:
      "There are three primary ways to work with third-party services in Ghost: using Zapier, editing your theme, or using the Ghost API....",
    type: "member",
    tags: ["Getting Started"],
    author: "Jonathan Doe",
    authorimg: "profile.png",
    url: "http://localhost:5173/CustomizingBrand",
  },

  {
    image: "girlwithguide.jpg",
    title: "Musical improvisation is the spontaneous music",
    date: "April 26, 2019",
    readingtime: "1 min read",
    content:
      "Ghost comes with a beautiful default theme called Casper, which is designed to be a clean, readable publication layout and can be adapted for most purposes. However, Ghost can also be completely themed...",
    type: "member",
    tags: ["Lifestyle", "Music"],
    comments: 1,
    author: "Jonathan Doe",
    authorimg: "profile.png",
    url: "http://localhost:5173/CustomizingBrand",
  },

  {
    image: "M.png",
    title: "Managing admin settings",
    date: "April 26, 2019",
    readingtime: "2 min read",
    content:
      "There are a couple of things to do next while you're getting set up: Make your site private If you've got a publication that you don't want the world to see yet because...",
    type: "member",
    tags: ["Technology", "Getting Started"],
    author: "Jonathan Doe",
    authorimg: "profile.png",
    url: "http://localhost:5173/CustomizingBrand",
  },
];
