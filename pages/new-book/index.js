// our-dimain.com/new-meetup
import AddBookForm from '@/components/book/AddBookForm';
import { useRouter } from 'next/router';
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'

function AddBookPage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function addMeetupHandler(enteredMeetupData)  {
        await globalCtx.updateGlobals({cmd: 'addMeeting', newVal: enteredMeetupData})
        router.push('/');
    }

    return <AddBookForm onAddMeetup={addMeetupHandler} />
}

export default AddBookPage