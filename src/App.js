import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Common/Layout";
import AboutConference from "./Screens/AboutConference";
import Aboutus from "./Screens/Aboutus";
import Agenda from "./Screens/Agenda";
import ConferenceTracks from "./Screens/ConferenceTracks";
import Contactus from "./Screens/Contactus";
import EventsConferenceInfo from "./Screens/EventsConferenceInfo";
import EventTopic from "./Screens/EventTopic";
import Home from "./Screens/Home";
import MessageByPresident from "./Screens/MessageByPresident";
import OrgCommittee from "./Screens/OrgCommittee";
import Registration from "./Screens/Registration";
import ScientificCommittee from "./Screens/ScientificCommittee";
import OralPresentation from "./Screens/OralPresentation";
import PosterPresentation from "./Screens/PosterPresentation";
import Sponsors from "./Screens/Sponsors";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/PresidentMessage",
        element: <MessageByPresident />,
      },
      {
        path: "/Agenda",
        element: <Agenda />,
      },
      {
        path: "/Registration",
        element: <Registration />,
      },
      {
        path: "/Information",
        element: <EventsConferenceInfo />,
      },
      {
        path: "/AboutConference",
        element: <AboutConference />,
      },
      {
        path: "/ConferenceTracks",
        element: <ConferenceTracks />,
      },
      {
        path: "/Sponsors",
        element: <Sponsors />,
      },
      {
        path: "/OrgCommittee",
        element: <OrgCommittee />,
      },
      {
        path: "/ScientificCommittee",
        element: <ScientificCommittee />,
      },
      {
        path: "/Contactus",
        element: <Contactus />,
      },
      {
        path: "/Aboutus",
        element: <Aboutus />,
      },
      {
        path: "/OralPresentation",
        element: <OralPresentation />,
      },
      {
        path: "/PosterPresentation",
        element: <PosterPresentation />,
      },
      {
        path: "/ScientificCommittee",
        element: <ScientificCommittee />,
      },
      {
        path: "/EventTopics",
        element: <EventTopic />,
      },
    ],
  },
]);
function App() {

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
