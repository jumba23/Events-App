import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const PaginationControls = () => {
  return (
    <section className="flex">
      <Link
        href="/events/austin?page=1"
        className="flex text-white px-5 py-3 bg-white/5 rounded-md opacity-75"
      >
        <ArrowLeftIcon />
        Previous
      </Link>
      <Link
        href="/events/austin?page=3"
        className="text-white px-5 py-3 bg-white/5"
      >
        Next
        <ArrowRightIcon />
      </Link>
    </section>
  );
};

export default PaginationControls;
