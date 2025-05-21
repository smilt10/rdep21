/* import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import AdminDashboard from "@/components/admin/dashboard"

export default async function AdminPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user || !(session.user as { isAdmin?: boolean }).isAdmin) {
    redirect("/admin/login")
  }

  return <AdminDashboard />
} */

// app/admin/page.tsx
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import AdminDashboard from "@/components/admin/dashboard"

export default async function AdminPage() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user.isAdmin) {
    redirect("/admin/login")
  }

  return <AdminDashboard />
}