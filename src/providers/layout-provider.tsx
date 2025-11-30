"use server"

import { cookies } from "next/headers";
import { PropsWithChildren } from "react";

import { LayoutProviderClient } from "./layout-provider-client";

export async function LayoutProvider({ children }: PropsWithChildren) {
  const isWide = (await cookies()).get("wide")?.value === "true";

  return (
    <LayoutProviderClient isWide={isWide}>
      {children}
    </LayoutProviderClient>
  );
}

export default LayoutProvider;