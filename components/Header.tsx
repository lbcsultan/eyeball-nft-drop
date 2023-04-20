import { ConnectWallet } from '@thirdweb-dev/react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div>
        <Link
          href={'/'}
          className={router.pathname == '/' ? styles.active : styles.link}
        >
          Claim
        </Link>

        <Link
          href={'/nfts'}
          className={router.pathname == '/nfts' ? styles.active : styles.link}
        >
          NFTs
        </Link>

        <Link
          href={'/my-nfts'}
          className={
            router.pathname == '/my-nfts' ? styles.active : styles.link
          }
        >
          My NFTs
        </Link>

        <Link
          href={'/write-note'}
          className={
            router.pathname == '/write-note' ? styles.active : styles.link
          }
        >
          Write Note
        </Link>
      </div>

      <div>
        <ConnectWallet />
      </div>
    </div>
  )
}

export default Header
