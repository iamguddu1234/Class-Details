import logo from "./logo.svg";
import classes from "./DetailChildContentDiv.module.css";

import ClassTitleBar from "./ClassTitleBar";
import InstructorBar from "./InstructorBar";
import MeetingCard from "./MeetingCard";
import ClassTimeNAddress from "./ClassTimeNAddress";
import ChapterNTopics from "./ChapterNTopics";
import VideoFiles from "./VideoFiles";
import StudyMaterials from "./StudyMaterials";
import PreRequisites from "./PreRequisites";
import Homework from "./Homework";
import ChatNQuestion from "./ChatNQuestion";
import GoBackNavBar from "./GoBackNavBar";
import 'typeface-roboto';


function App() {
  return (
    <div className={classes.parentContainer}>
      
      <ClassTitleBar />

      <MeetingCard />

      <InstructorBar />

      <ClassTimeNAddress />

      <ChapterNTopics />

      <VideoFiles />

      <StudyMaterials />

      <PreRequisites />

      <Homework />

      <ChatNQuestion />

    </div>
  );
}

export default App;
