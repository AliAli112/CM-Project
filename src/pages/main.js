import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import './styles/main.css'


export const Main = () => {

    const [ loading, setLoading ] = useState(true)
    const [ walletAddress, setWalletAddress ] = useState('Connect Wallet')
    const [ errMessage, setErrMessage ] = useState('')
    const [ isHasAddress, setisHasAddress ] = useState(false)

    let nav = useNavigate()

    useEffect(() => {
        async function callback() {
            await getCurrentWalletConnected()

            addWalletListener()
        }
        callback();
      }, []);

    async function connectWallet() {
        if (window.ethereum) {
          try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Wallet connected successfully
            console.log('Wallet connected!');
            setWalletAddress(accounts[0])
            checkAddress(accounts[0])
            // // Create an ethers.js provider
            // const provider = new ethers.BrowserProvider(window.ethereum);
            
            // // You can now use the provider to interact with the Ethereum network
            // // For example, you can get the signer's address:
            // const signerAddress = await (await provider.getSigner()).address
            // console.log('Signer address:', signerAddress);
            
          } catch (error) {
            console.error('Error connecting wallet:', error);
          }
        } else {
          console.error('MetaMask not detected. Please install MetaMask extension.');
          setErrMessage('MetaMask not detected. Please install MetaMask extension')
        }
      }

      const checkAddress = (address) => {
        if (address.substring(0,2) === '0x' && address.length === 42){
            setErrMessage('')
            setisHasAddress(true)
        }else{
            setisHasAddress(false)
        }
      }

      const getCurrentWalletConnected = async () => {
        //Function to maintain connection when page is reloaded
        if (window.ethereum) {
          try {
            const addressArray = await window.ethereum.request({
              method: "eth_accounts",
            });
            if (addressArray.length > 0) {
                setWalletAddress(addressArray[0])
                setisHasAddress(true)
            } else {
                setWalletAddress('')
                setisHasAddress(false)
            }
          } catch (err) {
            setWalletAddress('')
            setisHasAddress(false)
            setErrMessage('Connect to Metamask')
          }
        } else {
            setWalletAddress('')
            setisHasAddress(false)
            setErrMessage('MetaMask not detected. Please install MetaMask extension')
        }
      };

      function addWalletListener() {
        //Function reacts to any Account changes and updates the accounts accordingly
        if (window.ethereum) {
          window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
              setWalletAddress(accounts[0]);
            } else {
              setWalletAddress("");
              setErrMessage('Connect to Metamask')
            }
          });
        } else {
          setErrMessage('MetaMask not detected. Please install MetaMask extension')
        }
      }


    return (
    
        <div className='main-cnt'>
            <div className='h-line'>
                <div className='header'>
                    <h3>LIMITLESS<br/>SUSTAINABLITY<br/>FOR ALL</h3>
                </div>
                <div className='img-cnt'>
                    <img className="logo" src="/logobrain.png" alt="Logo" />
                </div>
            </div>
            
            <div className='secondary-cnt'>
                <div className='s-cnt-1'>
                    <div className='title'>
                        <h1>MINT YOURS</h1>
                    </div>
                    <div>
                        <p>
                        FOUNDERS NFTs are a new class of NFTs that aim to provide a long-term income stream for their holders by sharing a portion of the revenue generated by the underlying asset. The income generated by these NFTs can help to create a stable financial foundation for the holder and their future generations.
                        </p>
                    </div>
                    <div className='btn-cnt'>
                        <span className='err'>{ errMessage }</span>
                        <button className='btn' onClick={() => {
                            isHasAddress? nav('/mint') : connectWallet()
                        } }>
                        {
                            walletAddress.substring(0,2) === '0x' && walletAddress.length === 42? 
                                walletAddress.substring(0,4) + '....' + walletAddress.substring(38) 
                            : 'Connect Wallet'
                        }
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <img className='nft' src='/foundersNFTx.jpg' alt="NFT"/>
                    <div className='c-title'>
                        <span className='card-span'>FOUNDERS NFT</span>
                    </div>
                </div>
            </div>

        </div>


    )
}