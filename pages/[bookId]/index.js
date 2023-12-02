import BookDetail from '@/components/book/BookDetail'
import { useRouter } from 'next/router'
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'

export default function () {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter();
    console.log("here after on click")

    // Back to basics, a simple for loop. Also trim() comes into play as it usually does!
    let returnVal = null
    for (let ii = 0; ii < globalCtx.theGlobalObject.books.length; ii++) {
        let temp = globalCtx.theGlobalObject.books[ii]
        
        if (temp.bookId.trim() == router.query.bookId.trim()) {
            console.log(temp.bookId)
            returnVal = <BookDetail poster={temp.poster} title={temp.title} author={temp.author} />
        }
    }
    // In the real world, we'd put the code above in the store context module. 
    return returnVal
}
