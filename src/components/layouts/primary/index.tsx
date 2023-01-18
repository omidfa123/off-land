export interface IPrimaryLayout {
  children: React.ReactNode;
}
const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default PrimaryLayout;
