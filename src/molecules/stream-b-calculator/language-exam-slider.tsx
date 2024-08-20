import { useState } from 'react';
import {
  LanguageTestTypeEnum
} from '../../data';
import Stack from '@mui/material/Stack';
import {
  Slider
} from '../../atoms';
import {
  LanguageTestSpec,
} from '../../data';
type LanguageExamSliderProp = {
  type: LanguageTestTypeEnum
}

function LanguageExamSlider(props: LanguageExamSliderProp) {

  
  const [readingScore, setReadingScore] = useState(0);
  const [writingScore, setWritingScore] = useState(0);
  const [listeningScore, setListeningScore] = useState(0);
  const [speakingScore, setSpeakingScore] = useState(0);
  
  if (props.type === LanguageTestTypeEnum.None ) {
    return <></>
  }

  const spec = LanguageTestSpec[props.type];

  const onReadingScoreChange = (newValue: number) => {
    setReadingScore(newValue);
  }

  const onWritingScoreChange = (newValue: number) => {
    setWritingScore(newValue);
  }

  const onListeningScoreChange = (newValue: number) => {
    setListeningScore(newValue);
  }

  const onSpeakingScoreChange = (newValue: number) => {
    setSpeakingScore(newValue);
  }

  const componentFailed = (score: number, passingScore: number) => {
    return score < passingScore;
  }

  return (
    <>  
    {props.type}
    <Stack
      direction='row'
      height={300}
    >
      Reading
      <Slider 
        min={spec.min}
        max={spec.max}
        step={spec.step}
        value={readingScore}
        onChange={onReadingScoreChange}
        error={componentFailed(readingScore, spec.passing_score_reading)}
        passing={spec.passing_score_reading}
      />
      Writing
      <Slider 
        min={spec.min}
        max={spec.max}
        step={spec.step}
        value={writingScore}
        onChange={onWritingScoreChange}
        error={componentFailed(writingScore, spec.passing_score_writing)}
        passing={spec.passing_score_writing}
      />
      Listening
      <Slider 
        min={spec.min}
        max={spec.max}
        step={spec.step}
        value={listeningScore}
        onChange={onListeningScoreChange}
        error={componentFailed(listeningScore, spec.passing_score_listening)}
        passing={spec.passing_score_listening}
      />
      Speaking
      <Slider 
        min={spec.min}
        max={spec.max}
        step={spec.step}
        value={speakingScore}
        onChange={onSpeakingScoreChange}
        error={componentFailed(speakingScore, spec.passing_score_speaking)}
        passing={spec.passing_score_speaking}
      />
    </Stack>
    </>
  )
}

export default LanguageExamSlider;