import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../redux/header/headerAction'
import { FcSearch , FcHome} from 'react-icons/fc'
import './Header.css'
import {
  Link,
  useNavigate
} from "react-router-dom";

const Header = ({props}) => {
  const [search,setSearch] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  const onClick = () => {
    dispatch(fetchSearch(search));
    setSearch([]);
    navigate('/search')
  }
  const onKeyPress = (keyPressEvent) => keyPressEvent.key === 'Enter' && onClick()


  return (
    <div>
      <div id='search_wrapper'>
        <Link to='/' id="home"><FcHome /></Link>
        <nav id='search_wrapper2'>
           <input type="text" value={search} onKeyDown={onKeyPress} onChange={(e) => setSearch(e.   target.value)}/>
           <div title='search' onClick={onClick} id='search_button'>
            <FcSearch />
           </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;