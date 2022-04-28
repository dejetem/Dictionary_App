import React from 'react'
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactAudioPlayer from 'react-audio-player';


const Result = (props) => {
  const headerState = useSelector((state) => state.header.datas);
  console.log(headerState[0]);



const card = (
  <React.Fragment>
    {headerState.map(home =>
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
     {headerState.loading ? (
        <h2>Loading</h2>
      ) : headerState.error ? (
        <h2>{headerState.error}</h2>
      ) : (
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      )}
    </div>
  );
};

export default Result;