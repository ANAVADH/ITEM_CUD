"use server";
import prisma from "./prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export async function getItems() {
	const data = await prisma.items.findMany();
	return data;
  }

export const createItems = async (data) => {
  try {
    await prisma.items.create({
      data: {
        title: data.title,
        description: data.description,
        createdBy: data.userId
      },
    })
    return { success: true, error: false, message: 'Successfully Created..!' };
  }
  catch (err) {
    console.log(`Got a server issue , Err:${err}`)
    return { success: false, error: true, message: err };
  }
}


export const deleteItem = async (id) => {

  try {
    await prisma.items.delete({
      where: {
        id: parseInt(id),
      },
    });

    return { success: true, error: false, message: "Item Deleted" };
  } catch (err) {
    console.log(err);
    return { success: false, error: true, message: err };
  }
};



export const loginUser = async (data) => {

  try {

    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      return { success: false, error: true, message: "User not found" };
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      return { success: false, error: true, message: "Invalid credentials" };
    }

    const JWT_SECRET = process.env.JWT_SECRET

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    return {
      success: true,
      error: false,
      token,
      email: user.email,
      userId: user.id,
      message: "Successfully Loggedin"
    };

  }
  catch (err) {
    console.log("ERROR OCCUREDDD", err);
    return { success: false, error: true, message: err.message };
  }
}


export const createUser = async (email, password) => {

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return {
      success: true,
      error: false,
      userId: newUser.id,
      message: "User created successfully",
    };

  }
  catch (err) {
    console.log(`Error creating user, Error: ${err}`);
    return {
      success: false,
      error: true,
      message: "Failed to create user",
    };
  }

}




