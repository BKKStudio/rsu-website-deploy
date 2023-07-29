import { connect } from "@/dbConfig/dbConfig";
import Doctors from "@/models/registerDoctorModel";
import { NextRequest, NextResponse } from "next/server";


connect();


export async function POST(request) {

    try {
      const reqBody = await request.json();
      const { Faculty, Major, idcard, birthday,firstname, lastname,email,tell ,level} = reqBody;
      console.log(reqBody);
  
      //check if user already exists
      const user = await Doctors.findOne({idcard});
      if (user) {
        return NextResponse.json({ error: "Student already exists" }, { status: 400 });
      }
      const newStudent = new Doctors({
        Faculty,
        Major,
        idcard,
        birthday,
        firstname,
        lastname,
        email,
        tell,
        level,
      });
  
      const savedStudent = await newStudent.save();
      console.log(savedStudent);
      return NextResponse.json({
        message: "Register successfully",
        savedStudent,
      });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }