import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnpress, profilePicture }) {
    const { user, logout } = useMoralis();
    
    return (
        <div >
            <Image
                className="bg-black rounded-full cursor-pointer hover:opacity-75"
                src={!profilePicture ? `https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg` : profilePicture}
                onClick={() => logoutOnpress && logout()}
                layout="fill"
            />
        </div>
    )
}

export default Avatar
