import React, {useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchHome } from '../redux/homecard/homecardAction'
import { fetchSearch } from '../redux/header/headerAction'
import { FcSearch , FcHome} from 'react-icons/fc'
import './HomeCard.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactAudioPlayer from 'react-audio-player';
import {
  Link,
  useNavigate
} from "react-router-dom";

const HomeCard = ({props}) => {
  const [search,setSearch] = useState([])
  const dispatch = useDispatch();
  const homeState = useSelector((state) => state.homecard.datas);
  console.log(homeState[0]);
  const navigate = useNavigate();
  
   const fetchData = () => {
    dispatch(fetchHome());
  };

   useEffect(() => {
    fetchData();
  },[])

  

  /*const onClick = () => {
    dispatch(fetchSearch(search));
    navigate('/search')
  }
  const onKeyPress = (keyPressEvent) => keyPressEvent.key === 'Enter' && onClick()*/

const card = (
  <React.Fragment>
    {homeState.map(home =>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Word Dictionary
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Word: <span></span>{home.word}
        </Typography>
        {home.meanings.map((homedata, i) => 
          <>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              partOfSpeech: <span></span>{homedata.partOfSpeech}
            </Typography>
            {homedata.definitions.map((datahome, i) => 
              <>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                 Meaning: <span></span>{datahome.definition}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                 Example: <span></span>{datahome.example}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Antonyms: <span></span>{datahome.antonyms}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                 Synonyms: <span></span>{datahome.synonyms}
              </Typography>
              </>
            )}
          </>
        )}

        {home.phonetics.map((audiodata,i) => 
          <>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Phonetic: <span></span>{audiodata.text}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Phonetics Audio:
            <br />
            <br />
            <ReactAudioPlayer
              src={audiodata.audio}
              controls
            />
          </Typography>
          </>
        )}

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Origin: <span></span>{home.origin}
        </Typography>
      </CardContent>
    )}:
  </React.Fragment>
);


  return (
    <div>
     {homeState.loading ? (
        <h2>Loading</h2>
      ) : homeState.error ? (
        <h2>{homeState.error}</h2>
      ) : (
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      )}
    </div>
  );
};

export default HomeCard;