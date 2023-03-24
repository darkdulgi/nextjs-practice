import NavBar from "./components/navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  return <>
    <NavBar />
    <div>{children}</div>
  </>;
}