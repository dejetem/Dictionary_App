import {useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchHome } from '../redux/homecard/homecardAction'
import { fetchSearch } from '../redux/header/headerAction'
import { FcSearch } from 'react-icons/fc'
import './HomeCard.css'

const HomeCard = (props) => {
  const [search,setSearch] = useState([])
  const dispatch = useDispatch();
  const homeState = useSelector((state) => state.homecard.datas);
  const headerState = useSelector((state) => state.header.datas);
  console.log(homeState);
  
   const fetchData = () => {
    dispatch(fetchHome());
  };

   useEffect(() => {
    fetchData();
  },[])

  //const homeState = useSelector((state) => state.homecard.data);
  //console.log(homeState.word);

  const onClick = () => {
    dispatch(fetchSearch(search))
  }
  const onKeyPress = (keyPressEvent) => keyPressEvent.key === 'Enter' && onClick()

  return (
    <div>
      <div id='search_wrapper'>
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

export default HomeCard;