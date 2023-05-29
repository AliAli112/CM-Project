import React, {useEffect, useState} from 'react';
import './styles/minting.css'

export const Mint = () => {

    const [ loading, setLoading ] = useState(true)

    return (
        <div>
            <div className='main'>
                <div className='info-box'>
                    <div className='info'>
                        <div className='info-words'>
                            <span className='top'>CURRENT OWNER</span>
                            <span className='lg'>@LOW84</span>
                        </div>
                    </div>
                    <div className='info'>
                        <div className='info-words'>
                            <span className='top'>NFT ID</span>
                            <span className='lg'>0001</span>
                        </div>
                    </div>
                    <div className='info'>
                        <div className='info-words'>
                            <span className='top'>PRICE</span>
                            <span className='lg'>$500.00</span>
                        </div>
                    </div>
                    <div className='info'>
                        <div className='info-words'>
                            <span className='top'>CONTRACT ID</span>
                            <span className='lg'>@LOW84</span>
                        </div>
                    </div>
                </div>
                <div className='minting-box'>
                    <div className='mint-cnt-1'>
                        <div className='counter'>
                            <span className='cnt'>TOTAL MINTED</span><span className='cnt-val'>0.00</span>
                        </div>
                        <div className='counter'>
                            <span className='cnt'>TOTAL REMAINING</span><span className='cnt-val'>0.00</span>
                        </div>
                    </div>
                    <div className='mint-cnt-2'>
                        <div className='btn-cnt1'>
                            <button className='btn c'>CLAIM</button>
                        </div>
                        <div className='btn-cnt1'>
                            <button className='btn m'>MINT</button>
                            <button className='btn m btn-sm'>→</button>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <span className='f-span'>Copyright c 2023 Powered by CMP</span>
                </div>
            </div>
            <style>{
            `body {background-image: url('/background3.jpg') !important;
                    background-size:  100vw 280vh !important;
                    background-position: center center !important;
                    background-repeat: no-repeat !important;}`}</style>
        </div>
            
    )
}