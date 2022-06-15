import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  let { userid } = useParams();
  return (
    <div>
      <h1>ユーザId: {userid} profile</h1>
    </div>
  );
}

export default Profile;
