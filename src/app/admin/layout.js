import AuthGuard from "../AuthGuard";

export default function AdminLayout({ children }) {
  return (
    <AuthGuard adminOnly={true}>
      {children}
    </AuthGuard>
  );
}
