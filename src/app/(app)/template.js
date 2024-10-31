import { Lato } from "next/font/google";
import "../globals.css";

import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChartLine, faFileLines, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "@/components/buttons/LogoutButton";
import { headers } from "next/headers";
import AppSidebar from "@/components/layout/AppSidebar";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default async function RootLayout({ children, ...rest }) {

  const headerList = headers();
  const url = headerList.get('next-url')

  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect('/')
  }




  return (
    <html lang="en">
      <body
        className={lato.className}
      >

        <main className="flex min-h-screen">
          <aside className="bg-white w-48 p-4 shadow ">
            <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto">
              <Image src={session.user.image} width={256} height={256} alt={'avater'} />
            </div>
            <div className="text-center">
              <AppSidebar />
            </div>



          </aside>



          <div className="grow">
            <div className="bg-white m-8 p-4 shadow ">
              {children}
            </div>


          </div>
        </main>
      </body>
    </html>
  );
}
