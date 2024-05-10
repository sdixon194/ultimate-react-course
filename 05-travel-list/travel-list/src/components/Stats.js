export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your list!</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "You have everything ready to go! "
        : `You have ${numItems} items on your list, and you already packed ${
            numPacked === 0 ? "nothing!" : numPacked
          } (
		${percentage ? percentage : "0"}
      %)`}
    </footer>
  );
}
