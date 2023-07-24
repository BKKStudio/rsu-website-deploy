"use client";

import Navse from "../components/Navsecond";
import styles from "../styles/Formregis.module.css";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Footer from "../components/Footer";

export default function Bachelor() {
    const router = useRouter();
    const [student, setStudent] = React.useState({
        Faculty: "",
        Major: "",
        idcard: "",
        birthday: "",
        firstname: "",
        lastname: "",
        email: "",
        tell:"",

    });

    async function onRegister() {
        try {
          const response = await axios.post("/api/users/doctors",student);
          console.log("Register success", response.data);
          router.push("/");
        } catch (error) {
          console.log("Register failed", error.message);
        } 
      }
  return (
    <>
      <Navse />
      <article className={styles.containerinfo}>
        <div className={styles.itemfrom}>
          <span>สมัครเรียน 2566/1 Online ปริญญาเอก มหาวิทยาลัยรังสิต</span>
        </div>
      </article>
      <article className={styles.containerinfo}>
        <div className={styles.itemfrom2}>
          <div className={styles.iteminfrom2}>
            <div className={styles.creteform}>
              <label>คณะ/Faculty</label>
              <select id="Faculty" name="Faculty"  onChange={(ev) => setStudent({ ...student, Faculty: ev.target.value })}>
              <option value="">-- เลือกคณะ --</option>
                <option value="วิทยาลัยวิศวกรรมศาสตร์(College of Engineering)">วิทยาลัยวิศวกรรมศาสตร์(College of Engineering)</option>
                <option value="คณะดิจิทัลอาร์ต (Faculty of Digital Art)">คณะดิจิทัลอาร์ต (Faculty of Digital Art)</option>
                <option value="คณะทัศนมาตรศาสตร์(Faculty of Optometry)">คณะทัศนมาตรศาสตร์(Faculty of Optometry)</option>
                <option value="คณะเทคนิคการแพทย์(Faculty of Medical Technology)">คณะเทคนิคการแพทย์(Faculty of Medical Technology)</option>
              </select>
            </div>
            <div className={styles.creteform}>
              <label>สาขา/Major</label>
              <select id="Major" name="Major" onChange={(ev) => setStudent({ ...student, Major: ev.target.value })}>
              <option value="">-- เลือกสาขา --</option>
                <option value="test1">Test1</option>
                <option value="test2">Test2</option>
                <option value="test3">Test3</option>
                <option value="test4">Test4</option>
              </select>
            </div>
            <div className={styles.creteform}>
              <label>เลขที่บัตรประชาชน</label>
             <input type={"text"} id="idcard"  name="idcard" value={student.idcard}   onChange={(ev) => setStudent({ ...student, idcard: ev.target.value })}></input>
            </div>
            <div className={styles.creteform}>
              <label>วันเกิด (YYYY-MM-DD)</label>
            <input type="text" id="birthday" name="birthday" value={student.birthday}  onChange={(ev) => setStudent({ ...student, birthday: ev.target.value })}/>
            </div>
            <div className={styles.creteform}>
              <label>ชื่่อ</label>
              <input type={"text"} id="firstname"  name="firstname" value={student.firstname}  onChange={(ev) => setStudent({ ...student, firstname: ev.target.value })}></input>
            </div>
            <div className={styles.creteform}>
              <label>นามสกุล</label>
              <input type={"text"} id="lastname" name="lastname" value={student.lastname}  onChange={(ev) => setStudent({ ...student, lastname: ev.target.value })}></input>
            </div>
            <div className={styles.creteform}>
              <label>Email</label>
              <input type="email" id="email" name="email"  value={student.email}  onChange={(ev) => setStudent({ ...student, email: ev.target.value })}/>
            </div>
            <div className={styles.creteform}>
              <label>Tell</label>
              <input type="tell" id="tell" name="tell" value={student.tell}  onChange={(ev) => setStudent({ ...student, tell: ev.target.value })}/>
            </div>
          </div>
          <div className={styles.btnform}>
                <button  onClick={onRegister} >Register Now</button>
            </div>
        </div>
      </article>
      <Footer/>
    </>
  );
}
