import { ThemeToggle } from "@/src/theme/ThemeToggle";

export const Header = async () => {
  return (
    <header className="border-b border-b-accent fixed top-0 bg-background w-full">
      <div className="container flex items items-center py-2 max-w-lg m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">githread</h2>
        <ThemeToggle />
      </div>
    </header>
  );
};
