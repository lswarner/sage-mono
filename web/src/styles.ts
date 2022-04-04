

const btn= `px-4 py-2 text-lg flex-none my-auto border-3 border-b-6`
//const btn= `px-2 text-lg flex-none my-auto border-b-6` // underline -> hover:box
const btnAlternate= `${btn} bg-gold text-white border-gold border-b-pink hover:border-pink`
const black= `${btn} bg-black text-white border-black border-b-pink`
const primary= `${btn} bg-white text-black border-black border-b-black`
const btnC= `${btn} bg-white border-gold border-b-pink hover:bg-gold hover:text-white`
const gray =` ${btn} bg-white border-3 border-gray-400 text-gray-400`

const btnSoftC =` ${gray} hover:border-gold hover:border-b-pink transition-colors`

const hoverBlack=  `hover:bg-black hover:border-black hover:text-white hover:border-b-pink`
const hoverWhite= `hover:bg-white hover:text-black hover:border-gold hover:border-b-pink transition-colors`

const hoverBright= `hover:bg-gold hover:text-black hover:border-gold hover:border-b-pink transition-colors`
const hoverDark=   `hover:bg-black hover:text-white hover:border-gold hover:border-b-pink transition-colors`
const hoverGold= `hover:bg-gold hover:text-black hover:border-gold hover:border-b-pink`

const btnPrimary= `${primary} ${hoverBright}`
const btnBlack= `${black} ${hoverGold}`
const btnSoft= `${gray} ${hoverBlack}`
const btnSoftBright =` ${btnSoft} hover:bg-pink transition-colors`
const btnPrimaryDark= `${primary} ${hoverDark}`

const royal= `${btn} bg-royal text-royal text-white`
const hoverRoyal= `hover:bg-white hover:text-royal hover:border-royal`





    export {
        btnPrimary,
        btnPrimaryDark,
        btnAlternate,
        btnC,
        btnSoft,
        btnSoftC,
        btnSoftBright,
    }

