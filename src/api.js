const API_BASE_URL = "https://api.videosdk.live";

export  const meetingId = "tc71-uoq9-e7k1";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIwMGU0ZmVmYi04YWQ5LTRmMDktYWRlYS03ZmJlMGI5YWM5YzAiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY5NDA3NjA5NywiZXhwIjoxNjk0NjgwODk3fQ.zi1oc5JAHxWxklwyuvn52uOyUZfsqy4R_QNX_W_wlQ8";
export const getToken = async () => {
	return TOKEN;
};

export const createMeeting = async () => {
	return meetingId;
};

export const validateMeeting = async ({ roomId, token }) => {
	const url = `${API_BASE_URL}/v2/rooms/validate/${roomId}`;

	const options = {
		method: "GET",
		headers: { Authorization: token, "Content-Type": "application/json" },
	};

	const result = await fetch(url, options)
		.then((response) => response.json()) //result will have meeting id
		.catch((error) => console.error("error", error));

	return result ? result.roomId === roomId : false;
};
