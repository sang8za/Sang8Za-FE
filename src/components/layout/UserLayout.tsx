interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <div className="flex">
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}