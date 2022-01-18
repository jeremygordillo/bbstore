type PaginationProps = {
  onNext: () => void;
  onPrev: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
};

const Pagination = (props: PaginationProps) => {
  const { onNext, onPrev, disablePrev = false, disableNext = false } = props;
  return (
    <div className="flex items-center justify-center pt-8">
      <button
        disabled={disablePrev}
        className="p-4 m-1 border border-sky-300 font-semibold hover:bg-sky-300 disabled:bg-gray-200 disabled:border-gray-200 disabled:text-white"
        onClick={onPrev}
      >
        Prev
      </button>
      <button
        disabled={disableNext}
        className="p-4 m-1 border border-sky-300 font-semibold hover:bg-sky-300 disabled:bg-gray-200 disabled:border-gray-200 disabled:text-white"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
