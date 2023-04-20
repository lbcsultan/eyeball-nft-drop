import { Web3Button } from '@thirdweb-dev/react'
import styles from '../styles/Home.module.css'
import { NextPage } from 'next'

const contractAddress = '0xc89085E7B5380fF236ad1Bd2Ee6BD289c8e2bC15'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.info}>
        <img src="logo.png" alt="logo" className={styles.eyeLogo} />
        <h1> The EyeBall Project</h1>
        <p>NFT project using thirdweb.com</p>
        <br />
        <Web3Button
          contractAddress={contractAddress}
          action={(contract) => {
            contract.erc721.claim(1)
          }}
        >
          Claim Eye
        </Web3Button>
      </section>
    </div>
  )
}

export default Home
