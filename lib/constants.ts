export interface IEvent {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: IEvent[] = [
    {
        title: "React Conf 2025",
        image: "/images/event1.png",
        slug: "react-conf-2025",
        location: "Las Vegas, NV",
        date: "March 15, 2025",
        time: "9:00 AM - 6:00 PM"
    },
    {
        title: "Next.js Conference",
        image: "/images/event2.png",
        slug: "nextjs-conference-2025",
        location: "San Francisco, CA",
        date: "April 22, 2025",
        time: "10:00 AM - 5:00 PM"
    },
    {
        title: "Global Hackathon Summit",
        image: "/images/event3.png",
        slug: "global-hackathon-summit-2025",
        location: "New York, NY",
        date: "May 8-10, 2025",
        time: "8:00 AM - 10:00 PM"
    },
    {
        title: "DevOps World",
        image: "/images/event4.png",
        slug: "devops-world-2025",
        location: "Austin, TX",
        date: "June 12-14, 2025",
        time: "9:00 AM - 7:00 PM"
    },
    {
        title: "TypeScript Community Meetup",
        image: "/images/event5.png",
        slug: "typescript-community-meetup-2025",
        location: "Seattle, WA",
        date: "July 18, 2025",
        time: "6:00 PM - 9:00 PM"
    },
    {
        title: "Web3 Developer Conference",
        image: "/images/event6.png",
        slug: "web3-developer-conference-2025",
        location: "Miami, FL",
        date: "August 25-27, 2025",
        time: "9:00 AM - 6:00 PM"
    }
];

