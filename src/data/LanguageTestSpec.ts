import LanguageTestTypeEnum from "./LanguageTestTypeEnum"

type LanguageTestSpecType = {
  min: number,
  max: number,
  step: number,
  passing_score_reading: number,
  passing_score_writing: number,
  passing_score_listening: number,
  passing_score_speaking: number,
}

const IELTSSpec: LanguageTestSpecType = {
  min: 0,
  max: 9,
  step: 0.5,
  passing_score_reading: 4,
  passing_score_writing: 5,
  passing_score_listening: 5,
  passing_score_speaking: 5,
}

const CELPIPSpec: LanguageTestSpecType = {
  min: 0,
  max: 10,
  step: 1,
  passing_score_reading: 5,
  passing_score_writing: 5,
  passing_score_listening: 5,
  passing_score_speaking: 5,
}

const PTEScore: LanguageTestSpecType = {
  min: 0,
  max: 90,
  step: 1,
  passing_score_reading: 42,
  passing_score_writing: 51,
  passing_score_listening: 39,
  passing_score_speaking: 51,
}


const LanguageTestSpec = {
  [LanguageTestTypeEnum.IELTS]: IELTSSpec,
  [LanguageTestTypeEnum.CELPIP]: CELPIPSpec,
  [LanguageTestTypeEnum.PTE]: PTEScore
}

export default LanguageTestSpec;