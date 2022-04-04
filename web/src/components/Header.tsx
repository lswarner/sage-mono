import {FC} from 'react'
import { btnPrimary } from '../styles'

const Header:FC<{ account: boolean}> = ({account}) => {

    return (
        <div className='flex flex-row justify-between my-2'>
            <div className="flex flex-row">
                <img alt="caravanserai logo" src={'assets/img/crvn-logo-header-sm.png'} className={`mr-3 object-none`} />
                <div className=' border-b-3 border-b-pink'>
                    <div className='text-6xl font-brand text-black border-b-gold border-b-6 ' style={{lineHeight: '0.8', marginBottom: '0px'}}>caravanserai</div>
                </div>
            </div>
            {
                account 
                 ? <div className={btnPrimary}>Account</div>
                 : <div className={btnPrimary}>Sign In</div>
            }
            
        </div>
    )
}

export default Header