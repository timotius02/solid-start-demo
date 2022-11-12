import { For, Resource, Suspense } from "solid-js";
import { Post } from "~/types/types";
import Card from "./Card";

interface CardListProp {
  posts: Resource<Post[]>;
}

export default function CardList(props: CardListProp) {
  return (
    <div class="flex flex-col gap-4">
      <Suspense fallback={<div>Loading...</div>}>
        <For each={props.posts()}>{(post) => <Card post={post}></Card>}</For>
      </Suspense>
    </div>
  );
}
