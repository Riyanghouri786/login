import { NextResponse } from "next/server";
import User from "../../../../models/User";
import connect from "../../../../lib/db";

export const POST = async (req) => {
  try {
    await connect();

    const { email, username, password } = await req.json();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already Exist." },
        { status: 400 }
      );
    }

    // Create a new user
    const newUser = new User({
      email,
      name: username,
      password,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create user", error: error.message },
      { status: 500 }
    );
  }
};
