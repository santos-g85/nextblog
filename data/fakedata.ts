import { CategoryItem } from "@/types/category";
import {NavItem} from "@/types/nav"
import {NavCommandItem} from "@/types/nav"

export const categories: CategoryItem[] = [
  { id: 1, name: "Technology", icon: "" },
  { id: 2, name: "Travel", icon: "" },
  { id: 3, name: "Health", icon: "" },
  { id: 4, name: "Food", icon: "" },
  { id: 5, name: "Finance", icon: "" },
  { id: 6, name: "Sports", icon: "" },
  { id: 7, name: "Lifestyle", icon: "" },
];

export const posts = [
  {
    id: 1,
    title: "Exploring the Future of AI",
    description: "A look into how artificial intelligence is shaping our world.",
    image: "/code.jpg",
  },
  {
    id: 2,
    title: "Top 10 Travel Destinations",
    description: "Discover the most breathtaking places to visit in 2025.",
    image: "/hello.jpg",
  },
  {
    id: 3,
    title: "Healthy Eating Habits",
    description: "Simple tips to live a healthier and happier life.",
    image: "/code.jpg",
  },
  {
    id: 4,
    title: "Healthy Eating Habits",
    description: "Simple tips to live a healthier and happier life.",
    image: "/code.jpg",
  },
  {
    id: 5,
    title: "Healthy Eating Habits",
    description: "Simple tips to live a healthier and happier life.",
    image: "/code.jpg",
  },
  {
    id: 6,
    title: "Healthy Eating Habits",
    description: "Simple tips to live a healthier and happier life.",
    image: "/code.jpg",
  },
  {
    id: 7,
    title: "Healthy Eating Habits",
    description: "Simple tips to live a healthier and happier life.",
    image: "/code.jpg",
  },
  {
    id: 8,
    title: "Healthy Eating Habits",
    description: "Simple tips to live a healthier and happier life.",
    image: "/code.jpg",
  },
  {
    id: 9,
    title: "Healthy Eating Habits",
    description: "Simple tips to live a healthier and happier life.",
    image: "/code.jpg",
  },
];

export const menuItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Contact Us", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Ab", href: "/ab" },
];

export const CommandItems : NavCommandItem[]=[
    {name:"Home",slug:"1"},
    {name:"Contact Us",slug:"2"},
   
]
//   export const User = [
//     {
//       id: "user_1",
//       name: "Alice Johnson",
//       email: "alice@example.com",
//       emailVerified: "2023-01-10T12:00:00Z",
//       image: "/images/alice.jpg"
//     },
//     {
//       id: "user_2",
//       name: "Bob Smith",
//       email: "bob@example.com",
//       emailVerified: "2023-01-15T12:00:00Z",
//       image: "/images/bob.jpg"
//     },
//     {
//       id: "user_3",
//       name: "Charlie Brown",
//       email: "charlie@example.com",
//       emailVerified: null,
//       image: null
//     }
//   ];

//  export const Account= [
//     {
//       id: "account_1",
//       userId: "user_1",
//       type: "oauth",
//       provider: "google",
//       providerAccountId: "google_123",
//       refreshToken: "refresh_token_123",
//       accessToken: "access_token_123",
//       expiresAt: 1673524800,
//       tokenType: "Bearer",
//       scope: "email profile",
//       idToken: "id_token_123",
//       sessionState: null
//     },
//     {
//       id: "account_2",
//       userId: "user_2",
//       type: "oauth",
//       provider: "github",
//       providerAccountId: "github_456",
//       refreshToken: "refresh_token_456",
//       accessToken: "access_token_456",
//       expiresAt: 1673611200,
//       tokenType: "Bearer",
//       scope: "user repo",
//       idToken: null,
//       sessionState: null
//     }
//   ]

//  export const Session= [
//     {
//       id: "session_1",
//       sessionToken: "session_token_123",
//       userId: "user_1",
//       expires: "2023-06-01T12:00:00Z"
//     },
//     {
//       id: "session_2",
//       sessionToken: "session_token_456",
//       userId: "user_2",
//       expires: "2023-06-15T12:00:00Z"
//     }
//   ]

  // export const categories=  [
  //   {
  //     id: "1",
  //     slug: "technology",
  //     name: "Technology",
  //     img: "/images/tech.jpg"
  //   },
  //   {
  //     id: "2",
  //     slug: "travel",
  //     name: "Travel",
  //     img: "/images/travel.jpg"
  //   },
  //   {
  //     id: "3",
  //     slug: "food",
  //     name: "Food",
  //     img: "/images/food.jpg"
  //   }
  // ]

//   export const posts= [
//     {
//       id: "post_1",
//       createdAt: "2023-02-01T09:00:00Z",
//       slug: "introduction-to-react",
//       title: "Introduction to React",
//       desc: "Learn the basics of React framework",
//       img: "/images/react.jpg",
//       views: 1500,
//       catSlug: "technology",
//       userEmail: "alice@example.com"
//     },
//     {
//       id: "post_2",
//       createdAt: "2023-02-15T10:30:00Z",
//       slug: "best-travel-destinations",
//       title: "Best Travel Destinations 2023",
//       desc: "Top places to visit this year",
//       img: "/images/travel-destinations.jpg",
//       views: 3200,
//       catSlug: "travel",
//       userEmail: "bob@example.com"
//     },
//     {
//       id: "post_3",
//       createdAt: "2023-03-01T11:45:00Z",
//       slug: "healthy-recipes",
//       title: "5 Healthy Recipes for Busy People",
//       desc: "Quick and nutritious meal ideas",
//       img: "/images/recipes.jpg",
//       views: 1800,
//       catSlug: "food",
//       userEmail: "alice@example.com"
//     }
//   ]

// export  const Comment= [
//     {
//       id: "comment_1",
//       createdAt: "2023-02-02T14:30:00Z",
//       desc: "Great introduction! Very helpful for beginners.",
//       userEmail: "bob@example.com",
//       postSlug: "introduction-to-react"
//     },
//     {
//       id: "comment_2",
//       createdAt: "2023-02-03T16:45:00Z",
//       desc: "Looking forward to the next part of this series!",
//       userEmail: "charlie@example.com",
//       postSlug: "introduction-to-react"
//     },
//     {
//       id: "comment_3",
//       createdAt: "2023-02-16T09:15:00Z",
//       desc: "I've been to 3 of these places and they're amazing!",
//       userEmail: "alice@example.com",
//       postSlug: "best-travel-destinations"
//     },
//     {
//       id: "comment_4",
//       createdAt: "2023-03-02T12:30:00Z",
//       desc: "Tried the first recipe yesterday - delicious!",
//       userEmail: "bob@example.com",
//       postSlug: "healthy-recipes"
//     }
//   ]
