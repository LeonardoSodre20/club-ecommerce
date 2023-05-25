// STYLES
import { MainContainerProfile } from "./styles";

// USER
import { useAuth } from "@src/hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <MainContainerProfile>
      <img
        style={{
          border: "1px solid #000",
          boxShadow: "0 4px 4px rgba(0,0,0,0.35)",
          height: "330px",
          width: "250px",
          borderRadius: "15px",
          objectFit: "fill",
          objectPosition: "center center",
        }}
        src={`${user?.avatar}`}
        decoding="sync"
        loading="lazy"
        alt="avatar-user"
      />
      <div
        style={{
          marginLeft: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h1>{`${user?.name} ${user?.lastname}`}</h1>
        <p>{user?.email}</p>
      </div>
    </MainContainerProfile>
  );
};

export default Profile;
