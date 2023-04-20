import { Web3Button, useContract, useContractWrite } from '@thirdweb-dev/react'
import styles from '../styles/WriteNote.module.css'
import { NextPage } from 'next'
import { useState } from 'react'

const contractAddress = '0xc89085E7B5380fF236ad1Bd2Ee6BD289c8e2bC15'

const WriteNote: NextPage = () => {
  const { contract } = useContract(contractAddress)
  const {
    mutate: write,
    isLoading,
    error,
  } = useContractWrite(contract, 'writeNote')

  const [id, setId] = useState('')
  const [note, setNote] = useState('')

  return (
    <div className={styles.container}>
      <section className={styles.info}>
        <p className={styles.label}>ID:</p>
        <input
          type="text"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <p className={styles.label}>Note:</p>
        <textarea
          name="note"
          value={note}
          rows={5}
          onChange={(e) => setNote(e.target.value)}
        />

        <br />

        {/* <button disabled={isLoading} onClick={() => write([id, note])}>
          Write Note
        </button> */}

        <Web3Button
          contractAddress={contractAddress}
          action={(contract) => contract.call('writeNote', [id, note])}
        >
          Write Note
        </Web3Button>
        {error ? <p>{error.toString()}</p> : null}
      </section>
    </div>
  )
}

export default WriteNote
