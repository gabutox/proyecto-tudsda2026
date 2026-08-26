export default function Header({
  onClickMenu
}) {
  return <header
    style={{
      backgroundColor: 'pink',
    }}
  >
    <img
      src="/menu.png"
      alt="Menú"
      width={25}
      onClick={() => onClickMenu()}
    />
    Acá va el título de la página
  </header>;
}