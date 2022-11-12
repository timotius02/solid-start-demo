import { Post } from "~/types/types";
import { FaRegularBookmark } from "solid-icons/fa";
import { For } from "solid-js";
import Stars from "./Stars";
import { VsVerifiedFilled } from "solid-icons/vs";

interface CardProps {
  post: Post;
}

export default function Card(props: CardProps) {
  const post = props.post;
  return (
    <div class="rounded-md bg-white p-4">
      <div class="flex gap-2">
        <div class="h-10 w-10 rounded bg-green-100">1</div>
        <div class="flex-1">
          <h4 class="text-green-600">{post.title}</h4>
          <h5 class="text-sm text-gray-500">{post.description}</h5>
        </div>
        <div class="flex items-center justify-center rounded border-2 border-gray-200 p-2">
          <FaRegularBookmark size={16} color="grey" />
        </div>
      </div>
      <div class="my-4 flex gap-2">
        <For each={post.tags}>
          {(tag) => (
            <div class="rounded bg-gray-200 py-1 px-2 text-sm text-gray-600">
              {tag}
            </div>
          )}
        </For>
      </div>
      <div class="flex justify-between">
        <Stars score={post.client.rating} />

        <div class="flex items-center gap-1">
          <VsVerifiedFilled color="green" />
          <p class="text-sm text-gray-500">Project Verified</p>
        </div>

        <div class="flex gap-1">
          <p class="font-medium">Proposals:</p>
          <p class="text-gray-500">{`${post.proposalCount} to`}</p>
          <p class="text-green-500">{post.proposalMax}</p>
        </div>
      </div>
    </div>
  );
}
