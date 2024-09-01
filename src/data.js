import myPic from './assets/me.jpg';
import envelop from './assets/envelop.svg';
import github from './assets/github.svg';
import location from './assets/location.svg';
import mobile from './assets/mobile.svg';
import linkedin from './assets/linkedin.svg';

export default {
  intro: {
    name: "Prakhar Khandelwal",
    image: myPic,
    role: "SDE II",
    me: "An engineer willing to jump in to develop \"outside the box\" solutions with a handful of 5 years of experience in Full Stack Development."
  },
  about: [
    {
      icon: envelop,
      value: "prakhar.khandelwal1996@gmail.com",
      type: "mail:to",
      alt: "Email"
    },
    {
      icon: mobile,
      value: "9875070610",
      type: "nunber",
      alt: "Phone"
    },
    {
      icon: github,
      value: "pk-op-06",
      type: "link",
      prefix: "https://github.com/",
      alt: "Github"
    },
    {
      icon: location,
      value: "Jaipur",
      alt: "Location"
    },
    {
      icon: linkedin,
      value: "er-prakhar-khandelwal-218765117/",
      type: "link",
      prefix: "https://linkedin.com/in/",
      alt: "LinkedIn"
    }
  ],
  projects: [
    {
      title: 'Rubicon 3.0',
      subtitle: 'Ace Turtle Pvt. Ltd.',
      period: '11/2021 - Present,',
      location: 'Bangalore',
      achievements: [
        'Our proprietary platform Rubicon provide a seamless omni-channel fulfillment experience by bringing together both online and offline channels.',
        'Leading a Team of 4 with a responsibility to develop, design and maintain the platform.',
        'Platforms like Amazon, Myntra, Flipkart, Lee, Wrangler, etc are using it for their OMS -> LMS support worldwide.',
        'Tech: Angular/NextJs, MongoDB, AWS, S3, Kafka, Redis, JIRA'
      ]
    },
    {
      title: 'Token.io',
      subtitle: 'AppPerfect Corp.',
      period: '02/2020 - 11/2021,',
      location: 'Udaipur',
      achievements: [
        'Lead a Team of 6 with the responsibility to enhance, maintain and develop both platforms.',
        'Web-app is a powerful open-banking platform whose mission is to allow Financial institutions, businesses and individuals to instantly and securely move money from any location.',
        'Developer Portal is a platform which exposes Token Internal API\'s which can be tested out to complete the payment flows using playground and swagger APIs.',
        'Used across 13 COUNTRIES The broadest European connectivity for account-to-account payments covering almost 4k banks.',
        'Big Clients: BNP Paribas, MasterCard, HSBC, nuvei, etc',
        'Tech: NextJs, Redux, Mobx, NodeJS, Java, Spring Boot, JOQL, Flyway, gRCP Protocol'
      ]
    },
    {
      title: 'Office 365 (Bot Command Packages)',
      subtitle: 'AppPerfect Corp.',
      period: '04/2019 - 02/2020,',
      location: 'Udaipur',
      achievements: [
        'Command Packages for RPA Workspace to automate basic to business based functional steps just by dragging and dropping these packages onto the platform.',
        'Tech: Java, Spring Boot, Microsoft Graph APIs'
      ]
    }
  ],
  education: [
    {
      title: 'Bachelor of Technology in Computer Science And Engineering',
      subtitle: 'Swami Keshvanand Institute of Technology, M&G (R.T.U.)',
      period: '07/2015 - 05/2019,',
      location: 'Jaipur'
    },
    {
      title: 'Maheshwari Public School',
      subtitle: 'Jawahar Nagar',
      period: '04/2002 - 03/2014,',
      location: 'Jaipur'
    }
  ],
  skills: [
    'NextJS',
    'React JS',
    'Node JS',
    'Express JS',
    'Rest API',
    'GIT',
    'React Native',
    'MongoDB',
    'AWS',
    'Java',
    'Spring Boot',
    'Micro Frontend'
  ],
  personal: [
    {
      subtitle: 'SBO-Koisk',
      achievements: [
        'All Koisk in One Place',
        'Banks cannot be eveyrwhere, but KOISK\'s can!. This website provides people to search for any KOISK all over India and can provide Feedback, Check for availability and locate the nearest KOISK.',
        'Working on its cross-platform Mobile App.',
        'Tech: ReactJs, Redux, Java, Spring Boot, React Native, OAuth (Google)'
      ]
    },
    {
      subtitle: 'Instant (On the GO)',
      achievements: [
        'A Ride Book app which provides you a user friendly experience while booking a ride with a quick availability of rides on your preferred location ON THE GO.',
        'Features: Favourites, Visited Places, Previous Rides, Select your Comfortable ride.',
        'Tech: React Native, React Navigation, Redux Toolkit, Google Location APIs, Google Direction APIs, Google Cloud Platform.',
        'IDE: VSCode'
      ]
    }
  ],
  achievements: [
    {
      title: 'First in Coding Camp introduced in College in Tech Innova Club, 2015',
    },
    {
      title: 'Mentor in Tech Innova Club (2017)',
      description: 'Guided 50+ students to explore new techs while stick to the fundamental concepts of the current languages like C, C++, Java.'
    },
    {
      title: 'Semi-Finalist in Rajasthan Hackathon (2017)',
      description: 'Praised for Blood Bank Portal Concept and the implementation using PHP.'
    },
    {
      title: 'Won 2nd Prize in Carrom',
      description: 'Competition conducted by Khandelwal Society(Rajasthan) 2019'
    }
  ],
  hobbies: [
    'Chess',
    'Music',
    'Dance',
    'Cricket',
    'Sketching'
  ]
}