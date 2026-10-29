import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  ADMIN_PASSWORD,
  ADMIN_TOKEN_KEY,
  ADMIN_SESSION_SECRET,
  verifyAdminPassword,
  isValidAdminToken,
} from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get(ADMIN_TOKEN_KEY)?.value;
  const authenticated = isValidAdminToken(token);
  return NextResponse.json({ authenticated });
}

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    if (!verifyAdminPassword(password)) {
      return NextResponse.json(
        { success: false, error: "Mật khẩu quản trị không chính xác!" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Xác thực Quản trị viên thành công!",
    });

    response.cookies.set({
      name: ADMIN_TOKEN_KEY,
      value: ADMIN_SESSION_SECRET,
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: "lax",
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Lỗi xác thực" }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Đã đăng xuất" });
  response.cookies.set({
    name: ADMIN_TOKEN_KEY,
    value: "",
    path: "/",
    maxAge: 0,
  });
  return response;
}
