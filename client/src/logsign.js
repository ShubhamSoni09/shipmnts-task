import "./logsign.scss";
import axios from "axios";

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "./context";
import AlertContext from "./alertcontext";

const LogSign = () => {
  //---------------------USESTATES--------------------------
  const { rootUser, setRootUser } = useContext(userData);
  console.log("inside login page", rootUser);

  const history = useNavigate();

  const [InputEmail, setInputEmail] = useState("");
  const [InputPass, setInputPass] = useState("");
  const [InputConfirmPass, setInputConfirmPass] = useState("");
  const [fullName, setFullName] = useState("");
  const [logEmail, setLogEmail] = useState("");
  const [logPass, setLogPass] = useState("");
  const [passCheck, setpasscheck] = useState(false);
  const [alboxcont, setAlboxcont] = useState({
    open: false,
    message: "",
    type: "",
    dur: 1,
  });
  // -----------------------PASSWORD CHECKER------------------------

  const passwordChecker = (a, b) => {
    if (a === "" || b === "" || a === " " || b === " ") {
      setAlboxcont({
        open: true,
        message: "Please Fill All The Details..!!",
        type: "error",
        dur: 2000,
      });
    }
    if (a === b && a !== "") {
      setpasscheck(true);
      console.log("matched");
      setAlboxcont({
        open: true,
        message: "Password's are matching..!!",
        type: "success",
        dur: 1000,
      });
      if (a.length < 8) {
        setpasscheck(false);

        console.log("sss", a.length);
        setAlboxcont({
          open: true,
          message: "Minimum Password length is 8 Charaters",
          type: "error",
          dur: 4000,
        });
      }
      return 1;
    } else if (a !== "") {
      setpasscheck(false);

      console.log("not matched");
      setAlboxcont({
        open: true,
        message: "Password's are not matching..!!",
        type: "error",
        dur: 20000,
      });
      return 0;
    }
  };
  const callSignPage = async () => {
    try {
      const res = await axios.get("/app/main", {
        withCredentials: true,
      });
      const userdata = await res.data;
      setRootUser(userdata);
      console.log("LOGIN KE ANDAR", rootUser);
      if (userdata) {
        console.log("userdata is there..!!");
        history.push("/home");
      }

      // else {
      // }
    } catch (err) {
      console.log("error i am finding", err);
      history.push("/");
    }
  };

  useEffect(() => {
    callSignPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //----------------------------------RETURN FUNCTION---------------------------------------

  return (
    <>
      <div className="main-container">
        <div id="sign-up" className="left-container sign-up ">
          {
            <AlertContext
              open={alboxcont.open}
              message={alboxcont.message}
              type={alboxcont.type}
              setOpen={setAlboxcont}
              dur={alboxcont.dur}
            />
          }

          <h1>Expense Manager</h1>
          <section className="main">
            <div className="form_wrapper">
              <input
                type="radio"
                className="radio"
                name="radio"
                id="login"
                defaultChecked
              />
              <input type="radio" className="radio" name="radio" id="signup" />
              <label className="tab login_tab" for="login">
                Login
              </label>
              <label className="tab signup_tab" for="signup">
                Signup
              </label>
              <span className="shape"> </span>
              <div className="form_wrap">
                <div className="form_fild login_form">
                  <div className="input_group">
                    <input
                      onChange={(ev) => {
                        setLogEmail(ev.target.value);
                      }}
                      value={logEmail}
                      type="email"
                      className="input"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="input_group">
                    <input
                      onChange={(ev) => {
                        setLogPass(ev.target.value);
                      }}
                      value={logPass}
                      type="password"
                      className="input"
                      placeholder="Password"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn"
                    value="Login"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("login clicked");
                      // EmailApi(InputEmail, InputPass);
                      const loginreg = {
                        logEmail: logEmail,
                        logPass: logPass,
                      };
                      console.log(loginreg);
                      axios
                        .post("/app/login", loginreg, {
                          withCredentials: true,
                        })
                        .then((res) => {
                          console.log("sam var", res.data);
                          if (res.status === 200) {
                            // callSignPage();
                            history.push("/home");
                            setAlboxcont({
                              open: true,
                              message: res.data.message,
                              type: "success",
                              dur: 6000,
                            });
                          }
                          setAlboxcont({
                            open: true,
                            message: res.data.message,
                            type: "error",
                            dur: 6000,
                          });
                        })
                        .catch((err) => {
                          console.log(
                            "okokokokok",
                            err.message,
                            err.response.data.message,
                            "dsdsds",
                            err.request
                          );

                          setAlboxcont({
                            open: true,
                            message: err.response.data.message,
                            type: "error",
                            dur: 6000,
                          });
                        });
                    }}
                  />
                  <div className="not_mem"></div>
                </div>
                <div className="form_fild signup_form">
                  <div className="input_group">
                    <input
                      onChange={(ev) => {
                        setFullName(ev.target.value);
                      }}
                      value={fullName}
                      type="text"
                      className="input"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="input_group">
                    <input
                      onChange={(ev) => {
                        setInputEmail(ev.target.value);
                      }}
                      value={InputEmail}
                      type="email"
                      className="input"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="input_group">
                    <input
                      value={InputPass}
                      onChange={(ev) => {
                        setInputPass(ev.target.value);
                        passwordChecker(InputConfirmPass, ev.target.value);
                      }}
                      type="password"
                      className="input"
                      placeholder="Password"
                    />
                  </div>

                  <div className="input_group">
                    <input
                      value={InputConfirmPass}
                      onChange={(ev) => {
                        setInputConfirmPass(ev.target.value);
                        passwordChecker(InputPass, ev.target.value);
                      }}
                      type="password"
                      className="input"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn"
                    value="Signup"
                    onClick={(e) => {
                      e.preventDefault();
                      // console.log("clicked");
                      console.log(passCheck);
                      if (passCheck) {
                        const reg = {
                          emailId: InputEmail,
                          password: InputPass,
                          fullName: fullName,
                        };
                        console.log(reg);
                        axios
                          .post("http://localhost:5000/app/signup", reg)
                          .then((res) => {
                            console.log(
                              "seeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                              res.status,
                              res.data,
                              // JSON.parse(res.data)
                              res.data.message
                            );
                            if (res.status !== 200) {
                              var temptype = "error";
                            }
                            setAlboxcont({
                              open: true,
                              message: res.data.message,
                              type: temptype || "success",
                              dur: 6000,
                            });
                            if (res.status === 200) {
                              setInputEmail("");
                              setInputPass("");
                              setFullName("");
                              setInputConfirmPass("");
                            }
                          })
                          .catch((err) => {
                            console.log(
                              "okokokokok",
                              err.message,
                              err.response.data.message,
                              "dsdsds",
                              err.request
                            );
                            if (err.status !== 200) {
                              var temptype = "error";
                            }
                            setAlboxcont({
                              open: true,
                              message: err.response.data.message,
                              type: temptype || "success",
                              dur: 6000,
                            });
                          });
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default LogSign;
