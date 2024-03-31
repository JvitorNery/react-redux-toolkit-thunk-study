import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import useThunk from '../hooks/use-thunk';
import { ExpandablePanel }  from './ExpandablePanel';
import AlbumsList from './AlbumsList';

function UsersListItem({user}) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser)
    
    const handleDelete = () => {
        doRemoveUser(user);
    }

    const header = <>
    <Button loading={isLoading} onClick={handleDelete}>
                <GoTrashcan className='' />
            </Button>
            {error && <div>Error Deleting User.</div>}
            {user.name}
    </>;
    
    return (
        <ExpandablePanel header={header} >
            <AlbumsList user={user} />
        </ExpandablePanel>
          
      );
}

export default UsersListItem;