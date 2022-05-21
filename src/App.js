import './App.css';
// import { Card } from './components/Card';

// const data = require('./data.json');

import daniel from './images/image-daniel.jpg';
import jonathan from './images/image-jonathan.jpg';
import jeanette from './images/image-jeanette.jpg';
import patrick from './images/image-patrick.jpg';
import kira from './images/image-kira.jpg';

import danielModified from './images/image-daniel-modified.png';
import jonathanModified from './images/image-jonathan-modified.png';
import jeanetteModified from './images/image-jeanette-modified.png';
import patrickModified from './images/image-patrick-modified.png';
import kiraModified from './images/image-kira-modified.png';
import { GridSection } from './components/GridSection';

const data = {
  "DanielClifford": {
    "id": "danielclifford",
    "background": "hsl(263, 55%, 52%)",
    "background-class": "violet-background",
    "pic": daniel,
    "picBackground": "0 0 0 1px #713ec1",
    "picModified": danielModified,
    "fullName": "Daniel Clifford",
    "fullNameColor": "hsl(0, 0%, 100%)",
    "graduate": "Verified Graduate",
    "mainStatement": "I recieved a job offer mid-course, and the subject I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
    "mainStatementColor": "hsl(0, 0%, 100%)",
    "paragraph": "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",
    "paragraphColor": "hsl(0, 0%, 100%)"
  },
  "JonathanWalters": {
    "id": "jonathanwalters",
    "background": "hsl(217, 19%, 35%)",
    "pic": jonathan,
    "picBackground": "0 0 0 1px #6f7685",
    "picModified": jonathanModified,
    "fullName": "Jonathan Walters",
    "fullNameColor": "hsl(0, 0%, 100%)",
    "graduate": "Verified Graduate",
    "mainStatement": "The team was very supportive and kept me motivated",
    "mainStatementColor": "hsl(0, 0%, 100%)",
    "paragraph": "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”",
    "paragraphColor": "hsl(0, 0%, 100%)"
  },
  "JeanetteHarmon": {
    "id": "jeanetteharmon",
    "background": "hsl(0, 0%, 100%)",
    "pic": jeanette,
    "picBackground": "0 0 0 1px #ae9b84",
    "picModified": jeanetteModified,
    "fullName": "Jeanette Harmon",
    "fullNameColor": "hsl(219, 29%, 14%)",
    "graduate": "Verified Graduate",
    "mainStatement": "An overall wonderful and rewarding experience",
    "mainStatementColor": "hsl(219, 29%, 14%)",
    "paragraph": "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
    "paragraphColor": "hsl(219, 29%, 14%)"
  },
  "PatrickAbrams": {
    "id": "patrickabrams",
    "background": "hsl(219, 29%, 14%)",
    "pic": patrick,
    "picBackground": "0 0 0 1px hsl(263, 55%, 52%)",
    "picModified": patrickModified,
    "fullName": "Patrick Abrams",
    "fullNameColor": "hsl(0, 0%, 100%)",
    "graduate": "Verified Graduate",
    "mainStatement": "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    "mainStatementColor": "hsl(0, 0%, 100%)",
    "paragraph": "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”",
    "paragraphColor": "hsl(0, 0%, 100%)"
  },
  "KiraWhittle": {
    "id": "kirawhittle",
    "background": "hsl(0, 0%, 100%)",
    "pic": kira,
    "picBackground": "0 0 0 1px #ae9b84",
    "picModified": kiraModified,
    "fullName": "Kira Whittle",
    "fullNameColor": "hsl(219, 29%, 14%)",
    "graduate": "Verified Graduate",
    "mainStatement": "Such a life-changing experience. Highly recommended!",
    "mainStatementColor": "hsl(219, 29%, 14%)",
    "paragraph": "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”",
    "paragraphColor": "hsl(219, 29%, 14%)"
  }
}

function App() {
  // console.log(data);
  return (
    <div className="App">
      <GridSection info={data} />
    </div>
  );
}

export default App;
