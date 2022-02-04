export function Link({ link }) {
  return (
    <li>
      <a href={"#" + link}>{link}</a>
    </li>
  );
}
