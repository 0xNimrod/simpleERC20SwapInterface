import { useEffect } from 'react'

import useLoginStyles from './login.styles'
import { ReactComponent as TokenX } from '../../images/tokenX.svg'
import { ReactComponent as TokenY } from '../../images/tokenY.svg'
import { ReactComponent as SwapArrow } from '../../images/swap-arrow.svg'
import { ReactComponent as MetaMaskIcon } from '../../images/metamask-logo.svg'

function Login ({ wallet, fromTokenInfo, toTokenInfo, onLoadWallet, onGoToNextStep }) {
  const classes = useLoginStyles()

  useEffect(() => {
    if (wallet) {
      onGoToNextStep()
    }
  }, [wallet, onGoToNextStep])

  return (
    <div className={classes.login}>
      <div className={classes.tokenLogos}>
        <TokenX />
        <SwapArrow className={classes.swapArrow} />
        <TokenY />
      </div>
      <h1 className={classes.title}>Convert {fromTokenInfo.symbol} tokens to {toTokenInfo.symbol}</h1>
      <p className={classes.connectText}>Connect with</p>
      <button
        className={classes.metaMaskButton}
        onClick={onLoadWallet}
      >
        <MetaMaskIcon className={classes.metaMaskIcon} />
      </button>
      <p className={classes.metaMaskNameText}>MetaMask</p>
    </div>
  )
}

export default Login
