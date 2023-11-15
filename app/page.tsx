import { getUserAuth } from "@/lib/auth/utils";

export default async function Home() {
  const userAuth = await getUserAuth();
  return <main>Hello Trello</main>;
}
