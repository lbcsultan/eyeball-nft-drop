import { NextPage } from 'next'
import styles from '../styles/Nfts.module.css'
import {
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useNFTs,
} from '@thirdweb-dev/react'

const contractAddress = '0xc89085E7B5380fF236ad1Bd2Ee6BD289c8e2bC15'

const MyNfts: NextPage = () => {
  const { contract } = useContract(contractAddress)
  const { data: nfts, isLoading, error } = useNFTs(contract)
  const address = useAddress()

  return (
    <div className={styles.container}>
      <section className={styles.info}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          nfts
            ?.filter((nft) => nft.owner == address)
            .map((nft) => {
              return (
                <div key={nft.metadata.id}>
                  <ThirdwebNftMedia
                    metadata={nft.metadata}
                    height="200"
                    style={{ borderRadius: '10px' }}
                  />
                  <p> {nft.metadata.name} </p>
                </div>
              )
            })
        )}
      </section>
    </div>
  )
}

export default MyNfts
