import './Search.css'
import {ReactComponent as SearchIcon} from '../assets/Searchicon.svg'

function Search() {
    const onSubmitHandler = (e) =>{
        e.preventDefault()
    }

    return (
        <form className="search-box" onSubmit={(e) => onSubmitHandler(e)}>
            <input placeholder="Search a album of your choice" className="text-box" />            
            <button className="search-icon-box" type='submit'><SearchIcon/></button>
        </form>
    )
}

export default Search;