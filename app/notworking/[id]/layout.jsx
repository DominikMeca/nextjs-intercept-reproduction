export default function Layout({ children, modal }) {
  return (
    <>
      {children} <br />
      <br />
      Modal: <br />
      {modal}
    </>
  );
}
