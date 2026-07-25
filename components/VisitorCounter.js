import { useSyncExternalStore } from "react";
import { visitorNumbers } from "../data/portfolio";

const STORAGE_KEY = "vlad-visitor-counter";
let visitorIndex;

function shuffleIndexes() {
  const indexes = visitorNumbers.map((_, index) => index);

  for (let index = indexes.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [indexes[index], indexes[swapIndex]] = [indexes[swapIndex], indexes[index]];
  }

  return indexes;
}

function hasValidOrder(order) {
  return (
    Array.isArray(order) &&
    order.length === visitorNumbers.length &&
    order.every((index) => Number.isInteger(index) && visitorNumbers[index])
  );
}

function getNextVisitorIndex() {
  const fallbackIndex = Math.floor(Math.random() * visitorNumbers.length);

  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
    let order = hasValidOrder(saved.order) ? saved.order : shuffleIndexes();
    let cursor = Number.isInteger(saved.cursor) ? saved.cursor : 0;

    if (cursor < 0 || cursor >= order.length) {
      order = shuffleIndexes();
      cursor = 0;
    }

    const nextIndex = order[cursor];
    const nextCursor = cursor + 1;
    const nextState =
      nextCursor >= order.length
        ? { cursor: 0, order: shuffleIndexes() }
        : { cursor: nextCursor, order };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
    return nextIndex;
  } catch {
    return fallbackIndex;
  }
}

function getVisitorSnapshot() {
  visitorIndex ??= getNextVisitorIndex();
  return visitorIndex;
}

function getServerSnapshot() {
  return 0;
}

function subscribe() {
  return () => {};
}

export default function VisitorCounter({
  className,
  digitsClassName,
  label = "visitor no.",
}) {
  const index = useSyncExternalStore(
    subscribe,
    getVisitorSnapshot,
    getServerSnapshot,
  );
  const current = visitorNumbers[index];

  return (
    <span
      className={className}
      title={current.meaning ? `fake counter: ${current.meaning}` : "fake counter"}
    >
      {label ? `${label} ` : null}
      <span className={digitsClassName}>{current.value}</span>
    </span>
  );
}
