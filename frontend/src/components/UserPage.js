import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("Default name");
  //const [userId,setuserId]=useState("");
  const [userEmail, setuserEmail] = useState("Default Email");
  const [userAdd, setuserAdd] = useState("Default Address");
  const [userphone, setuserPhone] = useState(0);
  const userinformation = async () => {
    try {
      const res = await fetch("/userinfo", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      // setuserAdd(data.address);
      // setuserEmail(data.email);
      // setuserPhone(data.phone);
      // setuserName(data.name);
      // console.log(data.name);
      // console.log(data.address);
      // console.log(data.email);
      console.log(data);
      //console.log(data.name);

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (e) {
      console.log(e);
      navigate("/login");
    }
  };
  useEffect(() => {
    userinformation();
  }, []);
  //   let username=user.name;
  //   let userfirstname="";
  //   for(let i=0;i<username.length;i++){
  //     if(username.charAt(i)!==' '){
  //         userfirstname+=username.charAt(i);
  //     }
  //   }
  return (
    <div>
      <form method="GET">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "100px",
          }}
        >
          <div
            style={{
              width: "600px",
              height: "400px",
              border: "1px solid black",
              borderRadius: "10px",
              background: "rgb(97, 117, 245)",
              color: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>
                Hello {userName}
                <i class="fa-solid fa-hand" style={{ color: "yellow" }}></i>
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "5px",
                  fontSize: "22px",
                  padding: "10px",
                }}
              >
                <p>User ID:{0}</p>
                <br></br>
                <p>Name:{userName}</p>
                <br></br>
                <p>Email:{userEmail}</p>
                <br></br>
                <p>Address:{userAdd}</p>
                <br></br>
                <p> Phone Number:{userphone}</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserPage;
