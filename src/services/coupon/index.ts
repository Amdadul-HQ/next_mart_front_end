"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createCoupon = async (couponData: FormData): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/coupon`, {
      method: "POST",
      body: couponData,
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    revalidateTag("PRODUCT");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};