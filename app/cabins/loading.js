import SpinnerMini from "@/app/_component/SpinnerMini";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <SpinnerMini />
      <p className="text-xl text-primary-200">Loading Cabin data...</p>
    </div>
  );
}
