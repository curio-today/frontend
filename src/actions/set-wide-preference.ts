"use server";

import { cookies } from "next/headers";

export async function setWidePreference(value: boolean) {
  (await cookies()).set("wide", String(value));
}