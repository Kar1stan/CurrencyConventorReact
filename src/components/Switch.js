import { HiSwitchHorizontal } from 'react-icons/hi';
export default function Switch({flip}) {
    return (
        <div className="switch">
          <HiSwitchHorizontal size="30px" 
                        onClick={flip}/>
        </div>
    );
}