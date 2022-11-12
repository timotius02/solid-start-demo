import { createResource, For, Suspense } from "solid-js";
import { A, useRouteData } from "solid-start";
import CardList from "~/components/CardList";
import fetchMockData from "~/utils/fetchMockData";

export function routeData() {
  const [posts] = createResource(async () => {
    const response = await fetchMockData();
    return response;
  });

  return { posts };
}
export default function Home() {
  const { posts } = useRouteData<typeof routeData>();
  return (
    <main class="py-6">
      <div class="mx-auto grid max-w-7xl grid-cols-12 gap-4">
        <div class="col-span-5">
          <CardList posts={posts}></CardList>
        </div>
        <div class="col-span-5 h-8 bg-gray-300">2</div>
        <div class="col-span-2 h-8 bg-white">3</div>
      </div>
    </main>
  );
}
