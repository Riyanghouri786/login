import { NextResponse } from "next/server";
import User from "../../../../models/User";
import connect from "../../../../lib/db";

export const POST = async (req) => {
  try {
    await connect();
    const { email, password } = await req.json();

    // Check if user exists
    const user = await User.findOne({ email, password });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Login successful", user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error logging in", error: error.message },
      { status: 500 }
    );
  }
};
