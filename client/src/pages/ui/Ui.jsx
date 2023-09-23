import Chatbox from "../../components/chatbox/Chatbox"
import Sidebar from "../../components/sidebar/Sidebar"
import Uimenu from "../../components/uimenu/Uimenu"

function Ui() {
  return (
    <>
        <div className="flex">
            <Sidebar/>
            <div className="md:flex hidden">
            <Uimenu/>
            </div>
            <Chatbox/>
        </div> 
    </>
  )
}

export default Ui