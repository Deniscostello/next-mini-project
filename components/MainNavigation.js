import classes from './MainNavigation.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import GlobalContext from '@/pages/store/globalContext'
import { useRouter } from 'next/router'

function MainNavigation() {
  const globalCtx = useContext(GlobalContext)
  const router = useRouter()
  
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation
