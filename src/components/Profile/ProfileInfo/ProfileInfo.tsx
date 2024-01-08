import { useEffect, useState } from "react";
import { getUserProfileInfo } from "../../../utils/fetching";

type Props = {
	userID: string;
	token: string;
}

const ProfileInfo = ({ userID, token }: Props) => {

	const [userProfileInfo, setUserProfileInfo] = useState(null);
	useEffect(() => {
		async function getInfo () {
			const info = await getUserProfileInfo({
				userId: userID,
				tk: token
			});
			if (info.result) {
				setUserProfileInfo(info.result)
			}
		}
		if (userID && token) {
			getInfo()
		}
	}, [userID])

	console.log(userProfileInfo)
}

export default ProfileInfo;
