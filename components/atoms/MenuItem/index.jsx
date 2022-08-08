import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MenuItem(props) {
  const router = useRouter()
  // console.log(router);
  console.log(router.asPath === props.href);
  // console.log(props);

  return (
    !props.submenu ?
    <li className="nav-item">
      <Link href={props.href}>
        {/* <a className={['nav-link', router.pathname === props.href ? 'active' : ''].join(' ')} aria-current="page">{props.title}</a> */}
        <a className={['nav-link', router.asPath.startsWith(props.href) ? 'active' : ''].join(' ')} aria-current="page">{props.title}</a>
      </Link>
    </li>:
    <li className="nav-item dropdown">
      <a className={['nav-link', 'dropdown-toggle', router.asPath.startsWith(props.href) ? 'active' : ''].join(' ')} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {props.title}
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        {
          props.submenu.map((menu, key) => {
            return <li key={key} >
              <Link href={menu.href}>
                <a className="dropdown-item">{menu.title}</a>
              </Link>
            </li>
          }) 
        }
      </ul>
    </li>
  )
}
