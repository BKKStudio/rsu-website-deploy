"use client";
import Navse from "../components/Navsecond";
import styles from "../styles/Formregis.module.css";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

export default function International() {
  const Router = useRouter();

  const [student, setStudent] = React.useState({
    faculty: "",
    major: "",
    idcard: "",
    birthday: "",
    firstname: "",
    lastname: "",
    email: "",
    tell: "",
  });

  async function OnRegister() {
    try {
      const response = await axios.post("/api/users/international", Student);
      console.log("Register success", response.data);
      Swal.fire("Register Successfully", "สมัครเรียบร้อยแล้ว", "success").then(
        (result) => {
          if (result.isConfirmed) {
            Router.push("/indexpage");
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        }
      );
    } catch (error) {
      console.log("Register failed", error.message);
    }
  }

  return (
    <>
      <Navse />
      <article className={styles.containerinfo}>
        <div className={styles.itemfrom}>
          <span>Enroll 2023/1 Online Enroll Rangsit University</span>
        </div>
      </article>
      <article className={styles.containerinfo}>
        <div className={styles.itemfrom2}>
          <div className={styles.iteminfrom2}>
            <div className={styles.creteform}>
              <label>Faculty</label>
              <select
                id="Faculty"
                name="Faculty"
                onChange={(ev) =>
                  setStudent({ ...student, faculty: ev.target.value })
                }
              >
                <option value="">-- Select Faculty --</option>
                <option value="วิทยาลัยวิศวกรรมศาสตร์(College of Engineering)">
                  College of Engineering
                </option>
                <option value="คณะดิจิทัลอาร์ต (Faculty of Digital Art)">
                  Faculty of Digital Art
                </option>
                <option value="คณะทัศนมาตรศาสตร์(Faculty of Optometry)">
                  Faculty of Optometr
                </option>
                <option value="คณะเทคนิคการแพทย์(Faculty of Medical Technology)">
                  Faculty of Medical Technology
                </option>
              </select>
            </div>
            <div className={styles.creteform}>
              <label>Major</label>
              <select
                id="Major"
                name="Major"
                onChange={(ev) =>
                  setStudent({ ...student, major: ev.target.value })
                }
              >
                <option value="">-- Select Major --</option>
                <option value="test1">Test1</option>
                <option value="test2">Test2</option>
                <option value="test3">Test3</option>
                <option value="test4">Test4</option>
              </select>
            </div>
            <div className={styles.creteform}>
              <label>ID Card(Passport)</label>
              <input
                type={"text"}
                id="idcard"
                name="idcard"
                value={student.idcard}
                onChange={(ev) =>
                  setStudent({ ...student, idcard: ev.target.value })
                }
              ></input>
            </div>
            <div className={styles.creteform}>
              <label>Birthday (YYYY-MM-DD)</label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={student.birthday}
                onChange={(ev) =>
                  setStudent({ ...student, birthday: ev.target.value })
                }
              />
            </div>
            <div className={styles.creteform}>
              <label>Firstname</label>
              <input
                type={"text"}
                id="firstname"
                name="firstname"
                value={student.firstname}
                onChange={(ev) =>
                  setStudent({ ...student, firstname: ev.target.value })
                }
              ></input>
            </div>
            <div className={styles.creteform}>
              <label>Lastname</label>
              <input
                type={"text"}
                id="lastname"
                name="lastname"
                value={student.lastname}
                onChange={(ev) =>
                  setStudent({ ...student, lastname: ev.target.value })
                }
              ></input>
            </div>
            <div className={styles.creteform}>
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={student.email}
                onChange={(ev) =>
                  setStudent({ ...student, email: ev.target.value })
                }
              />
            </div>
            <div className={styles.creteform}>
              <label>Tell</label>
              <input
                type="tell"
                id="tell"
                name="tell"
                value={student.tell}
                onChange={(ev) =>
                  setStudent({ ...student, tell: ev.target.value })
                }
              />
            </div>
          </div>
          <div className={styles.btnform}>
            <button onClick={OnRegister}>Register Now</button>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
