import { useState } from 'react';
import { LanguageTestTypeEnum } from '../../data';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Slider } from '../../atoms';
import { LanguageTestSpec } from '../../data';

type LanguageExamSliderProp = {
  type: LanguageTestTypeEnum
}

type ExamComponentProps = {
  label: string;
  score: number;
  onScoreChange: (newValue: number) => void;
  min: number;
  max: number;
  step: number;
  passingScore: number;
}

function ExamComponent({ label, score, onScoreChange, min, max, step, passingScore }: ExamComponentProps) {
  const componentFailed = (score: number, passingScore: number) => {
    return score < passingScore;
  };

  return (
    <Stack direction='column' spacing={1}>
      <Typography
        variant="body1"
      >
        <strong>
          {label}
        </strong>
      </Typography>

      <Slider
        min={min}
        max={max}
        step={step}
        value={score}
        onChange={onScoreChange}
        error={componentFailed(score, passingScore)}
        passing={passingScore}
      />
    </Stack>
  );
}

function LanguageExamSlider({ type }: LanguageExamSliderProp) {
  const [readingScore, setReadingScore] = useState(0);
  const [writingScore, setWritingScore] = useState(0);
  const [listeningScore, setListeningScore] = useState(0);
  const [speakingScore, setSpeakingScore] = useState(0);

  if (type === LanguageTestTypeEnum.None) {
    return <></>;
  }

  const spec = LanguageTestSpec[type];

  return (
    <div
      style={{
        margin: 35
      }}
    >
      <Stack
        direction='row'
        spacing={10}
        height={300}
      >
        <ExamComponent
          label="Reading"
          score={readingScore}
          onScoreChange={setReadingScore}
          min={spec.min}
          max={spec.max}
          step={spec.step}
          passingScore={spec.passing_score_reading}
        />
        <ExamComponent
          label="Writing"
          score={writingScore}
          onScoreChange={setWritingScore}
          min={spec.min}
          max={spec.max}
          step={spec.step}
          passingScore={spec.passing_score_writing}
        />
        <ExamComponent
          label="Listening"
          score={listeningScore}
          onScoreChange={setListeningScore}
          min={spec.min}
          max={spec.max}
          step={spec.step}
          passingScore={spec.passing_score_listening}
        />
        <ExamComponent
          label="Speaking"
          score={speakingScore}
          onScoreChange={setSpeakingScore}
          min={spec.min}
          max={spec.max}
          step={spec.step}
          passingScore={spec.passing_score_speaking}
        />
      </Stack>
    </div>
  );
}

export default LanguageExamSlider;
