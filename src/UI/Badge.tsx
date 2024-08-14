export default function Badge({ quantity }: { quantity: number }) {
  return (
    <div className="absolute top-[3px] right-[0px] px-[7px] rounded-lg bg-blue-500 dark:bg-pink-400 text-xs text-center text-white dark:text-dark-blue">
      {quantity ?? 0}
    </div>
  );
}
