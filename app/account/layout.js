import SideNavigation from "@/app/_component/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr]">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}
