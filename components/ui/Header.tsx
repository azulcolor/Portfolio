export const Header = () => {
  return <header className="fixed z-50 inset-0 bg-transparent flex items-center h-16 p-12">
    <p className="text-principal text-3xl font-bold mr-auto">Pastelin</p>
    <ul className="gap-16 hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
    </ul>
  </header>;
};
