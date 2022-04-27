import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';


const HomeCard = (props) => {
  const [search, setSearch] = useState('')

   useEffect(() => {
    async function fetchPosts () {
      const response = await axios.get('https://random-word-api.herokuapp.com/word?number=1')
      setSearch(response.data);
      return response;
    }
    fetchPosts();
  }, [])

  const homeState = useSelector((state) => state.homecard.data);
  console.log(homeState);

  return (
    <div>
      <h1>Title</h1>
    </div>
  );
};

export default HomeCard;