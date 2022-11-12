import { FaRegularStarHalfStroke, FaSolidStar } from "solid-icons/fa";
import { For } from "solid-js";

interface StarsProp {
  score: number;
  color?: string;
}

export default function Stars(props: StarsProp) {
  const numStars = Math.floor(props.score);
  const hasHalf = props.score - numStars >= 0.5;

  const color = props.color ?? "gold";
  return (
    <div class="flex">
      <For each={new Array(numStars)}>
        {() => <FaSolidStar color={color} />}
      </For>
      {hasHalf && <FaRegularStarHalfStroke color={color} />}
    </div>
  );
}
