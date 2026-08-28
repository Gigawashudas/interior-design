import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (session?.value !== "authenticated") {
    redirect("/admin/login");
  }

  return children;
}
