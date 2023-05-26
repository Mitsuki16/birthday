import { useState } from "react";
import UserItem from "./UserItem";

let UserList = [
  {
    id: "503a5ca9-ff73-4eb5-a7f1-2a3d38e2d9ad",
    name: "Jacobs Pierce",
    date_of_birth: "07-02-2016",
    image_url:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: "072731ac-87ff-489d-a337-7b79213ef7a3",
    name: "Berger Morrison",
    date_of_birth: "09-09-2021",
    image_url:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: "1755df2f-a759-432a-8f2b-dec3320cd6af",
    name: "Rosa Mejia",
    date_of_birth: "01-07-2019",
    image_url:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: "32cf4de6-1e61-46ed-91a4-8ff229e48c84",
    name: "Katie Flores",
    date_of_birth: "18-04-2021",
    image_url:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: "296a7f30-ba1c-4cc2-acd0-5f059764c279",
    name: "Mitchell Lowery",
    date_of_birth: "28-12-2016",
    image_url:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
];

function App() {
  const [userList, setUserList] = useState(UserList);
  return (
    <div className="grid h-screen place-items-center ">
      <div className=" w-[30pc] rounded-2xl shadow-[0_20px_60px_15px_rgba(0,0,0,0.3)] p-8 self-center bg-white">
        <h1 className="text-2xl">Number of People {userList.length} </h1>
        {userList.map((item) => (
          <UserItem key={item.id} {...item} />
        ))}
        <div className="flex justify-center mt-8">
          <button
            onClick={(e) => setUserList([])}
            className="text-lg text-white bg-[#f28ab2] w-[30pc] h-10 rounded-xl"
          >
            CLEAR ALL ITEMS
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
