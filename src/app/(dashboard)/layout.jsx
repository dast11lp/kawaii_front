// import SideMenu from "../../components/SideMenu/SideMenu";
// import SideInfo from "../components/SideInfo/SideInfo";

import SideInfo from "kawaii-red/components/SideInfo/SideInfo";
import SideMenu from "kawaii-red/components/SideMenu/SideMenu";

import styles from "./layout.module.css"
import ChatBox from "kawaii-red/components/chat/ChatBox/ChatBox";

export default function layout({ children }) {
  return (


    <div className={styles.layout}>
      <SideMenu />
      {children}
      <SideInfo />
      <ChatBox />
    </div>


  );
}
