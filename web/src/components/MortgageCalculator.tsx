import { FC } from 'react'
const principal= 480000 //460354.31
const interestRateAnnual= 3
const intMonthlyDecimal= interestRateAnnual / 100 / 12;
const numPayments= 360
const insuranceAnnual =1600
const escrowAnnual= 3600


// M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
//    a= (2.75)^n
//    b= P ( i * a )
//    c= (a -1)
//    M = b / c
// M = P ( i * a ) / (a -1)
const a= (1 + intMonthlyDecimal) ** numPayments
const b= principal * (intMonthlyDecimal * a)
const c= a - 1
const paymentMonthly= b / c


const v= 1000 * 16.2 * 12
let q= 12000
for(let i= 0; i< 16; i++){
    q= (q * 1.08) + 12000
}

const MortgageCalculator: FC = () => {
    return (
        <div>
            <div>Interest: {interestRateAnnual}%</div>
            <div>Payments Remaining: {numPayments}</div>
            <div>${paymentMonthly.toFixed(2)}</div>
            <div>${v} || ${q}</div>
        </div>
    )
}

export default MortgageCalculator