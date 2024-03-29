import Skeleton from "@/components/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 pt-28">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default Loading;
